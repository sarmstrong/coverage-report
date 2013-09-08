define(["chai" , "jquery" , "app/coverage.layout.app" ]  , function(chai , $ , Layout) { 

	chai.should(); 

	describe("Main App Layout" , function() { 

		var layout; 
			
		beforeEach(function() {

			$("#fixture").append("<div id='layout'></div>"); 

			layout = new Layout({el : "#layout"}); 

			layout.render();

		});

		afterEach(function() { 

			$("#fixture").html("");

		}); 

		it("Should create a valid layout with 3 regions" , function() {

			/// check Dom is being rendered; 

			($(layout.el).attr("id")).should.equal("layout");

			/// Check template is rendering

			(layout.$el.find("header").length).should.equal(1);

		}); 

	}); 

}); 