import {dataModelsComponent} from "./datamodels/datamodels.component";
import {dataModelsServiceFactory} from "./datamodels.service";
import configRoutes from './datamodels.routing';
import {dataModelBrowserComponent} from "./datamodel-browser/datamodel-browser.component";
import {dataModelItemComponent} from "./datamodel-item/datamodel-item.component";
import paginatorModule from '../shared/paginator/paginator.module';

export const datamodelsModule = angular.module('hasinCourse.datamodels', [
  paginatorModule
])
  .factory('dataModelsService', dataModelsServiceFactory)
  .component('demoDatamodels', dataModelsComponent)
  .component('demoDatamodelItem', dataModelItemComponent)
  .component('demoDatamodelBrowser', dataModelBrowserComponent)
  .config(configRoutes);

export default datamodelsModule.name;
