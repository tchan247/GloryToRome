module.exports = function(grunt) {

  grunt.initConfig({
    eslint: {
        options: {
            configFile: 'conf/eslint.json',
            // rulePaths: ['conf/rules']
        },
        src: ['./app/src/**/*.js']
    },
    watch: {
      files: ['app/src/'],
      tasks: ['eslint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("gruntify-eslint");

  grunt.registerTask('default', ['eslint']);

};