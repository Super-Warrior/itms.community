'use strict';

export default (app) => {
  app.directive('smartCommentForm', function (formsCommon, lazyScript) {
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
              url : {
                url : true
              },
              comment : {
                required : true
              }
            },

            // Messages for form validation
            messages : {
              name : {
                required : 'Enter your name',
              },
              email : {
                required : 'Enter your email address',
                email : 'Enter a VALID email'
              },
              url : {
                email : 'Enter a VALID url'
              },
              comment : {
                required : 'Please enter your comment'
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

