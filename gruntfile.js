module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    eslint: {
        options: {
            configFile: 'conf/eslint.json',
            // rulePaths: ['conf/rules']
        },
        src: ['./app/src/**/*.js']
    },
    babel: {
      // plugins: ['transform-react-jsx'],
      // presets: ['es2015', 'react'],

      // options: {
      //       sourceMap: true,
      //       presets: ['es2015']
      //   },
        dist: {
            files: {
                'app/src/bundle/bundle.js': 'app/src/bundle/bundle.js'
            }
        }
    },
    jsx: {
      files: [{
        expand: true,
        cwd: 'app/src/jsx', // Custom folder
        src: ['*.jsx'],
        dest: 'app/src/bundle/', // Custom folder
        ext: '.js'
      }]
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