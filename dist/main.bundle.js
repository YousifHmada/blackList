webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  -webkit-box-flex: 0.5;\n      -ms-flex: 0.5 0.5 auto;\n          flex: 0.5 0.5 auto;\n}\n\n\n.img-circle {\n    border-radius: 50%;\n}\n\nbutton {\n    border: hidden;\n    cursor: pointer;\n    outline: none;\n}\n\n\n.example-form {\n  text-align: center;\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  text-align: center;\n  font-size: 13px;\n  width: 100%;\n}\n\n.hideRest{\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: inline-block;\n    max-width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n\n  <button md-button><md-icon>explore</md-icon> Black List</button>\n\n  <span class=\"example-spacer\"></span>\n\n   <form>\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [formControl]=\"movies\">\n    </div>\n  </form> \n\n  <span class=\"example-spacer\"></span>\n\n  <button *ngIf=\"!loggedIn\" (click)=\"loginWithOptions()\" md-button>login with facebook</button>\n  <img *ngIf=\"loggedIn\"  src=\"{{image}}\" class=\"img-circle\" alt=\"{{name}}\"  height=\"40\"> \n  <button *ngIf=\"loggedIn\" md-icon-button [mdMenuTriggerFor]=\"menu\">\n    <md-icon>more_vert</md-icon>\n  </button>\n  <md-menu  #menu=\"mdMenu\">\n    <button md-menu-item>\n      <md-icon>dialpad</md-icon>\n      <span>Logout </span>\n    </button>\n  </md-menu>\n\n</md-toolbar>\n\n<br><br>\n\n\n<div class=\"container\">\n    <h1 *ngIf=\"!resultsExist && !loggedIn\">Welcome to Black list where your life sucks, FML</h1>\n    <div>\n      <h1 *ngIf=\"resultsExist\">can't find result for {{movies.value}}</h1>\n      <ngx-slick class=\"carousel\" #slickModal=\"slick-modal\" [config]=\"slideConfig\" (afterChange)=\"afterChange($event)\" >\n          <div ngxSlickItem *ngFor=\"let movie of filteredMovies | async\" class=\"slide\" style=\"padding: 15px\">\n                <a href=\"https://image.tmdb.org/t/p/w640{{movie.poster_path}}\"><img src=\"https://image.tmdb.org/t/p/w640{{movie.poster_path}}\" alt=\"{{ movie.title }}\" width=\"100%\"></a>\n                <h3> {{ movie.title }} </h3>\n                <p>\n                  <span> {{movie.media_type}} </span>\n                  <span> -- {{movie.release_date}} </span>\n                </p>\n          </div>\n      </ngx-slick>\n  </div>\n  <div *ngIf=\"loggedIn\" class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"thumbnail\">\n        <img src=\"{{cover}}\" alt=\"Lights\" style=\"width:100%\">\n        <div class=\"caption\">\n          <p>Welcome {{name}}...</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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






var AppComponent = (function () {
    function AppComponent(snackBar, fb, http) {
        var _this = this;
        this.snackBar = snackBar;
        this.fb = fb;
        this.http = http;
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4, dots: true,
            infinite: true };
        this.resultsExist = false;
        this.loggedIn = false;
        this.image = null;
        this.name = null;
        this.cover = null;
        this.movies = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormControl */]();
        this.movies.valueChanges
            .debounceTime(500)
            .subscribe(function () {
            var data = _this.movies.value;
            _this.filteredMovies = _this.http.get('https://api.themoviedb.org/3/search/multi?api_key=feed0cd312ab707673bf5186ef09fd63&language=en-US&query=' + data + '&page=1&include_adult=false')
                .map(function (response) {
                console.log(response.json());
                if (response.json().results.length > 0) {
                    _this.resultsExist = true;
                }
                else {
                    _this.resultsExist = false;
                }
                return response.json().results;
            });
        });
        var initParams = {
            appId: '1817861361839009',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    AppComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    AppComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Please Login to enjoy the full features", "", {
            duration: 8000,
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.openSnackBar();
    };
    /**
     * Login with minimal permissions. This allows you to see their public profile only.
     */
    AppComponent.prototype.login = function () {
        this.fb.login()
            .then(function (res) {
            console.log('Logged in', res);
        })
            .catch(this.handleError);
    };
    /**
     * Login with additional permissions/options
     */
    AppComponent.prototype.loginWithOptions = function () {
        var _this = this;
        var loginOptions = {
            enable_profile_selector: true,
            return_scopes: true,
            scope: 'public_profile,user_friends,email,pages_show_list'
        };
        this.fb.login(loginOptions)
            .then(function (res) {
            console.log('Logged in', res);
            _this.getProfile();
        })
            .catch(this.handleError);
    };
    AppComponent.prototype.getLoginStatus = function () {
        this.fb.getLoginStatus()
            .then(console.log.bind(console))
            .catch(console.error.bind(console));
    };
    /**
     * Get the user's profile
     */
    AppComponent.prototype.getProfile = function () {
        var _this = this;
        this.fb.api('/me?fields=id,picture.height(300).width(300),name,cover')
            .then(function (res) {
            console.log(res);
            _this.image = res.picture.data.url;
            _this.cover = res.cover.source;
            _this.name = res.name;
            _this.loggedIn = true;
        })
            .catch(this.handleError);
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.loggedIn = false;
        this.image = null;
        this.name = null;
        this.cover = null;
    };
    AppComponent.prototype.handleError = function (error) {
        console.error('Error processing action', error);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Import your library

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_slick__["a" /* SlickModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__["a" /* FacebookModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map