/**
 * Created by piyushthapa on 3/28/15.
 */
Template.securityWizard.events({
   'click #back':function(){
       window.history.back();
   },
    'click #continue':function(){
        Router.go('/profile/complete/final');
    }
});