/**
 * Created by Asus005 on 2017-10-24.
 */

function dataModelsServiceFactory($http) {
  return {
    getAllDataModels,
    getRecordsOf,
    getEntity
  };

  function getAllDataModels() {
    return $http.get('/mocks/datamodels.mock.json');
  }

  // pageNumber starts at 0 (default)
  function getRecordsOf(entityName, pageNumber) {
    return $http.get(`/mocks/${entityName.toLowerCase()}-${pageNumber || 0}-records.mock.json`);
  }

  function getEntity(entityName) {
    return getAllDataModels().then(datamodels => {
      datamodels = datamodels.data;
      let result;
      datamodels.some(dm => {
        if (!result) {
          let entity = dm.schema.entities.find(ent => ent.name === entityName);
          if (entity) {
            result = entity;
            return true;
          }
        }
      });

      return result;
    })
  }
}


export {dataModelsServiceFactory}
