'use strict';

export default (app) => {
  app.directive('smartTimepicker', function () {
    return {
      restrict: 'A',
      compile: function (tElement, tAttributes) {
        tElement.removeAttr('smart-timepicker data-smart-timepicker');
        tElement.timepicker();
      }
    }
  });

}

