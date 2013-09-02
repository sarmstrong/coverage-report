define(['marionette' , 'app/coverage.controller'] , function(Marionette , Controller) { 

    var MyApp = new Marionette.Application() ; 

    MyApp.addInitializer(function(options) {

    	var c = new Controller();

    }); 

    return MyApp;

})