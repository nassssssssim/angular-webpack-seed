export default function configRoutes($stateProvider) {
  $stateProvider.state('datamodels.browse', {
    url: '/:name/browse',
    resolve: {
      datamodel: function(dataModelsService, $stateParams){
        return dataModelsService.getRecordsOf($stateParams.name);
      }
    },
    template: '<demo-datamodel-browser records-page="$resolve.datamodel"></demo-datamodel-browser>'
  });
};
