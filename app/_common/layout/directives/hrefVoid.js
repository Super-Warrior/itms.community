'use strict';

export default (app) => {
  app.directive('hrefVoid', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {
        element.attr('href','#');
        element.on('click', function(e){
          e.preventDefault();
          e.stopPropagation();
        })
      }
    }
  });
}
