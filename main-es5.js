function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      https://github.com/\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"\n             #usernameInput name=\"baseUsername\" [(ngModel)]=\"baseUsername\"\n             value=\"{{baseUsername}}\">\n      <button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\"\n              (click)=\"changeBaseUsername(usernameInput.value)\"\n              placement=\"bottom\"\n              ngbTooltip=\"Change base user\">User\n      </button>\n    </form>\n\n    <div class=\"col-sm align-bottom\">\n      <button class=\"btn btn-outline-primary btn-sm my-2 my-sm-0\"\n              (click)=\"changeBaseUsernameToDefault()\"\n              placement=\"bottom\"\n              ngbTooltip=\"Change to Default User\">Default User\n      </button>\n    </div>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n\n  <p class=\"lead\">Learning Angular 9 using the GitHub API (v {{version}})</p>\n\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      Local Storage Caching <input type=\"checkbox\"\n                                   [(ngModel)]=\"userService.isCaching\"\n                                   (change)=\"changeCaching(userService.isCaching)\">\n    </div>\n    <div class=\"col-sm-3\">\n      <button class=\"btn btn-outline-primary btn-sm my-2 my-sm-0\" (click)=\"clearCache()\">Clear local storage cache\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      Uncached Api Calls\n    </div>\n    <div class=\"col-sm-1\">\n      User: {{userService.apiCalls}}\n    </div>\n    <div class=\"col-sm-2\">\n      Followings: {{followingsService.apiCalls}}\n    </div>\n    <div class=\"col-sm-2\">\n      Followers: {{followersService.apiCalls}}\n    </div>\n    <div class=\"col-sm-1\">\n      Gists: {{gistsService.apiCalls}}\n    </div>\n    <div class=\"col-sm-1\">\n      Gist: {{gistService.apiCalls}}\n    </div>\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4\">\n    </div>\n\n    <div class=\"col-sm-8\">\n      <form class=\"form-inline\" role=\"form\">\n\n        <div class=\"form-group-row\">\n          <label for=\"filterString\" class=\"sr-only\">Filter</label>\n          <input type=\"text\" id=\"filterString\" name=\"filterString\" placeholder=\"Filter string...\"\n                 class=\"form-control mb-2 mr-sm-2\" [(ngModel)]=\"filterString\">\n        </div>\n\n      </form>\n\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4\">\n      <div appWasCachedHighlight\n           [wasCached]=\"cachingStatus.userWasCached\"\n           [classString]=\"'text-danger'\">\n        <!--[ngClass]=\"{'text-info': cachingStatus.userWasCached, 'text-warning': !cachingStatus.userWasCached}\"-->\n        User {{ cachingStatus.userWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"userService.isUserCached(baseUsername)\"\n                 placement=\"left\"\n                 ngbTooltip=\"User is cached\"></fa-icon>\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"cachingStatus.userWasCached\"\n                 placement=\"left\"\n                 ngbTooltip=\"Gist was cached\"></fa-icon>\n        <fa-icon [icon]=\"['fas','minus-circle']\"\n                 (click)=\"userService.clearUserCache(baseUsername)\" placement=\"left\"\n                 ngbTooltip=\"Clear user cache\"></fa-icon>\n      </div>\n      <user-detail [baseUsername]=\"baseUsername\"\n                   (notifyChangeBaseUsername)='onChangeBaseUsername($event)'></user-detail>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <div appWasCachedHighlight\n           [wasCached]=\"cachingStatus.followersWasCached\">\n        Followers {{ cachingStatus.followersWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"followersService.isFollowersCached(baseUsername)\"\n                 placement=\"left\"\n                 ngbTooltip=\"Followers is cached {{gist.id}}\"></fa-icon>\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"cachingStatus.followersWasCached\"\n                 placement=\"left\"\n                 ngbTooltip=\"Followers was cached {{gist.id}}\"></fa-icon>\n        <fa-icon [icon]=\"['fas','minus-circle']\"\n                 (click)=\"followersService.clearFollowersCache(baseUsername)\" placement=\"left\"\n                 ngbTooltip=\"Clear followers cache\"></fa-icon>\n      </div>\n      <app-user-followers [baseUsername]=\"baseUsername\"\n                          [filterString]=\"filterString\"\n                          (notifyChangeBaseUsername)='onChangeBaseUsername($event)'\n                          (notifyShowBaseUsername)='onShowBaseUsername($event)'></app-user-followers>\n    </div>\n\n    <div class=\"col-sm-4\">\n      <div appWasCachedHighlight\n           [wasCached]=\"cachingStatus.followingsWasCached\">\n        Followings {{ cachingStatus.followingsWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"followingsService.isFollowingsCached(baseUsername)\"\n                 placement=\"left\"\n                 ngbTooltip=\"Followings is cached\"></fa-icon>\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"cachingStatus.followingsWasCached\"\n                 placement=\"left\"\n                 ngbTooltip=\"Followings was cached\"></fa-icon>\n        <fa-icon [icon]=\"['fas','minus-circle']\"\n                 (click)=\"followingsService.clearFollowingsCache(baseUsername)\" placement=\"left\"\n                 ngbTooltip=\"Clear followings cache\"></fa-icon>\n      </div>\n      <app-user-followings [baseUsername]=\"baseUsername\"\n                           [filterString]=\"filterString\"\n                           (notifyChangeBaseUsername)='onChangeBaseUsername($event)'\n                           (notifyShowBaseUsername)='onShowBaseUsername($event)'></app-user-followings>\n    </div>\n\n  </div>\n  <!-- /row -->\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n\n      <div appWasCachedHighlight [wasCached]=\"cachingStatus.gistsWasCached\">\n        Gists {{ cachingStatus.gistsWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"gistsService.isGistsCached(baseUsername)\"\n                 placement=\"left\"\n                 ngbTooltip=\"Gist is cached {{gist.id}}\"></fa-icon>\n        <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"cachingStatus.gistsWasCached\"\n                 placement=\"left\"\n                 ngbTooltip=\"Gist was cached {{gist.id}}\"></fa-icon>\n        <fa-icon [icon]=\"['fas','minus-circle']\"\n                 (click)=\"gistsService.clearGistsCache(baseUsername)\" placement=\"left\"\n                 ngbTooltip=\"Clear gists cache\"></fa-icon>\n      </div>\n      <app-user-gists [baseUsername]=\"baseUsername\"></app-user-gists>\n\n    </div>\n    <div class=\"col-sm-6\">\n\n      <div>\n        Gist {{ cachingStatus.gistWasCached | wasCached}}\n        <fa-icon [icon]=\"['fas','minus-circle']\" *ngIf=\"gistsService.isGistsCached(baseUsername)\"\n                 (click)=\"gistService.clearGistCache(gist)\" placement=\"left\"\n                 ngbTooltip=\"Clear gist cache\"></fa-icon>\n      </div>\n\n      <app-gist></app-gist>\n    </div>\n  </div>\n  <!-- /row -->\n\n</div>\n<!-- /fluid-container -->\n\n<footer class=\"footer\">\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-3\">\n        <a class=\"\" href=\"https://github.com/lasellers\">https://github.com/lasellers</a>\n      </div>\n      <div class=\"col-3\">\n        <a class=\"\" href=\"https://github.com/{{baseUsername}}\">https://github.com/{{baseUsername}}</a>\n      </div>\n      <div class=\"col-6\">\n      </div>\n\n    </div>\n\n    <div class=\"muted-text\">\n      See README.md\n    </div>\n\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gist/gist.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gist/gist.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGistGistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"gist.content !== undefined\">\n  <h2>Gist</h2>\n  <div class=\"content\"><pre>\n{{gist.content}}</pre>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserDetailUserDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card card-default\">\n  <img [src]=\"user.avatar_url\" class=\"card-img-top\" alt=\"{{user.name}}\" id=\"avatar_url\">\n\n  <div class=\"card-heading\">\n    <h3 class=\"card-title\" *ngIf=\"!isEmpty(user)\">\n      {{user.name}}\n      <fa-icon [icon]=\"['fas','user-cog']\" (click)=\"changeBaseUsername(user.login)\"\n               placement=\"left\" ngbTooltip=\"Make user base\"></fa-icon>\n    </h3>\n  </div>\n\n  <div class=\"card-body\">\n\n    <div *ngIf=\"isEmpty(user)\">\n      <p>Select one of the users {{userService.getUserBasename()}} is following to see their information.</p>\n    </div>\n\n    <div class=\"card-text\" *ngIf=\"!isEmpty(user)\">\n\n      <form class=\"form-horizontal\">\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"login\">Username</label>\n          <div class=\"col-sm-6 user-line\" id=\"login\">\n            {{user.login}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"name\">Name</label>\n          <div class=\"col-sm-6 user-line\" id=\"name\">\n            {{user.name}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"hireable\">Hireable</label>\n          <div class=\"col-sm-8 user-line\" id=\"hireable\">{{user.hireable == true ? \"Yes\" : \"No\"}}</div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"id\">Id</label>\n          <div class=\"col-sm-6 user-line\" id=\"id\">\n            {{user.id}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"company\">Company</label>\n          <div class=\"col-sm-6 user-line\" id=\"company\">\n            {{user.company}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"blog\">Blog</label>\n          <div class=\"col-sm-6 user-line\" id=\"blog\">\n            <a href=\"{{user.blog}}\">{{user.blog}}</a>\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"location\">Location</label>\n          <div class=\"col-sm-6 user-line\" id=\"location\">\n            {{user.location}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"email\">Email</label>\n          <div class=\"col-sm-6 user-line\" id=\"email\">\n            <a href=\"mailto:{{user.email}}\">{{user.email}}</a>\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-4 user-label\" for=\"bio\">Bio</label>\n          <div class=\"col-sm-6 user-line\" id=\"bio\">\n            {{user.bio}}\n          </div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-3 user-label\" for=\"public_repos\">Repos</label>\n          <div class=\"col-sm-3 user-line\" id=\"public_repos\">{{user.public_repos}}</div>\n          <label class=\"col-sm-3 user-label\" for=\"public_gists\">Gists</label>\n          <div class=\"col-sm-3 user-line\" id=\"public_gists\">{{user.public_gists}}</div>\n        </div>\n\n        <div class=\"row user-group\">\n          <label class=\"col-sm-3 user-label\" for=\"followers\">Followers</label>\n          <div class=\"col-sm-3 user-line\" id=\"followers\">{{user.followers}}</div>\n\n          <label class=\"col-sm-3 user-label\" for=\"following2\">Following</label>\n          <div class=\"col-sm-3 user-line\" id=\"following2\">{{user.following}}</div>\n        </div>\n\n      </form>\n      <!-- / form-horizontal -->\n\n    </div>\n    <!-- ngIf=\"user -->\n    <div class=\"card-footer\">\n\n      <div class=\"row user-group\">\n        <label class=\"col-sm-4 user-label\" for=\"created_at\">Created</label>\n        <div class=\"col-sm-8 user-line\" id=\"created_at\">{{user.created_at | date:'short' }}</div>\n      </div>\n      <div class=\"row user-group\">\n        <label class=\"col-sm-4 user-label\" for=\"updated_at\">Last updated</label>\n        <div class=\"col-sm-8 user-line\" id=\"updated_at\">{{user.updated_at | date:'short'}}</div>\n      </div>\n\n    </div>\n    <!-- / card-footer -->\n\n  </div>\n  <!-- / card-body -->\n</div>\n<!-- / card card-default -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-followers/user-followers.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-followers/user-followers.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFollowersUserFollowersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Followers</h3>\n<table class=\"table table-striped\">\n  <tbody>\n  <tr class=\"row\" *ngFor=\"let follower of followers | filterFollowers:filterString:'login'\">\n    <td class=\"col\">\n      <span (click)=\"showBaseUsername(follower.login)\">{{follower.login}}</span>\n      <fa-icon [icon]=\"['fas','cloud']\" [hidden]=\"!userService.isUserCached(follower.login)\"\n               placement=\"left\"\n               ngbTooltip=\"User {{follower.login}} is cached localStorage\"></fa-icon>\n      <fa-icon [icon]=\"['fas','cloud-download-alt']\" [hidden]=\"!isUserWasCached(follower.login)\"\n               placement=\"left\" ngbTooltip=\"User {{follower.login}} was cached as of last pull\"></fa-icon>\n    </td>\n    <td class=\"col\">\n      <button class=\"btn btn-primary btn-sm following\" (click)=\"changeBaseUsername(follower.login)\">User\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-followings/user-followings.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-followings/user-followings.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFollowingsUserFollowingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Followings</h3>\n<table class=\"table table-striped\">\n  <tbody>\n  <tr class=\"row\" *ngFor=\"let following of followings | filterFollowers:filterString:'login'\">\n    <td class=\"col\">\n      <span (click)=\"showBaseUsername(following.login)\">{{following.login}}</span>\n      <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"userService.isUserCached(following.login)\"\n               placement=\"left\"\n               ngbTooltip=\"User {{following.login}} is cached localStorage\"></fa-icon>\n      <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"isUserWasCached(following.login)\"\n               placement=\"left\" ngbTooltip=\"User {{following.login}} was cached as of last pull\"></fa-icon>\n    </td>\n    <td class=\"col\">\n      <button class=\"btn btn-primary btn-sm following\" (click)=\"changeBaseUsername(following.login)\">User\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-gists/user-gists.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-gists/user-gists.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserGistsUserGistsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-heading\">\n  <h3 class=\"card-title\" *ngIf=\"gists.length > 0\">\n    Gists\n  </h3>\n</div>\n<table class=\"table table-striped\" *ngIf=\"gists.length > 0\">\n  <thead>\n  <tr>\n    <th>Filename</th>\n    <th>Size</th>\n    <th>Language</th>\n    <th></th>\n    <th></th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let gist of gists\">\n    <td>\n      <button class=\"btn btn-primary\" (click)=\"getGist(gist)\">Get</button>\n    </td>\n    <td>{{gist.filename}}</td>\n    <td class=\"bytes\">\n      <pre>{{gist.size | bytes}}</pre>\n    </td>\n    <td>{{gist.language}}</td>\n    <td>\n      <fa-icon [icon]=\"['fas','cloud']\" *ngIf=\"gistService.isGistCached(gist)\"\n               placement=\"left\"\n               ngbTooltip=\"Gist is cached {{gist.id}}\"></fa-icon>\n      <fa-icon [icon]=\"['fas','cloud-download-alt']\" *ngIf=\"gist.wasCached\"\n               placement=\"left\"\n               ngbTooltip=\"Gist was cached {{gist.id}}\"></fa-icon>\n      <fa-icon [icon]=\"['fas','minus-circle']\" *ngIf=\"gist.cached\"\n               (click)=\"gistService.clearGistCache(gist)\" placement=\"left\"\n               ngbTooltip=\"Clear gist cache {{gist.id}}\"></fa-icon>\n    </td>\n  </tr>\n  </tbody>\n</table>\n";
    /***/
  },

  /***/
  "./package.json":
  /*!**********************!*\
    !*** ./package.json ***!
    \**********************/

  /*! exports provided: name, fullName, version, license, scripts, private, dependencies, devDependencies, default */

  /***/
  function packageJson(module) {
    module.exports = JSON.parse("{\"name\":\"githubusers\",\"fullName\":\"Github Users\",\"version\":\"3.0.4\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build --prod\",\"test\":\"ng test --watch=false --reporters=spec\",\"test-ci\":\"ng test --code-coverage --watch=false --browsers=ChromeHeadless --reporters=spec,kjhtml,coverage-istanbul,junit,htmlDetailed\",\"coverage\":\"ng test --code-coverage --progress --watch=false --reporters=spec,kjhtml,coverage-istanbul,junit,htmlDetailed\",\"test-dev\":\"ng test --code-coverage --progress --watch=true --browsers=Chrome\",\"test-sr\":\"npm run test --singleRun=true\",\"eslint\":\"eslint .\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"test2\":\"mocha --recursive ./test/*.js\",\"test3\":\"nyc ng test --code-coverage --progress\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~9.1.9\",\"@angular/common\":\"~9.1.9\",\"@angular/compiler\":\"~9.1.9\",\"@angular/core\":\"~9.1.9\",\"@angular/forms\":\"~9.1.9\",\"@angular/localize\":\"~9.1.9\",\"@angular/platform-browser\":\"~9.1.9\",\"@angular/platform-browser-dynamic\":\"~9.1.9\",\"@angular/router\":\"~9.1.9\",\"@fortawesome/angular-fontawesome\":\"^0.6.1\",\"@fortawesome/fontawesome-svg-core\":\"^1.2.28\",\"@fortawesome/free-regular-svg-icons\":\"^5.13.0\",\"@fortawesome/free-solid-svg-icons\":\"^5.13.0\",\"@ng-bootstrap/ng-bootstrap\":\"^6.1.0\",\"bootstrap\":\"^4.4.0\",\"core-js\":\"^3.6.5\",\"ngx-toastr\":\"^12.0.1\",\"rxjs\":\"~6.5.4\",\"tslib\":\"^1.10.0\",\"webpack\":\"^4.43.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.901.7\",\"@angular/cli\":\"^9.1.7\",\"@angular/compiler-cli\":\"~9.1.9\",\"@types/chai\":\"^4.2.11\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.11.1\",\"@typescript-eslint/eslint-plugin\":\"^3.3.0\",\"@typescript-eslint/parser\":\"^3.3.0\",\"chai\":\"^4.2.0\",\"chai-datetime\":\"^1.6.0\",\"chai-http\":\"^4.3.0\",\"codelyzer\":\"^5.1.2\",\"eslint\":\"^7.3.0\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"^2.1.1\",\"karma-html-detailed-reporter\":\"^2.1.0\",\"karma-jasmine\":\"~3.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.2\",\"karma-junit-reporter\":\"^2.0.1\",\"karma-spec-reporter\":\"0.0.32\",\"karma-summary-reporter\":\"^1.8.0\",\"karma-typescript\":\"^5.0.3\",\"mocha\":\"^8.0.1\",\"mocha-sinon\":\"^2.1.2\",\"nyc\":\"^15.1.0\",\"protractor\":\"^7.0.0\",\"puppeteer\":\"^4.0.0\",\"sinon\":\"^9.0.2\",\"sinon-chai\":\"^3.5.0\",\"supertest\":\"^4.0.2\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~3.8.3\"}}");
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html,\nbody {\n  background: #222;\n  color: white;\n}\n\n.click {\n  text-decoration: underline;\n  color: black;\n}\n\n.click:hover {\n  color: goldenrod;\n}\n\n.username {\n  padding: .5em;\n}\n\n.following {\n  padding: .5em;\n}\n\n.user {\n  background: white;\n}\n\n.user-follows-back {\n  background: yellow;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2xpY2sge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2xpY2s6aG92ZXIge1xuICBjb2xvcjogZ29sZGVucm9kO1xufVxuXG4udXNlcm5hbWUge1xuICBwYWRkaW5nOiAuNWVtO1xufVxuXG4uZm9sbG93aW5nIHtcbiAgcGFkZGluZzogLjVlbTtcbn1cblxuLnVzZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnVzZXItZm9sbG93cy1iYWNrIHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _github_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./github-user.service */
    "./src/app/github-user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../package.json */
    "./package.json");

    var _package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../package.json */
    "./package.json", 1);
    /* harmony import */


    var _bytes_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bytes.pipe */
    "./src/app/bytes.pipe.ts");
    /* harmony import */


    var _github_gists_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./github-gists.service */
    "./src/app/github-gists.service.ts");
    /* harmony import */


    var _github_followers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./github-followers.service */
    "./src/app/github-followers.service.ts");
    /* harmony import */


    var _github_followings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./github-followings.service */
    "./src/app/github-followings.service.ts");
    /* harmony import */


    var _github_gist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./github-gist.service */
    "./src/app/github-gist.service.ts"); // @ts-ignore


    console.clear();

    var AppComponent = /*#__PURE__*/function () {
      /**
       *
       */
      function AppComponent(userService, gistService, followersService, followingsService, gistsService, toast) {
        _classCallCheck(this, AppComponent);

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

      _createClass(AppComponent, [{
        key: "loadUser",
        value: function loadUser(username) {
          var _this = this;

          this.baseUsername = username;
          this.userService.getUser(username).subscribe(function (user) {
            _this.userService.user$.emit(user);
          }, function (error) {
            _this.userService.errorMessage$.emit(error);
          });
          this.followersService.getFollowers(username).subscribe(function (followers) {
            _this.followersService.followersCached$.emit(false);

            _this.followersService.followers$.emit(followers);
          }, function (error) {
            _this.errorMessage$.emit(error);
          });
          this.followingsService.getFollowings(username).subscribe(function (followings) {
            _this.followingsService.followingsCached$.emit(false);

            _this.followingsService.followings$.emit(followings);
          }, function (error) {
            _this.errorMessage$.emit(error);
          });
          this.gistsService.getGists(username).subscribe(function (gists) {
            _this.gistsService.gistsCached$.emit(false);

            _this.gistsService.gists$.emit(gists);
          }, function (error) {
            _this.errorMessage$.emit(error);
          });
          this.gistService.gist$.next({
            content: '',
            cached: true,
            wasCached: false
          });
        }
      }, {
        key: "showUser",
        value: function showUser(username) {
          var _this2 = this;

          this.userService.getUser(username).subscribe(function (user) {
            _this2.userService.user$.emit(user);
          }, function (error) {
            _this2.userService.errorMessage$.emit(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.toast.warning(this.version, this.title, {
            timeOut: 12000
          });
          /*Notification.requestPermission().then(permission => {
            if(Notification.permission == 'granted') {
              let notify = new Notification(this.title + ' ' + this.version);
            }
          });*/

          this.loadUser(this.baseUsername);
          this.userService.user$.subscribe(function (user) {
            // const [cached, username] = cachedUsername;
            var cached = user.wasCached;
            var username = user.login;
            _this3.cachingStatus.userWasCached = cached;
            _this3.cachingStatus.users[username] = cached;

            if (cached) {
              _this3.toast.success("User: ".concat(username, " (cached)"));
            } else {
              _this3.toast.info("User: ".concat(username, " (caching...)"));
            }
          });
          this.followersService.followersCached$.subscribe(function (cached) {
            _this3.cachingStatus.followersWasCached = cached;

            if (cached) {
              _this3.toast.success("Followers: ".concat(_this3.baseUsername, " (cached) "));
            } else {
              _this3.toast.info("Followers: ".concat(_this3.baseUsername, " (caching...)"));
            }
          });
          this.followingsService.followingsCached$.subscribe(function (cached) {
            _this3.cachingStatus.followingsWasCached = cached;

            if (cached) {
              _this3.toast.success("Followings: ".concat(_this3.baseUsername, " (cached) "));
            } else {
              _this3.toast.info("Followings: ".concat(_this3.baseUsername, " (caching...)"));
            }
          });
          this.gistsService.gistsCached$.subscribe(function (cached) {
            _this3.cachingStatus.gistsWasCached = cached;

            if (cached) {
              _this3.toast.success("Gists: ".concat(_this3.baseUsername, " (cached) "));
            } else {
              _this3.toast.info("Gists: ".concat(_this3.baseUsername, " (caching...)"));
            }
          });
          var gistSub = this.gistService.gist$.subscribe(function (data) {
            if (data === null) {
              _this3.toast.info('Clear gist cache');
            } else {
              _this3.gistEvent(data);
            }
          }, function (error) {
            _this3.onErrorMessage(error);
          });
          this.userService.errorMessage$.subscribe(function (data) {
            _this3.onErrorMessage(data);
          });
        }
      }, {
        key: "gistEvent",
        value: function gistEvent(data) {
          this.gist = data;
          this.cachingStatus.gistWasCached = data.cached;
          var size = new _bytes_pipe__WEBPACK_IMPORTED_MODULE_5__["BytesPipe"]().transform(data.size);

          if (data.cached) {
            this.toast.success("".concat(data.filename, " (").concat(size, ") (cached)"), '', {
              timeOut: 2000
            });
          } else {
            this.toast.info("".concat(data.filename, " (").concat(size, ") (caching...)"), '', {
              timeOut: 2000
            });
          }
        }
      }, {
        key: "onErrorMessage",
        value: function onErrorMessage(error) {
          var text = error.statusText || 'Internet Error';
          var message = "Error: (".concat(error.status, ") (").concat(error.message, ") ").concat(text);
          console.error("Error: ".concat(message));
          this.toast.error(text, "Error: ".concat(message, " "));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userService.user$.unsubscribe();
          this.followersService.followersCached$.unsubscribe();
          this.followingsService.followingsCached$.unsubscribe();
          this.gistsService.gistsCached$.unsubscribe();
          this.gistService.gist$.unsubscribe();
        }
      }, {
        key: "clearGistCache",
        value: function clearGistCache(gist) {
          this.gistService.clearGistCache(gist);
          this.gistService.gist$.next(gist);
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
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
        } // notifyChangeBaseUsername

      }, {
        key: "onChangeBaseUsername",
        value: function onChangeBaseUsername(username) {
          this.loadUser(username);
          this.toast.info('onChangeBaseUsername: ' + username);
        } // notifyShowBaseUsername

      }, {
        key: "onShowBaseUsername",
        value: function onShowBaseUsername(username) {
          this.showUser(username);
          this.toast.info('onShowBaseUsername: ' + username);
        }
      }, {
        key: "changeBaseUsername",
        value: function changeBaseUsername(username) {
          this.loadUser(username);
          this.toast.success('Change baseUsername: ' + this.baseUsername);
        }
      }, {
        key: "changeBaseUsernameToDefault",
        value: function changeBaseUsernameToDefault() {
          this.loadUser(this.userService.getUserBasenameDefault());
          this.toast.success('Change baseUsername to default ' + this.baseUsername);
        }
      }, {
        key: "changeCaching",
        value: function changeCaching(value) {
          this.userService.isCaching = value;
          this.gistsService.isCaching = value;
          this.gistService.isCaching = value;
          this.followingsService.isCaching = value;
          this.followersService.isCaching = value;
          this.toast.success('Caching ' + (value ? 'On' : 'Off'), 'App');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _github_user_service__WEBPACK_IMPORTED_MODULE_2__["GitHubUserService"]
      }, {
        type: _github_gist_service__WEBPACK_IMPORTED_MODULE_9__["GitHubGistService"]
      }, {
        type: _github_followers_service__WEBPACK_IMPORTED_MODULE_7__["GitHubFollowersService"]
      }, {
        type: _github_followings_service__WEBPACK_IMPORTED_MODULE_8__["GitHubFollowingsService"]
      }, {
        type: _github_gists_service__WEBPACK_IMPORTED_MODULE_6__["GitHubGistsService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppComponent.prototype, "errorMessage$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppComponent.prototype, "baseUsername", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _github_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./github-user.service */
    "./src/app/github-user.service.ts");
    /* harmony import */


    var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user-detail/user-detail.component */
    "./src/app/user-detail/user-detail.component.ts");
    /* harmony import */


    var _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-followers/user-followers.component */
    "./src/app/user-followers/user-followers.component.ts");
    /* harmony import */


    var _user_followings_user_followings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./user-followings/user-followings.component */
    "./src/app/user-followings/user-followings.component.ts");
    /* harmony import */


    var _user_gists_user_gists_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user-gists/user-gists.component */
    "./src/app/user-gists/user-gists.component.ts");
    /* harmony import */


    var _bytes_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./bytes.pipe */
    "./src/app/bytes.pipe.ts");
    /* harmony import */


    var _gist_gist_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./gist/gist.component */
    "./src/app/gist/gist.component.ts");
    /* harmony import */


    var _was_cached_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./was-cached.pipe */
    "./src/app/was-cached.pipe.ts");
    /* harmony import */


    var _was_cached_highlight_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./was-cached-highlight.directive */
    "./src/app/was-cached-highlight.directive.ts");
    /* harmony import */


    var _filter_followers_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./filter-followers.pipe */
    "./src/app/filter-followers.pipe.ts"); // import { fas } from '@fortawesome/free-solid-svg-icons';
    // import { far } from '@fortawesome/free-regular-svg-icons';


    var AppModule = // constructor(library: FaIconLibrary) {
    //  library.addIconPacks(fas);
    // }
    function AppModule(library) {
      _classCallCheck(this, AppModule);

      // Add an icon to the library for convenient access in other components
      library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faMinusCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCloudDownloadAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faExchangeAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faUserCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faCloud"]);
    };

    AppModule.ctorParameters = function () {
      return [{
        type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconLibrary"]
      }];
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"], _user_followers_user_followers_component__WEBPACK_IMPORTED_MODULE_13__["UserFollowersComponent"], _user_followings_user_followings_component__WEBPACK_IMPORTED_MODULE_14__["UserFollowingsComponent"], _user_gists_user_gists_component__WEBPACK_IMPORTED_MODULE_15__["UserGistsComponent"], _bytes_pipe__WEBPACK_IMPORTED_MODULE_16__["BytesPipe"], _gist_gist_component__WEBPACK_IMPORTED_MODULE_17__["GistComponent"], _was_cached_pipe__WEBPACK_IMPORTED_MODULE_18__["WasCachedPipe"], _was_cached_highlight_directive__WEBPACK_IMPORTED_MODULE_19__["WasCachedHighlightDirective"], _filter_followers_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterFollowersPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]],
      providers: [_github_user_service__WEBPACK_IMPORTED_MODULE_11__["GitHubUserService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/bytes.pipe.ts":
  /*!*******************************!*\
    !*** ./src/app/bytes.pipe.ts ***!
    \*******************************/

  /*! exports provided: BytesPipe */

  /***/
  function srcAppBytesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BytesPipe", function () {
      return BytesPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BytesPipe = /*#__PURE__*/function () {
      function BytesPipe() {
        _classCallCheck(this, BytesPipe);

        this.units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
      }

      _createClass(BytesPipe, [{
        key: "transform",
        value: function transform() {
          var bytes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) {
            return 'Not a number';
          }

          var unitIndex = 0;

          while (bytes >= 1024 && unitIndex + 1 < this.units.length) {
            bytes /= 1024;
            unitIndex++;
          }

          return bytes.toFixed(+precision) + ' ' + this.units[unitIndex];
        }
      }]);

      return BytesPipe;
    }();

    BytesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'bytes'
    })], BytesPipe);
    /***/
  },

  /***/
  "./src/app/filter-followers.pipe.ts":
  /*!******************************************!*\
    !*** ./src/app/filter-followers.pipe.ts ***!
    \******************************************/

  /*! exports provided: FilterFollowersPipe */

  /***/
  function srcAppFilterFollowersPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterFollowersPipe", function () {
      return FilterFollowersPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterFollowersPipe = /*#__PURE__*/function () {
      function FilterFollowersPipe() {
        _classCallCheck(this, FilterFollowersPipe);
      }

      _createClass(FilterFollowersPipe, [{
        key: "transform",
        value: function transform(filters, filterString, propName) {
          if (filters.length === 0 || filterString === '') {
            return filters;
          }

          var resultArray = [];

          var _iterator = _createForOfIteratorHelper(filters),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;

              if (item[propName].toLowerCase().startsWith(filterString.toLowerCase())) {
                resultArray.push(item);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return resultArray;
        }
      }]);

      return FilterFollowersPipe;
    }();

    FilterFollowersPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filterFollowers'
    })], FilterFollowersPipe);
    /***/
  },

  /***/
  "./src/app/gist.model.ts":
  /*!*******************************!*\
    !*** ./src/app/gist.model.ts ***!
    \*******************************/

  /*! exports provided: Gist */

  /***/
  function srcAppGistModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gist", function () {
      return Gist;
    });

    var Gist = function Gist() {
      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var contentUrl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var language = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var url = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
      var id = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
      var cached = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
      var wasCached = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

      _classCallCheck(this, Gist);

      this.content = content;
      this.filename = filename;
      this.size = size;
      this.contentUrl = contentUrl;
      this.language = language;
      this.url = url;
      this.id = id;
      this.cached = cached;
      this.wasCached = wasCached;
    };
    /***/

  },

  /***/
  "./src/app/gist/gist.component.css":
  /*!*****************************************!*\
    !*** ./src/app/gist/gist.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppGistGistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpc3QvZ2lzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/gist/gist.component.ts":
  /*!****************************************!*\
    !*** ./src/app/gist/gist.component.ts ***!
    \****************************************/

  /*! exports provided: GistComponent */

  /***/
  function srcAppGistGistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GistComponent", function () {
      return GistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _gist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../gist.model */
    "./src/app/gist.model.ts");
    /* harmony import */


    var _github_gist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../github-gist.service */
    "./src/app/github-gist.service.ts");

    var GistComponent = /*#__PURE__*/function () {
      function GistComponent(gistService) {
        _classCallCheck(this, GistComponent);

        this.gistService = gistService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
      }

      _createClass(GistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.gist = _gist_model__WEBPACK_IMPORTED_MODULE_2__["Gist"].constructor();
          this.gistService.gist$.subscribe(function (data) {
            _this4.gist = data; // this.gistEvent(data);
          }, function (error) {
            _this4.errorMessage$.emit(error);
          });
        } // gistEvent(data): void {
        //  this.gist = data;
        // }

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.gistService.gist$.unsubscribe();
        }
      }]);

      return GistComponent;
    }();

    GistComponent.ctorParameters = function () {
      return [{
        type: _github_gist_service__WEBPACK_IMPORTED_MODULE_3__["GitHubGistService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GistComponent.prototype, "errorMessage$", void 0);
    GistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gist',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./gist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gist/gist.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./gist.component.css */
      "./src/app/gist/gist.component.css"))["default"]]
    })], GistComponent);
    /***/
  },

  /***/
  "./src/app/github-followers.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/github-followers.service.ts ***!
    \*********************************************/

  /*! exports provided: GitHubFollowersService */

  /***/
  function srcAppGithubFollowersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GitHubFollowersService", function () {
      return GitHubFollowersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _github_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./github-user.service */
    "./src/app/github-user.service.ts");
    /**
     * Note: We could eliminate a lot of the event emitters etc in the services and just use
     * a public variable, however, part of the point of this repo is experimenting with
     * observables and the like...
     */


    var GitHubFollowersService = /*#__PURE__*/function () {
      function GitHubFollowersService(http, userService) {
        _classCallCheck(this, GitHubFollowersService);

        this.http = http;
        this.userService = userService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.isCaching = true;
        this.followersCached$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.followers$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true); // These are resolved async

        this.apiCalls = 0;
      }

      _createClass(GitHubFollowersService, [{
        key: "clearFollowersCache",
        value: function clearFollowersCache(username) {
          if (username != null) {
            localStorage.removeItem('followers_' + username);
            this.followersCached$.emit(status);
          }
        }
      }, {
        key: "isFollowersCached",
        value: function isFollowersCached(username) {
          return localStorage.getItem('followers_' + username) !== null;
        }
      }, {
        key: "getFollowers",
        value: function getFollowers(username) {
          var _this5 = this;

          if (this.isCaching) {
            var cachedObj = localStorage.getItem('followers_' + username);

            if (cachedObj !== null) {
              var followers = JSON.parse(cachedObj);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(followers);
            }
          }

          return this.http.get(this.userService.getApiUrl() + username + '/followers').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (followers) {
            _this5.apiCalls++;

            if (_this5.isCaching) {
              localStorage.setItem('followers_' + username, JSON.stringify(followers));
            }

            return followers;
          }));
        }
      }]);

      return GitHubFollowersService;
    }();

    GitHubFollowersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _github_user_service__WEBPACK_IMPORTED_MODULE_5__["GitHubUserService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubFollowersService.prototype, "errorMessage$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GitHubFollowersService.prototype, "isCaching", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubFollowersService.prototype, "followersCached$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubFollowersService.prototype, "followers$", void 0);
    GitHubFollowersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GitHubFollowersService);
    /***/
  },

  /***/
  "./src/app/github-followings.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/github-followings.service.ts ***!
    \**********************************************/

  /*! exports provided: GitHubFollowingsService */

  /***/
  function srcAppGithubFollowingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GitHubFollowingsService", function () {
      return GitHubFollowingsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _github_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./github-user.service */
    "./src/app/github-user.service.ts");
    /**
     * Note: We could eliminate a lot of the event emitters etc in the services and just use
     * a public variable, however, part of the point of this repo is experimenting with
     * observables and the like...
     */


    var GitHubFollowingsService = /*#__PURE__*/function () {
      function GitHubFollowingsService(http, userService) {
        _classCallCheck(this, GitHubFollowingsService);

        this.http = http;
        this.userService = userService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.isCaching = true;
        this.followingsCached$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.followings$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true); // These are resolved async

        this.apiCalls = 0;
      }

      _createClass(GitHubFollowingsService, [{
        key: "clearFollowingsCache",
        value: function clearFollowingsCache(username) {
          if (username != null) {
            localStorage.removeItem('followings_' + username);
            this.followingsCached$.emit(status);
          }
        }
      }, {
        key: "isFollowingsCached",
        value: function isFollowingsCached(username) {
          return localStorage.getItem('followings_' + username) !== null;
        }
      }, {
        key: "getFollowings",
        value: function getFollowings(username) {
          var _this6 = this;

          if (this.isCaching) {
            var cachedObj = localStorage.getItem('followings_' + username);

            if (cachedObj !== null) {
              var followings = JSON.parse(cachedObj);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(followings);
            }
          }

          return this.http.get(this.userService.getApiUrl() + username + '/following').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (followings) {
            _this6.apiCalls++;

            if (_this6.isCaching) {
              localStorage.setItem('followings_' + username, JSON.stringify(followings));
            }

            return followings;
          }));
        }
      }]);

      return GitHubFollowingsService;
    }();

    GitHubFollowingsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _github_user_service__WEBPACK_IMPORTED_MODULE_5__["GitHubUserService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubFollowingsService.prototype, "errorMessage$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GitHubFollowingsService.prototype, "isCaching", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubFollowingsService.prototype, "followingsCached$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubFollowingsService.prototype, "followings$", void 0);
    GitHubFollowingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GitHubFollowingsService);
    /***/
  },

  /***/
  "./src/app/github-gist.service.ts":
  /*!****************************************!*\
    !*** ./src/app/github-gist.service.ts ***!
    \****************************************/

  /*! exports provided: GitHubGistService */

  /***/
  function srcAppGithubGistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GitHubGistService", function () {
      return GitHubGistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _gist_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gist.model */
    "./src/app/gist.model.ts");
    /**
     * Note: We could eliminate a lot of the event emitters etc in the services and just use
     * a public variable, however, part of the point of this repo is experimenting with
     * observables and the like...
     */


    var GitHubGistService = /*#__PURE__*/function () {
      // public gistObs$ = this.gist$.asObservable();
      function GitHubGistService(http) {
        _classCallCheck(this, GitHubGistService);

        this.http = http;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true); // @Output() gist$ = new EventEmitter(true);

        this.gist$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // These are resolved async

        this.isCaching = true;
        this.apiCalls = 0;
      }

      _createClass(GitHubGistService, [{
        key: "isGistCached",
        value: function isGistCached(gist) {
          return localStorage.getItem('gist_' + gist.id + gist.filename) !== null;
        }
      }, {
        key: "clearGistCache",
        value: function clearGistCache(gist) {
          localStorage.removeItem('gist_' + gist.id + gist.filename);

          if (typeof gist === 'object') {
            gist = _gist_model__WEBPACK_IMPORTED_MODULE_5__["Gist"].constructor(); // this.blankGist();
          }

          this.gist$.next(gist);
        }
      }, {
        key: "getGist",
        value: function getGist(gist) {
          var _this7 = this;

          if (this.isCaching) {
            var content = localStorage.getItem('gist_' + gist.id + gist.filename);

            if (content !== null) {
              gist = Object.assign(Object.assign({}, gist), {
                content: content,
                cached: true,
                wasCached: true
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(gist);
            }
          }

          return this.http.get(gist.contentUrl, {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (gist2) {
            _this7.apiCalls++;

            if (_this7.isCaching && gist.size < 1024 * 32) {
              /* store 32kb max if caching */
              localStorage.setItem('gist_' + gist.id + gist.filename, gist2);
            }

            gist = Object.assign(Object.assign({}, gist), {
              content: gist2,
              cached: true,
              wasCached: false
            });
            return gist;
          }));
        }
      }]);

      return GitHubGistService;
    }();

    GitHubGistService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubGistService.prototype, "errorMessage$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubGistService.prototype, "gist$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GitHubGistService.prototype, "isCaching", void 0);
    GitHubGistService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GitHubGistService);
    /***/
  },

  /***/
  "./src/app/github-gists.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/github-gists.service.ts ***!
    \*****************************************/

  /*! exports provided: GitHubGistsService */

  /***/
  function srcAppGithubGistsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GitHubGistsService", function () {
      return GitHubGistsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _github_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./github-user.service */
    "./src/app/github-user.service.ts");

    var GitHubGistsService_1;
    /**
     * Note: We could eliminate a lot of the event emitters etc in the services and just use
     * a public variable, however, part of the point of this repo is experimenting with
     * observables and the like...
     */

    var GitHubGistsService = GitHubGistsService_1 = /*#__PURE__*/function () {
      function GitHubGistsService(http, userService) {
        _classCallCheck(this, GitHubGistsService);

        this.http = http;
        this.userService = userService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gistsCached$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gists$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true); // These are resolved async

        this.apiCalls = 0;
        this.isCaching = true;
      }
      /**
       * Converts the raw gists data from the api into a simplified object type (called Gist)
       * @param rawGists
       * @param isCached
       */


      _createClass(GitHubGistsService, [{
        key: "isGistsCached",
        value: function isGistsCached(username) {
          return localStorage.getItem('gists_' + username) !== null;
        }
      }, {
        key: "clearGistsCache",
        value: function clearGistsCache(username) {
          localStorage.removeItem('gists_' + username);
          this.gistsCached$.emit(false);
        }
      }, {
        key: "getGists",
        value: function getGists(username) {
          var _this8 = this;

          if (this.isCaching) {
            var cachedObj = localStorage.getItem('gists_' + username);

            if (cachedObj !== null) {
              var gists = JSON.parse(cachedObj);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(gists);
            }
          }

          return this.http.get(this.userService.getApiUrl() + username + '/gists').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (results) {
            return GitHubGistsService_1.processGistsToArray(results, false);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (gists) {
            _this8.apiCalls++;

            if (_this8.isCaching) {
              localStorage.setItem('gists_' + username, JSON.stringify(gists));
            }

            return gists;
          }));
        }
      }], [{
        key: "processGistsToArray",
        value: function processGistsToArray(rawGists, isCached) {
          // If not an array of data, abort early with an empty array
          if (!Array.isArray(rawGists)) return []; // process raw gists api data into new array

          var processedGists = [];

          var _iterator2 = _createForOfIteratorHelper(rawGists),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var gist = _step2.value;

              for (var key in gist.files) {
                if (gist.files.hasOwnProperty(key)) {
                  var file = gist.files[key];

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
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return processedGists;
        }
      }]);

      return GitHubGistsService;
    }();

    GitHubGistsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _github_user_service__WEBPACK_IMPORTED_MODULE_5__["GitHubUserService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubGistsService.prototype, "errorMessage$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubGistsService.prototype, "gistsCached$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GitHubGistsService.prototype, "gists$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GitHubGistsService.prototype, "isCaching", void 0);
    GitHubGistsService = GitHubGistsService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GitHubGistsService);
    /***/
  },

  /***/
  "./src/app/github-user.service.ts":
  /*!****************************************!*\
    !*** ./src/app/github-user.service.ts ***!
    \****************************************/

  /*! exports provided: GitHubUserService */

  /***/
  function srcAppGithubUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GitHubUserService", function () {
      return GitHubUserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * Note: As this is experimental, this service is both acting as a singleton in someways and also emitting data for capture by components.
     * Generally you'd only want to do one or the other, depending on the situation.
     */


    var GitHubUserService = /*#__PURE__*/function () {
      function GitHubUserService(http) {
        _classCallCheck(this, GitHubUserService);

        this.http = http;
        this.apiUrl = 'https://api.github.com/users/'; // private apiUrl: string = 'https://localhost:3000/users/';
        // current data

        this.defaultBaseUsername = 'lasellers';
        this.baseUsername = 'lasellers'; // These are resolved async

        this.apiCalls = 0; //

        this.isCaching = true; // Make all of these async so we don't have a checked error
        // Note also, since this is a service, we can't just hook these up as output
        // on the component but must subscribe to them.
        // @Output() userCached$ = new EventEmitter(true);

        this.user$ = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](true);
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](true);
      }

      _createClass(GitHubUserService, [{
        key: "getApiUrl",
        value: function getApiUrl() {
          return this.apiUrl;
        }
      }, {
        key: "getUserBasename",
        value: function getUserBasename() {
          return this.baseUsername;
        }
      }, {
        key: "getUserBasenameDefault",
        value: function getUserBasenameDefault() {
          return this.defaultBaseUsername;
        }
      }, {
        key: "clearUserCache",
        value: function clearUserCache(username) {
          // if (this.user.hasOwnProperty('login')) {
          //  localStorage.removeItem('user_' + this.user.login);
          //  this.emitCacheStatusUser(false, this.user.login);
          // }
          localStorage.removeItem('user_' + username);
          this.user$.emit({
            login: username,
            wasCached: false
          });
        }
      }, {
        key: "isUserCached",
        value: function isUserCached(username) {
          return localStorage.getItem('user_' + username) !== null;
        }
      }, {
        key: "getUser",
        value: function getUser(username) {
          var _this9 = this;

          if (this.isCaching) {
            var cachedUserObj = localStorage.getItem('user_' + username);

            if (cachedUserObj !== null) {
              var user = JSON.parse(cachedUserObj);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object.assign(Object.assign({}, user), {
                wasCached: true
              }));
            }
          }

          return this.http.get(this.apiUrl + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(0), // map((res: HttpResponse<any>) => res),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            _this9.apiCalls++;

            if (_this9.isCaching) {
              localStorage.setItem('user_' + username, JSON.stringify(user));
            }

            return Object.assign(Object.assign({}, user), {
              wasCached: false
            });
          }));
        }
      }]);

      return GitHubUserService;
    }();

    GitHubUserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], GitHubUserService.prototype, "isCaching", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], GitHubUserService.prototype, "user$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], GitHubUserService.prototype, "errorMessage$", void 0);
    GitHubUserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], GitHubUserService);
    /***/
  },

  /***/
  "./src/app/user-detail/user-detail.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/user-detail/user-detail.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserDetailUserDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-group {\n  margin: 0;\n  padding: 0;\n  clear: both;\n}\n\n.user-group label, .user-label {\n  margin: 0;\n  font-weight: bold;\n  text-align: right;\n  padding: 0;\n  width: 100%;\n}\n\n.user-group div, .user-line {\n  margin: 0;\n  text-align: left;\n  padding: 0px 0px 0px 1em;\n  width: 100%;\n}\n\n.card {\n  height: auto;\n  max-height: 0;\n  overflow-y: hidden;\n  transition: max-height 3s ease-out;\n}\n\n.card-open {\n  display: block;\n  border: 1px solid black;\n  max-height: 1080px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWdyb3VwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnVzZXItZ3JvdXAgbGFiZWwsIC51c2VyLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlci1ncm91cCBkaXYsIC51c2VyLWxpbmUge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDFlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgM3MgZWFzZS1vdXQ7XG59XG5cbi5jYXJkLW9wZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIG1heC1oZWlnaHQ6IDEwODBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user-detail/user-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/user-detail/user-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: UserDetailComponent */

  /***/
  function srcAppUserDetailUserDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () {
      return UserDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _github_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../github-user.service */
    "./src/app/github-user.service.ts");

    var UserDetailComponent = /*#__PURE__*/function () {
      function UserDetailComponent(userService) {
        _classCallCheck(this, UserDetailComponent);

        this.userService = userService;
        this.notifyChangeBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.user = {};
      }

      _createClass(UserDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.userService.user$.subscribe(function (user) {
            _this10.user = user;
          });
          this.userService.getUser(this.baseUsername).subscribe(function (user) {
            _this10.userService.user$.emit(user);
          }, function (error) {
            _this10.userService.errorMessage$.emit(error);
          });
          setTimeout(function () {
            document.querySelector('.card').classList.add('card-open');
          }, 0);
        }
      }, {
        key: "isEmpty",
        value: function isEmpty(obj) {
          for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "changeBaseUsername",
        value: function changeBaseUsername(username) {
          this.notifyChangeBaseUsername.emit(username);
        }
      }]);

      return UserDetailComponent;
    }();

    UserDetailComponent.ctorParameters = function () {
      return [{
        type: _github_user_service__WEBPACK_IMPORTED_MODULE_2__["GitHubUserService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserDetailComponent.prototype, "baseUsername", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserDetailComponent.prototype, "notifyChangeBaseUsername", void 0);
    UserDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: 'user-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-detail/user-detail.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-detail.component.css */
      "./src/app/user-detail/user-detail.component.css"))["default"]]
    })], UserDetailComponent);
    /***/
  },

  /***/
  "./src/app/user-followers/user-followers.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/user-followers/user-followers.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFollowersUserFollowersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZm9sbG93ZXJzL3VzZXItZm9sbG93ZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user-followers/user-followers.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/user-followers/user-followers.component.ts ***!
    \************************************************************/

  /*! exports provided: UserFollowersComponent */

  /***/
  function srcAppUserFollowersUserFollowersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFollowersComponent", function () {
      return UserFollowersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _github_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../github-user.service */
    "./src/app/github-user.service.ts");
    /* harmony import */


    var _github_followers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../github-followers.service */
    "./src/app/github-followers.service.ts");

    var UserFollowersComponent = /*#__PURE__*/function () {
      function UserFollowersComponent(userService, followersService) {
        _classCallCheck(this, UserFollowersComponent);

        this.userService = userService;
        this.followersService = followersService;
        this.filterString = '';
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.notifyChangeBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notifyShowBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cachedUsers = [];
        this.followers = [];
      }

      _createClass(UserFollowersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.userService.user$.subscribe(function (user) {
            _this11.cachedUsers[user.login] = user.wasCached;
          }); //

          this.followersService.followers$.subscribe(function (followers) {
            _this11.followers = followers;

            var _iterator3 = _createForOfIteratorHelper(_this11.followers),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var user = _step3.value;

                if (_this11.isUserWasCached(user.login)) {
                  _this11.cachedUsers[user.login] = true;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
          this.followersService.getFollowers(this.baseUsername).subscribe(function (followers) {
            _this11.followersService.followersCached$.emit(false);

            _this11.followersService.followers$.emit(followers);
          }, function (error) {
            _this11.errorMessage$.emit(error);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userService.user$.unsubscribe();
        }
      }, {
        key: "isUserWasCached",
        value: function isUserWasCached(username) {
          return this.cachedUsers.includes(username);
        }
      }, {
        key: "changeBaseUsername",
        value: function changeBaseUsername(username) {
          this.notifyChangeBaseUsername.emit(username);
        }
      }, {
        key: "showBaseUsername",
        value: function showBaseUsername(username) {
          this.notifyShowBaseUsername.emit(username);
        }
      }]);

      return UserFollowersComponent;
    }();

    UserFollowersComponent.ctorParameters = function () {
      return [{
        type: _github_user_service__WEBPACK_IMPORTED_MODULE_2__["GitHubUserService"]
      }, {
        type: _github_followers_service__WEBPACK_IMPORTED_MODULE_3__["GitHubFollowersService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserFollowersComponent.prototype, "baseUsername", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserFollowersComponent.prototype, "filterString", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserFollowersComponent.prototype, "errorMessage$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserFollowersComponent.prototype, "notifyChangeBaseUsername", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserFollowersComponent.prototype, "notifyShowBaseUsername", void 0);
    UserFollowersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-followers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-followers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-followers/user-followers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-followers.component.css */
      "./src/app/user-followers/user-followers.component.css"))["default"]]
    })], UserFollowersComponent);
    /***/
  },

  /***/
  "./src/app/user-followings/user-followings.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/user-followings/user-followings.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFollowingsUserFollowingsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZm9sbG93aW5ncy91c2VyLWZvbGxvd2luZ3MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user-followings/user-followings.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/user-followings/user-followings.component.ts ***!
    \**************************************************************/

  /*! exports provided: UserFollowingsComponent */

  /***/
  function srcAppUserFollowingsUserFollowingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFollowingsComponent", function () {
      return UserFollowingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _github_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../github-user.service */
    "./src/app/github-user.service.ts");
    /* harmony import */


    var _github_followings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../github-followings.service */
    "./src/app/github-followings.service.ts");

    var UserFollowingsComponent = /*#__PURE__*/function () {
      function UserFollowingsComponent(userService, followingsService) {
        _classCallCheck(this, UserFollowingsComponent);

        this.userService = userService;
        this.followingsService = followingsService;
        this.filterString = '';
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.notifyChangeBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notifyShowBaseUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cachedUsers = [];
        this.followings = [];
      }

      _createClass(UserFollowingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.userService.user$.subscribe(function (user) {
            _this12.cachedUsers[user.login] = user.wasCached;
          }); //

          this.followingsService.followings$.subscribe(function (followings) {
            _this12.followings = followings;

            var _iterator4 = _createForOfIteratorHelper(_this12.followings),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var user = _step4.value;

                if (_this12.isUserWasCached(user.login)) {
                  _this12.cachedUsers[user.login] = true;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          });
          this.followingsService.getFollowings(this.baseUsername).subscribe(function (followings) {
            _this12.followingsService.followingsCached$.emit(false);

            _this12.followingsService.followings$.emit(followings);
          }, function (error) {
            _this12.errorMessage$.emit(error);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userService.user$.unsubscribe();
        }
      }, {
        key: "isUserWasCached",
        value: function isUserWasCached(username) {
          return this.cachedUsers.includes(username);
        }
      }, {
        key: "changeBaseUsername",
        value: function changeBaseUsername(username) {
          this.notifyChangeBaseUsername.emit(username);
        }
      }, {
        key: "showBaseUsername",
        value: function showBaseUsername(username) {
          this.notifyShowBaseUsername.emit(username);
        }
      }]);

      return UserFollowingsComponent;
    }();

    UserFollowingsComponent.ctorParameters = function () {
      return [{
        type: _github_user_service__WEBPACK_IMPORTED_MODULE_2__["GitHubUserService"]
      }, {
        type: _github_followings_service__WEBPACK_IMPORTED_MODULE_3__["GitHubFollowingsService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserFollowingsComponent.prototype, "baseUsername", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserFollowingsComponent.prototype, "filterString", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserFollowingsComponent.prototype, "errorMessage$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserFollowingsComponent.prototype, "notifyChangeBaseUsername", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserFollowingsComponent.prototype, "notifyShowBaseUsername", void 0);
    UserFollowingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-followings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-followings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-followings/user-followings.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-followings.component.css */
      "./src/app/user-followings/user-followings.component.css"))["default"]]
    })], UserFollowingsComponent);
    /***/
  },

  /***/
  "./src/app/user-gists/user-gists.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/user-gists/user-gists.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserGistsUserGistsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZ2lzdHMvdXNlci1naXN0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user-gists/user-gists.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/user-gists/user-gists.component.ts ***!
    \****************************************************/

  /*! exports provided: UserGistsComponent */

  /***/
  function srcAppUserGistsUserGistsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGistsComponent", function () {
      return UserGistsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _github_gists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../github-gists.service */
    "./src/app/github-gists.service.ts");
    /* harmony import */


    var _github_gist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../github-gist.service */
    "./src/app/github-gist.service.ts");

    var UserGistsComponent = /*#__PURE__*/function () {
      function UserGistsComponent(gistsService, gistService) {
        _classCallCheck(this, UserGistsComponent);

        this.gistsService = gistsService;
        this.gistService = gistService;
        this.errorMessage$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gistsCached$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gists$ = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.gists = [];
      }

      _createClass(UserGistsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.gistsService.gists$.subscribe(function (gists) {
            _this13.gists = gists;
          });
          this.gistsService.getGists(this.baseUsername).subscribe(function (gists) {
            _this13.gistsCached$.emit(false);

            _this13.gists$.emit(gists);
          }, function (error) {
            _this13.errorMessage$.emit(error);
          });
        }
      }, {
        key: "getGist",
        value: function getGist(gist) {
          var _this14 = this;

          this.gistService.getGist(gist).subscribe(function (gistResponse) {
            _this14.gistService.gist$.next(gistResponse);
          }, function (error) {
            _this14.errorMessage$.emit(error);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.gistsService.gists$.unsubscribe();
        }
      }]);

      return UserGistsComponent;
    }();

    UserGistsComponent.ctorParameters = function () {
      return [{
        type: _github_gists_service__WEBPACK_IMPORTED_MODULE_2__["GitHubGistsService"]
      }, {
        type: _github_gist_service__WEBPACK_IMPORTED_MODULE_3__["GitHubGistService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserGistsComponent.prototype, "baseUsername", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserGistsComponent.prototype, "errorMessage$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserGistsComponent.prototype, "gistsCached$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserGistsComponent.prototype, "gists$", void 0);
    UserGistsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-gists',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-gists.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-gists/user-gists.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-gists.component.css */
      "./src/app/user-gists/user-gists.component.css"))["default"]]
    })], UserGistsComponent);
    /***/
  },

  /***/
  "./src/app/was-cached-highlight.directive.ts":
  /*!***************************************************!*\
    !*** ./src/app/was-cached-highlight.directive.ts ***!
    \***************************************************/

  /*! exports provided: WasCachedHighlightDirective */

  /***/
  function srcAppWasCachedHighlightDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WasCachedHighlightDirective", function () {
      return WasCachedHighlightDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WasCachedHighlightDirective = /*#__PURE__*/function () {
      function WasCachedHighlightDirective(elementRef) {
        _classCallCheck(this, WasCachedHighlightDirective);

        this.wasCached = false; // [wasCached]="'false'"

        this.classString = 'text-info'; // [classString]="'text-warning'"

        this.elementRef = elementRef;
      }

      _createClass(WasCachedHighlightDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.changeHighlight();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.input) {
            this.changeHighlight();
          }
        }
      }, {
        key: "changeHighlight",
        value: function changeHighlight() {
          if (this.wasCached) {
            this.elementRef.nativeElement.style.backgroundColor = 'yellow';
            this.elementRef.nativeElement.classList.add('text-info');
          } else {
            this.elementRef.nativeElement.style.backgroundColor = 'white';
            this.elementRef.nativeElement.classList.remove('text-info');
          }
        }
      }]);

      return WasCachedHighlightDirective;
    }();

    WasCachedHighlightDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WasCachedHighlightDirective.prototype, "wasCached", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WasCachedHighlightDirective.prototype, "classString", void 0);
    WasCachedHighlightDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appWasCachedHighlight]'
    })], WasCachedHighlightDirective);
    /***/
  },

  /***/
  "./src/app/was-cached.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/was-cached.pipe.ts ***!
    \************************************/

  /*! exports provided: WasCachedPipe */

  /***/
  function srcAppWasCachedPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WasCachedPipe", function () {
      return WasCachedPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WasCachedPipe = /*#__PURE__*/function () {
      function WasCachedPipe() {
        _classCallCheck(this, WasCachedPipe);
      }

      _createClass(WasCachedPipe, [{
        key: "transform",
        value: function transform(value) {
          return value ? 'Was previously Cached' : 'Was NOT previously Cached'; // return value ? '<span class="text-info">Was Cached<span>' : '<span class="text-warning">Was NOT Cached</span>';
        }
      }]);

      return WasCachedPipe;
    }();

    WasCachedPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'wasCached'
    })], WasCachedPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `angular-cli.json`.


    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/lasellers/dev/GitHubUsers/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map