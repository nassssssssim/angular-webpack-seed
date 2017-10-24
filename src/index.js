import angular from 'angular';

import 'angular/angular-csp.css';
import './index.scss';

import demoModule from './demo/demoModule';
import serviceModule from './services/datamodel/datamodels-service.module';

angular.module('main', [
  demoModule,
  serviceModule
]);

angular.bootstrap(document.documentElement, ['main']);

