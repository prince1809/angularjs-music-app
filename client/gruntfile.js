module.exports = function(grunt){

  //Loading the grunt task library
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Tasks are described here
  grunt.registerTask('default',['concat']);

  //Project configuration starts from here
  grunt.initConfig({
    //disribution directory
    distdir: 'dist',
    //src directory
    src: {
      js: ['src/**/*.js'],
      html: ['src/index.html']
    },
    concat: {
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
