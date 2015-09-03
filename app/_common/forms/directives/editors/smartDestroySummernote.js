import angular from 'angular';

export default (app)=>{
  app.directive('smartDestroySummernote', function () {
    return {
      restrict: 'A',
      compile: function (tElement, tAttributes) {
        tElement.removeAttr('smart-destroy-summernote data-smart-destroy-summernote')
        tElement.on('click', function() {
          angular.element(tAttributes.smartDestroySummernote).destroy();
        })
      }
    }
  });
}
