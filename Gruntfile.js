module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['*.{png,jpg,gif,jpeg}'],
          dest: 'images/build/'
        }]
      }
    },

    watch: {
      files: ['sass/*.sass'],
      tasks: ['sass']
    },

    browserSync: {
        bsFiles: {
            src : 'css/*.css'
        },
        options: {
            watchTask: true,
            server: './'
        }
    }
  });

  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ["sass", "imagemin", "browserSync", "watch"]);
};