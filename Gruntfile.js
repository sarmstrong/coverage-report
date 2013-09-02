module.exports = function(grunt) {

    var bannerContent = '/*! <%= pkg.name %> v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> \n' +
                    ' *  License: <%= pkg.license %> */\n';

    var name = '<%= pkg.name %>-v<%= pkg.version%>';

    grunt.initConfig({


        jshint : {

            all : ['src/**/*.js', 'spec/**/*.js' , 'examples/app/**/*.js']

        } ,

        mocha : {

            all : ['test/**/*.html'] , 

            options : {

                log : 'true' , 

                reporter: 'Spec'


            }

        } , 

        watch : {

            files : ['app/js/app/**/*.js', 'test/**/*.js' , 'test/**/*.html'] , 

            tasks : ['jshint' , 'mocha']

        }

    }); 

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', ['jshint' , 'mocha' ]);

    grunt.registerTask('test'  , ['mocha' , 'jshint']);

    grunt.registerTask('dev' , ['watch']);


}; 