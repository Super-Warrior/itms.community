import angular from 'angular';
import initDirectives from './directives';

const MODULE_NAME = 'SmartAdmin.Forms';

const app = angular.module(MODULE_NAME, []);
initDirectives(app);

export default MODULE_NAME;

