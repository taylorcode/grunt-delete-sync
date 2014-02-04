module.exports = function(grunt) {

  grunt.registerMultiTask('sync', 'Synchronize file deletion between two directories.', function() {

    this.src.map(function(file){
      console.log(src);
    });


  //   promise.all(this.files.map(function(fileDef) {
  //     var cwd = fileDef.cwd ? fileDef.cwd : '.';
  //     return promise.all(fileDef.src.map(function(src){
  //       var dest = path.join(fileDef.dest, src);
  //       // when using expanded mapping dest is the destination file
  //       // not the destination folder
  //       if(fileDef.orig.expand) {
  //         dest = fileDef.dest;
  //       }
  //       return processPair(path.join(cwd, src), dest);
  //     }));      
  //   })).then(function(promises) {
  //     promise.all(promises).then(done);
  //   });
  // });

  });
};
