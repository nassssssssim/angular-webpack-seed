
import template from './paginator.component.html';

class PaginatorComponent{
  constructor(){
    this.pages = [];
  }
  $onChanges(changes){
    if(changes.totalPages){
      this.pages = [];
      for(let i=0; i< this.totalPages; i++){
        this.pages.push(i);
      }
    }
  }
}
export const paginatorComponent = {
  template,
  controller: PaginatorComponent,
  bindings: {
    currentPage: '<',
    totalPages: '<',
    currentPageChange: '&'
  }
};
