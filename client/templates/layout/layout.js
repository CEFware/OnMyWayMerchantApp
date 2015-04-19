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
Template.sideLayout.events({
    'submit form':function(e,t){
        e.preventDefault();
        var messege= {
            driveId: Router.current().params._id,
            text: t.find('#messege').value,
            by: Meteor.userId()
        };
        Meteor.call('insertMessege',messege,function(err){
            if(!err){
                $('#messegeForm')[0].reset();
            }
        });
    }
});
Template.sideLayout.rendered=function(){
    $('.content').addClass('has-footer');
};
Template.messegeData.helpers({
    myMessege:function(){
        return this.by==Meteor.userId();
    },
    makeSeen:function(){
        if(IonSideMenu.snapper.state().state =="closed" || this.seen == true)
            return;

        else {
            Meteor.call('messegeSeen', this._id, function (err, res) {

            });
        }
    }
});
var initSlideEvent=function(){
    $('.badge2').click(function(){
        var state=IonSideMenu.snapper.state().state;
        if(state=='closed'){
            Meteor.call('allMessegeSeen',Router.current().params._id,Meteor.userId());
        }
    });
};
Template.messegeData.rendered=function(){
    if(this.data.by!=Meteor.userId() && this.data.seen==false){
        initSlideEvent();
    }

    $(".content").animate({
        scrollTop:  10000
    });
};