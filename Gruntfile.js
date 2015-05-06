// Grunt Config
// WARNING: Don't make any changes unless you know what you are doing.

module.exports = function (grunt) {

    var path = require('path');
    var gruntConf = {
        configPath: path.join(process.cwd(), 'grunt/configs'),
        jitGrunt: {
            customTasksDir: 'grunt/commands'
        },

        // Constant Variables
        // ------------------
        // 
        // This will allow us to access them through <%= variable_name %>
        // eg: <%= foo %>
        data: {

            // Grunt Directories
            grunt_configc_dir: 'grunt/configs',
            grunt_tasks_dir: 'grunt/commands',

        }
    };

    require('time-grunt', grunt);
    require('load-grunt-config')(grunt, gruntConf);

};