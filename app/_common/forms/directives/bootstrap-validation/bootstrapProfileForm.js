"use strict";

export default (app)=>{
  app.directive('bootstrapProfileForm', function(){

    return {
      restrict: 'E',
      replace: true,
      template: require('./bootstrap-profile-form.tpl.html'),
      link: function(scope, form){
        form.bootstrapValidator({
          feedbackIcons : {
            valid : 'glyphicon glyphicon-ok',
            invalid : 'glyphicon glyphicon-remove',
            validating : 'glyphicon glyphicon-refresh'
          },
          fields : {
            email : {
              validators : {
                notEmpty : {
                  message : 'The email address is required'
                },
                emailAddress : {
                  message : 'The email address is not valid'
                }
              }
            },
            password : {
              validators : {
                notEmpty : {
                  message : 'The password is required'
                }
              }
            }
          }
        });
      }
    }
  });
}

