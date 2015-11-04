import {provide, bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {App} from './app';

bootstrap(App, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
