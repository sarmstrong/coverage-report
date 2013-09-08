define(["marionette" , "backbone" , "app/coverage.view.member"] , function(Marionette , Backbone , MemberView) {	

	var TeamView = Backbone.Marionette.CollectionView.extend({

		itemView : MemberView,

	}); 

	return TeamView;

})