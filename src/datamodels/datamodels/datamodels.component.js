
import './datamodels.component.scss';
import template from './datamodels.component.html';

class DataModelsComponent {
  constructor(dataModelsService){

    dataModelsService.getAllDataModels().then(datamodels => {
        this.datamodels = datamodels;
    });
  }
}

export const dataModelsComponent = {
  template: template,
  controller: DataModelsComponent
};
