/**
 * Created by piyushthapa on 3/25/15.
 */
Router.configure({
  layoutTemplate:'layout'
});
Router.onBeforeAction(function () {
    // all properties available in the route function
    // are also available here such as this.params

    if (!Meteor.userId()) {
        // if the user is not logged in, render the Login template
        this.layout('fullAppLayout');
        this.render('AccountPage');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.next();
    }
});
Router.route('/',function(){
   this.render('home');
});
Router.route('/login',function(){
    this.render('login');
});
Router.route('/drive/my/:status',function(){
   this.render('diveList');
});
Router.route('/register',function(){
   this.render('/register');
});
Router.route('/profile/complete/terms',function(){
    this.render('termsWizzard');
});
Router.route('/profile/complete/security',function(){
    this.render('securityWizard');
});
Router.route('/profile/complete/final',function(){
    this.render('final');
});
Router.route('/meet/:_id',function(){
    this.layout('sideLayout');
    this.render('meet');
},{name:'meet'});