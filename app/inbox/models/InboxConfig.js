"use strict";

export default (app) => {
  app.factory('InboxConfig', function($http, APP_CONFIG){
    return $http.get(APP_CONFIG.apiRootUrl + '/inbox.json');
  });
}
