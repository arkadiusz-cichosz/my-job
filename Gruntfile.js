module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass',
          'css/grid.css': 'sass/grid.sass'
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
          files: ['sass/style.sass','sass/grid.sass'],
          tasks: ['sass'],
          options: {
              spawn: false,
          },
      } 
  },

browserSync: {
    bsFiles: {
        src: ['Repozytorium/css/*.css',
             'Repozytorium/*.html']
    },
    options: {
        watchTask: true,
        server: './Repozytorium'
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