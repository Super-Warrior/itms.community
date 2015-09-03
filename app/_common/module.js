import angular from 'angular';
import Forms from './forms/module';
import Layout from './layout/module';

const MODULE_NAME = 'SmartAdmin';

angular.module(MODULE_NAME, [
  Forms,
  Layout
]);

export default MODULE_NAME;

