
import template from './datamodel-browser.component.html';

class DataModelBrowser{

}
export const dataModelBrowserComponent = {
  template: template,
  bindings:{
    recordsPage: '<'
  },
  controller: DataModelBrowser
};
