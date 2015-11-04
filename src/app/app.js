var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var characters_component_1 = require('./characters.component');
var dashboard_component_1 = require('./dashboard.component');
var child_1 = require('./child');
var App = (function () {
    function App(router) {
        this.router = router;
    }
    App.prototype.navigate = function () {
        this.router.navigateByUrl('child');
    };
    App = __decorate([
        angular2_1.Component({
            selector: 'app',
            template: "\n    <a [router-link]=\"['./Dashboard']\">Dashboard</a>\n    <a [router-link]=\"['./Characters']\">Characters</a>\n    <button (click)=\"navigate()\">Child</button>\n    <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Dashboard', component: dashboard_component_1.DashboardComponent },
            { path: '/characters', as: 'Characters', component: characters_component_1.CharactersComponent },
            { path: '/child/...', as: 'Child', component: child_1.Child }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map