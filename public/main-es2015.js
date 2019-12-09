(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./message/message.module": [
		"./src/app/message/message.module.ts",
		"message-message-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n\r\n<div class=\"container main-content\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-view\">\n    <div class=\"form-group\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" #userName placeholder=\"Amount\">\n            <div (click)=\"getUsers(userName)\" class=\"input-group-addon\">Search</div>\n        </div>\n    </div>\n    <hr>\n    <br>\n    <div class=\"users row\">\n        <div class=\"col-md-4 col-sm-6 col-xs-12 user-continer\" *ngFor=\"let user of users\">\n            <div class=\"user-data\" (click)=\"openChat(user._id)\">\n                <img [src]=\"'images/'+user.cover\" class=\"cover\" alt=\"{{user.firstname}} cover\" title=\"{{user.firstname}} cover\">\n                <div class=\"over-ele\">\n                    <img [src]=\"'images/'+user.profile\" class=\"profile\" alt=\"{{user.firstname}} profile\"  title=\"{{user.firstname}} profile\">\n                    <span class=\"name\">{{user.firstname + \" \" + user.lastname}}</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"formStyle\">\n        <div class=\"head\">\n            <h2> Login <span class=\"glyphicon glyphicon-user\"></span></h2>\n        </div>\n        <div class=\"body\">\n            <form [formGroup]=\"loginForm\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('email')}\">\n                    <label for=\"email\" class=\"col-sm-3 control-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"email\" (blur)=\"getFormError()\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Email\">\n                        <span class=\"help-block\" *ngIf=\"hasError('email')\">\n                            {{ loginFormErrors.email }}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('password')}\">\n                    <label for=\"password\" class=\"col-sm-3 control-label\">Password</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"password\" (blur)=\"getFormError()\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Password\">\n                        <span class=\"help-block\" *ngIf=\"hasError('password')\">\n                            {{ loginFormErrors.password }}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                <div class=\"col-sm-offset-3 col-sm-9\">\n                    <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-success col-sm-12\">Login</button>\n                </div>\n                </div>\n            </form>\n        </div>\n    </div>\n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#urlS\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" routerLink=\"/home\">\n          <span>Ch</span>\n          <span>A</span>\n          <span>ty</span>\n        </a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"urlS\">\n        <ul class=\"nav navbar-nav\">\n          <li><a routerLink=\"/profile\" class=\"profile-cont\" *ngIf=\"isloggedIn\" routerLinkActive=\"active\"><img [src]=\"'images/'+userInfo.profile\" class=\"profile\" alt=\"{{userInfo.firstname}} profile\"  title=\"{{userInfo.firstname}} profile\"> </a></li>\n          <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a></li>\n          <li><a routerLink=\"/message/friends\" *ngIf=\"isloggedIn\" routerLinkActive=\"active\">Friends </a></li>\n          <li><a routerLink=\"/message/new\" *ngIf=\"isloggedIn\" routerLinkActive=\"active\">New Message </a></li>\n          <li><a routerLink=\"/message/request\" *ngIf=\"isloggedIn\" routerLinkActive=\"active\">Request </a></li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li><a routerLink=\"/login\" *ngIf=\"!isloggedIn\" routerLinkActive=\"active\">Login</a></li>\n          <li><a routerLink=\"/signup\" *ngIf=\"!isloggedIn\" routerLinkActive=\"active\">SignUp</a></li>\n          <li><a *ngIf=\"isloggedIn\" (click)=\"logOut()\">Logout</a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>notfound works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>{{userInfoInfo | json}}</p>\n\n<div class=\"row\">\n    <div class=\"col-xs-12 userInfo-continer\">\n        <div class=\"userInfo-data\">\n            <div class=\"cover\"  (mouseenter)=\"togglecoverOption()\" (mouseleave)=\"togglecoverOption()\">\n                <img [src]=\"'images/'+userInfo.cover\" alt=\"{{userInfo.firstname}} cover\" title=\"{{userInfo.firstname}} cover\">\n                <div class=\"controll\" *ngIf=\"cover\">\n                    <input type=\"file\" (change)=\"coverChange($event)\" id=\"coverImage\">\n                    <button class=\"btn btn-success\" *ngIf=\"data?.has('cover')\" (click)=\"uploadFile()\">Upload</button>\n                    <label class=\"glyphicon glyphicon-camera\" for=\"coverImage\"></label>\n                </div>\n            </div>\n            <div class=\"over-ele\">\n                <div class=\"profile col-xs-12 col-sm-4 col-md-3\" (mouseenter)=\"toggleProfileOption()\" (mouseleave)=\"toggleProfileOption()\">\n                    <img [src]=\"'images/'+userInfo.profile\" alt=\"{{userInfo.firstname}} profile\"  title=\"{{userInfo.firstname}} profile\">\n                    <div class=\"controll\" *ngIf=\"profile\">\n                        <input type=\"file\" (change)=\"profileChange($event)\" id=\"profileImage\">\n                        <button class=\"btn btn-success\" *ngIf=\"data?.has('profile')\" (click)=\"uploadFile()\">Upload</button>\n                        <label class=\"glyphicon glyphicon-camera\" for=\"profileImage\"></label>\n                    </div>\n                </div>\n                <span class=\"data col-xs-12 col-sm-8 col-md-9\">\n                    <p class=\"name\">{{userInfo.firstname + \" \" + userInfo.lastname}}</p>\n                    <p class=\"email\">\n                        {{userInfo.email}}\n                    </p>\n                    <p class=\"date\">\n                        You are here since {{userInfo.date | date:'dd-MM-yyyy hh:mm:ss a' }}\n                    </p>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n\n<br>\n<br>\n<app-signup></app-signup>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"formStyle\">\n        <div class=\"head\">\n            <h2> {{pageCase | titlecase}} <span class=\"glyphicon glyphicon-user\"></span></h2>\n        </div>\n        <div class=\"body\">\n            <form [formGroup]=\"signupForm\" class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('firstname')}\">\n                    <label for=\"firstname\" class=\"col-sm-3 control-label\">First Name</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" (blur)=\"getFormError()\" class=\"form-control\" id=\"firstname\" formControlName=\"firstname\" placeholder=\"First Name\">\n                        <span class=\"help-block\" *ngIf=\"hasError('firstname')\">\n                            {{ signupFormErrors.firstname }}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('lastname')}\">\n                    <label for=\"lastname\" class=\"col-sm-3 control-label\">Last Name</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" (blur)=\"getFormError()\" class=\"form-control\" id=\"lastname\" formControlName=\"lastname\" placeholder=\"Last Name\">\n                        <span class=\"help-block\" *ngIf=\"hasError('lastname')\">\n                            {{ signupFormErrors.lastname }}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('email')}\">\n                    <label for=\"email\" class=\"col-sm-3 control-label\">Email</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"email\" (blur)=\"getFormError()\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Email\">\n                        <span class=\"help-block\" *ngIf=\"hasError('email')\">\n                            {{ signupFormErrors.email }}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'has-error' : hasError('password')}\">\n                    <label for=\"password\" class=\"col-sm-3 control-label\">Password</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"password\" (blur)=\"getFormError()\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Password\">\n                        <span class=\"help-block\" *ngIf=\"hasError('password')\">\n                            {{ signupFormErrors.password }}\n                        </span>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                <div class=\"col-sm-offset-3 col-sm-9\">\n                    <button type=\"submit\" [disabled]=\"signupForm.invalid\" class=\"btn btn-success col-sm-12\">{{pageCase | titlecase}}</button>\n                </div>\n                </div>\n            </form>\n        </div>\n    </div>\n        ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'message', loadChildren: './message/message.module#MessageModule', canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    font-family: monospace;\r\n}\r\n.main-content{\r\n    margin-top: 50px;\r\n    background-color: #d8c3a4;\r\n    min-height: 190vh;\r\n    padding: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcbi5tYWluLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4YzNhNDtcclxuICAgIG1pbi1oZWlnaHQ6IDE5MHZoO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = '';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jwt.service */ "./src/app/jwt.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot()
        ],
        providers: [
            _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_9__["JwtService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt.service */ "./src/app/jwt.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, jwt) {
        this.router = router;
        this.jwt = jwt;
    }
    canActivate(next, state) {
        return this.checkLogin();
    }
    canLoad(route) {
        return this.checkLogin();
    }
    checkLogin() {
        if (!this.jwt.isTokenExpire()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-view{\r\n    background-color: #0000003d;\r\n    padding: 10px;\r\n    min-height: 66vh;\r\n    border-radius: 10px;\r\n}\r\n.input-group input{\r\n    background-color: #112d319e;\r\n    border: 1px solid #112d319e;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    padding: 20px 0;\r\n}\r\n.input-group div{\r\n    background-color: #5463b7;\r\n    border: none;\r\n    border-left: 2px solid #3f51b5;\r\n    color: #fff;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n}\r\n.user-continer{\r\n    margin-bottom: 25px;\r\n}\r\n.user-continer .user-data{\r\n    overflow: hidden;\r\n    min-height: 70px;\r\n    position: relative;\r\n    border-radius: 92px;\r\n    cursor: pointer;\r\n    box-shadow: 0px 2px 4px black;\r\n}\r\n.user-continer .user-data .cover{\r\n    width: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n.user-continer .user-data .over-ele{\r\n    position: absolute;\r\n}\r\n.user-continer .user-data .profile{\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    width: 70px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    height: 70px;\r\n}\r\n.user-continer .user-data .name{\r\n    display: inline-block;\r\n    width: 190px;\r\n    padding-left: 20px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    color: #050e44e3;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtdmlld3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDAzZDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA2NnZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uaW5wdXQtZ3JvdXAgaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyZDMxOWU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTEyZDMxOWU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG4uaW5wdXQtZ3JvdXAgZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NjNiNztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzNmNTFiNTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi51c2VyLWNvbnRpbmVye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG4udXNlci1jb250aW5lciAudXNlci1kYXRhe1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5MnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggYmxhY2s7XHJcbn1cclxuLnVzZXItY29udGluZXIgLnVzZXItZGF0YSAuY292ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4udXNlci1jb250aW5lciAudXNlci1kYXRhIC5vdmVyLWVsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4udXNlci1jb250aW5lciAudXNlci1kYXRhIC5wcm9maWxle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG4udXNlci1jb250aW5lciAudXNlci1kYXRhIC5uYW1le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzA1MGU0NGUzO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    ngOnInit() {
    }
    getUsers(ele) {
        this.user.searchForUser(ele.value).subscribe(res => {
            if (res['status'] === 'done')
                this.users = res['data'];
        });
    }
    randomNumber() {
        return Math.random().toString(16).slice(2, 8);
    }
    openChat(_id) {
        this.router.navigate([`/message/chat/${_id}`]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/jwt.service.ts":
/*!********************************!*\
  !*** ./src/app/jwt.service.ts ***!
  \********************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



let JwtService = class JwtService {
    constructor() { }
    getToken() {
        return localStorage.getItem('token');
    }
    setToken(token) {
        return localStorage.setItem('token', token);
    }
    resetToken() {
        localStorage.removeItem('token');
    }
    isTokenExpire() {
        let token = this.getToken();
        if (token) {
            let decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
            const date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return !(date.valueOf() > new Date().valueOf());
        }
        else {
            return true;
        }
    }
};
JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JwtService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".formStyle{\r\n    margin: 20px auto;\r\n}\r\n@media (min-width:768px){\r\n    .formStyle{\r\n        width: 70%;\r\n    }\r\n}\r\n.formStyle .head{\r\n    color: #000;\r\n    background-color: #05484238;\r\n    text-align: center;\r\n    padding: 2px 0;\r\n}\r\n.formStyle .head h2 {\r\n    font-weight: bold;\r\n}\r\n.formStyle .head h2 span{\r\n    font-size: 23px\r\n}\r\n.formStyle .body{\r\n    padding: 28px 15px;\r\n    background-color: #ffffff9c;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtU3R5bGV7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAuZm9ybVN0eWxle1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuLmZvcm1TdHlsZSAuaGVhZHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1NDg0MjM4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnB4IDA7XHJcbn1cclxuLmZvcm1TdHlsZSAuaGVhZCBoMiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZm9ybVN0eWxlIC5oZWFkIGgyIHNwYW57XHJcbiAgICBmb250LXNpemU6IDIzcHhcclxufVxyXG4uZm9ybVN0eWxlIC5ib2R5e1xyXG4gICAgcGFkZGluZzogMjhweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjljO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _my_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-validation */ "./src/app/my-validation.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let LoginComponent = class LoginComponent {
    constructor(fb, user, flashMessage, router) {
        this.fb = fb;
        this.user = user;
        this.flashMessage = flashMessage;
        this.router = router;
        this.loginFormErrors = {
            email: '',
            password: ''
        };
        this.pageCase = 'login';
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _my_validation__WEBPACK_IMPORTED_MODULE_3__["MyValidation"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
        });
        this.loginForm.valueChanges.subscribe(_ => { this.getFormError(); });
    }
    hasError(field) {
        return _my_validation__WEBPACK_IMPORTED_MODULE_3__["MyValidation"].hasError(this.loginForm, field);
    }
    getFormError() {
        this.loginFormErrors = _my_validation__WEBPACK_IMPORTED_MODULE_3__["MyValidation"].getFormError(this.loginForm);
    }
    onSubmit() {
        this.user.loginOrSignupOrUpdateUser(this.loginForm.value, 'login').subscribe((res) => {
            if (res['status'] === 'done') {
                this.flashMessage.show(`done : welcom`, { cssClass: 'alert alert-success' });
                localStorage.setItem('token', res['token']);
                localStorage.setItem('userInfo', JSON.stringify(res['data']));
                location.href = '/profile';
            }
            else {
                this.flashMessage.show(`${res['status']} : ${res['error']}`, { cssClass: 'alert alert-danger' });
            }
        }, (err) => {
            this.flashMessage.show(err.message, { cssClass: 'alert alert-danger' });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/my-validation.ts":
/*!**********************************!*\
  !*** ./src/app/my-validation.ts ***!
  \**********************************/
/*! exports provided: MyValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyValidation", function() { return MyValidation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MyValidation {
    static errorMessage(error, fielname) {
        return `${fielname} ${this.errors[error]}`;
    }
    static hasError(form, field) {
        return (form.get(field).invalid && (form.get(field).touched || form.get(field).dirty));
    }
    static getFormError(form) {
        let signupFormErrors = {};
        Object.keys(form.controls).forEach(controll => {
            signupFormErrors[controll] = '';
            if (form.get(controll).invalid) {
                Object.keys(form.get(controll).errors).forEach(error => {
                    signupFormErrors[controll] += this.errorMessage(error, controll) + ' ';
                });
            }
        });
        return signupFormErrors;
    }
    static email(controll) {
        let res = /[a-zA-Z0-9_\.\-]+\@[a-zA-Z0-9_\-]{3,9}\.[a-zA-Z0-9_\-]{3,6}/.test(controll.value);
        if (res) {
            return null;
        }
        else {
            return { 'email': true };
        }
    }
}
MyValidation.errors = {
    required: ' is required field',
    minlength: ' has little character',
    maxlength: ' has much character',
    min: ' has small value',
    max: ' has large value',
    pattern: ' is not match pattern',
    email: 'this is not email'
};


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\r\n    background-color: #e98074;\r\n    border-radius: 0;\r\n    border: none;\r\n}\r\n.navbar .navbar-brand{\r\n    color: #e0500e;\r\n    font-weight: bold;\r\n    letter-spacing: 3px;\r\n}\r\n@media (max-width:767px){\r\n    .navbar-nav{\r\n        background-color: #fdfdfd;\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n    }\r\n}\r\n.navbar .navbar-brand span:first-child{\r\n    color: #008d80;\r\n}\r\n.navbar .navbar-brand span:last-child{\r\n    color: #3F51B5;\r\n}\r\n.navbar .collapse a {\r\n    color: black;\r\n    text-shadow: 0px 0px 0.4px #000000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: ease-in-out 300ms;\r\n}\r\n.navbar .collapse a:hover {\r\n    background-color: #00000057;\r\n    color: #fff;\r\n}\r\n.navbar .collapse a.active {\r\n    color: #fffdfd;\r\n    background-color: #00000071;\r\n    font-weight: bold;\r\n}\r\n.navbar-default .navbar-toggle {\r\n    border-color: #ba5247;\r\n}\r\n.navbar-default .navbar-toggle:hover {\r\n    background-color: #ba5247;\r\n}\r\n.navbar-default .navbar-toggle .icon-bar {\r\n    background-color: #fffcfc;\r\n}\r\n.profile-cont{\r\n    padding: 2px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    margin-top: 3px;\r\n}\r\n.profile-cont .profile{\r\n    width: 40px;\r\n    border-radius: 50%;\r\n    height: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTgwNzQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZHtcclxuICAgIGNvbG9yOiAjZTA1MDBlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5uYXZiYXItbmF2e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCBzcGFuOmZpcnN0LWNoaWxke1xyXG4gICAgY29sb3I6ICMwMDhkODA7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLWJyYW5kIHNwYW46bGFzdC1jaGlsZHtcclxuICAgIGNvbG9yOiAjM0Y1MUI1O1xyXG59XHJcbi5uYXZiYXIgLmNvbGxhcHNlIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMC40cHggIzAwMDAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDMwMG1zO1xyXG59XHJcbi5uYXZiYXIgLmNvbGxhcHNlIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDU3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hdmJhciAuY29sbGFwc2UgYS5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmZkZmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNzE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmE1MjQ3O1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE1MjQ3O1xyXG59XHJcbi5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmNmYztcclxufVxyXG4ucHJvZmlsZS1jb250e1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4ucHJvZmlsZS1jb250IC5wcm9maWxle1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jwt.service */ "./src/app/jwt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(jwt, router) {
        this.jwt = jwt;
        this.router = router;
        this.isloggedIn = false;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    }
    ngOnInit() {
        this.isloggedIn = !this.jwt.isTokenExpire();
    }
    logOut() {
        this.jwt.resetToken();
        this.isloggedIn = false;
        this.router.navigate(['/login']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_2__["JwtService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")).default]
    })
], NotfoundComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userInfo-data{\r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: relative;\r\n    min-height: 225px;\r\n}\r\n.userInfo-data .cover{\r\n    width: 100%;\r\n    position: absolute;\r\n}\r\n.userInfo-data .cover img{\r\n    width: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    position: absolute;\r\n}\r\n.userInfo-data .over-ele{\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.userInfo-data .over-ele .profile img{\r\n    border-radius: 50%;\r\n    width: 100%;\r\n    margin: 4px;\r\n    height: 210px;\r\n}\r\n.userInfo-data .over-ele .data{\r\n    padding-left: 36px;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n}\r\n.userInfo-data .over-ele .data{\r\n    padding-left: 36px;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    padding-top: 60px;\r\n}\r\n.userInfo-data .over-ele .data .email ,.userInfo-data .over-ele .data .date{\r\n    padding-left: 36px;\r\n    font-size: 14px;\r\n    font-weight: 100;\r\n}\r\n@media (max-width:767px){\r\n    .userInfo-data{\r\n        min-height: 250px;\r\n    }\r\n    .userInfo-data .cover img{\r\n        min-height: 250px;\r\n    }\r\n    .userInfo-data .over-ele .profile{\r\n        text-align: center;\r\n    }\r\n    .userInfo-data .over-ele .profile img{\r\n        width: 15%;\r\n        height: 80px;\r\n    }\r\n    .userInfo-data .over-ele .data{\r\n        padding-top: 0;\r\n        text-align: center;\r\n    }\r\n}\r\n[type=\"file\"]{\r\n    display: none;\r\n}\r\n.cover .controll{\r\n    position: absolute;\r\n    right: 13px;\r\n    top: 172px;\r\n}\r\n.glyphicon-camera{\r\n    font-size: 40px;\r\n    padding: 1px 18px;\r\n    background-color: #00000045;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.profile .glyphicon-camera{\r\n    font-size: 40px;\r\n    padding: 1px 18px;\r\n    background-color: #00000045;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n.profile .controll{\r\n    position: relative;\r\n    top: -30px;\r\n}\r\n.profile .controll button ,  .cover .controll button{\r\n    float: left;\r\n    margin: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7QUFDSjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNDO0lBQ0csa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0M7SUFDRyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNDO0lBQ0csa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJJbmZvLWRhdGF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMjVweDtcclxufVxyXG4udXNlckluZm8tZGF0YSAuY292ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4udXNlckluZm8tZGF0YSAuY292ZXIgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4udXNlckluZm8tZGF0YSAub3Zlci1lbGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udXNlckluZm8tZGF0YSAub3Zlci1lbGUgLnByb2ZpbGUgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbn1cclxuLnVzZXJJbmZvLWRhdGEgLm92ZXItZWxlIC5kYXRhe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnVzZXJJbmZvLWRhdGEgLm92ZXItZWxlIC5kYXRhe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNnB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG4udXNlckluZm8tZGF0YSAub3Zlci1lbGUgLmRhdGEgLmVtYWlsICwudXNlckluZm8tZGF0YSAub3Zlci1lbGUgLmRhdGEgLmRhdGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC51c2VySW5mby1kYXRhe1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXJJbmZvLWRhdGEgLmNvdmVyIGltZ3tcclxuICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIH1cclxuICAgIC51c2VySW5mby1kYXRhIC5vdmVyLWVsZSAucHJvZmlsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudXNlckluZm8tZGF0YSAub3Zlci1lbGUgLnByb2ZpbGUgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXJJbmZvLWRhdGEgLm92ZXItZWxlIC5kYXRhe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5bdHlwZT1cImZpbGVcIl17XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAuY292ZXIgLmNvbnRyb2xse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEzcHg7XHJcbiAgICB0b3A6IDE3MnB4O1xyXG59XHJcbi5nbHlwaGljb24tY2FtZXJhe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIC5wcm9maWxlIC5nbHlwaGljb24tY2FtZXJhe1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNDU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIC5wcm9maWxlIC5jb250cm9sbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTMwcHg7XHJcbn1cclxuLnByb2ZpbGUgLmNvbnRyb2xsIGJ1dHRvbiAsICAuY292ZXIgLmNvbnRyb2xsIGJ1dHRvbntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);




let ProfileComponent = class ProfileComponent {
    constructor(user, flashMessage) {
        this.user = user;
        this.flashMessage = flashMessage;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.profile = false;
        this.cover = false;
    }
    ngOnInit() {
    }
    togglecoverOption() {
        this.cover = !this.cover;
    }
    toggleProfileOption() {
        this.profile = !this.profile;
    }
    coverChange(event) {
        let target = event['target'];
        this.data = new FormData();
        this.data.append('cover', target['files'][0]);
        // console.log(this.data.has('profile'));
    }
    profileChange(event) {
        let target = event['target'];
        this.data = new FormData();
        this.data.append('profile', target['files'][0]);
        // console.log(this.data.has('profile'));
    }
    uploadFile() {
        this.user.uploadFile(this.data).subscribe(res => {
            if (res['body']) {
                res = res['body'];
                if (res['status'] === 'done') {
                    this.flashMessage.show(res['status'], { cssClass: 'alert-success' });
                    this.userInfo[res['data'].field] = res['data'].name;
                    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
                    this.data = null;
                }
                else {
                    this.flashMessage.show(`${res['status']} : ${res['error']}`, { cssClass: 'alert-danger' });
                }
            }
        }, err => {
            this.flashMessage.show(err.message, { cssClass: 'alert-danger' });
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".formStyle{\r\n    margin: 20px auto;\r\n}\r\n@media (min-width:768px){\r\n    .formStyle{\r\n        width: 70%;\r\n    }\r\n}\r\n.formStyle .head{\r\n    color: #000;\r\n    background-color: #05484238;\r\n    text-align: center;\r\n    padding: 2px 0;\r\n}\r\n.formStyle .head h2 {\r\n    font-weight: bold;\r\n}\r\n.formStyle .head h2 span{\r\n    font-size: 23px\r\n}\r\n.formStyle .body{\r\n    padding: 28px 15px;\r\n    background-color: #ffffff9c;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybVN0eWxle1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgLmZvcm1TdHlsZXtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG59XHJcbi5mb3JtU3R5bGUgLmhlYWR7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTQ4NDIzODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJweCAwO1xyXG59XHJcbi5mb3JtU3R5bGUgLmhlYWQgaDIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmZvcm1TdHlsZSAuaGVhZCBoMiBzcGFue1xyXG4gICAgZm9udC1zaXplOiAyM3B4XHJcbn1cclxuLmZvcm1TdHlsZSAuYm9keXtcclxuICAgIHBhZGRpbmc6IDI4cHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5YztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _my_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-validation */ "./src/app/my-validation.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let SignupComponent = class SignupComponent {
    constructor(fb, user, flashMessage, router, route) {
        this.fb = fb;
        this.user = user;
        this.flashMessage = flashMessage;
        this.router = router;
        this.route = route;
        this.signupFormErrors = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
        this.pageCase = 'signup';
    }
    ngOnInit() {
        this.signupForm = this.fb.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _my_validation__WEBPACK_IMPORTED_MODULE_3__["MyValidation"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
        });
        this.signupForm.valueChanges.subscribe(_ => { this.getFormError(); });
        if (this.route.snapshot.routeConfig.path === 'profile') {
            this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
            this.pageCase = 'update';
            this.signupForm.patchValue({
                firstname: this.userInfo['firstname'],
                lastname: this.userInfo['lastname'],
                email: this.userInfo['email']
            });
            this.signupForm.get('password').clearValidators();
        }
    }
    hasError(field) {
        return _my_validation__WEBPACK_IMPORTED_MODULE_3__["MyValidation"].hasError(this.signupForm, field);
    }
    getFormError() {
        this.signupFormErrors = _my_validation__WEBPACK_IMPORTED_MODULE_3__["MyValidation"].getFormError(this.signupForm);
    }
    onSubmit() {
        let data = this.signupForm.value;
        console.log(data);
        if (this.pageCase === 'update') {
            if (data['password'] == '')
                delete data['password'];
        }
        console.log(data);
        this.user.loginOrSignupOrUpdateUser(data, this.pageCase).subscribe((res) => {
            if (res['status'] === 'done') {
                if (this.pageCase === 'signup') {
                    this.flashMessage.show(`done : You can login now`, { cssClass: 'alert alert-success' });
                    this.router.navigate(['/login']);
                }
                else {
                    this.flashMessage.show(`done`, { cssClass: 'alert alert-success' });
                    this.userInfo['firstname'] = this.signupForm.get('firstname').value;
                    this.userInfo['lastname'] = this.signupForm.get('lastname').value;
                    this.userInfo['email'] = this.signupForm.get('email').value;
                    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
                }
            }
            else {
                this.flashMessage.show(`${res['status']} : ${res['error']}`, { cssClass: 'alert alert-danger' });
            }
        }, (err) => {
            this.flashMessage.show(err.message, { cssClass: 'alert alert-danger' });
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt.service */ "./src/app/jwt.service.ts");






let UserService = class UserService {
    constructor(http, jwt) {
        this.http = http;
        this.jwt = jwt;
    }
    loginOrSignupOrUpdateUser(data, path) {
        let token = this.jwt.getToken();
        return this.http.post(`user/${path}`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
    }
    getUserData() {
        let token = this.jwt.getToken();
        return this.http.get(`user/info`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
    }
    uploadFile(data) {
        let token = this.jwt.getToken();
        return this.http.post(`user/uploadFile`, data, {
            reportProgress: true,
            observe: 'events',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': `Bearer ${token}`
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
    }
    searchForUser(name) {
        let token = this.jwt.getToken();
        return this.http.get(`user/search/${name}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.responsError));
    }
    responsError(error) {
        if (error instanceof ErrorEvent) {
            /// A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        ;
    }
    isLoggedin() {
        return !this.jwt.isTokenExpire();
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\abdo\MEAN Stack Projects\Chaty\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map