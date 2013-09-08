define(["backbone"] , function(Backbone){

	var UsersCollection = Backbone.Collection.extend({

		parse : function(response) { 

				return response.users;
		}

	}); 

	return UsersCollection; 

}); 