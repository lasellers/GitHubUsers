(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      https://github.com/\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"\n             #usernameInput name=\"baseUsername\" [(ngModel)]=\"baseUsername\"\n             value=\"{{baseUsername}}\">\n      <button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"\n              (click)=\"changeBaseUsername(usernameInput.value)\"\n              placement=\"bottom\"\n              ngbTooltip=\"Change base user\">User\n      </button>\n    </form>\n\n    <div class=\"col-sm align-bottom\">\n      <button class=\"btn btn-outline-primary btn-sm my-2 my-sm-0\"\n              (click)=\"changeBaseUsernameToDefault()\"\n              placement=\"bottom\"\n              ngbTooltip=\"Change to Default User\">Default User\n      </button>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <p class=\"lead\">Learning Angular 9 using the GitHub API (v {{version}})</p>\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      Local Storage Caching <input type=\"checkbox\"\n                                   [(ngModel)]=\"userService.isCaching\"\n                                   (change)=\"changeCaching(userService.isCaching)\">\n    </div>\n    <div class=\"col-sm-3\">\n      <button class=\"btn btn-outline-primary btn-sm my-2 my-sm-0\" (click)=\"clearCache()\">Clear local storage cache\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      Uncached Api Calls\n    </div>\n    <div class=\"col-sm-1\">\n      User: {{userService.apiCalls}}\n    </div>\n    <div class=\"col-sm-2\">\n      Followings: {{followingsService.apiCalls}}\n    </div>\n    <div class=\"col-sm-2\">\n      Followers: {{followersService.apiCalls}}\n    </div>\n    <div class=\"col-sm-1\">\n      Gists: {{gistsService.apiCalls}}\n    </div>\n    <div class=\"col-sm-1\">\n      Gist: {{gistService.apiCalls}}\n    </div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4\">\n    </div>\n\n    <div class=\"col-sm-8\">\n      <form class=\"form-inline\" role=\"form\">\n\n        <div class=\"form-group-row\">\n          <label for=\"filterString\" class=\"sr-only\">Filter</label>\n          <input type=\"text\" id=\"filterString\" name=\"filterString\" placeholder=\"Filter string...\"\n                 class=\"form-control mb-2 mr-sm-2\" [(ngModel)]=\"filterString\">\n        </div>\n\n      </form>\n\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4\">\n      <div appWasCachedHighlight\n           [wasCached]=\"cachingStatus.userWasCached\"\n           [classString]=\"'text-danger'\">\n        <!--[ngClass]=\"{'text-info': cachingStatus.userWasCached, 'text-warning': !cachingStatus.userWasCached}\"-->\n        User {{ cachingStatus.userWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"userService.isUserCached(baseUsername)\"\n                 placement=\"left\"\n                 ngbTooltip=\"User is cached\"></fa-icon>\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"cachingStatus.userWasCached\"\n                 placement=\"left\"\n                 ngbTooltip=\"Gist was cached\"></fa-icon>\n        <fa-icon [icon]=\"['fas','minus-circle']\"\n                 (click)=\"userService.clearUserCache(baseUsername)\" placement=\"left\"\n                 ngbTooltip=\"Clear user cache\"></fa-icon>\n      </div>\n      <user-detail [baseUsername]=\"baseUsername\"\n                   (notifyChangeBaseUsername)='onChangeBaseUsername($event)'></user-detail>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <div appWasCachedHighlight\n           [wasCached]=\"cachingStatus.followersWasCached\">\n        Followers {{ cachingStatus.followersWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"followersService.isFollowersCached(baseUsername)\"\n                 placement=\"left\"\n                 ngbTooltip=\"Followers is cached {{gist.id}}\"></fa-icon>\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"cachingStatus.followersWasCached\"\n                 placement=\"left\"\n                 ngbTooltip=\"Followers was cached {{gist.id}}\"></fa-icon>\n        <fa-icon [icon]=\"['fas','minus-circle']\"\n                 (click)=\"followersService.clearFollowersCache(baseUsername)\" placement=\"left\"\n                 ngbTooltip=\"Clear followers cache\"></fa-icon>\n      </div>\n      <app-user-followers [baseUsername]=\"baseUsername\"\n                          [filterString]=\"filterString\"\n                          (notifyChangeBaseUsername)='onChangeBaseUsername($event)'\n                          (notifyShowBaseUsername)='onShowBaseUsername($event)'></app-user-followers>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <div appWasCachedHighlight\n           [wasCached]=\"cachingStatus.followingsWasCached\">\n        Followings {{ cachingStatus.followingsWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"followingsService.isFollowingsCached(baseUsername)\"\n                 placement=\"left\"\n                 ngbTooltip=\"Followings is cached\"></fa-icon>\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"cachingStatus.followingsWasCached\"\n                 placement=\"left\"\n                 ngbTooltip=\"Followings was cached\"></fa-icon>\n        <fa-icon [icon]=\"['fas','minus-circle']\"\n                 (click)=\"followingsService.clearFollowingsCache(baseUsername)\" placement=\"left\"\n                 ngbTooltip=\"Clear followings cache\"></fa-icon>\n      </div>\n      <app-user-followings [baseUsername]=\"baseUsername\"\n                           [filterString]=\"filterString\"\n                           (notifyChangeBaseUsername)='onChangeBaseUsername($event)'\n                           (notifyShowBaseUsername)='onShowBaseUsername($event)'></app-user-followings>\n    </div>\n\n  </div>\n  <!-- /row -->\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n\n      <div appWasCachedHighlight [wasCached]=\"cachingStatus.gistsWasCached\">\n        Gists {{ cachingStatus.gistsWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"gistsService.isGistsCached(baseUsername)\"\n                 placement=\"left\"\n                 ngbTooltip=\"Gist is cached {{gist.id}}\"></fa-icon>\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"cachingStatus.gistsWasCached\"\n                 placement=\"left\"\n                 ngbTooltip=\"Gist was cached {{gist.id}}\"></fa-icon>\n        <fa-icon [icon]=\"['fas','minus-circle']\"\n                 (click)=\"gistsService.clearGistsCache(baseUsername)\" placement=\"left\"\n                 ngbTooltip=\"Clear gists cache\"></fa-icon>\n      </div>\n      <app-user-gists [baseUsername]=\"baseUsername\"></app-user-gists>\n\n    </div>\n    <div class=\"col-sm-6\">\n\n      <div>\n        Gist {{ cachingStatus.gistWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','minus-circle']\" *ngIf=\"gistsService.isGistsCached(baseUsername)\"\n                 (click)=\"gistService.clearGistCache(gist)\" placement=\"left\"\n                 ngbTooltip=\"Clear gist cache\"></fa-icon>\n      </div>\n\n      <app-gist></app-gist>\n    </div>\n  </div>\n  <!-- /row -->\n\n</div>\n<!-- /fluid-container -->\n\n<footer class=\"footer\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-3\">\n        <a class=\"\" href=\"https://github.com/lasellers\">https://github.com/lasellers</a>\n      </div>\n      <div class=\"col-3\">\n        <a class=\"\" href=\"https://github.com/{{baseUsername}}\">https://github.com/{{baseUsername}}</a>\n      </div>\n      <div class=\"col-6\">\n      </div>\n\n    </div>\n\n    <div class=\"muted-text\">\n      See README.md\n    </div>\n\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gist/gist.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gist/gist.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"gist.content !== undefined\">\n  <h2>Gist</h2>\n  <div class=\"content\"><pre>\n{{gist.content}}</pre>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-default\">\n  <img [src]=\"user.avatar_url\" class=\"card-img-top\" alt=\"{{user.name}}\" id=\"avatar_url\">\n\n  <div class=\"card-heading\">\n    <h3 class=\"card-title\" *ngIf=\"!isEmpty(user)\">\n      {{user.name}}\n      <fa-icon [icon]=\"['fas','user-cog']\" (click)=\"changeBaseUsername(user.login)\"\n               placement=\"left\" ngbTooltip=\"Make user base\"></fa-icon>\n    </h3>\n  </div>\n\n  <div class=\"card-body\">\n\n    <div *ngIf=\"isEmpty(user)\">\n      <p>Select one of the users {{userService.getUserBasename()}} is following to see their information.</p>\n    </div>\n\n    <div class=\"card-text\" *ngIf=\"!isEmpty(user)\">\n\n      <form class=\"form-horizontal\">\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"login\">Username</label>\n          <div class=\"col-sm-6 user-line\" id=\"login\">\n            {{user.login}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"name\">Name</label>\n          <div class=\"col-sm-6 user-line\" id=\"name\">\n            {{user.name}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"hireable\">Hireable</label>\n          <div class=\"col-sm-8 user-line\" id=\"hireable\">{{user.hireable == true ? \"Yes\" : \"No\"}}</div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"id\">Id</label>\n          <div class=\"col-sm-6 user-line\" id=\"id\">\n            {{user.id}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"company\">Company</label>\n          <div class=\"col-sm-6 user-line\" id=\"company\">\n            {{user.company}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"blog\">Blog</label>\n          <div class=\"col-sm-6 user-line\" id=\"blog\">\n            <a href=\"{{user.blog}}\">{{user.blog}}</a>\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"location\">Location</label>\n          <div class=\"col-sm-6 user-line\" id=\"location\">\n            {{user.location}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"email\">Email</label>\n          <div class=\"col-sm-6 user-line\" id=\"email\">\n            <a href=\"mailto:{{user.email}}\">{{user.email}}</a>\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"bio\">Bio</label>\n          <div class=\"col-sm-6 user-line\" id=\"bio\">\n            {{user.bio}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-3 user-label\" for=\"public_repos\">Repos</label>\n          <div class=\"col-sm-3 user-line\" id=\"public_repos\">{{user.public_repos}}</div>\n          <label class=\"col-sm-3 user-label\" for=\"public_gists\">Gists</label>\n          <div class=\"col-sm-3 user-line\" id=\"public_gists\">{{user.public_gists}}</div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-3 user-label\" for=\"followers\">Followers</label>\n          <div class=\"col-sm-3 user-line\" id=\"followers\">{{user.followers}}</div>\n\n          <label class=\"col-sm-3 user-label\" for=\"following2\">Following</label>\n          <div class=\"col-sm-3 user-line\" id=\"following2\">{{user.following}}</div>\n        </div>\n\n      </form>\n      <!-- / form-horizontal -->\n\n    </div>\n    <!-- ngIf=\"user -->\n    <div class=\"card-footer\">\n\n      <div class=\"row user-group\">\n        <label class=\"col-sm-4 user-label\" for=\"created_at\">Created</label>\n        <div class=\"col-sm-8 user-line\" id=\"created_at\">{{user.created_at | date:'short' }}</div>\n      </div>\n      <div class=\"row user-group\">\n        <label class=\"col-sm-4 user-label\" for=\"updated_at\">Last updated</label>\n        <div class=\"col-sm-8 user-line\" id=\"updated_at\">{{user.updated_at | date:'short'}}</div>\n      </div>\n\n    </div>\n    <!-- / card-footer -->\n\n  </div>\n  <!-- / card-body -->\n</div>\n<!-- / card card-default -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-followers/user-followers.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-followers/user-followers.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Followers</h3>\n<table class=\"table table-striped\">\n  <tbody>\n  <tr class=\"row\" *ngFor=\"let follower of followers | filterFollowers:filterString:'login'\">\n    <td class=\"col\">\n      <span (click)=\"showBaseUsername(follower.login)\">{{follower.login}}</span>\n      <fa-icon [icon]=\"['fas','cloud']\" [hidden]=\"!userService.isUserCached(follower.login)\"\n               placement=\"left\"\n               ngbTooltip=\"User {{follower.login}} is cached localStorage\"></fa-icon>\n      <fa-icon [icon]=\"['fas','cloud-download-alt']\" [hidden]=\"!isUserWasCached(follower.login)\"\n               placement=\"left\" ngbTooltip=\"User {{follower.login}} was cached as of last pull\"></fa-icon>\n    </td>\n    <td class=\"col\">\n      <button class=\"btn btn-primary btn-sm following\" (click)=\"changeBaseUsername(follower.login)\">User\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-followings/user-followings.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-followings/user-followings.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>Followings</h3>\n<table class=\"table table-striped\">\n  <tbody>\n  <tr class=\"row\" *ngFor=\"let following of followings | filterFollowers:filterString:'login'\">\n    <td class=\"col\">\n      <span (click)=\"showBaseUsername(following.login)\">{{following.login}}</span>\n      <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"userService.isUserCached(following.login)\"\n               placement=\"left\"\n               ngbTooltip=\"User {{following.login}} is cached localStorage\"></fa-icon>\n      <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"isUserWasCached(following.login)\"\n               placement=\"left\" ngbTooltip=\"User {{following.login}} was cached as of last pull\"></fa-icon>\n    </td>\n    <td class=\"col\">\n      <button class=\"btn btn-primary btn-sm following\" (click)=\"changeBaseUsername(following.login)\">User\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-gists/user-gists.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-gists/user-gists.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-heading\">\n  <h3 class=\"card-title\" *ngIf=\"gists.length > 0\">\n    Gists\n  </h3>\n</div>\n<table class=\"table table-striped\" *ngIf=\"gists.length > 0\">\n  <thead>\n  <tr>\n    <th>Filename</th>\n    <th>Size</th>\n    <th>Language</th>\n    <th></th>\n    <th></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let gist of gists\">\n    <td>\n      <button class=\"btn btn-primary\" (click)=\"getGist(gist)\">Get</button>\n    </td>\n    <td>{{gist.filename}}</td>\n    <td class=\"bytes\">\n      <pre>{{gist.size | bytes}}</pre>\n    </td>\n    <td>{{gist.language}}</td>\n    <td>\n      <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"gistService.isGistCached(gist)\"\n               placement=\"left\"\n               ngbTooltip=\"Gist is cached {{gist.id}}\"></fa-icon>\n      <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"gist.wasCached\"\n               placement=\"left\"\n               ngbTooltip=\"Gist was cached {{gist.id}}\"></fa-icon>\n      <fa-icon [icon]=\"['fas','minus-circle']\" *ngIf=\"gist.cached\"\n               (click)=\"gistService.clearGistCache(gist)\" placement=\"left\"\n               ngbTooltip=\"Clear gist cache {{gist.id}}\"></fa-icon>\n    </td>\n  </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, fullName, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"githubusers\",\"fullName\":\"Github Users\",\"version\":\"3.0.4\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build --prod\",\"test\":\"ng test --watch=false --reporters=spec\",\"test-ci\":\"ng test --code-coverage --watch=false --browsers=ChromeHeadless --reporters=spec,kjhtml,coverage-istanbul,junit,htmlDetailed\",\"coverage\":\"ng test --code-coverage --progress --watch=false --reporters=spec,kjhtml,coverage-istanbul,junit,htmlDetailed\",\"test-dev\":\"ng test --code-coverage --progress --watch=true --browsers=Chrome\",\"test-sr\":\"npm run test --singleRun=true\",\"eslint\":\"eslint .\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"test2\":\"mocha --recursive ./test/*.js\",\"test3\":\"nyc ng test --code-coverage --progress\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~9.1.9\",\"@angular/common\":\"~9.1.9\",\"@angular/compiler\":\"~9.1.9\",\"@angular/core\":\"~9.1.9\",\"@angular/forms\":\"~9.1.9\",\"@angular/localize\":\"~9.1.9\",\"@angular/platform-browser\":\"~9.1.9\",\"@angular/platform-browser-dynamic\":\"~9.1.9\",\"@angular/router\":\"~9.1.9\",\"@fortawesome/angular-fontawesome\":\"^0.6.1\",\"@fortawesome/fontawesome-svg-core\":\"^1.2.28\",\"@fortawesome/free-regular-svg-icons\":\"^5.13.0\",\"@fortawesome/free-solid-svg-icons\":\"^5.13.0\",\"@ng-bootstrap/ng-bootstrap\":\"^6.1.0\",\"bootstrap\":\"^4.4.0\",\"core-js\":\"^3.6.5\",\"ngx-toastr\":\"^12.0.1\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^1.10.0\",\"webpack\":\"^4.43.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.901.7\",\"@angular/cli\":\"^9.1.7\",\"@angular/compiler-cli\":\"~9.1.9\",\"@types/chai\":\"^4.2.11\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.11.1\",\"@typescript-eslint/eslint-plugin\":\"^3.3.0\",\"@typescript-eslint/parser\":\"^3.3.0\",\"chai\":\"^4.2.0\",\"chai-datetime\":\"^1.6.0\",\"chai-http\":\"^4.3.0\",\"codelyzer\":\"^5.1.2\",\"eslint\":\"^7.3.0\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"^2.1.1\",\"karma-html-detailed-reporter\":\"^2.1.0\",\"karma-jasmine\":\"~3.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.2\",\"karma-junit-reporter\":\"^2.0.1\",\"karma-spec-reporter\":\"0.0.32\",\"karma-summary-reporter\":\"^1.8.0\",\"karma-typescript\":\"^5.0.3\",\"mocha\":\"^8.0.1\",\"mocha-sinon\":\"^2.1.2\",\"nyc\":\"^15.1.0\",\"protractor\":\"^7.0.0\",\"puppeteer\":\"^4.0.0\",\"sinon\":\"^9.0.2\",\"sinon-chai\":\"^3.5.0\",\"supertest\":\"^4.0.2\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~3.8.3\"}}");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\nbody {\n  background: #222;\n  color: white;\n}\n\n.click {\n  text-decoration: underline;\n  color: black;\n}\n\n.click:hover {\n  color: goldenrod;\n}\n\n.username {\n  padding: .5em;\n}\n\n.following {\n  padding: .5em;\n}\n\n.user {\n  background: white;\n}\n\n.user-follows-back {\n  background: yellow;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2xpY2sge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2xpY2s6aG92ZXIge1xuICBjb2xvcjogZ29sZGVucm9kO1xufVxuXG4udXNlcm5hbWUge1xuICBwYWRkaW5nOiAuNWVtO1xufVxuXG4uZm9sbG93aW5nIHtcbiAgcGFkZGluZzogLjVlbTtcbn1cblxuLnVzZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnVzZXItZm9sbG93cy1iYWNrIHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _github_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github-user.service */ "./src/app/github-user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
/* harmony import */ var _bytes_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bytes.pipe */ "./src/app/bytes.pipe.ts");
/* harmony import */ var _github_gists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./github-gists.service */ "./src/app/github-gists.service.ts");
/* harmony import */ var _github_followers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./github-followers.service */ "./src/app/github-followers.service.ts");
/* harmony import */ var _github_followings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./github-followings.service */ "./src/app/github-followings.service.ts");
/* harmony import */ var _github_gist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./github-gist.service */ "./src/app/github-gist.service.ts");




// @ts-ignore






console.clear();
let AppComponent = class AppComponent {
    /**
     *
     */
    constructor(userService, gistService, followersService, followingsService, gistsService, toast) {
        this.userService = userService;
        this.gistService = gistService;
        this.followersService = followersService;
        this.followingsService = followingsService;
        this.gistsService = gistsService;
        this.toast = toast;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.version = _package_json__WEBPACK_IMPORTED_MODULE_4__.version;
        this.title = _package_json__WEBPACK_IMPORTED_MODULE_4__.name;
        this.filterString = '';
        this.gist = {
            content: '',
            cached: false,
            id: ''
        };
        this.baseUsername = this.userService.getUserBasenameDefault();
        this.cachingStatus = {
            userWasCached: false,
            followingsWasCached: false,
            followersWasCached: false,
            gistsWasCached: false,
            gistWasCached: false,
            useCached: false,
            users: []
        };
        this.baseUsername = this.userService.getUserBasenameDefault();
    }
    loadUser(username) {
        this.baseUsername = username;
        this.userService.getUser(username).subscribe((user) => {
            this.userService.user$.emit(user);
        }, error => {
            this.userService.errorMessage$.emit(error);
        });
        this.followersService.getFollowers(username).subscribe(followers => {
            this.followersService.followersCached$.emit(false);
            this.followersService.followers$.emit(followers);
        }, error => {
            this.errorMessage$.emit(error);
        });
        this.followingsService.getFollowings(username).subscribe(followings => {
            this.followingsService.followingsCached$.emit(false);
            this.followingsService.followings$.emit(followings);
        }, error => {
            this.errorMessage$.emit(error);
        });
        this.gistsService.getGists(username).subscribe(gists => {
            this.gistsService.gistsCached$.emit(false);
            this.gistsService.gists$.emit(gists);
        }, error => {
            this.errorMessage$.emit(error);
        });
        this.gistService.gist$.next({ content: '', cached: true, wasCached: false });
    }
    showUser(username) {
        this.userService.getUser(username).subscribe((user) => {
            this.userService.user$.emit(user);
        }, error => {
            this.userService.errorMessage$.emit(error);
        });
    }
    ngOnInit() {
        this.toast.warning(this.version, this.title, {
            timeOut: 12000
        });
        /*Notification.requestPermission().then(permission => {
          if(Notification.permission == 'granted') {
            let notify = new Notification(this.title + ' ' + this.version);
          }
        });*/
        this.loadUser(this.baseUsername);
        this.userService.user$.subscribe(user => {
            // const [cached, username] = cachedUsername;
            const cached = user.wasCached;
            const username = user.login;
            this.cachingStatus.userWasCached = cached;
            this.cachingStatus.users[username] = cached;
            if (cached) {
                this.toast.success(`User: ${username} (cached)`);
            }
            else {
                this.toast.info(`User: ${username} (caching...)`);
            }
        });
        this.followersService.followersCached$.subscribe(cached => {
            this.cachingStatus.followersWasCached = cached;
            if (cached) {
                this.toast.success(`Followers: ${this.baseUsername} (cached) `);
            }
            else {
                this.toast.info(`Followers: ${this.baseUsername} (caching...)`);
            }
        });
        this.followingsService.followingsCached$.subscribe(cached => {
            this.cachingStatus.followingsWasCached = cached;
            if (cached) {
                this.toast.success(`Followings: ${this.baseUsername} (cached) `);
            }
            else {
                this.toast.info(`Followings: ${this.baseUsername} (caching...)`);
            }
        });
        this.gistsService.gistsCached$.subscribe(cached => {
            this.cachingStatus.gistsWasCached = cached;
            if (cached) {
                this.toast.success(`Gists: ${this.baseUsername} (cached) `);
            }
            else {
                this.toast.info(`Gists: ${this.baseUsername} (caching...)`);
            }
        });
        const gistSub = this.gistService.gist$.subscribe(data => {
            if (data === null) {
                this.toast.info('Clear gist cache');
            }
            else {
                this.gistEvent(data);
            }
        }, error => {
            this.onErrorMessage(error);
        });
        this.userService.errorMessage$.subscribe(data => {
            this.onErrorMessage(data);
        });
    }
    gistEvent(data) {
        this.gist = data;
        this.cachingStatus.gistWasCached = data.cached;
        const size = new _bytes_pipe__WEBPACK_IMPORTED_MODULE_5__["BytesPipe"]().transform(data.size);
        if (data.cached) {
            this.toast.success(`${data.filename} (${size}) (cached)`, '', {
                timeOut: 2000
            });
        }
        else {
            this.toast.info(`${data.filename} (${size}) (caching...)`, '', {
                timeOut: 2000
            });
        }
    }
    onErrorMessage(error) {
        const text = error.statusText || 'Internet Error';
        const message = `Error: (${error.status}) (${error.message}) ${text}`;
        console.error(`Error: ${message}`);
        this.toast.error(text, `Error: ${message} `);
    }
    ngOnDestroy() {
        this.userService.user$.unsubscribe();
        this.followersService.followersCached$.unsubscribe();
        this.followingsService.followingsCached$.unsubscribe();
        this.gistsService.gistsCached$.unsubscribe();
        this.gistService.gist$.unsubscribe();
    }
    clearGistCache(gist) {
        this.gistService.clearGistCache(gist);
        this.gistService.gist$.next(gist);
    }
    clearCache() {
        localStorage.clear();
        this.loadUser(this.baseUsername);
        this.cachingStatus = {
            userWasCached: false,
            followingsWasCached: false,
            followersWasCached: false,
            gistsWasCached: false,
            gistWasCached: false,
            useCached: false,
            users: []
        };
        this.toast.success('Cache cleared');
    }
    // notifyChangeBaseUsername
    onChangeBaseUsername(username) {
        this.loadUser(username);
        this.toast.info('onChangeBaseUsername: ' + username);
    }
    // notifyShowBaseUsername
    onShowBaseUsername(username) {
        this.showUser(username);
        this.toast.info('onShowBaseUsername: ' + username);
    }
    changeBaseUsername(username) {
        this.loadUser(username);
        this.toast.success('Change baseUsername: ' + this.baseUsername);
    }
    changeBaseUsernameToDefault() {
        this.loadUser(this.userService.getUserBasenameDefault());
        this.toast.success('Change baseUsername to default ' + this.baseUsername);
    }
    changeCaching(value) {
        this.userService.isCaching = value;
        this.gistsService.isCaching = value;
        this.gistService.isCaching = value;
        this.followingsService.isCaching = value;
        this.followersService.isCaching = value;
        this.toast.success('Caching ' + (value ? 'On' : 'Off'), 'App');
    }
};
AppComponent.ctorParameters = () => [
    { type: _github_user_service__WEBPACK_IMPORTED_MODULE_2__["GitHubUserService"] },
    { type: _github_gist_service__WEBPACK_IMPORTED_MODULE_9__["GitHubGistService"] },
    { type: _github_followers_service__WEBPACK_IMPORTED_MODULE_7__["GitHubFollowersService"] },
    { type: _github_followings_service__WEBPACK_IMPORTED_MODULE_8__["GitHubFollowingsService"] },
    { type: _github_gists_service__WEBPACK_IMPORTED_MODULE_6__["GitHubGistsService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AppComponent.prototype, "errorMessage$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AppComponent.prototype, "baseUsername", void 0);
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _github_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./github-user.service */ "./src/app/github-user.service.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/user-detail/user-detail.component.ts");
/* harmony import */ var _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-followers/user-followers.component */ "./src/app/user-followers/user-followers.component.ts");
/* harmony import */ var _user_followings_user_followings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-followings/user-followings.component */ "./src/app/user-followings/user-followings.component.ts");
/* harmony import */ var _user_gists_user_gists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-gists/user-gists.component */ "./src/app/user-gists/user-gists.component.ts");
/* harmony import */ var _bytes_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bytes.pipe */ "./src/app/bytes.pipe.ts");
/* harmony import */ var _gist_gist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gist/gist.component */ "./src/app/gist/gist.component.ts");
/* harmony import */ var _was_cached_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./was-cached.pipe */ "./src/app/was-cached.pipe.ts");
/* harmony import */ var _was_cached_highlight_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./was-cached-highlight.directive */ "./src/app/was-cached-highlight.directive.ts");
/* harmony import */ var _filter_followers_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./filter-followers.pipe */ "./src/app/filter-followers.pipe.ts");








// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';













let AppModule = class AppModule {
    // constructor(library: FaIconLibrary) {
    //  library.addIconPacks(fas);
    // }
    constructor(library) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faMinusCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCloudDownloadAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faExchangeAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUserCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCloud"]);
    }
};
AppModule.ctorParameters = () => [
    { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"] }
];
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"],
            _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_13__["UserFollowersComponent"],
            _user_followings_user_followings_component__WEBPACK_IMPORTED_MODULE_14__["UserFollowingsComponent"],
            _user_gists_user_gists_component__WEBPACK_IMPORTED_MODULE_15__["UserGistsComponent"],
            _bytes_pipe__WEBPACK_IMPORTED_MODULE_16__["BytesPipe"],
            _gist_gist_component__WEBPACK_IMPORTED_MODULE_17__["GistComponent"],
            _was_cached_pipe__WEBPACK_IMPORTED_MODULE_18__["WasCachedPipe"],
            _was_cached_highlight_directive__WEBPACK_IMPORTED_MODULE_19__["WasCachedHighlightDirective"],
            _filter_followers_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterFollowersPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]
        ],
        providers: [
            _github_user_service__WEBPACK_IMPORTED_MODULE_11__["GitHubUserService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bytes.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/bytes.pipe.ts ***!
  \*******************************/
/*! exports provided: BytesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesPipe", function() { return BytesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let BytesPipe = class BytesPipe {
    constructor() {
        this.units = [
            'bytes',
            'KB',
            'MB',
            'GB',
            'TB'
        ];
    }
    transform(bytes = 0, precision = 0) {
        if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return 'Not a number';
        }
        let unitIndex = 0;
        while (bytes >= 1024 && unitIndex + 1 < this.units.length) {
            bytes /= 1024;
            unitIndex++;
        }
        return bytes.toFixed(+precision) + ' ' + this.units[unitIndex];
    }
};
BytesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'bytes'
    })
], BytesPipe);



/***/ }),

/***/ "./src/app/filter-followers.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/filter-followers.pipe.ts ***!
  \******************************************/
/*! exports provided: FilterFollowersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFollowersPipe", function() { return FilterFollowersPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FilterFollowersPipe = class FilterFollowersPipe {
    transform(filters, filterString, propName) {
        if (filters.length === 0 || filterString === '') {
            return filters;
        }
        const resultArray = [];
        for (const item of filters) {
            if (item[propName].toLowerCase().startsWith(filterString.toLowerCase())) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
};
FilterFollowersPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterFollowers',
    })
], FilterFollowersPipe);



/***/ }),

/***/ "./src/app/gist.model.ts":
/*!*******************************!*\
  !*** ./src/app/gist.model.ts ***!
  \*******************************/
/*! exports provided: Gist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gist", function() { return Gist; });
class Gist {
    constructor(content = '', filename = '', size = 0, contentUrl = '', language = '', url = '', id = '', cached = false, wasCached = false) {
        this.content = content;
        this.filename = filename;
        this.size = size;
        this.contentUrl = contentUrl;
        this.language = language;
        this.url = url;
        this.id = id;
        this.cached = cached;
        this.wasCached = wasCached;
    }
}


/***/ }),

/***/ "./src/app/gist/gist.component.css":
/*!*****************************************!*\
  !*** ./src/app/gist/gist.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpc3QvZ2lzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/gist/gist.component.ts":
/*!****************************************!*\
  !*** ./src/app/gist/gist.component.ts ***!
  \****************************************/
/*! exports provided: GistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GistComponent", function() { return GistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _gist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gist.model */ "./src/app/gist.model.ts");
/* harmony import */ var _github_gist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github-gist.service */ "./src/app/github-gist.service.ts");




let GistComponent = class GistComponent {
    constructor(gistService) {
        this.gistService = gistService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
    }
    ngOnInit() {
        this.gist = _gist_model__WEBPACK_IMPORTED_MODULE_2__["Gist"].constructor();
        this.gistService.gist$.subscribe(data => {
            this.gist = data;
            // this.gistEvent(data);
        }, error => {
            this.errorMessage$.emit(error);
        });
    }
    // gistEvent(data): void {
    //  this.gist = data;
    // }
    ngOnDestroy() {
        this.gistService.gist$.unsubscribe();
    }
};
GistComponent.ctorParameters = () => [
    { type: _github_gist_service__WEBPACK_IMPORTED_MODULE_3__["GitHubGistService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GistComponent.prototype, "errorMessage$", void 0);
GistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gist/gist.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gist.component.css */ "./src/app/gist/gist.component.css")).default]
    })
], GistComponent);



/***/ }),

/***/ "./src/app/github-followers.service.ts":
/*!*********************************************!*\
  !*** ./src/app/github-followers.service.ts ***!
  \*********************************************/
/*! exports provided: GitHubFollowersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubFollowersService", function() { return GitHubFollowersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _github_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github-user.service */ "./src/app/github-user.service.ts");






/**
 * Note: We could eliminate a lot of the event emitters etc in the services and just use
 * a public variable, however, part of the point of this repo is experimenting with
 * observables and the like...
 */
let GitHubFollowersService = class GitHubFollowersService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.isCaching = true;
        this.followersCached$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.followers$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        // These are resolved async
        this.apiCalls = 0;
    }
    clearFollowersCache(username) {
        if (username != null) {
            localStorage.removeItem('followers_' + username);
            this.followersCached$.emit(status);
        }
    }
    isFollowersCached(username) {
        return (localStorage.getItem('followers_' + username) !== null);
    }
    getFollowers(username) {
        if (this.isCaching) {
            const cachedObj = localStorage.getItem('followers_' + username);
            if (cachedObj !== null) {
                const followers = JSON.parse(cachedObj);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(followers);
            }
        }
        return this.http.get(this.userService.getApiUrl() + username + '/followers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((followers) => {
            this.apiCalls++;
            if (this.isCaching) {
                localStorage.setItem('followers_' + username, JSON.stringify(followers));
            }
            return followers;
        }));
    }
};
GitHubFollowersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _github_user_service__WEBPACK_IMPORTED_MODULE_5__["GitHubUserService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubFollowersService.prototype, "errorMessage$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GitHubFollowersService.prototype, "isCaching", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubFollowersService.prototype, "followersCached$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubFollowersService.prototype, "followers$", void 0);
GitHubFollowersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GitHubFollowersService);



/***/ }),

/***/ "./src/app/github-followings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/github-followings.service.ts ***!
  \**********************************************/
/*! exports provided: GitHubFollowingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubFollowingsService", function() { return GitHubFollowingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _github_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github-user.service */ "./src/app/github-user.service.ts");






/**
 * Note: We could eliminate a lot of the event emitters etc in the services and just use
 * a public variable, however, part of the point of this repo is experimenting with
 * observables and the like...
 */
let GitHubFollowingsService = class GitHubFollowingsService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.isCaching = true;
        this.followingsCached$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.followings$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        // These are resolved async
        this.apiCalls = 0;
    }
    clearFollowingsCache(username) {
        if (username != null) {
            localStorage.removeItem('followings_' + username);
            this.followingsCached$.emit(status);
        }
    }
    isFollowingsCached(username) {
        return (localStorage.getItem('followings_' + username) !== null);
    }
    getFollowings(username) {
        if (this.isCaching) {
            const cachedObj = localStorage.getItem('followings_' + username);
            if (cachedObj !== null) {
                const followings = JSON.parse(cachedObj);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(followings);
            }
        }
        return this.http.get(this.userService.getApiUrl() + username + '/following').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((followings) => {
            this.apiCalls++;
            if (this.isCaching) {
                localStorage.setItem('followings_' + username, JSON.stringify(followings));
            }
            return followings;
        }));
    }
};
GitHubFollowingsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _github_user_service__WEBPACK_IMPORTED_MODULE_5__["GitHubUserService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubFollowingsService.prototype, "errorMessage$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GitHubFollowingsService.prototype, "isCaching", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubFollowingsService.prototype, "followingsCached$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubFollowingsService.prototype, "followings$", void 0);
GitHubFollowingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GitHubFollowingsService);



/***/ }),

/***/ "./src/app/github-gist.service.ts":
/*!****************************************!*\
  !*** ./src/app/github-gist.service.ts ***!
  \****************************************/
/*! exports provided: GitHubGistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubGistService", function() { return GitHubGistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _gist_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gist.model */ "./src/app/gist.model.ts");






/**
 * Note: We could eliminate a lot of the event emitters etc in the services and just use
 * a public variable, however, part of the point of this repo is experimenting with
 * observables and the like...
 */
let GitHubGistService = class GitHubGistService {
    // public gistObs$ = this.gist$.asObservable();
    constructor(http) {
        this.http = http;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        // @Output() gist$ = new EventEmitter(true);
        this.gist$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // These are resolved async
        this.isCaching = true;
        this.apiCalls = 0;
    }
    isGistCached(gist) {
        return (localStorage.getItem('gist_' + gist.id + gist.filename) !== null);
    }
    clearGistCache(gist) {
        localStorage.removeItem('gist_' + gist.id + gist.filename);
        if (typeof gist === 'object') {
            gist = _gist_model__WEBPACK_IMPORTED_MODULE_5__["Gist"].constructor(); // this.blankGist();
        }
        this.gist$.next(gist);
    }
    getGist(gist) {
        if (this.isCaching) {
            const content = localStorage.getItem('gist_' + gist.id + gist.filename);
            if (content !== null) {
                gist = Object.assign(Object.assign({}, gist), { content, cached: true, wasCached: true });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(gist);
            }
        }
        return this.http.get(gist.contentUrl, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((gist2) => {
            this.apiCalls++;
            if (this.isCaching && gist.size < (1024 * 32)) { /* store 32kb max if caching */
                localStorage.setItem('gist_' + gist.id + gist.filename, gist2);
            }
            gist = Object.assign(Object.assign({}, gist), { content: gist2, cached: true, wasCached: false });
            return gist;
        }));
    }
};
GitHubGistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubGistService.prototype, "errorMessage$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubGistService.prototype, "gist$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GitHubGistService.prototype, "isCaching", void 0);
GitHubGistService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GitHubGistService);



/***/ }),

/***/ "./src/app/github-gists.service.ts":
/*!*****************************************!*\
  !*** ./src/app/github-gists.service.ts ***!
  \*****************************************/
/*! exports provided: GitHubGistsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubGistsService", function() { return GitHubGistsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _github_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github-user.service */ "./src/app/github-user.service.ts");
var GitHubGistsService_1;






/**
 * Note: We could eliminate a lot of the event emitters etc in the services and just use
 * a public variable, however, part of the point of this repo is experimenting with
 * observables and the like...
 */
let GitHubGistsService = GitHubGistsService_1 = class GitHubGistsService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gistsCached$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gists$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        // These are resolved async
        this.apiCalls = 0;
        this.isCaching = true;
    }
    /**
     * Converts the raw gists data from the api into a simplified object type (called Gist)
     * @param rawGists
     * @param isCached
     */
    static processGistsToArray(rawGists, isCached) {
        // If not an array of data, abort early with an empty array
        if (!Array.isArray(rawGists))
            return [];
        // process raw gists api data into new array
        const processedGists = [];
        for (const gist of rawGists) {
            for (const key in gist.files) {
                if (gist.files.hasOwnProperty(key)) {
                    const file = gist.files[key];
                    if (file.hasOwnProperty('raw_url')) {
                        processedGists.push({
                            id: gist.id,
                            url: file.url,
                            contentUrl: file.raw_url,
                            filename: file.filename,
                            language: file.language,
                            size: file.size,
                            content: gist,
                            cached: isCached
                        });
                    }
                }
            }
        }
        return processedGists;
    }
    isGistsCached(username) {
        return (localStorage.getItem('gists_' + username) !== null);
    }
    clearGistsCache(username) {
        localStorage.removeItem('gists_' + username);
        this.gistsCached$.emit(false);
    }
    getGists(username) {
        if (this.isCaching) {
            const cachedObj = localStorage.getItem('gists_' + username);
            if (cachedObj !== null) {
                const gists = JSON.parse(cachedObj);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(gists);
            }
        }
        return this.http.get(this.userService.getApiUrl() + username + '/gists').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((results) => GitHubGistsService_1.processGistsToArray(results, false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((gists) => {
            this.apiCalls++;
            if (this.isCaching) {
                localStorage.setItem('gists_' + username, JSON.stringify(gists));
            }
            return gists;
        }));
    }
};
GitHubGistsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _github_user_service__WEBPACK_IMPORTED_MODULE_5__["GitHubUserService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubGistsService.prototype, "errorMessage$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubGistsService.prototype, "gistsCached$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GitHubGistsService.prototype, "gists$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GitHubGistsService.prototype, "isCaching", void 0);
GitHubGistsService = GitHubGistsService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GitHubGistsService);



/***/ }),

/***/ "./src/app/github-user.service.ts":
/*!****************************************!*\
  !*** ./src/app/github-user.service.ts ***!
  \****************************************/
/*! exports provided: GitHubUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubUserService", function() { return GitHubUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





/**
 * Note: As this is experimental, this service is both acting as a singleton in someways and also emitting data for capture by components.
 * Generally you'd only want to do one or the other, depending on the situation.
 */
let GitHubUserService = class GitHubUserService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.github.com/users/';
        // private apiUrl: string = 'https://localhost:3000/users/';
        // current data
        this.defaultBaseUsername = 'lasellers';
        this.baseUsername = 'lasellers';
        // These are resolved async
        this.apiCalls = 0;
        //
        this.isCaching = true;
        // Make all of these async so we don't have a checked error
        // Note also, since this is a service, we can't just hook these up as output
        // on the component but must subscribe to them.
        // @Output() userCached$ = new EventEmitter(true);
        this.user$ = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](true);
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](true);
    }
    getApiUrl() {
        return this.apiUrl;
    }
    getUserBasename() {
        return this.baseUsername;
    }
    getUserBasenameDefault() {
        return this.defaultBaseUsername;
    }
    clearUserCache(username) {
        // if (this.user.hasOwnProperty('login')) {
        //  localStorage.removeItem('user_' + this.user.login);
        //  this.emitCacheStatusUser(false, this.user.login);
        // }
        localStorage.removeItem('user_' + username);
        this.user$.emit({ login: username, wasCached: false });
    }
    isUserCached(username) {
        return (localStorage.getItem('user_' + username) !== null);
    }
    getUser(username) {
        if (this.isCaching) {
            const cachedUserObj = localStorage.getItem('user_' + username);
            if (cachedUserObj !== null) {
                const user = JSON.parse(cachedUserObj);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object.assign(Object.assign({}, user), { wasCached: true }));
            }
        }
        return this.http.get(this.apiUrl + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(0), 
        // map((res: HttpResponse<any>) => res),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            this.apiCalls++;
            if (this.isCaching) {
                localStorage.setItem('user_' + username, JSON.stringify(user));
            }
            return Object.assign(Object.assign({}, user), { wasCached: false });
        }));
    }
};
GitHubUserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], GitHubUserService.prototype, "isCaching", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], GitHubUserService.prototype, "user$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], GitHubUserService.prototype, "errorMessage$", void 0);
GitHubUserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], GitHubUserService);



/***/ }),

/***/ "./src/app/user-detail/user-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-group {\n  margin: 0;\n  padding: 0;\n  clear: both;\n}\n\n.user-group label, .user-label {\n  margin: 0;\n  font-weight: bold;\n  text-align: right;\n  padding: 0;\n  width: 100%;\n}\n\n.user-group div, .user-line {\n  margin: 0;\n  text-align: left;\n  padding: 0px 0px 0px 1em;\n  width: 100%;\n}\n\n.card {\n  height: auto;\n  max-height: 0;\n  overflow-y: hidden;\n  transition: max-height 3s ease-out;\n}\n\n.card-open {\n  display: block;\n  border: 1px solid black;\n  max-height: 1080px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWdyb3VwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnVzZXItZ3JvdXAgbGFiZWwsIC51c2VyLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlci1ncm91cCBkaXYsIC51c2VyLWxpbmUge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgM3MgZWFzZS1vdXQ7XG59XG5cbi5jYXJkLW9wZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1heC1oZWlnaHQ6IDEwODBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user-detail/user-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/user-detail/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _github_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github-user.service */ "./src/app/github-user.service.ts");



let UserDetailComponent = class UserDetailComponent {
    constructor(userService) {
        this.userService = userService;
        this.notifyChangeBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.user = {};
    }
    ngOnInit() {
        this.userService.user$.subscribe(user => {
            this.user = user;
        });
        this.userService.getUser(this.baseUsername).subscribe((user) => {
            this.userService.user$.emit(user);
        }, error => {
            this.userService.errorMessage$.emit(error);
        });
        setTimeout(() => {
            document.querySelector('.card').classList.add('card-open');
        }, 0);
    }
    isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    changeBaseUsername(username) {
        this.notifyChangeBaseUsername.emit(username);
    }
};
UserDetailComponent.ctorParameters = () => [
    { type: _github_user_service__WEBPACK_IMPORTED_MODULE_2__["GitHubUserService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserDetailComponent.prototype, "baseUsername", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserDetailComponent.prototype, "notifyChangeBaseUsername", void 0);
UserDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'user-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-detail.component.css */ "./src/app/user-detail/user-detail.component.css")).default]
    })
], UserDetailComponent);



/***/ }),

/***/ "./src/app/user-followers/user-followers.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-followers/user-followers.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZm9sbG93ZXJzL3VzZXItZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user-followers/user-followers.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-followers/user-followers.component.ts ***!
  \************************************************************/
/*! exports provided: UserFollowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFollowersComponent", function() { return UserFollowersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _github_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github-user.service */ "./src/app/github-user.service.ts");
/* harmony import */ var _github_followers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github-followers.service */ "./src/app/github-followers.service.ts");




let UserFollowersComponent = class UserFollowersComponent {
    constructor(userService, followersService) {
        this.userService = userService;
        this.followersService = followersService;
        this.filterString = '';
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.notifyChangeBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notifyShowBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cachedUsers = [];
        this.followers = [];
    }
    ngOnInit() {
        this.userService.user$.subscribe(user => {
            this.cachedUsers[user.login] = user.wasCached;
        });
        //
        this.followersService.followers$.subscribe(followers => {
            this.followers = followers;
            for (const user of this.followers) {
                if (this.isUserWasCached(user.login)) {
                    this.cachedUsers[user.login] = true;
                }
            }
        });
        this.followersService.getFollowers(this.baseUsername).subscribe(followers => {
            this.followersService.followersCached$.emit(false);
            this.followersService.followers$.emit(followers);
        }, error => {
            this.errorMessage$.emit(error);
        });
    }
    ngOnDestroy() {
        this.userService.user$.unsubscribe();
    }
    isUserWasCached(username) {
        return (this.cachedUsers.includes(username));
    }
    changeBaseUsername(username) {
        this.notifyChangeBaseUsername.emit(username);
    }
    showBaseUsername(username) {
        this.notifyShowBaseUsername.emit(username);
    }
};
UserFollowersComponent.ctorParameters = () => [
    { type: _github_user_service__WEBPACK_IMPORTED_MODULE_2__["GitHubUserService"] },
    { type: _github_followers_service__WEBPACK_IMPORTED_MODULE_3__["GitHubFollowersService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserFollowersComponent.prototype, "baseUsername", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserFollowersComponent.prototype, "filterString", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserFollowersComponent.prototype, "errorMessage$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserFollowersComponent.prototype, "notifyChangeBaseUsername", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserFollowersComponent.prototype, "notifyShowBaseUsername", void 0);
UserFollowersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-followers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-followers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-followers/user-followers.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-followers.component.css */ "./src/app/user-followers/user-followers.component.css")).default]
    })
], UserFollowersComponent);



/***/ }),

/***/ "./src/app/user-followings/user-followings.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-followings/user-followings.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZm9sbG93aW5ncy91c2VyLWZvbGxvd2luZ3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user-followings/user-followings.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-followings/user-followings.component.ts ***!
  \**************************************************************/
/*! exports provided: UserFollowingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFollowingsComponent", function() { return UserFollowingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _github_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github-user.service */ "./src/app/github-user.service.ts");
/* harmony import */ var _github_followings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github-followings.service */ "./src/app/github-followings.service.ts");




let UserFollowingsComponent = class UserFollowingsComponent {
    constructor(userService, followingsService) {
        this.userService = userService;
        this.followingsService = followingsService;
        this.filterString = '';
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.notifyChangeBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notifyShowBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cachedUsers = [];
        this.followings = [];
    }
    ngOnInit() {
        this.userService.user$.subscribe(user => {
            this.cachedUsers[user.login] = user.wasCached;
        });
        //
        this.followingsService.followings$.subscribe(followings => {
            this.followings = followings;
            for (const user of this.followings) {
                if (this.isUserWasCached(user.login)) {
                    this.cachedUsers[user.login] = true;
                }
            }
        });
        this.followingsService.getFollowings(this.baseUsername).subscribe(followings => {
            this.followingsService.followingsCached$.emit(false);
            this.followingsService.followings$.emit(followings);
        }, error => {
            this.errorMessage$.emit(error);
        });
    }
    ngOnDestroy() {
        this.userService.user$.unsubscribe();
    }
    isUserWasCached(username) {
        return (this.cachedUsers.includes(username));
    }
    changeBaseUsername(username) {
        this.notifyChangeBaseUsername.emit(username);
    }
    showBaseUsername(username) {
        this.notifyShowBaseUsername.emit(username);
    }
};
UserFollowingsComponent.ctorParameters = () => [
    { type: _github_user_service__WEBPACK_IMPORTED_MODULE_2__["GitHubUserService"] },
    { type: _github_followings_service__WEBPACK_IMPORTED_MODULE_3__["GitHubFollowingsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserFollowingsComponent.prototype, "baseUsername", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserFollowingsComponent.prototype, "filterString", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserFollowingsComponent.prototype, "errorMessage$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserFollowingsComponent.prototype, "notifyChangeBaseUsername", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserFollowingsComponent.prototype, "notifyShowBaseUsername", void 0);
UserFollowingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-followings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-followings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-followings/user-followings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-followings.component.css */ "./src/app/user-followings/user-followings.component.css")).default]
    })
], UserFollowingsComponent);



/***/ }),

/***/ "./src/app/user-gists/user-gists.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-gists/user-gists.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZ2lzdHMvdXNlci1naXN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-gists/user-gists.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-gists/user-gists.component.ts ***!
  \****************************************************/
/*! exports provided: UserGistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGistsComponent", function() { return UserGistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _github_gists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github-gists.service */ "./src/app/github-gists.service.ts");
/* harmony import */ var _github_gist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github-gist.service */ "./src/app/github-gist.service.ts");




let UserGistsComponent = class UserGistsComponent {
    constructor(gistsService, gistService) {
        this.gistsService = gistsService;
        this.gistService = gistService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gistsCached$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gists$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gists = [];
    }
    ngOnInit() {
        this.gistsService.gists$.subscribe(gists => {
            this.gists = gists;
        });
        this.gistsService.getGists(this.baseUsername).subscribe(gists => {
            this.gistsCached$.emit(false);
            this.gists$.emit(gists);
        }, error => {
            this.errorMessage$.emit(error);
        });
    }
    getGist(gist) {
        this.gistService.getGist(gist).subscribe(gistResponse => {
            this.gistService.gist$.next(gistResponse);
        }, error => {
            this.errorMessage$.emit(error);
        });
    }
    ngOnDestroy() {
        this.gistsService.gists$.unsubscribe();
    }
};
UserGistsComponent.ctorParameters = () => [
    { type: _github_gists_service__WEBPACK_IMPORTED_MODULE_2__["GitHubGistsService"] },
    { type: _github_gist_service__WEBPACK_IMPORTED_MODULE_3__["GitHubGistService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserGistsComponent.prototype, "baseUsername", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserGistsComponent.prototype, "errorMessage$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserGistsComponent.prototype, "gistsCached$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserGistsComponent.prototype, "gists$", void 0);
UserGistsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-gists',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-gists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-gists/user-gists.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-gists.component.css */ "./src/app/user-gists/user-gists.component.css")).default]
    })
], UserGistsComponent);



/***/ }),

/***/ "./src/app/was-cached-highlight.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/was-cached-highlight.directive.ts ***!
  \***************************************************/
/*! exports provided: WasCachedHighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasCachedHighlightDirective", function() { return WasCachedHighlightDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WasCachedHighlightDirective = class WasCachedHighlightDirective {
    constructor(elementRef) {
        this.wasCached = false; // [wasCached]="'false'"
        this.classString = 'text-info'; // [classString]="'text-warning'"
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.changeHighlight();
    }
    ngOnChanges(changes) {
        if (changes.input) {
            this.changeHighlight();
        }
    }
    changeHighlight() {
        if (this.wasCached) {
            this.elementRef.nativeElement.style.backgroundColor = 'yellow';
            this.elementRef.nativeElement.classList.add('text-info');
        }
        else {
            this.elementRef.nativeElement.style.backgroundColor = 'white';
            this.elementRef.nativeElement.classList.remove('text-info');
        }
    }
};
WasCachedHighlightDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WasCachedHighlightDirective.prototype, "wasCached", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WasCachedHighlightDirective.prototype, "classString", void 0);
WasCachedHighlightDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appWasCachedHighlight]'
    })
], WasCachedHighlightDirective);



/***/ }),

/***/ "./src/app/was-cached.pipe.ts":
/*!************************************!*\
  !*** ./src/app/was-cached.pipe.ts ***!
  \************************************/
/*! exports provided: WasCachedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasCachedPipe", function() { return WasCachedPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WasCachedPipe = class WasCachedPipe {
    transform(value) {
        return value ? 'Was previously Cached' : 'Was NOT previously Cached';
        // return value ? '<span class="text-info">Was Cached<span>' : '<span class="text-warning">Was NOT Cached</span>';
    }
};
WasCachedPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'wasCached'
    })
], WasCachedPipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lasellers/dev/GitHubUsers/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map