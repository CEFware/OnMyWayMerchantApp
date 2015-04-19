if (Meteor.isClient) {
 Meteor.startup(function(){
     GoogleMaps.load({ v: '3', key: 'AIzaSyAextd1AhqDBSrGQbRyzXKSaDhuQNNkfGc', libraries: 'geometry,places' });
 });
}

