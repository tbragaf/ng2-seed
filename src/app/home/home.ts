import { Component, View, ElementRef } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { Category } from './category';

@Component({
  selector: 'home'
})
@View({
  template: 'Home <br> <router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', redirectTo: 'favorites' },
  { path: ':category', as: 'Category', component: Category }
])
export class Home {   
  constructor() { }  
}