module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mochaTest: {
      test: {
        options: {
          reporter: 'progress'
        },
        src: ['app/test/apiSpec.js']
      }
    }
  });


  grunt.loadNpmTasks('grunt-mocha-test');


  grunt.registerTask('test', 'mochaTest');
}