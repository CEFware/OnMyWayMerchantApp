/**
 * Created by piyushthapa on 4/3/15.
 */
Meteor.publish("availableStatus", function() {
    return db.status.find({isAvailable:true});
});
Meteor.publish('userInfo',function(id){
   var info=Meteor.users.find({_id:id},{fields:{profile:1}});
    return info;
});
Meteor.publish('onlineUser',function(){
    return Meteor.users.find({},{fields:{profile:1}});
});
Meteor.publish('driveInfo',function(isMerchant,id){
    if(isMerchant){
        return db.driveInfo.find({merchantId:this.userId});
    }else{
        var driveInfo= db.driveInfo.find({customerId:id});
        return driveInfo;
    }
});