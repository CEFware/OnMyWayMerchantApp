/**
 * Created by piyushthapa on 3/29/15.
 */
Template.final.onCreated(function(){
   this.autorun(function(){
      Session.set('currLocation',Geolocation.latLng());
   });
});
Template.final.rendered=function(){

};
Template.final.events({
   'click #complete':function(e,t){
       e.preventDefault();
       var user={
         termsAccepted:true
       };
       Meteor.call('completeStep',user,function(err){
          if(!err){
              Meteor.call('insertStatus',function(err){
                  if(!err){
                      Router.go('/');
                  }
              });

          }
       });
   },
    'click #useLocation':function(e,t){
        e.preventDefault();
        Meteor.call('updateLocation',Session.get('currLocation'),function(err){
            if(!err){

            }
        });
    }
});
Template.final.helpers({
    isLocationReady:function(){
        var userProfile=Meteor.user();
        if(userProfile && userProfile.profile &&  userProfile.profile.location)
            return false;
        else
            return 'disabled'
    },
    isLocationObtained:function(){
        if(Session.get('currLocation'))
            return true;
        else
            return false;
    }
});
Template.final.events({
   'click #cancel':function(e,t){
       e.preventDefault();
       Router.go('/');
   }
});