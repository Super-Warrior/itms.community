'use strict';

import angular from 'angular';

const MODULE_NAME = 'app.dashboard';

const app = angular.module(MODULE_NAME, []) 
.config(function ($stateProvider) {
  $stateProvider
  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      "content@app": {
        controller: 'DashboardCtrl',
        template: require('./dashboard.html')
      }
    },
    data:{
      title: 'Dashboard'
    },
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'jquery-jvectormap-world-mill-en',
          'flot-time',
          'flot-resize'
        ]);
      }
    }
  });
});

require('./DashboardCtrl')(app);
require('./activities/activities-controller')(app);
require('./activities/activities-service')(app);
require('./activities/activities-dropdown-toggle-directive')(app);

require('./todo/TodoCtrl')(app);
require('./todo/models/Todo')(app);
require('./todo/directives/todoList')(app);

export default MODULE_NAME;
