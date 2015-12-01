import { Component, View, ElementRef } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'category'
})
@View({
  template: 'Selected category: {{category}}'
})
export class Category {   
  category : string;
  
  constructor(routeParams : RouteParams) {
    this.category = routeParams.get('category');
  }  
}