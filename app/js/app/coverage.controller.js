define(['marionette' , 'jquery', 'underscore' , 'backbone' ] , function(Marionette , $ , _ , Backbone){

	var Controller = Marionette.Controller.extend({

		initialize : function(options) { 

			this.users = new Backbone.Collection();

			this.users.parse = function(response) { 

				return response.users;
			}

			this.currentUserRepos = new Backbone.Collection(); 

			this.currentUserRepos.on("add" , function(repo) { 

				repo.url = repo.attributes.url;

			});

		} , 

		loadUsers : function(url , cb) { 

			var callback = cb || function() {};

			this.users.reset();

			this.users.url = url;

			this.users.fetch({ 

				success : _.bind(function(collection , response , options) {

					cb.apply(this , [collection , response , options]);

				} , this)

			}); 

		} , 

		getUsers : function() { 

			return this.users;

		} ,


		setCurrentUser : function(index) { 

			var user = this.getUserAt(index);

			this.currentUserRepos.add(user.get("repos"));

			this.currentUser = user; 

		} , 

		getCurrentUser : function() { 

			return this.currentUser; 

		} ,  

		getCurrentUserRepos : function() { 

			return this.currentUserRepos; 


		}, 

		loadUserCoverage : function(repos, cb) {

			var length = repos.length;

			var increment = 0; 

			var controller = this;

			_.map(repos.models , function(model , index) { 

				model.fetch({success: function() {

					increment++; 

					if (increment >= length) {

						cb.apply(controller , ['success']);
					}


				}})


			}); 

		} ,

		getUserAt : function(index) {

			var user = this.users.at(index);

			return user; 

		} , 

		getCurrentUser : function() { 

			return this.currentUser; 

		}


	}); 

	return Controller;


});