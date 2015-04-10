/**
 * Created by piyushthapa on 4/10/15.
 */
Template.diveList.helpers({
    drives:function(){
        return db.driveInfo.find({merchantId:Meteor.userId(),status:Router.current().params.status});
    },
    status:function(){
        return Router.current().params.status;
    },
    getClassByStatus:function(){
        var color={'accepted':'text-green','rejected':'text-red'}
        return color[Router.current().params.status];
    }
});