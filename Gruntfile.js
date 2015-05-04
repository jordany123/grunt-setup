module.exports = function(grunt){


grunt.initConfig({

	watch: {
		sass:{
			files: ['sass/*.scss'],
			tasks: ['sass'],
			options: {
		    	livereload: true,
		    },
		},
	},

	sass: {                              			// Task
	    dist: {                            			// Target
	    	files: [{
		        expand: true,
		        cwd: 'sass',
		        src: ['*.scss'],
		        dest: 'css',
		        ext: '.css'
		    }]
    	},
  	}




});


grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['watch']);

}