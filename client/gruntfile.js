module.exports = function(grunt){

  //Loading the grunt task library
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Tasks are described here
  grunt.registerTask('default',['concat']);

  //Print timestamp
  grunt.registerTask('timestamp', function(){
    grunt.log.subhead(Date());
  });

  //Project configuration starts from here
  grunt.initConfig({
    //disribution directory
    distdir: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    //src directory
    src: {
      js: ['src/**/*.js'],
      html: ['src/index.html'],
      css: ['src/**/*.css']
    },
    concat: {
      dist: {
        src: ['<%= src.js %>'],
        dest: '<%= distdir %>/<%= pkg.name %>.js'
      },
      index: {
        src: ['src/index.html'],
        dest: '<%= distdir %>/index.html',
        options: {
          process: true
        }
      },
      css: {
        src: ['<%= src.css %>'],
        dest: '<%= distdir %>/<%= pkg.name %>.css'
      }
    },

    watch: {
      all: {
        files: ['<%= src.js %>','<%= src.html %>'],
        tasks: ['default','timestamp']
      }
    }
  });

};
