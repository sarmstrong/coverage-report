define(["marionette" , "backbone" , "tpl!app/templates/layout.tpl" , "app/coverage.view.team"] , function(Marionette , Backbone , layoutTemplate , TeamView) {

	var Layout = Backbone.Marionette.Layout.extend({

		template : layoutTemplate , 

		initialize : function(options) {

			this.users = options.users;

		} , 

		regions : {

			"header" : "header" , 

			"coverageStats" : "#coverageStats" , 

			"members" : "#members"

		} , 

		onRender : function() { 

			this.members.show(new TeamView({collection: this.users})); 

		}

	}); 

	return Layout; 

}); 