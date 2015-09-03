import angular from 'angular';
const MODULE_NAME = 'app.layout';

const app = angular.module(MODULE_NAME, [])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    abstract: true,
    views: {
      root: {
        template: require('./layout.tpl.html')
      }
    },
    resolve: {
      scripts: function(lazyScript){
        return lazyScript.register([
          'sparkline',
          'easy-pie'
        ]);
      }
    }
  });
  $urlRouterProvider.otherwise('/dashboard');
});

require('./language/language-controller')(app);
require('./language/Language')(app);
require('./language/languageSelector')(app);

export default MODULE_NAME;
