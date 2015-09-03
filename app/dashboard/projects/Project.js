"use strict";

export default (app) => {
  app.factory('Project', function($http, APP_CONFIG){
    return {
      list: $http.get(APP_CONFIG.apiRootUrl + '/projects.json')
    }
  });
}

