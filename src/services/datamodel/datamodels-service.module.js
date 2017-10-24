/**
 * Created by Asus005 on 2017-10-24.
 */

import angular from 'angular';
import {dataModelsServiceFactory} from "./datamodels.service";

export default angular.module('dataModels.api', [])
  .factory('dataModelsService', dataModelsServiceFactory)
  .name;
