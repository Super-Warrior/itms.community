'use strict';

export default (app) => {
  app.directive('smartColorpicker', function () {
    return {
      restrict: 'A',
      compile: function (tElement, tAttributes) {
        tElement.removeAttr('smart-colorpicker data-smart-colorpicker');


        var aOptions = _.pick(tAttributes, ['']);

        var options = _.extend(aOptions, {});

        tElement.colorpicker(options);
      }
    }
  });
}

