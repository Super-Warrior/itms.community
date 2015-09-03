'use strict'

export default (app) => {
  app.controller('ModalDemoCtrl', function($scope, $modalInstance){
    $scope.closeModal = function(){
      $modalInstance.dismiss('cancel');
    }
  });
}

