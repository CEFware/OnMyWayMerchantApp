/**
 * Created by piyushthapa on 4/10/15.
 */
Template.layout.onCreated(function(){
    this.subscribe('driveInfo',true,Meteor.userId());
});
Template.layout.helpers({
    noOfdrives:function(status){
        return db.driveInfo.find({merchantId:Meteor.userId(),status:status}).count();
    },
    newdriveRequest:function(){
        return db.driveInfo.find({merchantId:Meteor.userId(),merchantSeen:false}).count();
    }
});
Template.layout.events({
   'click .navi-drive':function(e,t){
       e.preventDefault();
       var status=$(e.target).attr('data-status');
       Router.go('/drive/my/'+status);
   },
    'click .nav-home':function(e,t){
        e.preventDefault();
        Router.go('/');
    }
});