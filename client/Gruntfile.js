module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		project: {
			bower: ['bower_components'],

            app: ['src'],
            assets: ['<%= project.app %>/assets'],
            scss: ['<%= project.assets %>/scss'],

			build: ['build'],
			b_assets: ['<%= project.build %>/assets'],
			b_css: ['<%= project.b_assets %>/css']
        },
		clean: {
            build: ['build']
        },
		copy: {
            views: {
                expand: true,
                cwd: 'src/app',
                src: ['**/*.html'],
                dest: 'build/app'
            },
            html: {
                expand: true,
                cwd: 'src',
                src: ['index.html'],
                dest: 'build'
            },
            fonts: {
                expand: true,
				flatten: true,
                src: ['<%= project.bower %>/material-design-iconic-font/fonts/**', '<%= project.assets %>/fonts/**'],
                dest: '<%= project.b_assets %>/fonts'
            },
            img: {
                expand: true,
                cwd: '<%= project.assets %>/img',
                src: ['**'],
                dest: '<%= project.b_assets %>/img'
            }
        },
		ngAnnotate: {
            app: {
                files: {
                    '.tmp/concat/app/app.js': ['.tmp/concat/app/app.js']
                }
            }
        },
		useminPrepare: {
			html: 'src/index.html',
			options: {
				dest: 'build'
			}
		},
		usemin: {
			html: '<%= project.build %>/index.html',
			css: '<%= project.b_css %>/main.css'
		},
		filerev: {
            all: {
                expand: true,
                cwd: 'build',
                src: [
					'assets/images/**/*.{jpg,jpeg,gif,png,webp}',
                    'assets/css/main.css',
                    'app/app.js'
                ],
                dest: 'build'
            }
        },
		sass: {
			dist: {
				options: {
					style: 'compressed',
					compass: false,
                    trace: true
				},
				files: {
					'<%= project.b_css %>/main.css' : '<%= project.scss %>/main.scss'
				}
			}
		},
		autoprefixer:{
			options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9', 'Opera 12.1']
            },
            no_dest: {
                src: '<%= project.b_css %>/*.css',
            }
        },
		watch: {
			sass: {
				files: ['src/assets/scss/**/*'],
				tasks: ['sass', 'autoprefixer']
			}
		},
		concurrent: {
			dev: ['watch:sass', 'server'],
			options: {
				limit: 4,
				logConcurrentOutput: true
			}
		}
	});
	
	grunt.registerTask('default', ['development']);

	grunt.registerTask('development', [
		'clean',
        'copy',
        'sass',
		'concurrent:dev',
        'autoprefixer',
	]);

	grunt.registerTask('build', [
		'clean',
		'copy',
		'sass',
		'useminPrepare',
		'concat:generated',
		'ngAnnotate',
		'uglify:generated',
		'filerev',
		'usemin',
		'autoprefixer'
	]);

	grunt.registerTask('server', function() {
		var done = this.async();
		var http = require('http');
		var express = require('express');
		var app = express();

		app.use(express.static(__dirname));

		var server = http.createServer(app);

		server.on('listening', function() {
			console.log('Server started http://localhost:%d/', server.address().port);
		});

		server.on('close', done);

		server.listen(process.env.PORT || 8000);
	});
}
