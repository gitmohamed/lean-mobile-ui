module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        sourceMap: true,
        sourceComments: false
      },
      dist: {
        files: {
          'dist/css/lean-mobile-ui.css': 'sass/main.scss'
        }
      }
    },
    concat: {
      options: {
        separator: ' ',
        stripBanners: false
      },
      dist: {
        src: ['./node_modules/jquery/dist/jquery.js','scripts/main.js'],
        dest: 'dist/js/lean-mobile-ui.js',
      },
    },
    uglify: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/js/lean-mobile-ui.min.js': 'dist/js/lean-mobile-ui.js'
        }
      }
    },
    cssmin: {
      css: {
        src: 'dist/css/lean-mobile-ui.css',
        dest: 'dist/css/lean-mobile-ui.min.css'
      }
    },
    watch: {
      sass: {
        files: ['sass/*.scss', 'scripts/*.js', 'index.html', 'Gruntfile.js'],
        tasks: ['sass', 'concat', 'uglify', 'cssmin']
      }
    }

  });
  // Load dependencies
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');

  // Run tasks
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin']);
};
