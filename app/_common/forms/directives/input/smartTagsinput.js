'use strict';

export default (app) => {
  app.directive('smartTagsinput', function () {
    return {
      restrict: 'A',
      compile: function (tElement, tAttributes) {
        tElement.removeAttr('smart-tagsinput data-smart-tagsinput');
        tElement.tagsinput();
      }
    }
  });

}

