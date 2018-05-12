module.exports = function(grunt) {
	"use strict";
	// var RELOAD_PORT = 35729;
	var dirConfig = {
		src: "src",
		dest: "dist"
	};


	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),	// load the package.json
		// specify configuration for each plugin
		dir: dirConfig,
		uglify: {
			options: {
				mangle: false
			},
			// compress it dynamically, then concatenate with grunt concat.
			dist: {
				expand: true,
				cwd: "<%= dir.src %>/scripts", 
			    dest: "<%= dir.dest %>/scripts/_tmp",
			    src: [
			    	"**/*.js"
		   		],
			}
		},

		copy: {
			dist: {
				expand: true,
				cwd: "<%= dir.src %>", 
			    dest: "<%= dir.dest %>",
			    src: [
			    	"*",	
			    	"fonts/**/*",
			    	"images/**/*",
			    	"views/**/*",
			    	"scripts/lazyload/**/*",	// copy this folder also, because these scripts loaded dynamically.
			    	"styles/lazyload/**/*"	// all lazyloading css
		   		],
			}
		},
		// Clean the distribution folder. 
		clean: {
			dist: {
				src: ["<%= dir.dest %>"]
			},
			tmp: {
				src: ["<%= dir.dest %>/scripts/_tmp"]
			}
		},

		less: {
			options: {
				cleancss: true
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: "<%= dir.src %>/styles", 
					    dest: "<%= dir.dest %>/styles",
					    src: "main.less",
					    ext: ".min.css"
					},
					{
						expand: true,
						cwd: "<%= dir.src %>/styles/bootstrap",
						dest: "<%= dir.dest %>/styles",
						src: "bootstrap.less",
						ext: ".min.css"
					},
					{
						expand: true,
						cwd: "<%= dir.src %>/styles/vendors",
						dest: "<%= dir.dest %>/styles",
						src: "angular-material.min.css",
						ext: ".min.css"
					}
				]
			},
			dev: {
				files: [
					{
						expand: true,
						cwd: "<%= dir.src %>/styles/bootstrap", 
						dest: "<%= dir.src %>/styles/vendors",
						src: "bootstrap.less",
						ext: ".min.css"
					},
					{
						expand: true,
						cwd: "<%= dir.src %>/styles", 
					    dest: "<%= dir.src %>/_tmp",
					    src: "main.less",
					    ext: ".min.css"
					}

				]
			}
		},

		concat: {
			options: {
				separator: grunt.util.linefeed + '\n' + grunt.util.linefeed
			},
			vendors: {
				src: [
					"<%= dir.dest %>/scripts/_tmp/vendors/jquery.min.js",	// this must be before angular, because some custom script depend on jquery
					"<%= dir.dest %>/scripts/_tmp/vendors/angular.min.js"
				],
				dest: "<%= dir.dest %>/scripts/vendors.js"
			},
			plugins: {
				src: ["<%= dir.dest %>/scripts/_tmp/plugins/*.js"],
				dest: "<%= dir.dest %>/scripts/plugins.js"
			},
			ie: {
				src: ["<%= dir.dest %>/scripts/_tmp/ie/matchMedia.js"],
				dest: "<%= dir.dest %>/scripts/ie/matchMedia.js"
			},
			custom: {
				src: [
					"<%= dir.dest %>/scripts/_tmp/**/*.js", 
					"!<%= dir.dest %>/scripts/_tmp/ie/*.js",		// exclude ie 
					"!<%= dir.dest %>/scripts/_tmp/dev/**/*.js",	// exclude this,
					"!<%= dir.dest %>/scripts/_tmp/vendors/*.js",	// already done
					"!<%= dir.dest %>/scripts/_tmp/plugins/*.js",	// already done
					"!<%= dir.dest %>/scripts/_tmp/lazyload/**/*.js"	// exclude this also, because these folder's script are loaded dynamically.
				],
				dest: "<%= dir.dest %>/scripts/app.js"
			}

		},

		// remove production files links from index.html
		processhtml: {
			options: { },
			files: {
				expand: true,
				cwd: "<%= dir.src %>", 
				dest: "<%= dir.dest %>",
				src: [
					"index.html"
				],
			}
				
		}


	});

	// Load  all grunt plugins
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-processhtml");

	// Default Task (that can be run by typing only "grunt" in cmd)
	grunt.registerTask("default", []);
	grunt.registerTask("cleanBuild", ["clean:dist"]);
	grunt.registerTask("build", ["clean:dist", "copy:dist", "less:dist", "uglify", "concat", "clean:tmp", "processhtml"])
	grunt.registerTask("dev", ["less:dev"]);
	grunt.registerTask("html", ["processhtml"]);
};