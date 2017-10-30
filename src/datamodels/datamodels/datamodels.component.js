
import './datamodels.component.scss';
import template from './datamodels.component.html';

class DataModelsComponent {
  constructor(dataModelsService, $state){
    this._dataModelsService = dataModelsService;
    this._$state = $state;
  }
  remove(item){
    this._dataModelsService.removeDataModel(item.id).then(() =>{
      this._$state.reload();
    });
  }
}

export const dataModelsComponent = {
  template: template,
  bindings: {
    datamodels: '<'
  },
  controller: DataModelsComponent
};
