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
			    dest: "<%= dir.dest %>/scripts",
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
			    	"!*.html",	// don't copy html files, it will be processed by `processhtml` task.
			    	"fonts/**/*",
			    	"images/**/*",
			    	"styles/plugins/*"
		   		],
			}
		},
		// Clean the distribution folder. 
		clean: {
			dist: {
				src: ["<%= dir.dest %>"]
			},
			// remove development folders and `vendors` folder
			cleanThis: {
				src: ["<%= dir.dest %>/scripts/dev", "<%= dir.dest %>/scripts/vendors"]
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
						cwd: "<%= dir.src %>/styles",
						dest: "<%= dir.dest %>/styles",
						src: "material.less",
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
					"<%= dir.dest %>/scripts/vendors/jquery.min.js",	// this must be before all
					"<%= dir.dest %>/scripts/vendors/bootstrap.min.js"
				],
				dest: "<%= dir.dest %>/scripts/vendors.js"
			}

		},

		// // replace less files and scripts path with minified version in all html files.
		processhtml: {
			options: { },
			files: {
				expand: true,
				cwd: "<%= dir.src %>", 
				dest: "<%= dir.dest %>",
				src: [
					"*.html"
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
	grunt.registerTask("build", ["clean:dist", "copy:dist", "less:dist", "uglify", "concat", "clean:cleanThis", "processhtml"])
	grunt.registerTask("dev", ["less:dev"]);
};