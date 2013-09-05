module.exports = function(grunt) {

    var bannerContent = '/*! <%= pkg.name %> v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> \n' +
                    ' *  License: <%= pkg.license %> */\n';

    var name = '<%= pkg.name %>-v<%= pkg.version%>';

    grunt.initConfig({


        jshint : {

            all : ['src/**/*.js', 'test/**/*.js' , '/app/js/app/t**/*.js']

        } ,

        mocha : {

            all : ['test/**/*.html'] , 

            options : {

                log : 'true' , 

                reporter: 'Spec'


            } , 

            jsonCOV : {

                src : ['test/**/*.html'] , 

                options : {

                    log : 'true' , 

                    reporter: 'JSONCov'


                } ,


            }

        } , 

        watch : {

            files : ['app/js/app/**/*.js', 'test/**/*.js' , 'test/**/*.html'] , 

            tasks : ['jshint' , 'mocha']

        } , 

        blanket_mocha: {

            all: [ 'test/test.html' ],

            options: {

                threshold: 100

            }
        }

    }); 

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-mocha');

    grunt.loadNpmTasks('grunt-blanket-mocha');

    grunt.registerTask('default', ['jshint' , 'mocha' ]);

    grunt.registerTask('test'  , ['mocha' , 'jshint' , 'blanket_mocha']);

    grunt.registerTask('dev' , ['watch']);


}; 