define(["marionette" , "backbone" , "tpl!app/templates/member.tpl"] , function(Marionette , Backbone , memberTemplate) {

	var MemberView = Backbone.Marionette.ItemView.extend({

		template: memberTemplate

	}); 

	return MemberView;

}); 