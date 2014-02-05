grunt-delete-sync
=================

Syncs file deletion from one directory to another.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-delete-sync --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-delete-sync');
```

This task looks through the files defined in `src`, if they do not exist in the `syncWith` directory, they are removed.


Example:
```js
delete_sync: {
  dist: {
	cwd: 'targetDir',
	src: ['**', '!**/*.css'],
	syncWith: 'src'
  }
},
```
