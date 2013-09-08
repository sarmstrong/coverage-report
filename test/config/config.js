requirejs.config({

    baseUrl : '../app/js/vendor' , 

    paths : {

        jquery : 'jquery/jquery', 

        backbone : 'backbone/backbone', 

        underscore : 'underscore/underscore' , 

        marionette : 'backbone.marionette/lib/backbone.marionette' , 

        chai : 'chai/chai',

        app : '../app', 

        tpl : "requirejs-tpl/tpl", 

        spec : '../../../test/spec'

    } , 

    shim : { 

        jquery : {

            exports : '$'

        }, 

        underscore : {

            exports : '_'
        }, 

        backbone : {

            deps : ['jquery' , 'underscore'], 

            exports : "Backbone"

        } , 

        marionette : {

            deps : ['jquery' , 'underscore' , 'backbone'] , 

            exports : "Marionette"
        }
    }

});

requirejs(['spec/controller' , 'spec/layout.app' , 'spec/team.view'] , function() { 

    if (window.mochaPhantomJS) { 

        mochaPhantomJS.run(); 

    } else { 

        mocha.run(); 

    }

}); 

