/**
 * Created by piyushthapa on 4/3/15.
 */
db.driveInfo=new Mongo.Collection('driveInfo');
Meteor.methods({
   requestDrive:function(id,by){
       return db.driveInfo.insert({merchantId:id,customerId:Meteor.userId(),customerInfo:by,date:new Date(),merchantSeen:false,customerSeen:true});
   },
    driveAccessed:function(id,status){
        return db.driveInfo.update({_id:id},{$set:{status:status,merchantSeen:true}});
    },
    seenByMerchant:function(id){
        return db.driveInfo.update({_id:id},{$set:{merchantSeen:true}});
    },
    seenByCustomer:function(id){
        return db.driveInfo.update({_id:id},{$set:{customerSeen:true}});
    }
});