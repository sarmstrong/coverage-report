define(['marionette' , 'jquery', 'underscore' , 'backbone' , 'app/coverage.collection.users' , 'app/coverage.collection.repos' , 'app/coverage.layout.app'] , function(Marionette , $ , _ , Backbone , UsersCollection , ReposCollection , AppLayout){

	var Controller = Marionette.Controller.extend({

		initialize : function(options) { 

			this.users = new UsersCollection();

			this.currentUserRepos = new ReposCollection(); 

			this.layout = new AppLayout({

				users :  this.users , 

				el : options.rootEl

			}); 

			this.layout.render(); 

		} , 

		start : function(options) { 

			this.loadUsers(options.usersEndPoint , function() {

				////done

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


				}}); 


			}); 

		} ,

		getUserAt : function(index) {

			var user = this.users.at(index);

			return user; 

		} 


	}); 

	return Controller;


});