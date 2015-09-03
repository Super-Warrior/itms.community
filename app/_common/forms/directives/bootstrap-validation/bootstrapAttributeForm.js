"use strict";


export default (app) => {

  app.directive('bootstrapAttributeForm', () => {

    return {
      restrict: 'E',
      replace: true,
      template: require('./bootstrap-attribute-form.tpl.html'),
      link: function(scope, form){
        form.bootstrapValidator();
      }
    }
  });

}

