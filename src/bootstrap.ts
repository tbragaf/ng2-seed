import { provide, bootstrap } from 'angular2/angular2';
import { LocationStrategy, HashLocationStrategy, ROUTER_PROVIDERS, APP_BASE_HREF } from 'angular2/router';
import { App } from './app/app';

bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(APP_BASE_HREF, {useValue: '#'})
]);