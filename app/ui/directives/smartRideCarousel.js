'use strict';

export default (app) => {

  app.directive('smartRideCarousel', function () {
    return {
      restrict: 'A',
      compile: function (tElement, tAttributes) {
        tElement.removeAttr('smart-ride-carousel data-smart-ride-carousel');
        tElement.carousel(tElement.data());
      }
    }
  });
}
