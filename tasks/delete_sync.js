module.exports = function(grunt) {

  grunt.registerMultiTask('delete_sync', 'Synchronize file deletion between two directories.', function() {
    var options = this.options();
    
    this.files.map(function(file) {
      file.src.map(function (val) {
        var targetFileName = file.cwd + '/' + val;
        if(grunt.file.exists(targetFileName) && !grunt.file.exists(file.syncWith + '/' + val)) {
          grunt.log.writeln('Deleting file ' + targetFileName);
          grunt.file.delete(targetFileName, options);
        }
      });
    });
    
  });
};
