module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // less: {
        //     development: {
        //         options: {
        //             paths: ["app/css"]
        //         },
        //         files: {"app/css/flexslider/main.css": "app/css/flexslider/flexslider.less"}
        //     }
        //,production: {
        //    options: {
        //        paths: ["css"],
        //        cleancss: true
        //    },
        //    files: {"css/flexslider/main.css": "css/flexslider/flexslider.less"}
        //}
        uglify: {
            build: {
                src: 'app/js/*.js',
                dest: 'app/js/concat.min.js'
            },

            dev: {
                options: {
                    beautify: true,
                    mangel: false,
                    compress: false,
                    preserveComments: 'all'
                },
                src: 'app/js/*.js',
                dest: 'app/js/concat.min.js'
            }
        },
        concat: {
            build: {
                src: '[app/css/*.css]',
                dest: 'app/css/concat.css'
            }
        },
        cssmin: {
            build : {
                files: {
                    'app/css/concat.min.css' : ['app/css/*.css']
                }
            }

        },
        watch: {
            js: {
                files: ['app/js/*.js'],
                tasks: ['uglify:dev']
            },

            css: {
                files: ['app/css/*.css'],
                tasks: ['']
            }
        }
    });
    // Load the Plugins
    grunt.loadNpmTasks ('grunt-contrib-uglify');
    grunt.loadNpmTasks ('grunt-contrib-watch');
    grunt.loadNpmTasks ('grunt-contrib-concat');
    grunt.loadNpmTasks ('grunt-contrib-cssmin');

// Register Tasks
    grunt.registerTask ('default', ['uglify:dev']);
    grunt.registerTask ('build', ['uglify:build', 'cssmin']);
};