module.exports = function(grunt) {

    var bannerContent = '/*! <%= pkg.name %> v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> \n' +
                    ' *  License: <%= pkg.license %> */\n';

    var name = '<%= pkg.name %>-v<%= pkg.version%>';

    grunt.initConfig({


        jshint : {

            all : [ 'test/**/*.js' , '/app/js/app/**/*.js' ,"Gruntfile.js"]

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

        } , 

        blanket_mocha: {

            all: [ 'test/test.html' ],

            options: {

                threshold: 100

            }
        } , 

        requirejs: {

          compile: {

            options: {

              name : "app", 

              baseUrl: "app/js/vendor",

              mainConfigFile: "app/js/app.js",

              out: "app/js/dist/coverage.js"

            }
          }
        }

    }); 

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.loadNpmTasks('grunt-mocha');

    grunt.loadNpmTasks('grunt-blanket-mocha');

    grunt.registerTask('default', ['jshint' , 'mocha' , 'blanket_mocha' , 'requirejs' ]);

    grunt.registerTask('test'  , ['mocha' , 'jshint' , 'blanket_mocha']);

    grunt.registerTask('optimize' , ['requirejs']);

    grunt.registerTask('dev' , ['watch']);


}; 