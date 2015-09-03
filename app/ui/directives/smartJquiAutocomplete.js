'use strict';

export default (app) => {

  app.directive('smartJquiAutocomplete', function () {
    return {
      restrict: 'A',
      scope: {
        'source': '='
      },
      link: function (scope, element, attributes) {

        element.autocomplete({
          source: scope.source
        });
      }
    }
  });

}
