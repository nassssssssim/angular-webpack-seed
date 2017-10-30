/**
 * Created by Asus005 on 2017-10-24.
 */

function dataModelsServiceFactory($http, $timeout, $q) {
  var removedItems = [];//JSON.parse(localStorage.getItem('removedItems') || '[]');
  return {
    getAllDataModels,
    getRecordsOf,
    getEntity,
    removeDataModel
  };

  function removeDataModel(id) {
    removedItems.push(id);
    // localStorage.setItem('removedItems', JSON.stringify(removedItems));
    return $q.when();
  }

  function getAllDataModels() {
    return $timeout(1000).then(() => {
      return $http.get('/mocks/datamodels.mock.json')
        .then(response => response.data).then(items => {
          return items.filter(item => removedItems.indexOf(item.id) < 0);
        });

    });
  }

  // pageNumber starts at 0 (default)
  function getRecordsOf(entityName, pageNumber) {
    let url = `/mocks/${entityName.toLowerCase()}-${pageNumber || 0}-records.mock.json`;
    return $http.get(url).then(response => response.data);
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
export default dataModelsServiceFactory;
