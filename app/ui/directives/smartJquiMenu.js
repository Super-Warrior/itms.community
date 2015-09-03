'use strict';

export default (app) => {

  app.directive('smartJquiMenu', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {

        element.menu();
      }
    }
  });

}

