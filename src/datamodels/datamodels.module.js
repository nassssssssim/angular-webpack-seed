import {dataModelsComponent} from "./datamodels/datamodels.component";
import {dataModelsServiceFactory} from "./datamodels.service";
import configRoutes from './datamodels.routing';
import {dataModelBrowserComponent} from "./datamodel-browser/datamodel-browser.component";

export const datamodelsModule = angular.module('demo.datamodels', [])
  .factory('dataModelsService', dataModelsServiceFactory)
  .component('demoDatamodels', dataModelsComponent)
  .component('demoDatamodelBrowser', dataModelBrowserComponent)
  .config(configRoutes);

export default datamodelsModule.name;
