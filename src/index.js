import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-material/angular-material.css';
import 'angular-ui-router';

import 'angular/angular-csp.css';
import './index.scss';

import demoModule from './demo/demoModule';
import serviceModule from './services/datamodel/datamodels-service.module';

angular.module('main', [
  'ngMaterial',
  'ui.router',
  demoModule,
  serviceModule
])
  .config(statesConfig);

function statesConfig($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      template: '<demo-welcome></demo-welcome>'
    })
    .state('stateTest', {
      url: '/test',
      template: `<md-content layout="column" layout-align="center center">
<h1>You are in another state</h1>
<md-button class="md-raised md-accent" ui-sref="main">GO BACK</md-button>
</md-content>`
    })
}

angular.bootstrap(document.documentElement, ['main']);

