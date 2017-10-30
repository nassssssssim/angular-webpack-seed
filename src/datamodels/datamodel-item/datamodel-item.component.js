/**
 * Created by User on 10/30/2017.
 */

import template from './datamodel-item.component.html';
import './datamodel-item.component.scss';

class DataModelItemComponent {

}

export const dataModelItemComponent = {
  template,
  controller: DataModelItemComponent,
  bindings: {
    datamodel: '<',
    onRemove: '&'
  }
};
