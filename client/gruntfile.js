module.exports = function(grunt){

  //Loading the grunt task library
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Tasks are described here
  grunt.registerTask('default',['concat']);

  //Project configuration starts from here
  grunt.initConfig({
    //disribution directory
    distdir: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    //src directory
    src: {
      js: ['src/**/*.js'],
      html: ['src/index.html']
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
      }
    }
  });

};
