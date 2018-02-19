module.exports = function(grunt) {

    grunt.initConfig({
      log: {
        foo: [1, 2, 3],
        bar: 'hello world',
        baz: false
      }
    });

    grunt.registerMultiTask('log', 'Log stuff.', function() {
      grunt.log.writeln(this.target + ': ' + this.data);
    });

    grunt.registerTask('custom', 'A sample task that logs stuff.', function(arg1, arg2) {
      if (arguments.length === 0) {
        grunt.log.writeln(this.name + ", no args");
        // if no arguments, execute task 'log'
        //grunt.task.requires('log');
        grunt.config.requires('log.foo');
        grunt.config.requires(['log', 'foo']);
        grunt.task.run('log');
      } else {
        grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
      }
    });

};