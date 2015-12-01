import { Component, View, ElementRef } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, Router, RouteConfig } from 'angular2/router';
import { Home } from './home/home';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: 'home/...', as: 'Home', component: Home }
])
export class App {   
  router : Router;
  
  constructor(router : Router) {
    this.router = router;
  }
  
  goTo(path : string) {
    this.router.navigateByUrl(path);
  }
}