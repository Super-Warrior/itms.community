'use strict';

export default (app) => {
  app.directive('smartContactsForm', function (formsCommon, lazyScript) {
    return {
      restrict: 'A',
      link: function (scope, form) {
        lazyScript.register('jquery-validation').then(function(){
          form.validate(angular.extend({
            // Rules for form validation
            rules : {
              name : {
                required : true
              },
              email : {
                required : true,
                email : true
              },
              message : {
                required : true,
                minlength : 10
              }
            },

            // Messages for form validation
            messages : {
              name : {
                required : 'Please enter your name'
              },
              email : {
                required : 'Please enter your email address',
                email : 'Please enter a VALID email address'
              },
              message : {
                required : 'Please enter your message'
              }
            },

            // Ajax form submition
            submitHandler : function() {
              form.ajaxSubmit({
                success : function() {
                  form.addClass('submited');
                }
              });
            }
          }, formsCommon.validateOptions));
        });
      }
    }
  });

}

