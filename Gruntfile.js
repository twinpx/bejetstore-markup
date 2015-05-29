module.exports = function (grunt) {
  "use strict";
	
	var configObj = {

    // Metadata.
    pkg: grunt.file.readJSON( "package.json" ),
    banner: "/*!\n" +
            " * <%= pkg.description %>\n" +
            " * <%= grunt.template.today('yyyy') %> <%= pkg.author %>\n" +
            " * Licensed under <%= pkg.license %>\n" +
            " */\n",
		
    clean: {
      dist: [ "js/jscript.js" ]
    },
		//concatenate all js and css files
		
		uglify: {
			options: {
				preserveComments: "some"
			},
			dist: {
				files: {
					'template/script.js': [ 'template/js/script.js' ]
				}
			}
		},
		
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      js: {
        src: [
					"template/js/src/html5shiv.js",
					"template/js/src/jquery.cookie.js",
					//"template/js/plugins/hammer.js/hammer.js",
					"template/js/libs/jquery.ui.touch-punch.min.js",
					"template/js/plugins/jquery.scrollTo/jquery.scrollTo.min.js",
					"template/js/src/jscript.js"
				],
        dest: "template/js/script.js"
      }
    },
		
		less: {
			//development
			dev: {
				options: {
				},
				files: {
					"template/css/template_styles.css": "template/css/less/styles.less"
				}
			},
			//production
			prod: {
				options: {
					cleancss: true
				},
				files: {
					"template/template_styles.css": "template/css/less/styles.less"
				}
			},
			colors: [
				{
					name: 'deepBlue',
					file: 'deep_blue',
					brandPrimary: '#2d4270',
					brandSecondary: '#052daf'
				},
				{
					name: 'deepNight',
					file: 'deep_night',
					brandPrimary: '#2f3154',
					brandSecondary: '#5e5f81'
				},
				{
					name: 'emerald',
					file: 'emerald',
					brandPrimary: '#41aa70',
					brandSecondary: '#423938'
				},
				{
					name: 'grayscale',
					file: 'grayscale',
					brandPrimary: '#ababab',
					brandSecondary: '#5b5b5b'
				},
				{
					name: 'green',
					file: 'green',
					brandPrimary: '#489526',
					brandSecondary: '#ec5f09'
				},
				{
					name: 'greenLime',
					file: 'green_lime',
					brandPrimary: '#8ea32b',
					brandSecondary: '#6f840b'
				},
				{
					name: 'grey',
					file: 'grey',
					brandPrimary: '#894b2d',
					brandSecondary: '#000'
				},
				{
					name: 'orangeBlack',
					file: 'orange_black',
					brandPrimary: '#e56225',
					brandSecondary: '#000'
				},
				{
					name: 'orangeGreen',
					file: 'orange_green',
					brandPrimary: '#ff7e30',
					brandSecondary: '#589a53'
				},
				{
					name: 'salmon',
					file: 'salmon',
					brandPrimary: '#ffa48f',
					brandSecondary: '#ab365a'
				},
				{
					name: 'scarlet',
					file: 'scarlet',
					brandPrimary: '#3c333a',
					brandSecondary: '#fc354c'
				},
				{
					name: 'sea',
					file: 'sea',
					brandPrimary: '#337d9f',
					brandSecondary: '#196e83'
				},
				{
					name: 'seaWave',
					file: 'sea_wave',
					brandPrimary: '#00a6b5',
					brandSecondary: '#265c99'
				},
				{
					name: 'violetMagenta',
					file: 'violet_magenta',
					brandPrimary: '#7500c0',
					brandSecondary: '#be00ca'
				},
				{
					name: 'red',
					file: 'red',
					brandPrimary: '#a52525',
					brandSecondary: '#d11d32'
				},
				{
					name: 'raspberry',
					file: 'raspberry',
					brandPrimary: '#a7347d',
					brandSecondary: '#a8398d'
				},
				{
					name: 'pinkBlue',
					file: 'pink_blue',
					brandPrimary: '#eda1cf',
					brandSecondary: '#a3add7'
				},
				{
					name: 'purpleWhite',
					file: 'purple_white',
					brandPrimary: '#a3add7',
					brandSecondary: '#5c6eb8'
				}/*,
				{
					name: 'asobio',
					file: 'asobio',
					brandPrimary: '#006eb9',
					brandSecondary: '#5b5b5b'
				},*/
			]
		}
		
  };
	
	var schemesTasks = [];
	configObj.less.colors.forEach( function( current, index, array ) {
		var files = {};
		files[ "template/colors/colors_" + current.file + ".css" ] =
			'template/css/less/colors/colors.less';
		
		configObj.less[ current.name ] = {
			options: {
				cleancss: true,
				modifyVars: {
					brandPrimary: current.brandPrimary,
					brandSecondary: current.brandSecondary
				}
			},
			files: files
		};
		
		schemesTasks.push( "less:" + current.name );
	});
	
	

  grunt.initConfig( configObj );
	
  grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask("default", [ "clean", "concat", "uglify" ]);
	//creates all color schemes files in folder /template/colors/
  grunt.registerTask("schemes", schemesTasks );
};
