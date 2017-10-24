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

  function getRecordsOf(entityName) {
    return $http.get(`/mocks/${entityName.toLowerCase()}-records.mock.json`);
  }

  function getEntity(entityName) {
    return getAllDataModels().then(dm => {
      return dm.find(ent => ent.name === entityName);
    })
  }
}


export {dataModelsServiceFactory}
