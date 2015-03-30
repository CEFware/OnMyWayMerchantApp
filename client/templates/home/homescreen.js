/**
 * Created by piyushthapa on 3/28/15.
 */
Template.home.events({
   'click #completeRegistration':function(e,t){
       e.preventDefault();
       Router.go('/profile/complete/terms')
   }
});