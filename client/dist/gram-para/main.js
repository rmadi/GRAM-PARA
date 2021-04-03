(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RMADI\OneDrive\Bureau\greenfiled\GRAM-PARA\client\src\main.ts */"zUnb");


/***/ }),

/***/ "2SFI":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 0, vars: 0, template: function ProductComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");
/* harmony import */ var _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footbar/footbar.component */ "kkVY");




class AppComponent {
    constructor() {
        this.title = 'gram-para';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footbar");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_3__["FootbarComponent"]], styles: ["h1[_ngcontent-%COMP%]{\r\n    color: greenyellow\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgY29sb3I6IGdyZWVueWVsbG93XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");
/* harmony import */ var _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footbar/footbar.component */ "kkVY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"],
        _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_5__["FootbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 159, vars: 0, consts: [[1, "navbar", "navbar-light", "bg-light"], ["src", "../../logo_Tt4_4.ico", "alt", ""], [1, "nav-pos"], [1, "form-inline"], [1, "form-pos-nav"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], [1, "search", "icon"], [1, "nav-bar-list"], ["type", "checkbox", "id", "check"], ["for", "check", 1, "checkbtn"], [1, "div-i-pos"], [1, "fas", "fa-bars"], [1, "menu-skin"], [1, "submenu"], [1, "active"], [1, "menu-hair"], [1, "menu-organic"], [1, "menu-mother"], [1, "menu-body"], [1, "menu-naturel"], [1, "menu-hygiene"], [1, "menu-men"], [1, "menu-medical"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Skin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Rakia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Hair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Organic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Mother's & Kids");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Organic & natural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Hygiene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Medical material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: \"Courier New\", Courier, monospace;\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n  \r\n  .form-control[_ngcontent-%COMP%]{\r\n    width: 400px;\r\n\r\n  }\r\n  .form-pos-nav[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    right: 800px;\r\n  }\r\n  nav[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    background-color: #00a86b;\r\n  }\r\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\r\n    margin-left :95px;\r\n    padding: 0px;\r\n  }\r\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]::after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n  }\r\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    position: relative;\r\n  }\r\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 20px 30px;\r\n    color: #fff;\r\n  }\r\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n    padding: 15px 30px 20px 30px;\r\n  }\r\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n  }\r\n  .submenu[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    cursor: grab;\r\n  }\r\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .submenu[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0%;\r\n    padding: 0px;\r\n    z-index: 1000;\r\n  }\r\n  .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #ccc;\r\n  }\r\n  .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 15px 30px;\r\n    font-size: 13px;\r\n    color: #222538;\r\n    width: 270px;\r\n  }\r\n  .menu-skin[_ngcontent-%COMP%]:hover {\r\n    border-top: 5px solid #0b6623;\r\n    background-color: #0cc796;\r\n  }\r\n  .menu-hair[_ngcontent-%COMP%]:hover {\r\n    border-top: 5px solid #0b6623;\r\n    background-color: #0cc796;\r\n  }\r\n  .menu-organic[_ngcontent-%COMP%]:hover {\r\n    border-top: 5px solid #0b6623;\r\n    background-color: #0cc796;\r\n  }\r\n  .menu-mother[_ngcontent-%COMP%]:hover {\r\n    border-top: 5px solid #0b6623;\r\n    background-color: #0cc796;\r\n  }\r\n  .menu-body[_ngcontent-%COMP%]:hover {\r\n    border-top: 5px solid #0b6623;\r\n    background-color: #0cc796;\r\n  }\r\n  .menu-naturel[_ngcontent-%COMP%]:hover {\r\n    border-top: 5px solid #0b6623;\r\n    background-color: #0cc796;\r\n  }\r\n  .menu-hygiene[_ngcontent-%COMP%]:hover {\r\n    border-top: 5px solid #0b6623;\r\n    background-color: #0cc796;\r\n  }\r\n  .menu-men[_ngcontent-%COMP%]:hover {\r\n    border-top: 5px solid #0b6623;\r\n    background-color: #0cc796;\r\n  }\r\n  .menu-medical[_ngcontent-%COMP%]:hover {\r\n    border-top: 5px solid #0b6623;\r\n    background-color: #0cc796;\r\n  }\r\n  .menu-skin[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    border-bottom: 0.5px solid #0b6623;\r\n    \r\n    }\r\n  .menu-hair[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    border-bottom: 0.5px solid #0b6623;\r\n    }\r\n  .menu-organic[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n        border-bottom: 0.5px solid #0b6623;\r\n    }\r\n  .menu-mother[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n        border-bottom: 0.5px solid #0b6623;\r\n\r\n    }\r\n  .menu-body[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n        border-bottom: 0.5px solid #0b6623;\r\n\r\n    }\r\n  .menu-naturel[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n        border-bottom: 0.5px solid #0b6623;\r\n\r\n    }\r\n  .menu-hygiene[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n        border-bottom: 0.5px solid #0b6623;\r\n\r\n    }\r\n  .menu-men[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n        border-bottom: 0.5px solid #0b6623;\r\n\r\n    }\r\n  .menu-medical[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n        border-bottom: 0.5px solid #0b6623;\r\n\r\n    }\r\n  .submenu[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\r\n      color: #000;\r\n      font-weight: bold;\r\n    }\r\n  .checkbtn[_ngcontent-%COMP%]{\r\n      font-size: 30px;\r\n      color: white;\r\n      float: right;\r\n      cursor: pointer;\r\n      display: none;\r\n    }\r\n  #check[_ngcontent-%COMP%]{\r\n      display: none;\r\n    }\r\n  @media (max-width: 952px){\r\n    \r\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n      }\r\n    }\r\n  @media (max-width: 700px){\r\n      .checkbtn[_ngcontent-%COMP%]{\r\n        display: block;\r\n      }\r\n      ul[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        width: 100%;\r\n        height: 100vh;\r\n        background: #00a86b;\r\n        text-align: center;\r\n      }\r\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        display: list-item;\r\n        \r\n        list-style-position: inside;\r\n      }\r\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n      }\r\n      \r\n      #check[_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%]{\r\n        left: 0;\r\n      }\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOENBQThDO0lBQzlDLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTs7O0tBR0c7RUFDSDtJQUNFLFlBQVk7O0VBRWQ7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7RUFDQTtRQUNNLFdBQVc7SUFDZix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBQ0E7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUVBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtFQUNmO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7RUFDZDtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjtFQUdBO0lBQ0Usa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQjtFQUNGO0lBQ0Usa0NBQWtDO0lBQ2xDO0VBQ0E7UUFDSSxrQ0FBa0M7SUFDdEM7RUFBQztRQUNHLGtDQUFrQzs7SUFFdEM7RUFDQTtRQUNJLGtDQUFrQzs7SUFFdEM7RUFBQztRQUNHLGtDQUFrQzs7SUFFdEM7RUFBQztRQUNHLGtDQUFrQzs7SUFFdEM7RUFBQztRQUNHLGtDQUFrQzs7SUFFdEM7RUFDQTtRQUNJLGtDQUFrQzs7SUFFdEM7RUFFRjtNQUNJLFdBQVc7TUFDWCxpQkFBaUI7SUFDbkI7RUFDQTtNQUNFLGVBQWU7TUFDZixZQUFZO01BQ1osWUFBWTtNQUNaLGVBQWU7TUFDZixhQUFhO0lBQ2Y7RUFDQTtNQUNFLGFBQWE7SUFDZjtFQUVBOztNQUVFO1FBQ0UsZUFBZTtNQUNqQjtJQUNGO0VBQ0E7TUFDRTtRQUNFLGNBQWM7TUFDaEI7TUFDQTtRQUNFLGVBQWU7UUFDZixXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixrQkFBa0I7TUFDcEI7TUFDQTtRQUNFLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsMkJBQTJCO01BQzdCO01BQ0E7UUFDRSxlQUFlO01BQ2pCOztNQUVBO1FBQ0UsT0FBTztNQUNUO0lBQ0Y7RUFHQTs7O09BR0ciLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICAvKiAubmF2LXBvc3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDQzMHB4O1xyXG4gIH0gKi9cclxuICAuZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG5cclxuICB9XHJcbiAgLmZvcm0tcG9zLW5hdntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiA4MDBweDtcclxuICB9XHJcbiAgbmF2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGE4NmI7XHJcbiAgfVxyXG4gIG5hdiA+IHVsIHtcclxuICAgIG1hcmdpbi1sZWZ0IDo5NXB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuICBcclxuICBuYXYgPiB1bDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIG5hdiA+IHVsID4gbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIG5hdiA+IHVsID4gbGkgPiBhIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBuYXYgPiB1bCA+IGxpOmhvdmVyIGEge1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4IDIwcHggMzBweDtcclxuICB9XHJcbiAgbmF2IGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgbmF2IGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IGdyYWI7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiBsaTpob3ZlciAuc3VibWVudSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG4gIC5zdWJtZW51IGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuICAuc3VibWVudSBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMjIyNTM4O1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gIH1cclxuICAubWVudS1za2luOmhvdmVyIHtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMGI2NjIzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjYzc5NjtcclxuICB9XHJcbiAgLm1lbnUtaGFpcjpob3ZlciB7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzBiNjYyMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwY2M3OTY7XHJcbiAgfVxyXG4gIC5tZW51LW9yZ2FuaWM6aG92ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwYjY2MjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNjNzk2O1xyXG4gIH1cclxuICAubWVudS1tb3RoZXI6aG92ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwYjY2MjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNjNzk2O1xyXG4gIH1cclxuICAubWVudS1ib2R5OmhvdmVyIHtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMGI2NjIzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjYzc5NjtcclxuICB9XHJcbiAgLm1lbnUtbmF0dXJlbDpob3ZlciB7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzBiNjYyMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwY2M3OTY7XHJcbiAgfVxyXG4gIC5tZW51LWh5Z2llbmU6aG92ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwYjY2MjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNjNzk2O1xyXG4gIH1cclxuICAubWVudS1tZW46aG92ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwYjY2MjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNjNzk2O1xyXG4gIH1cclxuICAubWVudS1tZWRpY2FsOmhvdmVyIHtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMGI2NjIzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjYzc5NjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLm1lbnUtc2tpbiAuc3VibWVudSBsaSA6aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzBiNjYyMztcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzMmZmN2U7ICovXHJcbiAgICB9XHJcbiAgLm1lbnUtaGFpciAuc3VibWVudSBsaSA6aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzBiNjYyMztcclxuICAgIH1cclxuICAgIC5tZW51LW9yZ2FuaWMgLnN1Ym1lbnUgbGkgOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMGI2NjIzO1xyXG4gICAgfS5tZW51LW1vdGhlciAuc3VibWVudSBsaSA6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMwYjY2MjM7XHJcblxyXG4gICAgfVxyXG4gICAgLm1lbnUtYm9keSAuc3VibWVudSBsaSA6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMwYjY2MjM7XHJcblxyXG4gICAgfS5tZW51LW5hdHVyZWwgLnN1Ym1lbnUgbGkgOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMGI2NjIzO1xyXG5cclxuICAgIH0ubWVudS1oeWdpZW5lIC5zdWJtZW51IGxpIDpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzBiNjYyMztcclxuXHJcbiAgICB9Lm1lbnUtbWVuIC5zdWJtZW51IGxpIDpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzBiNjYyMztcclxuXHJcbiAgICB9XHJcbiAgICAubWVudS1tZWRpY2FsIC5zdWJtZW51IGxpIDpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzBiNjYyMztcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAuc3VibWVudTpob3ZlciBhIHtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmNoZWNrYnRue1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjY2hlY2t7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTJweCl7XHJcbiAgICBcclxuICAgICAgbmF2IHVsIGxpIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgICAuY2hlY2tidG57XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgdWx7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwYTg2YjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgbmF2IHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgICAgICAvKiBtYXJnaW46IDUwcHggMDsgKi9cclxuICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XHJcbiAgICAgIH1cclxuICAgICAgbmF2IHVsIGxpIGF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAjY2hlY2s6Y2hlY2tlZCB+IHVse1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBcclxuICAgIC8qIGEuYWN0aXZlLCBhOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNlYWdyZWVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIH0gKi9cclxuICAiXX0= */"] });


/***/ }),

/***/ "kkVY":
/*!*********************************************************!*\
  !*** ./src/app/components/footbar/footbar.component.ts ***!
  \*********************************************************/
/*! exports provided: FootbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootbarComponent", function() { return FootbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FootbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
FootbarComponent.ɵfac = function FootbarComponent_Factory(t) { return new (t || FootbarComponent)(); };
FootbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FootbarComponent, selectors: [["app-footbar"]], decls: 73, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-sm-4", "col-xs-12"], [1, "single_footer"], ["href", "#"], [1, "col-md-4", "col-sm-4", "col-xs-12"], [1, "single_footer", "single_footer_address"], [1, "signup_form"], ["action", "#", 1, "subscribe"], ["type", "text", "placeholder", "Enter Email Address", 1, "subscribe__input"], ["type", "button", 1, "subscribe__btn"], [1, "fas", "fa-paper-plane"], [1, "social_profile"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google-plus-g"], [1, "fab", "fa-instagram"], [1, "col-lg-12", "col-sm-12", "col-xs-12"], [1, "copyright"]], template: function FootbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Simply dummy text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The printing and typesetting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Standard dummy text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Type specimen book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Page Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Simply dummy text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "The printing and typesetting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Standard dummy text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Type specimen book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Subscribe today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Copyright \u00A9 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "RBK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active {\r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\n\r\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\r\n    color: #333;\r\n    text-decoration: none;\r\n    transition-timing-function: ease-in-out;\r\n    -ms-transition-timing-function: ease-in-out;\r\n    -moz-transition-timing-function: ease-in-out;\r\n    -webkit-transition-timing-function: ease-in-out;\r\n    -o-transition-timing-function: ease-in-out;\r\n    transition-duration: .2s;\r\n    -ms-transition-duration: .2s;\r\n    -moz-transition-duration: .2s;\r\n    -webkit-transition-duration: .2s;\r\n    -o-transition-duration: .2s;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\nmax-width: 100%;\r\nheight: auto;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    padding: 60px 0;\r\n   \r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\nbackground: linear-gradient(105deg,#6e99e6 ,#093c94);\r\npadding-top: 80px;\r\npadding-bottom: 40px;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width:768px) { \r\n.single_footer[_ngcontent-%COMP%]{margin-bottom:30px;}\r\n}\r\n\r\n.single_footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\ncolor: #fff;\r\nmargin-top: 0;\r\nmargin-bottom: 25px;\r\nfont-weight: 700;\r\ntext-transform: uppercase;\r\nfont-size: 20px;\r\n}\r\n\r\n.single_footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\r\ncontent: \"\";\r\ndisplay: block;\r\nheight: 2px;\r\nwidth: 40px;\r\nbackground: #fff;\r\nmargin-top: 20px;\r\n}\r\n\r\n.single_footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;}\r\n\r\n.single_footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\nmargin: 0;\r\npadding: 0;\r\nlist-style: none;\r\n}\r\n\r\n.single_footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\ncolor: #fff;\r\ntransition: all 0.3s ease 0s;\r\nline-height: 36px;\r\nfont-size: 15px;\r\ntext-transform: capitalize;\r\n}\r\n\r\n.single_footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: #ff3666; }\r\n\r\n.single_footer_address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fff;}\r\n\r\n.single_footer_address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\nfont-weight: 400;\r\ncolor: #fff;\r\nline-height: 28px;\r\n}\r\n\r\n.contact_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\nlist-style: outside none none;\r\nmargin: 0;\r\npadding: 0;\r\n}\r\n\r\n\r\n\r\n.subscribe[_ngcontent-%COMP%] {\r\ndisplay: block;\r\nposition: relative;\r\nmargin-top: 15px;\r\nwidth: 100%;\r\n}\r\n\r\n.subscribe__input[_ngcontent-%COMP%] {\r\nbackground-color: #fff;\r\nborder: medium none;\r\nborder-radius: 5px;\r\ncolor: #333;\r\ndisplay: block;\r\nfont-size: 15px;\r\nfont-weight: 500;\r\nheight: 60px;\r\nletter-spacing: 0.4px;\r\nmargin: 0;\r\npadding: 0 150px 0 20px;\r\ntext-align: center;\r\ntext-transform: capitalize;\r\nwidth: 100%;\r\n}\r\n\r\n@media only screen and (max-width:768px) { \r\n.subscribe__input[_ngcontent-%COMP%]{padding: 0 50px 0 20px;}\r\n}\r\n\r\n.subscribe__btn[_ngcontent-%COMP%] {\r\nbackground-color: transparent;\r\nborder-radius: 0 25px 25px 0;\r\ncolor: #01c7e9;\r\ncursor: pointer;\r\ndisplay: block;\r\nfont-size: 20px;\r\nheight: 60px;\r\nposition: absolute;\r\nright: 0;\r\ntop: 0;\r\nwidth: 60px;\r\n}\r\n\r\n.subscribe__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition: all 0.3s ease 0s;}\r\n\r\n@media only screen and (max-width:768px) { \r\n.subscribe__btn[_ngcontent-%COMP%]{right:0px;}\r\n}\r\n\r\n.subscribe__btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\r\ncolor:#ff3666;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\npadding: 0;\r\nborder: none;\r\nbackground-color: transparent;\r\nborder-radius: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.social_profile[_ngcontent-%COMP%] {margin-top:40px;}\r\n\r\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\nlist-style: outside none none;\r\nmargin: 0;\r\npadding: 0;\r\n}\r\n\r\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;}\r\n\r\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\ntext-align: center;\r\nborder: 0px;\r\ntext-transform: uppercase;\r\ntransition: all 0.3s ease 0s;\r\nmargin: 0px 5px;\r\nfont-size: 18px;\r\ncolor: #fff;\r\nborder-radius: 30px;\r\nwidth: 50px;\r\nheight: 50px;\r\nline-height: 50px;\r\ndisplay: block;\r\nborder: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n@media only screen and (max-width:768px) { \r\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:10px;}\r\n}\r\n\r\n@media only screen and (max-width:480px) { \r\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\nwidth:40px;\r\nheight:40px;\r\nline-height:40px;\r\n}\r\n}\r\n\r\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\nbackground:#ff3666;\r\nborder: 1px solid #ff3666;\r\ncolor:#fff;\r\nborder:0px;\r\n}\r\n\r\n\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\nmargin-top: 70px;\r\npadding-top: 40px;\r\ncolor:#fff;\r\nfont-size: 15px;\r\nborder-top: 1px solid rgba(255,255,255,0.4);\r\ntext-align: center;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#01c7e9;transition: all 0.2s ease 0s;}\r\n\r\n.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ff3666;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3RiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7SUFJSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQix1Q0FBdUM7SUFDdkMsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1QywrQ0FBK0M7SUFDL0MsMENBQTBDO0lBQzFDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFDQTtBQUNBLGVBQWU7QUFDZixZQUFZO0FBQ1o7O0FBQ0E7SUFDSSxlQUFlO0dBQ2hCLHNCQUFzQjtBQUN6Qjs7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCOztBQUNBLDJCQUEyQjs7QUFDM0I7QUFDQSxlQUFlLGtCQUFrQixDQUFDO0FBQ2xDOztBQUNBO0FBQ0EsV0FBVztBQUNYLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLHlCQUF5QjtBQUN6QixlQUFlO0FBQ2Y7O0FBQ0E7QUFDQSxXQUFXO0FBQ1gsY0FBYztBQUNkLFdBQVc7QUFDWCxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjs7QUFDQSxpQkFBaUIsVUFBVSxDQUFDOztBQUM1QjtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1YsZ0JBQWdCO0FBQ2hCOztBQUNBO0FBQ0EsV0FBVztBQUVYLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQjs7QUFDQSwrQkFBK0IsY0FBYyxFQUFFOztBQUUvQyw2QkFBNkIsVUFBVSxDQUFDOztBQUN4QztBQUNBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCOztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7O0FBRUEsdUJBQXVCOztBQUN2QjtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWDs7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCxjQUFjO0FBQ2QsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVCx1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixXQUFXO0FBQ1g7O0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCLENBQUM7QUFDekM7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLGNBQWM7QUFDZCxlQUFlO0FBQ2YsY0FBYztBQUNkLGVBQWU7QUFDZixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixNQUFNO0FBQ04sV0FBVztBQUNYOztBQUNBLGtCQUFrQiw0QkFBNEIsQ0FBQzs7QUFDL0M7QUFDQSxnQkFBZ0IsU0FBUyxDQUFDO0FBQzFCOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUNBO0FBQ0EsVUFBVTtBQUNWLFlBQVk7QUFDWiw2QkFBNkI7QUFFN0IsZ0JBQWdCO0FBQ2hCOztBQUNBLHFCQUFxQjs7QUFFckIsMkJBQTJCOztBQUMzQixpQkFBaUIsZUFBZSxDQUFDOztBQUNqQztBQUNBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1QsVUFBVTtBQUNWOztBQUNBLHNCQUFzQixVQUFVLENBQUM7O0FBQ2pDO0FBQ0Esa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWCx5QkFBeUI7QUFDekIsNEJBQTRCO0FBQzVCLGVBQWU7QUFDZixlQUFlO0FBQ2YsV0FBVztBQUNYLG1CQUFtQjtBQUNuQixXQUFXO0FBQ1gsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsdUNBQXVDO0FBQ3ZDOztBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDO0FBQzdEOztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsV0FBVztBQUNYLGdCQUFnQjtBQUNoQjtBQUNBOztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6QixVQUFVO0FBQ1YsVUFBVTtBQUNWOztBQUNBLHlCQUF5Qjs7QUFDekI7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLFVBQVU7QUFDVixlQUFlO0FBQ2YsMkNBQTJDO0FBQzNDLGtCQUFrQjtBQUNsQjs7QUFDQSxhQUFhLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQzs7QUFDeEQsbUJBQW1CLGFBQWEsQ0FBQyIsImZpbGUiOiJmb290YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYSxcclxuYTpob3ZlcixcclxuYTpmb2N1cyxcclxuYTphY3RpdmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYSxcclxuYTphY3RpdmUsXHJcbmE6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcclxuICAgIC1tcy10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5pbWcge1xyXG5tYXgtd2lkdGg6IDEwMCU7XHJcbmhlaWdodDogYXV0bztcclxufVxyXG5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICAgLyogbWluLWhlaWdodDogMTAwdmg7Ki9cclxufVxyXG4uZm9vdGVyIHtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEwNWRlZywjNmU5OWU2ICwjMDkzYzk0KTtcclxucGFkZGluZy10b3A6IDgwcHg7XHJcbnBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcbi8qRU5EIEZPT1RFUiBTT0NJQUwgREVTSUdOKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7IFxyXG4uc2luZ2xlX2Zvb3RlcnttYXJnaW4tYm90dG9tOjMwcHg7fVxyXG59XHJcbi5zaW5nbGVfZm9vdGVyIGg0IHtcclxuY29sb3I6ICNmZmY7XHJcbm1hcmdpbi10b3A6IDA7XHJcbm1hcmdpbi1ib3R0b206IDI1cHg7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc2luZ2xlX2Zvb3RlciBoNDo6YWZ0ZXIge1xyXG5jb250ZW50OiBcIlwiO1xyXG5kaXNwbGF5OiBibG9jaztcclxuaGVpZ2h0OiAycHg7XHJcbndpZHRoOiA0MHB4O1xyXG5iYWNrZ3JvdW5kOiAjZmZmO1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5zaW5nbGVfZm9vdGVyIHB7Y29sb3I6I2ZmZjt9XHJcbi5zaW5nbGVfZm9vdGVyIHVsIHtcclxubWFyZ2luOiAwO1xyXG5wYWRkaW5nOiAwO1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zaW5nbGVfZm9vdGVyIHVsIGxpIGEge1xyXG5jb2xvcjogI2ZmZjtcclxuLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5saW5lLWhlaWdodDogMzZweDtcclxuZm9udC1zaXplOiAxNXB4O1xyXG50ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uc2luZ2xlX2Zvb3RlciB1bCBsaSBhOmhvdmVyIHsgY29sb3I6ICNmZjM2NjY7IH1cclxuXHJcbi5zaW5nbGVfZm9vdGVyX2FkZHJlc3MgdWwgbGl7Y29sb3I6I2ZmZjt9XHJcbi5zaW5nbGVfZm9vdGVyX2FkZHJlc3MgdWwgbGkgc3BhbiB7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmNvbG9yOiAjZmZmO1xyXG5saW5lLWhlaWdodDogMjhweDtcclxufVxyXG4uY29udGFjdF9zb2NpYWwgdWwge1xyXG5saXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcclxubWFyZ2luOiAwO1xyXG5wYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKlNUQVJUIE5FV1NMRVRURVIgQ1NTKi9cclxuLnN1YnNjcmliZSB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbm1hcmdpbi10b3A6IDE1cHg7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbi5zdWJzY3JpYmVfX2lucHV0IHtcclxuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5jb2xvcjogIzMzMztcclxuZGlzcGxheTogYmxvY2s7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxuZm9udC13ZWlnaHQ6IDUwMDtcclxuaGVpZ2h0OiA2MHB4O1xyXG5sZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbm1hcmdpbjogMDtcclxucGFkZGluZzogMCAxNTBweCAwIDIwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkgeyBcclxuLnN1YnNjcmliZV9faW5wdXR7cGFkZGluZzogMCA1MHB4IDAgMjBweDt9XHJcbn1cclxuXHJcbi5zdWJzY3JpYmVfX2J0biB7XHJcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5ib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwO1xyXG5jb2xvcjogIzAxYzdlOTtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG5kaXNwbGF5OiBibG9jaztcclxuZm9udC1zaXplOiAyMHB4O1xyXG5oZWlnaHQ6IDYwcHg7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxucmlnaHQ6IDA7XHJcbnRvcDogMDtcclxud2lkdGg6IDYwcHg7XHJcbn1cclxuLnN1YnNjcmliZV9fYnRuIGl7dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwczt9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkgeyBcclxuLnN1YnNjcmliZV9fYnRue3JpZ2h0OjBweDt9XHJcbn1cclxuXHJcbi5zdWJzY3JpYmVfX2J0bjpob3ZlciBpe1xyXG5jb2xvcjojZmYzNjY2O1xyXG59XHJcbmJ1dHRvbiB7XHJcbnBhZGRpbmc6IDA7XHJcbmJvcmRlcjogbm9uZTtcclxuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcclxuYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4vKkVORCBORVdTTEVUVEVSIENTUyovXHJcblxyXG4vKlNUQVJUIFNPQ0lBTCBQUk9GSUxFIENTUyovXHJcbi5zb2NpYWxfcHJvZmlsZSB7bWFyZ2luLXRvcDo0MHB4O31cclxuLnNvY2lhbF9wcm9maWxlIHVse1xyXG5saXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcclxubWFyZ2luOiAwO1xyXG5wYWRkaW5nOiAwO1xyXG59XHJcbi5zb2NpYWxfcHJvZmlsZSB1bCBsaXtmbG9hdDpsZWZ0O31cclxuLnNvY2lhbF9wcm9maWxlIHVsIGxpIGEge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmJvcmRlcjogMHB4O1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG5tYXJnaW46IDBweCA1cHg7XHJcbmZvbnQtc2l6ZTogMThweDtcclxuY29sb3I6ICNmZmY7XHJcbmJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbndpZHRoOiA1MHB4O1xyXG5oZWlnaHQ6IDUwcHg7XHJcbmxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5kaXNwbGF5OiBibG9jaztcclxuYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkgeyBcclxuLnNvY2lhbF9wcm9maWxlIHVsIGxpIGF7bWFyZ2luLXJpZ2h0OjEwcHg7bWFyZ2luLWJvdHRvbToxMHB4O31cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHsgXHJcbi5zb2NpYWxfcHJvZmlsZSB1bCBsaSBhe1xyXG53aWR0aDo0MHB4O1xyXG5oZWlnaHQ6NDBweDtcclxubGluZS1oZWlnaHQ6NDBweDtcclxufVxyXG59XHJcbi5zb2NpYWxfcHJvZmlsZSB1bCBsaSBhOmhvdmVye1xyXG5iYWNrZ3JvdW5kOiNmZjM2NjY7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNmZjM2NjY7XHJcbmNvbG9yOiNmZmY7XHJcbmJvcmRlcjowcHg7XHJcbn1cclxuLypFTkQgU09DSUFMIFBST0ZJTEUgQ1NTKi9cclxuLmNvcHlyaWdodCB7XHJcbm1hcmdpbi10b3A6IDcwcHg7XHJcbnBhZGRpbmctdG9wOiA0MHB4O1xyXG5jb2xvcjojZmZmO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbmJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNCk7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29weXJpZ2h0IGF7Y29sb3I6IzAxYzdlOTt0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlIDBzO31cclxuLmNvcHlyaWdodCBhOmhvdmVye2NvbG9yOiNmZjM2NjY7fSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map