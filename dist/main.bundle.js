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
exports.push([module.i, ".example-container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n/*.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}*/\n\n.example-sidenav {\n  width: 300px;\n}\n\n/*.example-sidenav-content{\n\tmargin-top: 80px\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"example-container\">\n  <md-sidenav #sidenav class=\"example-sidenav\">\n    <app-side-navbar (sidenav)=\"sidenav.close()\"></app-side-navbar>\n  </md-sidenav>\n\n  <div class=\"example-sidenav-content\">\n    <app-header (sidenav)=\"sidenav.open()\"></app-header>\n\t<router-outlet></router-outlet>\n\t<app-footer></app-footer>\n  </div>\n\n</md-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
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
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.attemptLogin();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], AppComponent);

var _a;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_profile_component__ = __webpack_require__("../../../../../src/app/user/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__side_navbar_side_navbar_component__ = __webpack_require__("../../../../../src/app/side-navbar/side-navbar.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_12__user_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__side_navbar_side_navbar_component__["a" /* SideNavbarComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_slick__["a" /* SlickModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ngx_facebook__["a" /* FacebookModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__user_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_routes__ = __webpack_require__("../../../../../src/app/user/user.routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var APP_ROUTES = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* UserComponent */], children: __WEBPACK_IMPORTED_MODULE_2__user_user_routes__["a" /* User_ROUTES */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid text-center\">\n  <p>Footer Text</p>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*nav{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnav ul{\n  display: flex;\n}\nli.flexed{\n  text-align: center;\n  list-style-type: none;\n  display: block;\n  cursor: pointer\n}\na{\n  text-decoration: none;\n}\n.wrapper{\n  position: fixed;\n  width: 100%;\n  background-color: white;\n  box-shadow: 0px 3px 5px #888888;\n  margin: -80px auto;\n  padding: 10px 20px 0px;\n  z-index: 2000\n}*/\n\n.pointer{\n  cursor: pointer\n}\n\n.img-profile{\n\tborder-radius: 20px;\n  margin-right: 20px;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n    <span (click)=\"sidenav.emit()\" style=\"margin-left: 10px\" >\n      <i class=\"fa fa-bars fa-lg pointer\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"example-spacer\"></span>\n    <span class=\"pointer\" *ngIf=\"userService.authUser == null\" (click)=\"userService.loginWithFacebook()\">login</span>\n    <a mdTooltip=\"profile\"  [routerLink]=\"['/user',userService.authUser.authUserId,'profile']\" class=\"pointer\">\n      <img src=\"{{userService.authUser.authUserPicture}}\" class=\"img-profile\" alt=\"Cinque Terre\" width=\"40\" height=\"40\"> \n    </a>\n    <span>\n      <i class=\"fa fa-ellipsis-v fa-lg pointer\" style=\"margin-right: 10px\" aria-hidden=\"true\"></i>\n    </span>\n</md-toolbar>\n<!-- <div class=\"wrapper\">\n  <nav>\n    <ul>\n      <li class=\"flexed\">\n        <a (click)=\"sidenav.emit()\"><i class=\"fa fa-bars fa-2x pointer\" aria-hidden=\"true\"></i></a>\n      </li>\n    </ul>\n    <ul>\n      <li class=\"flexed\" style=\"margin-right: 10px;padding-top: 17px\">\n        <a *ngIf=\"userService.authUser == null\" (click)=\"userService.loginWithFacebook()\">login</a>\n      </li>\n      <li class=\"flexed\" style=\"margin-right: 10px;padding-top: 17px\">\n        <a *ngIf=\"userService.authUser != null\" [routerLink]=\"['/user',userService.authUser.authUserId,'profile']\">{{userService.authUser.authUserName}}</a>\n      </li>\n      <li class=\"flexed\">\n        <a>\n          <img src=\"{{userService.authUser.authUserPicture}}\" class=\"img-profile\" alt=\"Cinque Terre\" width=\"50\" height=\"50\"> \n        </a>\n      </li>\n    </ul>\n  </nav>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
        this.sidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userService.tryLogin.subscribe(function (user) {
        }, function (e) { return console.log('login attempt failed' + e); });
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "sidenav", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/side-navbar/side-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer{\n  cursor: pointer\n}\n\nul.nav{\n  padding-top: 11px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-navbar/side-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-list>\n  <md-list-item>\n  \t<span (click)=\"sidenav.emit()\" class=\"pointer\" style=\"margin-left: 10px\">\n      <i class=\"fa fa-bars fa-lg pointer\" aria-hidden=\"true\"></i>\n    </span>\n  </md-list-item>\n  <md-divider></md-divider>\n  <md-list-item>\n    <img mdListAvatar src=\"{{userService.authUser.authUserPicture}}\" alt=\"{{userService.authUser.authUserName}}\">\n    <h3 mdLine> {{userService.authUser.authUserName}} </h3>\n    <p mdLine>\n      <span> Web Developer </span>\n      <span class=\"demo-2\"> -- i'm a graphics designer of 2 years of experience </span>\n    </p>\n  </md-list-item>\n  <h3 md-subheader>Folders</h3>\n  <md-list-item *ngFor=\"let folder of folders\">\n    <md-icon md-list-icon>folder</md-icon>\n    <h4 md-line>{{folder.name}}</h4>\n    <p md-line> {{folder.updated | date}} </p>\n  </md-list-item>\n  <md-divider></md-divider>\n  <h3 md-subheader>Notes</h3>\n  <md-list-item *ngFor=\"let note of notes\">\n    <md-icon md-list-icon>note</md-icon>\n    <h4 md-line>{{note.name}}</h4>\n    <p md-line> {{note.updated | date}} </p>\n  </md-list-item>\n</md-list>\n"

/***/ }),

/***/ "../../../../../src/app/side-navbar/side-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNavbarComponent = (function () {
    function SideNavbarComponent(userService) {
        this.userService = userService;
        this.sidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
    };
    return SideNavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", Object)
], SideNavbarComponent.prototype, "sidenav", void 0);
SideNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-side-navbar',
        template: __webpack_require__("../../../../../src/app/side-navbar/side-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-navbar/side-navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_user_service__["a" /* UserService */]) === "function" && _a || Object])
], SideNavbarComponent);

var _a;
//# sourceMappingURL=side-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--   \n<div class=\"container text-center\">    \n  <div class=\"row\">\n    <div class=\"col-sm-3 well\">\n      <div class=\"well\">\n        <p><a href=\"#\">My Profile</a></p>\n        <img src=\"bird.jpg\" class=\"img-circle\" height=\"65\" width=\"65\" alt=\"Avatar\">\n      </div>\n      <div class=\"well\">\n        <p><a href=\"#\">Interests</a></p>\n        <p>\n          <span class=\"label label-default\">News</span>\n          <span class=\"label label-primary\">W3Schools</span>\n          <span class=\"label label-success\">Labels</span>\n          <span class=\"label label-info\">Football</span>\n          <span class=\"label label-warning\">Gaming</span>\n          <span class=\"label label-danger\">Friends</span>\n        </p>\n      </div>\n      <div class=\"alert alert-success fade in\">\n        <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">×</a>\n        <p><strong>Ey!</strong></p>\n        People are looking at your profile. Find out who.\n      </div>\n      <p><a href=\"#\">Link</a></p>\n      <p><a href=\"#\">Link</a></p>\n      <p><a href=\"#\">Link</a></p>\n    </div>\n    <div class=\"col-sm-7\">\n    \n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"panel panel-default text-left\">\n            <div class=\"panel-body\">\n              <p contenteditable=\"true\">Status: Feeling Blue</p>\n              <button type=\"button\" class=\"btn btn-default btn-sm\">\n                <span class=\"glyphicon glyphicon-thumbs-up\"></span> Like\n              </button>     \n            </div>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <div class=\"well\">\n           <p>John</p>\n           <img src=\"bird.jpg\" class=\"img-circle\" height=\"55\" width=\"55\" alt=\"Avatar\">\n          </div>\n        </div>\n        <div class=\"col-sm-9\">\n          <div class=\"well\">\n            <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <div class=\"well\">\n           <p>Bo</p>\n           <img src=\"bandmember.jpg\" class=\"img-circle\" height=\"55\" width=\"55\" alt=\"Avatar\">\n          </div>\n        </div>\n        <div class=\"col-sm-9\">\n          <div class=\"well\">\n            <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <div class=\"well\">\n           <p>Jane</p>\n           <img src=\"bandmember.jpg\" class=\"img-circle\" height=\"55\" width=\"55\" alt=\"Avatar\">\n          </div>\n        </div>\n        <div class=\"col-sm-9\">\n          <div class=\"well\">\n            <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <div class=\"well\">\n           <p>Anja</p>\n           <img src=\"bird.jpg\" class=\"img-circle\" height=\"55\" width=\"55\" alt=\"Avatar\">\n          </div>\n        </div>\n        <div class=\"col-sm-9\">\n          <div class=\"well\">\n            <p>Just Forgot that I had to mention something about someone to someone about how I forgot something, but now I forgot it. Ahh, forget it! Or wait. I remember.... no I don't.</p>\n          </div>\n        </div>\n      </div>     \n    </div>\n    <div class=\"col-sm-2 well\">\n      <div class=\"thumbnail\">\n        <p>Upcoming Events:</p>\n        <img src=\"paris.jpg\" alt=\"Paris\" width=\"400\" height=\"300\">\n        <p><strong>Paris</strong></p>\n        <p>Fri. 27 November 2015</p>\n        <button class=\"btn btn-primary\">Info</button>\n      </div>      \n      <div class=\"well\">\n        <p>ADS</p>\n      </div>\n      <div class=\"well\">\n        <p>ADS</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n -->"

/***/ }),

/***/ "../../../../../src/app/user/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.user = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.userService.getProfile(params['id']).subscribe(function (user) { return _this.user = user; }, function (error) { return console.log(error); });
        }, function (e) { return console.log(e); });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/user/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")],
    }),
    __metadata("design:paramtypes", [])
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_component__ = __webpack_require__("../../../../../src/app/user/profile.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User_ROUTES; });

var User_ROUTES = [
    { path: ':id/profile', component: __WEBPACK_IMPORTED_MODULE_0__profile_component__["a" /* ProfileComponent */] }
];
//# sourceMappingURL=user.routes.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(fb, http) {
        this.fb = fb;
        this.http = http;
        this.authUser = null;
        this.tryLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        var initParams = {
            appId: '1817861361839009',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    UserService.prototype.getProfile = function (id) {
        return this.http.get('https://black-list-movies.herokuapp.com/users/' + id + '/profile')
            .map(function (result) { return result.json(); });
    };
    UserService.prototype.attemptLogin = function () {
        var _id = localStorage.getItem("authUserId");
        var name = localStorage.getItem("authUserName");
        var picture = localStorage.getItem("authUserPicture");
        var authAccessToken = localStorage.getItem("authAccessToken");
        if (_id != null && name != null && picture != null && authAccessToken != null) {
            this.authUser = {
                "authUserId": _id,
                "authUserName": name,
                "authUserPicture": picture,
                "authAccessToken": authAccessToken
            };
        }
    };
    UserService.prototype.loginWithFacebook = function () {
        var _this = this;
        var loginOptions = {
            enable_profile_selector: true,
            return_scopes: true,
            scope: 'public_profile,user_friends,email,pages_show_list'
        };
        this.fb.login(loginOptions)
            .then(function (res) {
            var body = {
                fbAccessToken: res.authResponse.accessToken
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({
                "content-type": "application/json"
            });
            _this.http.post('https://black-list-movies.herokuapp.com/users/login/fb', body, { headers: headers })
                .subscribe(function (data) {
                var user = data.json();
                localStorage.setItem("authUserId", user._id);
                localStorage.setItem("authUserName", user.name);
                localStorage.setItem("authUserPicture", user.picture);
                localStorage.setItem("authAccessToken", user.authAccessToken);
                _this.authUser = {
                    "authUserId": user._id,
                    "authUserName": user.name,
                    "authUserPicture": user.picture,
                    "authAccessToken": user.authAccessToken,
                };
                _this.tryLogin.emit();
            }, function (error) {
                _this.authUser = null;
                _this.tryLogin.emit();
            });
        })
            .catch(function (e) { return console.log(e); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

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