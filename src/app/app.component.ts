import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {CharactersComponent} from './characters.component';
import {DashboardComponent} from './dashboard.component';
import {Child} from './child';

@Component({
  selector: 'my-app',
  template: `
    <a [router-link]="['./Dashboard']">Dashboard</a>
    <a [router-link]="['./Characters']">Characters</a>
    <button (click)="navigate()">Child</button>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Dashboard', component: DashboardComponent },
  { path: '/characters', as: 'Characters', component: CharactersComponent },
  { path: '/child/...', as: 'Child', component: Child }
])
export class AppComponent { 
  router : Router;
  
  constructor(router: Router) {
    this.router = router;
  }
  
  navigate() {
    this.router.navigateByUrl('child');
  }  
}