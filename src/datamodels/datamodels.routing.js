export default function configRoutes($stateProvider) {
  $stateProvider.state('datamodels.browse', {
    url: '/:name/browse?page',
    resolve: {
      records: function(dataModelsService, $stateParams){
        return dataModelsService.getRecordsOf($stateParams.name, $stateParams.page);
      }
    },
    template: '<demo-datamodel-browser records-page="$resolve.records"></demo-datamodel-browser>'
  });
};
