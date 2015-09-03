'use strict';

export default (app) => {
  app.directive('smartIonslider', function (lazyScript) {
    return {
      restrict: 'A',
      compile: function (element, attributes) {
        element.removeAttr('smart-ionslider data-smart-ionslider');

        lazyScript.register('ionslider').then(function(){
          element.ionRangeSlider();
        });
      }
    }
  });
}

