'use strict'

export default (app) => {
  app.directive('smartSelect2', function (lazyScript) {
    return {
      restrict: 'A',
      compile: function (element, attributes) {
        element.hide().removeAttr('smart-select2 data-smart-select2');
        lazyScript.register('select2').then(function(){
          element.show().select2();
        })
      }
    }
  });
}

