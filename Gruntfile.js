/*global module:false*/
module.exports = function ( grunt ) {
    "use strict";

    // Project configuration.
    grunt.initConfig( {
        lint : {
            files : ['grunt.js', 'test/specs/*.js']
        },
        jshint : {
            options : {
                curly : true,
                eqeqeq : true,
                immed : true,
                latedef : true,
                newcap : true,
                noarg : true,
                sub : true,
                undef : true,
                boss : true,
                eqnull : true,
                node : true
            },
            globals : {
                it : true,
                describe : true
            }
        },
        watch : {
            test : {
                files : ['js/*.js', 'test/spec/*.js'],
                tasks : 'mocha'
            }
        },
        mocha : {
            index : ['test/test.html']
        },
        min : {
            dist : {
                src : ['js/app.js'],
                dest : 'dist/beatsheet.min.js'
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-mocha' );

    // Default task.
    grunt.registerTask( 'default', 'lint mocha min' );
    grunt.registerTask( 'test', 'mocha' );


};