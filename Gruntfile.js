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
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    },

    watch: {
      scripts: {
        files: ['sass/style.sass'],
        tasks: ['sass'],
        options: {
          spawn: false,
          },
      } 
    },

    browserSync: {
      bsFiles: {
        src: ['my_sass/css/*.css',
             'my_sass/*.html']
      },
    
      options: {
        watchTask: true,
        server: './my_sass'
      }
    }
  });

  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('default', ["sass","imagemin","watch","browserSync"]);
};