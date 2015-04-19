/**
 * Created by piyushthapa on 4/17/15.
 */
Template.meet.onCreated(function(){
    this.autorun(function(){
        Session.set('Location',Geolocation.latLng());
    });
});

Template.meet.rendered=function(){
};
Template.meetMap.rendered=function(){
    IonSideMenu.snapper.disable();


};
Template.meetMap.destroyed=function(){
    IonSideMenu.snapper.enable();
};
Template.meet.helpers({
    locationObtained:function(){
        return Session.get('Location');
    },
    dataCount:function(){
        var count=db.messeges.find({by:{$ne:Meteor.userId()},seen:false,driveId:Router.current().params._id}).count();
        console.log(count);

        if(count >0){
            return count;
        }


    }

});
Template.meet.events({

});


Template.meetMap.helpers({
    exampleMapOptions: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(Session.get('Location').lat, Session.get('Location').lng),
                zoom: 15
            };
        }
    }


});
Template.meetMap.onCreated(function(){
    var instance=this;
    GoogleMaps.ready('meetMap', function(mapObj) {
       var Marker={me:null,him:null};
        instance.autorun(function(){
            if(Marker.me==null){
                var infowindow = new google.maps.InfoWindow({
                    content: "Me"
                });
                 Marker.me = new google.maps.Marker({
                    draggable: false,
                    animation: google.maps.Animation.DROP,
                    position: new google.maps.LatLng(Session.get('Location').lat, Session.get('Location').lng),
                    map: mapObj.instance,
                    // We store the document _id on the marker in order
                    // to update the document within the 'dragend' event below.
                    icon: new google.maps.MarkerImage(
                        '/markers/marker-green.png',
                        null,
                        null,
                        null,
                        new google.maps.Size(36, 36)
                    )

                });
                Marker.me.infowindow=infowindow;
                infowindow.open();
            }
        });
    });
});
Template.messeges.onCreated(function(){

});
Template.messeges.helpers({
   isMessegeReady:function(){
       var subs=Meteor.subscribe('messeges',Router.current().params._id);
       if(subs.ready())
        return true;
       else
        return false;
   },
    messeges:function(){
        return db.messeges.find({driveId:Router.current().params._id});
    }
});
