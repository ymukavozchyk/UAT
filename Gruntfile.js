module.exports = function (grunt) {

    grunt.initConfig({
        uncss: {
            options: {
                ignore: [
                    // Bootstrap selectors added via JS
                    /\w\.in/,
                    ".fade",
                    ".collapse",
                    ".collapsing",
                    /(#|\.)navbar(\-[a-zA-Z]+)?/,
                    /(#|\.)dropdown(\-[a-zA-Z]+)?/,
                    /(#|\.)(open)/,
                    // injected via JS
                    /disabled/,
                    /\.no\-js/,
                    /\.defer/
                ]
            },
            dist: {
                files: {
                    'css/tidy.min.css': ['dev/index.html', 'dev/contact.html', 'dev/information.html', 'dev/request-information.html']
                }
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'css/tidy.min.css', dest: 'css/tidy.min.css' }
                ]
            }
        },
        processhtml: {
            dist: {
                files: {
                'index.html': ['dev/index.html'],
                'contact.html': ['dev/contact.html'],
                'information.html': ['dev/information.html'],
                'request-information.html': ['dev/request-information.html']
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');

    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin', 'processhtml']);

};