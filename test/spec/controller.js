define(['chai' , 'app/coverage.controller'] , function(chai , Controller) {

	chai.should();

	describe("Coverage Controller:" , function() {

		var controller;  

		beforeEach(function() {

			controller = new Controller();

		}); 

		afterEach(function() {

			controller = null;

		}); 

		it("Controller set load a collection of users with a length of 2" , function(done) {

			controller.loadUsers('../bin/mock.users.json' , function(collection , response , options) {

				(this.getUsers().url).should.equal('../bin/mock.users.json'); 

				(this.getUsers().length).should.equal(2);

				done(); 

			}); 

		}); 

		it("Controller should be able to get and set the Current User" , function(done){

			controller.loadUsers('../bin/mock.users.json' , function(collection , response , options) {

				var user = this.getUserAt(0); 

				(user.get("name")).should.equal("Steve Armstrong");

				this.setCurrentUser(0);

				(this.getCurrentUser().get("name")).should.equal("Steve Armstrong");

				(this.getCurrentUser().get("repos").length).should.equal(3);

				(this.getCurrentUserRepos().length).should.equal(3);

				(this.getCurrentUserRepos().at(0).url).should.equal('../bin/mock.reports/backbone.maps.coverage.json');

				done();

			});

		}); 





		it("Controller should load a User Collection with 3 coverage repos" , function(done) { 

			controller.loadUsers('../bin/mock.users.json' , function(collection , response , options) {

				this.setCurrentUser(0);

				controller.loadUserCoverage(this.getCurrentUserRepos() , function(collection , response , options){

					var modelCheck = this.getCurrentUserRepos().at(0); 

					(modelCheck.get("src/backbone.map.js").path).should.equal("src/backbone.map.js"); 

					done();

				}); 

				//done();



			});  

		}); 


	}); 


}); 

