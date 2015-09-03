import angular from 'angular';
import initDirectives from './directives';
import initAction from './actions';
import initService from './service';

const MODULE_NAME = 'SmartAdmin.Layout';

const app = angular.module(MODULE_NAME, []);
initDirectives(app);
initAction(app);
initService(app);

export default MODULE_NAME;

