define(["backbone"] , function(Backbone){

	var Repos = Backbone.Collection.extend({

		initialize : function(options) {
	
			this.on("add" , function(repo) { 

				repo.url = repo.attributes.url;

			});

		}

	}); 

	return Repos; 

}); 