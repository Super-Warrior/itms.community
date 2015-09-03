import angular from 'angular';

export default (app)=>{
  app.directive('smartEditSummernote', function () {
    return {
      restrict: 'A',
      compile: function (tElement, tAttributes) {
        tElement.removeAttr('smart-edit-summernote data-smart-edit-summernote');
        tElement.on('click', function(){
          angular.element(tAttributes.smartEditSummernote).summernote({
            focus : true
          });  
        });
      }
    }
  });
}
