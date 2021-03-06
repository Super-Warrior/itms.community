"use strict";

export default (app) => {
  app.directive('recentProjects', function(Project){
    return {
      restrict: 'EA',
      replace: true,
      template: require('./recent-projects.tpl.html'),
      scope: true,
      link: function(scope, element){

        Project.list.then(function(response){
          scope.projects = response.data;
        });
        scope.clearProjects = function(){
          scope.projects = [];
        }
      }
    }
  });
}

