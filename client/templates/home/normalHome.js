/**
 * Created by piyushthapa on 4/10/15.
 */
Template.normalHome.onCreated(function(){
   
});
Template.normalHome.helpers({
    driveRequest:function(){
       return db.driveInfo.find({merchantId:Meteor.userId(),merchantSeen:false});
   }
});
Template.normalHome.events({
   'click .btn-status':function(e,t){
       e.preventDefault();
        var status=$(e.target).attr('data-status');
       var id=this._id;
       Meteor.call('driveAccessed',this._id,status,function(err,res){
            if(!err && status=='accepted')
                Router.go('/meet/'+id);
       });
   }
});