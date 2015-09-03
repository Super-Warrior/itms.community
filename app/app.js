'use strict';

/**
 * @ngdoc overview
 * @name app [smartadminApp]
 * @description
 * # app [smartadminApp]
 *
 * Main module of the application.
 */

import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';
import 'imports?angular!restangular';
import 'angular-bootstrap';
import uirouter from 'angular-ui-router';
import 'jquery-ui/sortable';
import 'jquery-ui/tooltip';

import appConfig from '../app.config';
import SmartAdmin from './_common/module';
import auth from './auth/module';
import dashboard from './dashboard/module';
import layout from './layout/module';
import calendar from './calendar/module';
import graphs from './graphs/module';
import widgets from './widgets/module';
import inbox from './inbox/module';
import appView from './app-views/module';
import tables from './tables/module';
import forms from './forms/module';
import misc from './misc/module';

angular.module('app', [
  //'ngSanitize',
  ngAnimate,
  uirouter,
  ngResource,
  'restangular',
  'ui.bootstrap',

  // Smartadmin Angular Common Module
  SmartAdmin,

  // App
  auth,
  layout,
  calendar,
  dashboard,
  graphs,
  widgets,
  inbox,
  appView,
  tables,
  forms,
  misc
  //'app.chat',
  //'app.ui',
  //'app.maps',
  //'app.smartAdmin'
])
.config(function ($provide, $httpProvider) {


  // Intercept http calls.
  $provide.factory('ErrorHttpInterceptor', function ($q) {
    var errorCounter = 0;
    function notifyError(rejection){
      console.log(rejection);
      //$.bigBox({
      //title: rejection.status + ' ' + rejection.statusText,
      //content: rejection.data,
      //color: "#C46A69",
      //icon: "fa fa-warning shake animated",
      //number: ++errorCounter,
      //timeout: 6000
      //});
    }

    return {
      // On request failure
      requestError: function (rejection) {
        // show notification
        notifyError(rejection);

        // Return the promise rejection.
        return $q.reject(rejection);
      },

      // On response failure
      responseError: function (rejection) {
        // show notification
        notifyError(rejection);
        // Return the promise rejection.
        return $q.reject(rejection);
      }
    };
  });

  // Add the interceptor to the $httpProvider.
  $httpProvider.interceptors.push('ErrorHttpInterceptor');

})
.constant('APP_CONFIG', appConfig)
.run(function ($rootScope
    , $state, $stateParams
              ) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                // editableOptions.theme = 'bs3';

              });


