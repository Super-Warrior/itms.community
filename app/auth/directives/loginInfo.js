"use strict";

export default (app) => {
  app.directive('loginInfo', function(User){

    return {
      restrict: 'A',
      template: require('./login-info.tpl.html'),
      link: function(scope, element){
        User.initialized.then(function(){
          scope.user = User
        });
      }
    }
  })

}

