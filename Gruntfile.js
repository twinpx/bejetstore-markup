module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON("package.json"),
    banner: "/*!\n" +
            " * <%= pkg.description %>\n" +
            " * <%= grunt.template.today('yyyy') %> <%= pkg.author %>\n" +
            " * Licensed under <%= pkg.license %>\n" +
            " */\n",
		
    clean: {
      dist: [ "js/jscript.js", "css/plugins.css" ]
    },
		//concatenate all js and css files
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      js: {
        src: [
					"template/js/src/html5shiv.js",
					"template/js/plugins/hammer.js/hammer.js",
					"template/js/plugins/jquery.scrollTo/jquery.scrollTo.min.js",
					"template/js/src/jscript.js"
				],
        dest: "template/js/script.js"
      },
      css: {
        src: [],
        dest: "css/plugins.css"
      }
    },
		
		less: {
			options: {
				cleancss: true,
			},
			files: {
				"template/template_styles.css": "template/css/less/styles.less"
			}
		}
		/*,  remove comments when cssmin is needed
		
		cssmin: {
			slick: {
				files: [{
					expand: true,
					cwd: 'slick/slick/',
					src: [ 'slick.css' ],
					dest: 'slick/slick/',
					ext: '.min.css'
				}]
			}
		}*/
		
  });
	
  grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	//grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask("default", [ "clean"/*, "cssmin"*/, "concat" ]);
};
