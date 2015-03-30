/**
 * Created by piyushthapa on 3/28/15.
 */
Template.termsWizzard.events({
   'click #continue':function(e,t){
       e.preventDefault();
       if($('#chkTerms').is(':checked')){
           Session.set('wizzardData',{continuedata:'continue'});
           Router.go('/profile/complete/security');
       }else{
           IonPopup.alert({
               title: 'Error',
               template: 'Please accept the condition before proceed to next steps',
               okText: 'OK.'
           });
       }

   }
});