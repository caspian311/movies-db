module.exports = function(grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
         dist: {
            options: {
               style: 'compressed'
            },
            files: {
               'web/styles/test.css': 'src/styles/test.scss'
            }
         }
      },
      uglify: {
         options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
         },
         build: {
            src: [ 'src/js/app.js', 'src/js/controllers.js', 'src/js/services.js' ],
            dest: 'web/js/<%= pkg.name %>.min.js'
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.registerTask('default', ['sass', 'uglify']);
};
