requirejs.config({

    baseUrl : 'js/vendor' , 

    paths : {

        jquery : 'jquery/jquery', 

        backbone : 'backbone/backbone', 

        underscore : 'underscore/underscore' , 

        marionette : 'backbone.marionette/lib/backbone.marionette' , 

        app : '../app' , 

        tpl : "requirejs-tpl/tpl", 

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



requirejs(['app/coverage.app'] , function(app) { 

    app.start({rootEl: "#app-main" , usersEndPoint : "../bin/mock.users.json"});

}); 





