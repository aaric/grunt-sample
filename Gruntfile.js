module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        asi: true,
        esversion: 6,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd\'T\'HH:MM:ss") %> */'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      options: {
        timeout: 10000
      },
      files: ['test/**/*.html']
    }/*,
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    }*/
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  /*grunt.loadNpmTasks('grunt-contrib-connect');*/

  grunt.registerTask('test', ['jshint', 'qunit']);

  /*grunt.registerTask('default', function(){
    grunt.log.writeln(grunt.config('pkg.name'));
  });*/
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};