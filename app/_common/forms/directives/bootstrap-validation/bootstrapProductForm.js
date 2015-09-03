"use strict";

export default (app) => {
  app.directive('bootstrapProductForm', ()=>{

    return {
      restrict: 'E',
      replace: true,
      template: require('./bootstrap-product-form.tpl.html'),
      link: function(scope, form){
        form.bootstrapValidator({
          feedbackIcons : {
            valid : 'glyphicon glyphicon-ok',
            invalid : 'glyphicon glyphicon-remove',
            validating : 'glyphicon glyphicon-refresh'
          },
          fields : {
            price : {
              validators : {
                notEmpty : {
                  message : 'The price is required'
                },
                numeric : {
                  message : 'The price must be a number'
                }
              }
            },
            amount : {
              validators : {
                notEmpty : {
                  message : 'The amount is required'
                },
                numeric : {
                  message : 'The amount must be a number'
                }
              }
            },
            color : {
              validators : {
                notEmpty : {
                  message : 'The color is required'
                }
              }
            },
            size : {
              validators : {
                notEmpty : {
                  message : 'The size is required'
                }
              }
            }
          }
        });
      }
    }
  });
}
