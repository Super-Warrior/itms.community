'use strict';

export default (app) => {

  app.directive('smartSuperBox', function () {
    return {
      restrict: 'A',
      compile: function (tElement, tAttributes) {
        tElement.removeAttr('smart-super-box data-smart-super-box');
        tElement.SuperBox();
      }
    }
  });

}
