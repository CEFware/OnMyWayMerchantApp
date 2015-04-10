/**
 * Created by piyushthapa on 4/10/15.
 */
Template.AccountPage.events({
   'submit #loginForm':function(e,t){
       e.preventDefault();
       Meteor.loginWithPassword(t.find('#login_email').value, t.find('#login_password').value,function(err,res){
           if(err)
                alert(err.reason);
       });
   }
});