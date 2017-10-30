import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'angular-material/angular-material.css';
import 'angular-ui-router';

import 'angular/angular-csp.css';
import './index.scss';

import demoModule from './demo/demo.module';
import datamodelsModule from "./datamodels/datamodels.module";

angular.module('hasinCourse', [
  'ngMaterial',
  'ui.router',
  demoModule,
  datamodelsModule
])
  .config(statesConfig);

function statesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      template: '<demo-welcome></demo-welcome>'
    })
    .state('datamodels', {
      url: '/datamodels',
      resolve: {
        datamodels: function (dataModelsService) {
          return dataModelsService.getAllDataModels();
        }
      },
      template: `<demo-datamodels datamodels="$resolve.datamodels"></demo-datamodels>`
    });

  $urlRouterProvider.otherwise('/');
}

angular.bootstrap(document.documentElement, ['hasinCourse']);

