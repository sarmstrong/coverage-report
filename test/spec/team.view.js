define(["chai" , "jquery" , "app/coverage.view.team" , "app/coverage.collection.users" ]  , function(chai , $ , TeamView , UsersCollection) { 

	chai.should(); 

	var teamView; 

	var users;

	describe("Team View Test" , function() { 

		beforeEach(function() { 

			$("#fixture").append("<div id='team'></div>"); 

			users = new UsersCollection();

			users.url = "../bin/mock.users.json";

			teamView = new TeamView({collection : users , el : $("#team") });	

		}); 

		afterEach(function() { 

			$("#fixture").html("");

			teamView = null; 

			users = null; 

		});

		it("Should create a view with two child object" , function(done) {

			users.fetch({success : function() { 

				(teamView.$el.find(".teamMember").length).should.equal(2);

				(teamView.$el.find(".teamMember").eq(0).find("h3").text().trim()).should.equal("Steve Armstrong");

				done();

			}}); 

		}); 



	}); 


}); 