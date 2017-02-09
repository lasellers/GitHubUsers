webpackJsonp([1,4],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GitHubUserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Subscription } from 'rxjs/Subscription';
var GitHubUserService = (function () {
    /**
    *
     */
    function GitHubUserService(http) {
        this.http = http;
        this.apiUrl = 'https://api.github.com/users/';
        this.user = null;
        this.followings = [];
    }
    /**
     *
     */
    GitHubUserService.prototype.getUser = function (username) {
        var _this = this;
        console.log('GitHubUserService:getUser');
        var cachedObj = localStorage.getItem('user_' + username);
        if (cachedObj !== null) {
            console.log('Cached User: ');
            console.log(JSON.parse(cachedObj));
            this.user = JSON.parse(cachedObj);
            return {};
        }
        var obj = this.http.get(this.apiUrl + username)
            .map(function (res) { return res.json(); })
            .subscribe(function (user) {
            _this.user = user;
            localStorage.setItem('user_' + username, JSON.stringify(_this.user));
            console.log(_this.user);
        }, function (error) { return console.error(' Error is : ' + error); }, function () { return console.log('getUser finished'); });
        return obj;
    };
    /**
     *
     */
    GitHubUserService.prototype.getFollowing = function (username) {
        var _this = this;
        console.log('GitHubUserService:getFollowing');
        var cachedObj = localStorage.getItem('followings_' + username);
        if (cachedObj !== null) {
            console.log('Cached Followings: ');
            console.log(JSON.parse(cachedObj));
            this.followings = JSON.parse(cachedObj);
            return {};
        }
        var obj = this.http.get(this.apiUrl + username + '/following')
            .map(function (res) { return res.json(); })
            .subscribe(function (followings) {
            _this.followings = Array.from(followings);
            localStorage.setItem('followings_' + username, JSON.stringify(_this.followings));
            console.log(_this.followings);
        }, function (error) { return console.error(' Error is : ' + error); }, function () { return console.log('getFollowings finished'); });
        return obj;
    };
    GitHubUserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GitHubUserService);
    return GitHubUserService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Lenovo/Dropbox/projects/angular2/git-hub-users/src/git-hub-user.service.js.map

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(453);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Lenovo/Dropbox/projects/angular2/git-hub-users/src/main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__git_hub_user_service__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


console.clear();
var AppComponent = (function () {
    /**
     *
     */
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'GitHub Users';
        this.defaultBaseUsername = 'lasellers';
        this.baseUsername = this.defaultBaseUsername;
        this.baseUsername = this.defaultBaseUsername;
    }
    /**
     *
     */
    AppComponent.prototype.changeBaseUsernameToDefault = function () {
        this.baseUsername = this.defaultBaseUsername;
        this.loadFollowing(this.baseUsername);
    };
    /**
     *
     */
    AppComponent.prototype.changeBaseUsername = function (username) {
        this.baseUsername = username;
        this.loadFollowing(this.baseUsername);
    };
    /**
     *
     */
    AppComponent.prototype.loadFollowing = function (username) {
        console.log('AppComponent:loadFollowing');
        this.userService.getFollowing(username);
    };
    /**
     *
     */
    AppComponent.prototype.loadUser = function (username) {
        console.log('AppComponent:loadUser');
        this.userService.getUser(username);
    };
    /**
     *
     */
    AppComponent.prototype.ngOnInit = function () {
        this.loadFollowing(this.baseUsername);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "baseUsername", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(610),
            styles: [__webpack_require__(609)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__git_hub_user_service__["a" /* GitHubUserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__git_hub_user_service__["a" /* GitHubUserService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Lenovo/Dropbox/projects/angular2/git-hub-users/src/app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__highlight_directive__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__git_hub_user_service__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__highlight_directive__["a" /* HighlightDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__git_hub_user_service__["a" /* GitHubUserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Lenovo/Dropbox/projects/angular2/git-hub-users/src/app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(el) {
        el.nativeElement.style.backgroundColor = '#eee';
        console.log("highlight called on " + el.nativeElement.tagName);
    }
    HighlightDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
            selector: '[highlight]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], HighlightDirective);
    return HighlightDirective;
    var _a;
}());
//# sourceMappingURL=C:/Users/Lenovo/Dropbox/projects/angular2/git-hub-users/src/highlight.directive.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Lenovo/Dropbox/projects/angular2/git-hub-users/src/environment.js.map

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n    background: #222;\r\n    color: white;\r\n}\r\n\r\n.responsive {\r\n    max-width: 100%;\r\n    max-height: 120px;\r\n}\r\n\r\n.click {\r\n    text-decoration: underline;\r\n}\r\n\r\n.username {}\r\n\r\n.following {}\r\n\r\n.user-group {\r\n    margin: 0;\r\n    padding: 0;\r\n    clear: both;\r\n}\r\n\r\n.user-label {\r\n    line-height: 1.5em;\r\n    min-height: 1.5em;\r\n    margin: 0;\r\n    padding: .5em 1em .5em 1em;\r\n    font-weight: bold;\r\n    text-align: right;\r\n}\r\n\r\n.user-line {\r\n    line-height: 1.5em;\r\n    min-height: 1.5em;\r\n    margin: 0;\r\n    padding: .5em 1em .5em 1em;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h1 highlight>\n        {{title}}\n    </h1>\n    <p class=\"lead\">Angular2 Experiment using GitHub API</p>\n\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n\n            <div class=\"panel panel-default\">\n\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\"></h3>\n\n                    <p>\n                        https://github.com/<input #username type=\"text\" [(ngModel)]=\"baseUsername\">\n                        <button class=\"btn btn-primary btn-sm\" (click)=\"changeBaseUsername($event,baseUsername.value)\">Show following</button>\n                    </p>\n\n                </div>\n\n                <div class=\"panel-body\">\n\n                    <table class=\"table table-striped\" *ngIf=\"userService.followings\">\n                        <tr class=\"\" *ngFor=\"let following of userService.followings\">\n                            <td>\n                                <span class=\"click username\" (click)=\"loadUser(following.login)\">{{following.login}}</span>\n                            </td>\n                            <td>\n                                <span class=\"click following\" (click)=\"changeBaseUsername(following.login)\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>Following</span>\n                            </td>\n                        </tr>\n                    </table>\n\n                </div>\n                <div class=\"panel-footer\">\n                    <button class=\"btn btn-primary\" (click)=\"changeBaseUsernameToDefault()\">Select default user (AKA lasellers)</button>\n                </div>\n                <!-- / panel-footer -->\n\n            </div>\n\n        </div>\n        <div class=\"col-sm-6\">\n\n            <div class=\"panel panel-default\">\n\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\" *ngIf=\"userService.user !== null\">\n                        {{userService.user.name}}\n                    </h3>\n                </div>\n\n                <div class=\"panel-body\">\n\n                    <div *ngIf=\"userService.user == null\">\n                        <p>Select one of the users {{userService.baseUsername}} is following to see their information.</p>\n                    </div>\n\n                    <div *ngIf=\"userService.user !== null\">\n\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\"><img src=\"{{userService.user.avatar_url}}\" class=\"responsive\"></div>\n                        </div>\n\n                        <form class=\"form-horizontal\">\n\n                            <div class=\"user-group\">\n                                <label class=\"col-sm-4 user-label\">Username</label>\n                                <div class=\"col-sm-6 user-line\">\n                                    {{userService.user.login}}\n                                </div>\n                            </div>\n\n                            <div class=\"user-group\">\n                                <label class=\"col-sm-4 user-label\">Id</label>\n                                <div class=\"col-sm-6 user-line\">\n                                    {{userService.user.id}}\n                                </div>\n                            </div>\n\n                            <div class=\"user-group\">\n                                <label class=\"col-sm-4 user-label\">Company</label>\n                                <div class=\"col-sm-6 user-line\">\n                                    {{userService.user.company}}\n                                </div>\n                            </div>\n\n                            <div class=\"user-group\">\n                                <label class=\"col-sm-4 user-label\">Blog</label>\n                                <div class=\"col-sm-6 user-line\">\n                                    <a href=\"{{userService.user.blog}}\">{{userService.user.blog}}</a>\n                                </div>\n                            </div>\n\n                            <div class=\"user-group\">\n                                <label class=\"col-sm-4 user-label\">Location</label>\n                                <div class=\"col-sm-6 user-line\">\n                                    {{userService.user.location}}\n                                </div>\n                            </div>\n\n                            <div class=\"user-group\">\n                                <label class=\"col-sm-4 user-label\">Email</label>\n                                <div class=\"col-sm-6 user-line\">\n                                    <a href=\"mailto:{{userService.user.email}}\">{{userService.user.email}}</a>\n                                </div>\n                            </div>\n\n                            <div class=\"user-group\">\n                                <label class=\"col-sm-4 user-label\">Bio</label>\n                                <div class=\"col-sm-6 user-line\">\n                                    <a href=\"mailto:{{userService.user.bio}}\">{{userService.user.bio}}</a>\n                                </div>\n                            </div>\n\n                            <div class=\"user-group\">\n                                <div class=\"col-sm-3 user-label\">Repos</div>\n                                <div class=\"col-sm-3 user-line\">{{userService.user.public_repos}}</div>\n                                <div class=\"col-sm-3 user-label\">Gits</div>\n                                <div class=\"col-sm-3 user-line\">{{userService.user.public_gists}}</div>\n                            </div>\n\n                            <div class=\"user-group\">\n                                <div class=\"col-sm-3 user-label\">Followers</div>\n                                <div class=\"col-sm-3 user-line\">{{userService.user.followers}}</div>\n                                <div class=\"col-sm-3 user-label\">Following</div>\n                                <div class=\"col-sm-3 user-line\">{{userService.user.following}}</div>\n                            </div>\n\n                            <div class=\"user-group\">\n                                <div class=\"col-sm-4 user-label\">Created</div>\n                                <div class=\"col-sm-8 user-line\">{{userService.user.created_at}}</div>\n                            </div>\n                            <div class=\"user-group\">\n                                <div class=\"col-sm-4 user-label\">Last updated</div>\n                                <div class=\"col-sm-8 user-line\">{{userService.user.updated_at}}</div>\n                            </div>\n\n                        </form>\n                        <!-- / form-horizontal -->\n\n                    </div>\n                </div>\n                <!-- ngIf=\"userService.user -->\n                <div class=\"panel-footer\">\n\n                </div>\n                <!-- / panel-footer -->\n\n            </div>\n            <!-- / panel-body -->\n\n        </div>\n        <!-- / panel panel-default -->\n    </div>\n</div>\n\n<div class=\"footer navbar-fixed-bottom navbar navbar-inverse\">\n    <p class=\"text-center\"><a href=\"https://github.com/lasellers\">https://github.com/lasellers</a></p>\n</div>"

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ })

},[625]);
//# sourceMappingURL=main.bundle.map