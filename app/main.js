'use strict';

import angular from 'angular';
import './app';

//$.sound_path = appConfig.sound_path;
//$.sound_on = appConfig.sound_on;

angular.element(document).ready(()=>{
  angular.bootstrap(document, ['app']);
});

