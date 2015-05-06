// Grunt Task: Watch

module.exports = {

    // CSS Files
    css: {
        files: [],
        tasks: []
    },

    // Sass Files
    compass: {
        options: {
            livereload: false
        },
        files: [],
        tasks: []
    },

    // Grunt Config Files
    configFiles: {
        files: ['GruntFile.js', '<%= grunt_configs_dir %>/*.js'],
        options: {
            reload: true
        }
    },

};
