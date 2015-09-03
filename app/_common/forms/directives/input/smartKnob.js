'use strict';

export default (app) => {
  app.directive('smartKnob', function () {
    return {
      restrict: 'A',
      compile: function (tElement, tAttributes) {
        tElement.removeAttr('smart-knob data-smart-knob');

        tElement.knob();
      }
    }
  });
}

