/**
 * Created by piyushthapa on 4/8/15.
 */
db.status=new Mongo.Collection('status');
Meteor.methods({
   insertStatus:function(){
       var status={};
       status.userId=Meteor.userId(),
           status.isAvailable=true;
       return db.status.insert(status);
   },
    updateStatus:function(isAvailable){
        return db.status.update({userId:Meteor.userId()},{$set:{isAvailable:isAvailable}});
    }
});