// NOTE: To uglify, roadroll and pack everything run the ./build.sh script

module.exports = function (grunt) {


	// Load Grunt tasks declared in the package.json file
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration.
	grunt.initConfig({

		watch: {
			scripts: {
				files: [
					'src/js/**/*.js',
					'dist/gfx/**/*',
					'dist/lib/*.js',
				],
				tasks: ['build']
			},
			pages: {
				files: [
					'src/html/*.*'
				],
				tasks: ['concat:dev']
			}
		},

		'http-server': {
			dev: {
				root: 'dist',
				port: 3125,
				runInBackground: true
			}
		},

		clean: ['dist/*.html', 'dist/js/'],

		concat: {
			dev: {
				files: {
					'dist/index.html': [
						'src/html/index.html'
					],
					'dist/js/game.js': [
						'src/js/DEFS.js',
						'src/js/main.js',
						'src/js/scenes/BasePartScene.js',
						'src/js/**/*.js',
					]
				}
			},
		},
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', [
			'watch'
		]);

	grunt.registerTask('build', ['clean', 'concat:dev']);

	grunt.registerTask('default', ['build', 'http-server', 'dev']);

	//grunt.registerTask('prod', ['clean', 'processMap', 'image:prod', 'concat:shared', 'concat:prod', 'closureCompiler']);

};