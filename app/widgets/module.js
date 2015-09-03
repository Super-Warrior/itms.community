import angular from 'angular';

const MODULE_NAME = 'app.widgets';

const app = angular.module(MODULE_NAME, []) 
.config(function ($stateProvider) {
  $stateProvider
  .state('app.widgets', {
    url: '/widgets',
    data: {
      title: 'Widgets'
    },
    views: {
      "content@app": {
        template: require('./views/widgets-demo.html')
      }
    }
  });
});

export default MODULE_NAME;

