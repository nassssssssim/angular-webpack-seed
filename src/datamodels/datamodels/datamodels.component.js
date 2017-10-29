/**
 * Created by User on 10/29/2017.
 */

class DataModelsComponent {
  constructor(dataModelsService){

    dataModelsService.getAllDataModels().then(datamodels => {
        this.datamodels = datamodels;
    });
  }
}

export const dataModelsComponent = {
  template: require('./datamodels.component.html'),
  controller: DataModelsComponent
};
