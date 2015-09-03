'use strict';

export default (app) => {

  app.directive('smartJquiTabs', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {

        element.tabs();
      }
    }
  });

}
