
import template from './datamodel-browser.component.html';

class DataModelBrowser{
  constructor($state){
    this._$state = $state;
  }
  pageChanged(page){
    this._$state.go('.', {page});
  }
}
export const dataModelBrowserComponent = {
  template: template,
  bindings:{
    recordsPage: '<'
  },
  controller: DataModelBrowser
};
