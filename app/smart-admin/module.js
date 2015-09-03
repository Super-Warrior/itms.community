import angular from 'angular';
const MODULE_NAME = 'app.smartAdmin';

export default MODULE_NAME;

const app = angular.module(MODULE_NAME, [])
.config(function ($stateProvider) {

  $stateProvider
  .state('app.smartAdmin', {
    abstract: true,
    data: {
      title: 'SmartAdmin Intel'
    }
  })

  .state('app.smartAdmin.appLayout', {
    url: '/app-layout',
    data: {
      title: 'App Layout'
    },
    views: {
      "content@app": {
        template: require('./views/app-layout.html')
      }
    }
  })

  .state('app.smartAdmin.diffVer', {
    url: '/different-versions',
    data: {
      title: 'Different Versions'
    },
    views: {
      "content@app": {
        template: require('./views/different-versions.html')
      }
    }
  })
});

