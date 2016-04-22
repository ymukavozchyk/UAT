module.exports = function (grunt) {

    grunt.initConfig({
        uncss: {
            dist: {
                files: {
                    'css/tidy.css': ['index.html', 'contact.html', 'information.html', 'request-information.html']
                }
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'css/tidy.css', dest: 'css/tidy.min.css' }
                ]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin']);

};