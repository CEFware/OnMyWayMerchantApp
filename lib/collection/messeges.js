db.messeges=new Mongo.Collection('messeges');
Meteor.methods({
   insertMessege:function(messege){
        messege.postedAt=new Date(),
            messege.seen=false;
       return db.messeges.insert(messege);
   },
    messegeSeen:function(id){

        return db.messeges.update({_id:id},{$set:{seen:true}});
    },
    allMessegeSeen:function(driveId,userId){
        return db.messeges.update({by:{$ne:userId},driveId:driveId,seen:false},{$set:{seen:true}});
    }
});