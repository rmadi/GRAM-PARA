(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = __webpack_require__(/*! /Users/achref/Desktop/Projects/GRAM-PARA/client/src/main.ts */"zUnb");
=======
module.exports = __webpack_require__(/*! C:\Users\RMADI\OneDrive\Bureau\elyes\GRAM-PARA\client\src\main.ts */"zUnb");
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685


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
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProductComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ProductComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_ng_template_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.AddToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductComponent_ng_template_48_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.AddToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductComponent {
    constructor(prodservice, router) {
        this.prodservice = prodservice;
        this.router = router;
        this.product = [];
        this.inCart = false;
    }
    ngOnInit() {
        this.id = this.router.snapshot.params;
        this.CheckIncart();
        this.getproducts();
    }
    getproducts() {
        this.prodservice.getOneProduct(this.id.id).subscribe((data) => {
            this.product = data;
            console.log('data', this.product);
        });
    }
    AddToCart() {
        var cookies = document.cookie;
        if (cookies.includes('cart')) {
            var valueCook = this.cookiefinder(cookies);
            var objOfCookie = JSON.parse(valueCook);
            objOfCookie[objOfCookie.length] = { id: this.id.id, quantity: 1 };
            var orderForCookie = JSON.stringify(objOfCookie);
            document.cookie = 'cart=' + orderForCookie;
        }
        else {
            var order = [{ id: this.id.id, quantity: 1 }];
            var orderForCookie = JSON.stringify(order);
            document.cookie = 'cart=' + orderForCookie;
        }
        this.CheckIncart();
    }
    CheckIncart() {
        var cookies = String(document.cookie);
        console.log(cookies);
        if (cookies.includes(this.id.id) && !cookies.includes('"id":"' + this.id.id + '","quantity":0')) {
            console.log("here");
            this.inCart = true;
        }
        console.log("ook");
    }
    cookiefinder(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('cart')) {
                found = strx[i].replace('cart=', '');
            }
        }
        return found;
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 50, vars: 12, consts: [[1, "mb-5", 2, "margin-top", "100px", "margin-bottom", "100px"], [1, "row"], [1, "col-md-6", "mb-4", "mb-md-0"], [1, "mdb-lightbox"], [1, "row", "product-gallery", "mx-1"], [1, "col-12", "mb-0"], [1, "view", "overlay", "rounded", "z-depth-1", "main-img"], ["target", "_blank", 3, "href"], [1, "img-fluid", "z-depth-1", "imgg", 3, "src"], [1, "col-md-6"], [1, "title"], [1, "pt-1"], ["id", "reduction_percent_display"], [1, "text-danger", "mr-1"], ["id", "reduction_percent"], [1, "text-grey"], [1, "pt-2"], [1, "table-responsive", "mb-2"], [1, "table", "table-sm", "table-borderless"], [1, "pl-0"], [1, "def-number-input", "number-input", "safari_only", "mb-0"], ["onclick", "this.parentNode.querySelector('input[type=number]').stepDown()", 1, "btn", "btn-success"], ["min", "0", "name", "quantity", "value", "1", "type", "number", 1, "quantityy"], ["onclick", "this.parentNode.querySelector('input[type=number]').stepUp()", 1, "btn", "btn-success"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["alreadyAdded", ""], ["addtoCart", ""], ["type", "button", 1, "btn", "btn-secondary", 2, "font-weight", "200", "color", "white", "background-color", "#e1b12c", "border", "#e1b12c", "margin-bottom", "100px", 3, "click"], [1, "fas", "fa-check"], ["type", "button", 1, "btn", "btn-success", 2, "font-weight", "200", "color", "white", "margin-bottom", "100px", 3, "click"], [1, "fa", "fa-cart-plus"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "figure", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "-20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ProductComponent_div_45_Template, 1, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProductComponent_ng_template_46_Template, 3, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProductComponent_ng_template_48_Template, 3, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.producer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.pricePromo, " DT TTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product.price, " DT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.stock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inCart)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".text-danger[_ngcontent-%COMP%] {\n    color: red;\n    font-weight: 300;\n    font-size:200%;  \n} \n#reduction_percent_display[_ngcontent-%COMP%] {\n     color: red;\n    font-weight: 500;\n    font-size:150%;  \n} \n.text-grey[_ngcontent-%COMP%] {\n    font-size:100%;\n} \n.img-fluid[_ngcontent-%COMP%]{\n    width:40%;\n    margin-left: 40%;\n} \n.title[_ngcontent-%COMP%]{\n    font: 1.2em sans-serif;\n    \n} \n.quantityy[_ngcontent-%COMP%] {\n    border: 1px solid;\n    width: 60px;\n    height: 39px;\n    padding: 0 6px;\n    float: left;\n    border: 1px solid #d6d4d4;\n    line-height: 27px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0tBQ0ssVUFBVTtJQUNYLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7O0FBRTFCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAudGV4dC1kYW5nZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6MjAwJTsgIFxufSBcbiNyZWR1Y3Rpb25fcGVyY2VudF9kaXNwbGF5IHtcbiAgICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZToxNTAlOyAgXG59XG4udGV4dC1ncmV5IHtcbiAgICBmb250LXNpemU6MTAwJTtcbn1cbi5pbWctZmx1aWR7XG4gICAgd2lkdGg6NDAlO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG59XG4udGl0bGV7XG4gICAgZm9udDogMS4yZW0gc2Fucy1zZXJpZjtcbiAgICBcbn1cbi5xdWFudGl0eXkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogMzlweDtcbiAgICBwYWRkaW5nOiAwIDZweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDZkNGQ0O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "368S":
/*!*******************************************************!*\
  !*** ./src/app/components/singin/singin.component.ts ***!
  \*******************************************************/
/*! exports provided: SinginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinginComponent", function() { return SinginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function SinginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function SinginComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wrong Password Or Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SinginComponent {
    constructor(authservice, route) {
        this.authservice = authservice;
        this.route = route;
        this.email = "";
        this.password = "";
        this.alertCheck = false;
    }
    ngOnInit() {
    }
    getEmail(event) {
        const { target } = event;
        this.email = target.value;
    }
    getPassword(event) {
        const { target } = event;
        this.password = target.value;
    }
    onsubmit() {
        this.authservice.login(this.email, this.password).subscribe((data) => {
            console.log(data);
<<<<<<< HEAD
            if (data.role == 'client') {
                document.location.href = "/";
=======
            if (data.message == 'succeess') {
                // document.location.href="/";
                this.goToadmin();
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
            }
            else if (data.role == 'admin') {
                window.location.href = window.location.origin + '/admin/products';
            }
            {
                console.log('herer');
                this.alertCheck = true;
            }
        });
        this.goToadmin();
    }
    goToRegister() {
        this.route.navigate(["register"]);
    }
    goToadmin() {
        this.route.navigate(["admin"]);
    }
}
SinginComponent.ɵfac = function SinginComponent_Factory(t) { return new (t || SinginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["authentication"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SinginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SinginComponent, selectors: [["app-singin"]], decls: 25, vars: 2, consts: [[1, "card"], [1, "title"], [1, "subtitle"], ["href", ""], [1, "or"], [1, "email-login"], [4, "ngIf", "ngIfThen"], ["for", "email"], ["type", "text", "placeholder", "Enter Email", "name", "email", "ngModal", "", "required", "", 3, "change"], ["for", "psw"], ["type", "password", "placeholder", "Enter Password", "name", "pws", "ngModal", "", "required", "", 3, "change"], [1, "btn", "btn-success", 2, "margin-left", "30%", "width", "40%", "height", "15%", 3, "click"], ["alertMe", ""], ["role", "alert", 1, "alert", "alert-danger"]], template: function SinginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SinginComponent_div_12_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SinginComponent_Template_input_change_16_listener($event) { return ctx.getEmail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SinginComponent_Template_input_change_20_listener($event) { return ctx.getPassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SinginComponent_Template_button_click_21_listener() { return ctx.onsubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SinginComponent_ng_template_23_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alertCheck)("ngIfThen", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["body[_ngcontent-%COMP%] {\n    background-color: rgb(228, 229, 247);\n  }\n  .social-login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 24px;\n  }\n  a[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n  .card[_ngcontent-%COMP%] {\n    font-family: sans-serif;\n    width: 40%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 3em;\n    margin-bottom:3em;\n    border-radius: 10px;\n    background-color: #ffff;\n    padding: 1.8rem;\n    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);\n  }\n  .title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: bold;\n    margin: 0;\n  }\n  .subtitle[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: bold;\n  }\n  .btn-text[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .social-login[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    gap: 5px;\n  }\n  .google-btn[_ngcontent-%COMP%] {\n    background: #fff;\n    border: solid 2px rgb(245 239 239);\n    border-radius: 8px;\n    font-weight: bold;\n    display: flex;\n    padding: 10px 10px;\n    flex: auto;\n    align-items: center;\n    gap: 5px;\n    justify-content: center;\n  }\n  .fb-btn[_ngcontent-%COMP%] {\n    background: #fff;\n    border: solid 2px rgb(69, 185, 104);\n    border-radius: 8px;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n  }\n  .or[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: bold;\n    border-bottom: 2px solid rgb(245 239 239);\n    line-height: 0.1em;\n    margin: 25px 0;\n  }\n  .or[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    background: #fff;\n    padding: 0 10px;\n  }\n  .email-login[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .email-login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: rgb(170 166 166);\n  }\n  input[type=\"text\"][_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%] {\n    padding: 15px 20px;\n    margin-top: 8px;\n    margin-bottom: 15px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-sizing: border-box;\n  }\n  .cta-btn[_ngcontent-%COMP%] {\n    background-color: rgb(38, 87, 74);\n    color: white;\n    padding: 18px 20px;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    width: 100%;\n    border-radius: 10px;\n    border: none;\n  }\n  .forget-pass[_ngcontent-%COMP%] {\n    text-align: center;\n    display: block;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsMkNBQTJDO0VBQzdDO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFNBQVM7RUFDWDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFFBQVE7RUFDVjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFFQTs7SUFFRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEIiLCJmaWxlIjoic2luZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMjksIDI0Nyk7XG4gIH1cbiAgLnNvY2lhbC1sb2dpbiBpbWcge1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLmNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDNlbTtcbiAgICBtYXJnaW4tYm90dG9tOjNlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICAgIHBhZGRpbmc6IDEuOHJlbTtcbiAgICBib3gtc2hhZG93OiAycHggNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIFxuICAudGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnN1YnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmJ0bi10ZXh0IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5zb2NpYWwtbG9naW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gIH1cbiAgXG4gIC5nb29nbGUtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYigyNDUgMjM5IDIzOSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIGZsZXg6IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuZmItYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogc29saWQgMnB4IHJnYig2OSwgMTg1LCAxMDQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLm9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNDUgMjM5IDIzOSk7XG4gICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xuICAgIG1hcmdpbjogMjVweCAwO1xuICB9XG4gIC5vciBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuICBcbiAgLmVtYWlsLWxvZ2luIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmVtYWlsLWxvZ2luIGxhYmVsIHtcbiAgICBjb2xvcjogcmdiKDE3MCAxNjYgMTY2KTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1cInRleHRcIl0sXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIC5jdGEtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDg3LCA3NCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE4cHggMjBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5mb3JnZXQtcGFzcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ "3C8t":
/*!***********************************************************************!*\
  !*** ./src/app/components/categorie-page/categorie-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriePageComponent", function() { return CategoriePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");
<<<<<<< HEAD
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item-card/item-card.component */ "cSiL");
=======
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item-card/item-card.component */ "cSiL");
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685




<<<<<<< HEAD
function CategoriePageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-item-card", 13);
=======

function CategoriePageComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-item-card", 14);
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productTitle", product_r2.title)("Productprice", product_r2.price)("productImage", product_r2.imageUrl)("productId", product_r2._id);
} }
<<<<<<< HEAD
function CategoriePageComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriePageComponent_div_13_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pageProducts($event); });
=======
function CategoriePageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriePageComponent_div_14_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pageProducts($event); });
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r5 + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 2);
} }
class CategoriePageComponent {
    constructor(prodservice, route) {
        this.prodservice = prodservice;
        this.route = route;
        this.products = [];
        this.Pageproducts = [];
        this.pages = [];
    }
    ngOnInit() {
        this.getproducts();
    }
    pageProducts(event) {
        var { target } = event;
        if (target) {
            var pageNum = Number(target.id) - 1;
            this.Pageproducts = this.products.slice(pageNum * 8, pageNum * 8 + 8);
        }
    }
    getproducts() {
        this.prodservice.getproduct().subscribe((data) => {
            this.products = data;
            this.Pageproducts = this.products.slice(0, 8);
            this.pages = Array(Math.round(this.products.length / 8) - 1);
        });
    }
}
<<<<<<< HEAD
CategoriePageComponent.ɵfac = function CategoriePageComponent_Factory(t) { return new (t || CategoriePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
CategoriePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriePageComponent, selectors: [["app-categorie-page"]], decls: 17, vars: 2, consts: [[1, "container", "categories"], [1, "row", 2, "width", "120%", "margin-top", "10px"], [1, "row"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example", 2, "margin-top", "30px"], [1, "pagination", "justify-content-center"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", 1, "page-link"], [1, "page-item", "active"], ["href", "#", "id", "1", 1, "page-link", 3, "click"], [1, "page-item"], ["href", "#", 1, "page-link"], [1, "col-md-4", "try", 2, "margin-top", "15px"], [3, "productTitle", "Productprice", "productImage", "productId"], ["href", "#", 1, "page-link", 3, "id", "click"]], template: function CategoriePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CategoriePageComponent_div_4_Template, 3, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriePageComponent_Template_a_click_11_listener($event) { return ctx.pageProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CategoriePageComponent_div_13_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Next");
=======
CategoriePageComponent.ɵfac = function CategoriePageComponent_Factory(t) { return new (t || CategoriePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CategoriePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriePageComponent, selectors: [["app-categorie-page"]], decls: 18, vars: 2, consts: [[1, "container", "categories"], [2, "font-size", "17px", "color", "#95a5a6"], [1, "row", 2, "width", "120%", "margin-top", "10px"], [1, "row"], [4, "ngFor", "ngForOf"], ["aria-label", "Page navigation example", 2, "margin-top", "30px"], [1, "pagination", "justify-content-center"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", 1, "page-link"], [1, "page-item", "active"], ["href", "#", "id", "1", 1, "page-link", 3, "click"], [1, "page-item"], ["href", "#", 1, "page-link"], [1, "col-md-4", "try", 2, "margin-top", "15px"], [3, "productTitle", "Productprice", "productImage", "productId"], ["href", "#", 1, "page-link", 3, "id", "click"]], template: function CategoriePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CategoriePageComponent_div_5_Template, 3, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriePageComponent_Template_a_click_12_listener($event) { return ctx.pageProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CategoriePageComponent_div_14_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Next");
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
<<<<<<< HEAD
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Pageproducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_3__["ItemCardComponent"]], styles: [".categories[_ngcontent-%COMP%]{\n    margin-bottom: 70px;\n    margin-left: 9%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQiIsImZpbGUiOiJjYXRlZ29yaWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3JpZXN7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICBtYXJnaW4tbGVmdDogOSU7XG59XG5cblxuXG4gICJdfQ== */"] });
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Pageproducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__["ItemCardComponent"]], styles: [".categories[_ngcontent-%COMP%]{\r\n    margin-bottom: 70px;\r\n    margin-left: 9%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQiIsImZpbGUiOiJjYXRlZ29yaWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3JpZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDklO1xyXG59XHJcblxyXG5cclxuXHJcbiAgIl19 */"] });
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685


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

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ProductService {
    constructor(http) {
        this.http = http;
        this.productData = [];
    }
    getproduct() {
        return this.http.get("http://localhost:5555/product");
    }
    addproduct(title, category, price, pricePromo, producer, imageUrl, description) {
        return this.http.post("http://localhost:5555/product/create", { title, category, price, pricePromo, producer, imageUrl, description });
    }
    DeleteProduct(id) {
        return this.http.delete("http://localhost:5555/product/" + id);
    }
    editProduct(id, title, price, pricepromo, imageUrl, description, producer, category, stock) {
        return this.http.put("http://localhost:5555/product/" + id, { title, price, pricepromo, imageUrl, description, producer, category, stock });
    }
    getOneProduct(id) {
        return this.http.get("http://localhost:5555/product/" + id);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KxqT":
/*!*********************************************************!*\
  !*** ./src/app/components/setting/setting.component.ts ***!
  \*********************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class SettingComponent {
    constructor(editUserService, authenticationservice) {
        this.editUserService = editUserService;
        this.authenticationservice = authenticationservice;
        this.id = "";
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.phoneNumber = '';
        this.city = '';
        this.address1 = '';
        this.address2 = '';
        this.zipCode = '';
        this.role = '';
    }
    ngOnInit() {
        var temp = document.cookie;
        if (temp.includes('GRAM')) {
            this.getDataUser(this.cookiefinderuser(temp));
        }
    }
    changeData(event) {
        const { target } = event;
        if (target.id == 'firstNamee') {
            this.firstName = target.value;
        }
        if (target.id == 'lastNamee') {
            this.lastName = target.value;
        }
        if (target.id == 'emaill') {
            this.email = target.value;
        }
        if (target.id == 'passwordd') {
            this.password = target.value;
        }
        if (target.id == 'phone') {
            this.phoneNumber = target.value;
        }
        if (target.id == 'city') {
            this.city = target.value;
        }
        if (target.id == 'adress1') {
            this.address1 = target.value;
        }
        if (target.id == 'adress2') {
            this.address2 = target.value;
        }
        if (target.id == 'zipCode') {
            this.zipCode = target.value;
        }
    }
    editUser() {
        this.editUserService.editUser(this.id, this.firstName, this.lastName, this.email, this.password, this.phoneNumber, this.city, this.address1, this.address2, this.zipCode).subscribe((data) => {
            console.log(data);
        });
    }
    getDataUser(cook) {
        this.authenticationservice.checkLog(cook).subscribe((res) => {
            console.log('s', res);
            this.id = res._id;
        });
    }
    cookiefinderuser(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('GRAM')) {
                found = strx[i].replace('GRAM=', '');
            }
        }
        return found;
    }
}
SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["authentication"])); };
SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["app-setting"]], decls: 29, vars: 0, consts: [[1, "container", "register-form", 2, "margin-top", "70px", "margin-bottom", "70px", "margin-left", "30%"], [1, "form"], [1, "form-content"], [1, "row"], [1, "col-md-4"], [1, "form-group"], ["type", "text", "placeholder", "First Name... ", "id", "firstNamee", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Last Name... ", "id", "lastNamee", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Email...", "id", "emaill", 1, "form-control", 3, "change"], ["type", "password", "placeholder", "Password...", "id", "passwordd", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "ZipCode...", "id", "zipCode", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "PhoneNumber...", "id", "phone", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "City...", "id", "city", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Adress 1...", "id", "adress1", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Adress 2...", "id", "adress2", 1, "form-control", 3, "change"], [1, "row", "justify-content-center"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-success", 2, "margin-top", "25px", 3, "click"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_7_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_9_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_11_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_13_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_15_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_18_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_20_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_22_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SettingComponent_Template_input_change_24_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingComponent_Template_button_click_27_listener() { return ctx.editUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Submit User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: [".button[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 15px 25px;\n  font-size: 24px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4CAF50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n}\n\n.button[_ngcontent-%COMP%]:hover {background-color: #3e8e41}\n\n.button[_ngcontent-%COMP%]:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBLGVBQWUseUJBQXlCOztBQUV4QztFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNldHRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDlweCAjOTk5O1xufVxuXG4uYnV0dG9uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxfVxuXG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufSJdfQ== */"] });


/***/ }),

/***/ "QWKc":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function CartComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_12_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const product_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.decremntQuant(product_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_12_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const product_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.incrementquant(product_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_12_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const product_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deleteFromCart(product_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r1.price, " DT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", product_r1.quantity);
} }
class CartComponent {
    constructor(prodservice) {
        this.prodservice = prodservice;
        this.total = 0;
        this.products = [];
        this.cookie = {};
        this.redirect = "../singin";
    }
    ngOnInit() {
        if (this.cookiefinderGRAM(document.cookie).length > 10) {
            this.redirect = "payment";
        }
        this.GetData();
    }
    cookiefinderGRAM(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('GRAM')) {
                found = strx[i].replace('GRAM=', '');
            }
        }
        return found;
    }
    GetData() {
        var cookies = document.cookie;
        if (cookies.includes('cart')) {
            var valueCook = this.cookiefinder(cookies);
            var cookie = JSON.parse(valueCook);
            var productsLocal = [];
            for (var i = 0; i < cookie.length; i++) {
                this.total = 0;
                this.cookie = cookie[i];
                if (cookie[i] != null && cookie[i].quantity > 0) {
                    this.prodservice.getOneProduct(cookie[i].id).subscribe((data) => {
                        var res;
                        res = data;
                        res.quantity = this.cookie.quantity;
                        productsLocal.push(data);
                        this.total += this.cookie.quantity * res.price;
                    });
                }
            }
            this.products = productsLocal;
        }
    }
    incrementquant(id) {
        var cookies = document.cookie;
        if (cookies.includes('cart')) {
            var valueCook = this.cookiefinder(cookies);
            var cookie = JSON.parse(valueCook);
            for (var i = 0; i < cookie.length; i++) {
                if (cookie[i] != null && cookie[i].id == id) {
                    cookie[i].quantity += 1;
                }
            }
            var orderForCookie = JSON.stringify(cookie);
            document.cookie = 'cart=' + orderForCookie;
            this.GetData();
        }
    }
    decremntQuant(id) {
        var cookies = document.cookie;
        if (cookies.includes('cart')) {
            var valueCook = this.cookiefinder(cookies);
            var cookie = JSON.parse(valueCook);
            for (var i = 0; i < cookie.length; i++) {
                if (cookie[i] != null && cookie[i].id == id && cookie[i].quantity > 0) {
                    cookie[i].quantity -= 1;
                }
            }
            var orderForCookie = JSON.stringify(cookie);
            document.cookie = 'cart=' + orderForCookie;
            this.GetData();
        }
    }
    deleteFromCart(id) {
        var cookies = document.cookie;
        if (cookies.includes('cart')) {
            var valueCook = this.cookiefinder(cookies);
            var cookie = JSON.parse(valueCook);
            for (var i = 0; i < cookie.length; i++) {
                if (cookie[i] != null && cookie[i].id == id) {
                    delete cookie[i];
                }
            }
            var orderForCookie = JSON.stringify(cookie);
            document.cookie = 'cart=' + orderForCookie;
            this.GetData();
        }
    }
    cookiefinder(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('cart')) {
                found = strx[i].replace('cart=', '');
            }
        }
        return found;
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 23, vars: 5, consts: [[1, "container-fluid", 2, "border", "0.1px solid #b2bec3", "margin-top", "50px", "width", "80%", "margin-bottom", "10px"], [1, "row", "product", 2, "border-bottom", "0.5px solid #b2bec3", "padding", "15px", "font-size", "17px", "font-weight", "200"], [1, "col-md-2"], [1, "col-lg-2", 2, "margin", "auto"], [1, "col-md-2", 2, "margin", "auto"], [4, "ngFor", "ngForOf"], [1, "container-fluid", 2, "margin-bottom", "50px"], [1, "row", "justify-content-end"], [1, "col-2", 2, "float", "right"], [2, "font-size", "18px", "font-weight", "400"], [3, "routerLink"], ["type", "button", 1, "btn", "btn-primary", 2, "margin-top", "10px", 3, "routerLink"], ["height", "120px", "width", "100px", 3, "src"], [1, "col-md-2", 2, "margin", "auto", "align-items", "center"], ["type", "button", 1, "btn", "btn-info", 2, "margin-right", "5px", 3, "click"], ["disabled", "", 2, "width", "50px", 3, "value"], ["type", "button", 1, "btn", "btn-info", 2, "margin-left", "5px", 3, "click"], ["type", "button", 2, "color", "#d63031", "border", "none", "background-color", "transparent", 3, "click"], [1, "fas", "fa-trash", 2, "font-size", "20px", "color", "#d63031", "border", "none", "background-color", "transparent"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Product title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Quantity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CartComponent_div_12_Template, 19, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total : ", ctx.total, " Dt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.redirect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.redirect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.redirect);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["a[_ngcontent-%COMP%]{\n    color: white;\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekIiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ "RMJ0":
/*!***********************************************************************!*\
  !*** ./src/app/components/order-complete/order-complete.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrderCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCompleteComponent", function() { return OrderCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OrderCompleteComponent {
    constructor() { }
    ngOnInit() {
    }
}
OrderCompleteComponent.ɵfac = function OrderCompleteComponent_Factory(t) { return new (t || OrderCompleteComponent)(); };
OrderCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderCompleteComponent, selectors: [["app-order-complete"]], decls: 8, vars: 0, consts: [[1, "container", 2, "margin-top", "50px", "width", "80%", "margin-bottom", "10px", "padding", "29px"], [2, "color", "#27ae60", "font-size", "50px", "width", "100%", "margin-top", "120px", "margin-bottom", "200px", "text-align", "center"], [1, "far", "fa-check-circle", 2, "font-size", "70px"], [2, "font-size", "20px", "color", "#95a5a6"]], template: function OrderCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Congratulations! Your Order has been placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We Will Contact you to keep you updated about your order .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1jb21wbGV0ZS5jb21wb25lbnQuY3NzIn0= */"] });


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
<<<<<<< HEAD
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footbar/footbar.component */ "kkVY");
=======
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footbar/footbar.component */ "kkVY");
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685






function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
} }
function AppComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footbar");
} }
class AppComponent {
    constructor() {
        this.title = 'gram-para';
        this.showNavFoot = true;
    }
    ngOnInit() {
        if (window.location.href.includes('admin')) {
            this.showNavFoot = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
<<<<<<< HEAD
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["admin", ""], ["home", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavFoot)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_5__["FootbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
=======
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footbar");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_3__["FootbarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685


/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class RegisterComponent {
    // data:Object = {firstName:'', lastName:'', email:'', password:'', phone:'', city:'',
    //  adress1:'', adress2:'', zipCode:'', role:'' }
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userData = {};
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.rpassword = '';
        this.phone = '';
        this.city = '';
        this.adress1 = '';
        this.adress2 = '';
        this.zipCode = '';
        this.role = '';
    }
    ngOnInit() { }
    changeData(event) {
        const { target } = event;
        if (target) {
            if (target.id == 'firstName') {
                // console.log((target as HTMLButtonElement).value)
                this.firstName = target.value;
            }
            if (target.id == 'lastName') {
                // console.log((target as HTMLButtonElement).value)
                this.lastName = target.value;
            }
            if (target.id == 'email') {
                // console.log((target as HTMLButtonElement).value)
                this.email = target.value;
            }
            if (target.id == 'password') {
                // console.log((target as HTMLButtonElement).value)
                this.password = target.value;
            }
            if (target.id == 'rpassword') {
                // console.log((target as HTMLButtonElement).value)
                this.rpassword = target.value;
            }
            if (target.id == 'phone') {
                // console.log((target as HTMLButtonElement).value)
                this.phone = target.value;
            }
            if (target.id == 'city') {
                // console.log((target as HTMLButtonElement).value)
                this.city = target.value;
            }
            if (target.id == 'adress1') {
                // console.log((target as HTMLButtonElement).value)
                this.adress1 = target.value;
            }
            if (target.id == 'adress2') {
                // console.log((target as HTMLButtonElement).value)
                this.adress2 = target.value;
            }
            if (target.id == 'zipCode') {
                // console.log((target as HTMLButtonElement).value)
                this.zipCode = target.value;
            }
            if (target.id == 'role') {
                // console.log((target as HTMLButtonElement).value)
                this.role = target.value;
            }
        }
    }
    postFrom() {
        this.userService.postFrom({ firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password, phone: this.phone, city: this.city, adress1: this.adress1,
            adress2: this.adress2, zipCode: this.zipCode, role: this.role }).subscribe(() => console.log('your data is posted'));
        this.router.navigate(["singin"]);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 35, vars: 0, consts: [[1, "container", "register-form"], [1, "form"], [1, "form-content"], [1, "note"], [1, "row"], [1, "col"], [1, "form-group"], ["type", "text", "placeholder", "Your First Name *", "id", "firstName", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Your Last Name *", "id", "lastName", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Email*", "id", "email", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Role  Admin or client *", "id", "role", 1, "form-control", 3, "change"], ["type", "password", "placeholder", "Password *", "id", "password", 1, "form-control", 3, "change"], ["type", "password", "placeholder", "Repeat your password *", "id", "rpassword", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Phone Number *", "id", "phone", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Zip code *", "id", "zipCode", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "City *", "id", "city", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Adress 1 *", "id", "adress1", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "Adress 2 *", "id", "adress2", 1, "form-control", 3, "change"], [1, "row", "justify-content-center"], [1, "col-md-3"], ["type", "button", 1, "btn", "btn-success", 2, "width", "180px", "height", "50px", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Register please ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_10_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_12_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_14_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_16_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_18_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_20_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_22_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_24_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_26_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_28_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegisterComponent_Template_input_change_30_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_33_listener() { return ctx.postFrom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: [".note[_ngcontent-%COMP%]\n{\n    text-align: center;\n    font-size: 30px;\n    background-color: white;\n    color: #000;\n    font-weight: bold;\n    line-height: 20px;\n    padding:  30px 10px;\n    margin: 20px;\n}\n.form-content[_ngcontent-%COMP%]\n{\n    padding: 10%;\n    border: 1px solid #ced4da;\n    margin-bottom: 2%;\n}\n.form-control[_ngcontent-%COMP%]{\n    border-radius:10px;\n}\n.btnSubmit[_ngcontent-%COMP%]\n{\n    border:none;\n    border-radius:1.5rem;\n    padding: 1%;\n    width: 20%;\n    cursor: pointer;\n    background: #0b6623;\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztBQUNmIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZVxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogIDMwcHggMTBweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG4uZm9ybS1jb250ZW50XG57XG4gICAgcGFkZGluZzogMTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG4uZm9ybS1jb250cm9se1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbn1cbi5idG5TdWJtaXRcbntcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOjEuNXJlbTtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICB3aWR0aDogMjAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMGI2NjIzO1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */"] });


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
/* harmony import */ var _components_categorie_page_categorie_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/categorie-page/categorie-page.component */ "3C8t");
/* harmony import */ var _components_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/item-card/item-card.component */ "cSiL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");
/* harmony import */ var _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footbar/footbar.component */ "kkVY");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin-products/admin-products.component */ "pnO4");
/* harmony import */ var _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-orders/admin-orders.component */ "mihR");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/payment-page/payment-page.component */ "r4SE");
/* harmony import */ var _components_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/addProduct/addProduct.component */ "t+EI");
/* harmony import */ var _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/singin/singin.component */ "368S");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "ujWA");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/setting/setting.component */ "KxqT");
/* harmony import */ var _components_order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/order-complete/order-complete.component */ "RMJ0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_categorie_page_categorie_page_component__WEBPACK_IMPORTED_MODULE_3__["CategoriePageComponent"],
        _components_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__["ItemCardComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
        _components_footbar_footbar_component__WEBPACK_IMPORTED_MODULE_7__["FootbarComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
        _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_12__["AdminProductsComponent"],
        _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__["AdminOrdersComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
        _components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_15__["PaymentPageComponent"],
        _components_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_16__["addProductComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_17__["SinginComponent"],
        _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_19__["ProfilePageComponent"],
        _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_20__["SettingComponent"],
        _components_order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_21__["OrderCompleteComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]] }); })();


/***/ }),

/***/ "atC9":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function HomePageComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", product_r3._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", product_r3._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", product_r3._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r3.price, "DT");
} }
function HomePageComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", product_r4._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", product_r4._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", product_r4._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r4.price, " DT");
} }
function HomePageComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", product_r5._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", product_r5._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", product_r5._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r5.price, " DT");
} }
class HomePageComponent {
    constructor(prodservice) {
        this.prodservice = prodservice;
        this.products = [];
        this.stocklimit = [];
        this.products1 = [];
    }
    ngOnInit() {
        console.log("gaston");
        this.getproducts();
    }
    getproducts() {
        this.prodservice.getproduct().subscribe((data) => {
            console.log("gaston", data);
            this.products = data;
            this.products1 = this.products.slice(12, 17);
            this.stocklimit = this.products.slice(6, 11);
            this.products = this.products.slice(0, 5);
            console.log("gaston", data);
        });
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 69, vars: 3, consts: [[1, "container-fluid", "home-page", 2, "margin-top", "20px"], [1, "row", 2, "margin-bottom", "25px", "margin-left", "-450px", "width", "140%"], [1, "col-md-2", "pub-delete"], [1, "col-lg-8", "col-md-12", "col-xs-12", "col-s-12"], ["id", "carouselExampleCaptions", "data-ride", "carousel", 1, "carousel", "slide", 2, "margin", "auto"], [1, "carousel-indicators"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "1"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "https://www.flormar.com/UPLOAD/collection/1920x810yuz-category.jpg", "alt", "First slide", 1, "d-block", "w-100", 2, "height", "550px", "width", "1000px"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item"], ["src", "https://cdn.shopify.com/s/files/1/1463/5858/files/GT_Evergreen_880x453_df234e26-16.jpg?v=1610433123", "alt", "Second slide", 1, "d-block", "w-100", 2, "height", "550px"], ["src", "https://www.lorealparisusa.com/~/media/images/lop/homepage/hero-carousel/midnight-serum-banner/loreal-paris-marquee-midnight-serum-d-1.jpg?thn=0", "alt", "fourth slide", 1, "d-block", "w-100", 2, "height", "550px"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleCaptions", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "row", "sectionTitle", "justify-content-center"], [1, "title-section"], [1, "row", "justify-content-center", 2, "margin-bottom", "25px"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-center", "secondRaw", 2, "margin-bottom", "25px"], [1, "row", "justify-content-center", "sectionTitle1"], [1, "marquee"], [1, "marquee--inner"], ["href", "https://www.inntelhotelsrotterdamcentre.nl/", "target", "_blank"], ["src", "https://hotelintel.co/content/images/2020/10/hotelintel-square-logo-1.jpg", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], ["href", "https://www.rbktunisia.com/", "target", "_blank"], ["src", "https://pbs.twimg.com/profile_images/713016293813850115/kqj7PgaK_400x400.jpg", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], ["href", "https://www.sephora.fr/", "target", "_blank"], ["src", "https://www.centre-commercial.fr/grand-vitrolles/wp-content/uploads/2014/02/Sephora-logo-cc-242x182.jpg", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], ["href", "https://fr.filorga.com/", "target", "_blank"], ["src", "https://www.groupehld.com/wp-content/uploads/2019/03/logos-HLD-participations-2019-darkgrey-filorga.png", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], ["href", "https://www.maybelline.fr/?gclid=EAIaIQobChMI8JH02t7t7wIVT-rtCh3tDwb9EAAYASAAEgKQRfD_BwE", "target", "_blank"], ["src", "https://www.bysmaquillage.fr/skin/frontend/rwd/bys/images/nouveau-logo-pro.png", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], ["href", "https://www.printemps.com/fr/fr/balmain-femme?gclid=EAIaIQobChMIge-2_d7t7wIV-IFQBh19HQEiEAAYASAAEgJ4Y_D_BwE", "target", "_blank"], ["src", "https://static1.puretrend.com/articles/4/20/41/84/@/2050159--624x0-1.jpg", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], ["href", "https://www.cosmetique.tn/", "target", "_blank"], ["src", "https://www.cosmetique.tn/img/cosmetiquetn-logo-1606677756.jpg", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], ["href", "https://www.marionnaud.fr/", "target", "_blank"], ["src", "https://s3-eu-west-1.amazonaws.com/tpd/logos/4b14855c000064000504d5c6/0x0.png", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], ["href", "https://www.loreal-paris.fr/", "target", "_blank"], ["src", "https://journalduluxe.fr/wp-content/uploads/2019/04/logo-loreal.png", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], ["href", "https://www.lancome.fr/?gclid=EAIaIQobChMI9OW9v97t7wIVBu3tCh3cXwBOEAAYASAAEgJazPD_BwE&gclsrc=aw.ds#!/diagsoin/", "target", "_blank"], ["src", "https://logos-marques.com/wp-content/uploads/2020/02/Lanc%C3%B4me-logo.jpg", "alt", "Inntel Hotels.jpg", "title", "Inntel Hotels.jpg", "width", "200", "height", "145"], [1, "card", "card-item", 2, "width", "18.5rem", "margin-right", "20px"], [3, "routerLink"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body", 2, "text-align", "center"], [1, "card-title", 2, "font-weight", "200"], [1, "card-title"], ["href", "#", 1, "btn", "btn-success", 2, "width", "70%", "font-weight", "200", "color", "white"], [1, "fas", "fa-shopping-cart", "pr-2"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Items In Promotion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HomePageComponent_div_32_Template, 14, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomePageComponent_div_34_Template, 14, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Most Solded Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, HomePageComponent_div_39_Template, 14, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stocklimit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".card-promo[_ngcontent-%COMP%] {\n    display:flex;\n    height: 550px;\n}\n.card-item[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: black;\n}\n.thumbnail-item[_ngcontent-%COMP%]{\n    margin: auto;\n}\n.icon-promo-face[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 160px;\n    height: 70px;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    padding-top: 10px;\n    padding-left: 10px;\n    background-repeat: no-repeat;\n    color: #CF6C1A;\n    text-transform: uppercase;\n    text-align: center;\n    letter-spacing: -1px;\n    font-size:x-large;\n}\n.card-img-top[_ngcontent-%COMP%] {\n width : 100%;\n height : 70%;\n padding-left: 60px;\n}\nstrong[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color :#af5e5b;\n    box-sizing: border-box;\n    padding-left: 980px;\n    font-size: xx-large;\n}\n.card-sold[_ngcontent-%COMP%] {\n    display:flex;\n    padding-left: 130px;\n    height : 550px;\n}\n.icon-sold-face[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 8px;\n    height: 70px;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    padding-top: 10px;\n    padding-left: 10px;\n    background-repeat: no-repeat;\n    color: #D47A14;\n    text-transform: uppercase;\n    text-align: center;\n    letter-spacing: -1px;\n    font-size:x-large;\n}\n.sponsored[_ngcontent-%COMP%] {\n    padding-left: 660px;\n}\n.carousel-inner[_ngcontent-%COMP%] {\n    height: 85%;\n    width : 100%;\n    padding-left: 150px;\n}\n.sectionTitle[_ngcontent-%COMP%]{\n    height:400px;\n    background: linear-gradient(\n        rgb(30, 39, 46,0.25), \n        rgb(30, 39, 46,0.25)\n      ), url('https://image.freepik.com/vecteurs-libre/conception-fond-abstrait-vectorielle_2065-147.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-bottom: 25px;\n    background-attachment: fixed;\n    background-position: center;\n}\n.title-section[_ngcontent-%COMP%]{\n    font-family: 'Arial', cursive;\n    font-weight: 400;\n    font-size: 85px;\n    position: relative;\n    z-index: 1;\n    text-shadow:white;\n    text-shadow: 1px 1px 4px white;\n    \n    color:white;\n    margin-top: 150px;\n    margin-left: 25%;\n}\n.sectionTitle1[_ngcontent-%COMP%]{\n    height:400px;\n    background: linear-gradient(\n        rgb(30, 39, 46,0.25), \n        rgb(30, 39, 46,0.25)\n      ), url('https://image.freepik.com/vecteurs-libre/conception-fond-abstrait-vectorielle_2065-462.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-bottom: 25px;\n    background-attachment: fixed;\n    background-position: center;\n}\n@media only screen and (max-width:768px) {\n    .secondRaw[_ngcontent-%COMP%]{\n        display:none;\n    }\n    .title-section[_ngcontent-%COMP%]{\n        margin-top: 50px;\n    }\n    .pub-delete[_ngcontent-%COMP%]{\n        display:none;\n    }\n}\n@media only screen and (max-width:1780px) {\n    .pub-delete[_ngcontent-%COMP%]{\n        display:none;\n    }\n}\n.orb[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    background: rgb(219, 219, 219);\n    border-radius: 50px;\n    display: inline-block;\n    margin: 0 24.7px;\n    transition: all .2s ease-out;\n  }\n.orb[_ngcontent-%COMP%]:hover {\n    transform: scale(1.2);\n    opacity: .5;\n    cursor: pointer;\n  }\n.marquee[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 1400px;\n    overflow: hidden;\n    box-sizing: border-box;\n    position: relative;\n    margin: 100px auto;\n  }\n.marquee--inner[_ngcontent-%COMP%] {\n    display: block;\n    width: 200%;\n    margin: 70px 0;\n    position: absolute;\n    animation: marquee 20s linear infinite;\n  }\n.marquee--inner[_ngcontent-%COMP%]:hover {\n    animation-play-state: paused;\n  }\n\nspan[_ngcontent-%COMP%] {\n    float: left;\n    width: 50%;\n  }\n@keyframes marquee {\n    0% { left: 0; }\n    100% { left: -100%; }\n  }\n.marquee--inner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    margin-left:145px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0JBQWtCO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaOzs7MEdBR3NHO0lBQ3RHLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qjs7OzRCQUd3QjtJQUN4QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaOzs7MEdBR3NHO0lBQ3RHLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiw0QkFBNEI7RUFDOUI7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixzQ0FBc0M7RUFDeEM7QUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNBOzs7SUFHRTtBQUNGO0lBQ0UsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNBO0lBQ0UsS0FBSyxPQUFPLEVBQUU7SUFDZCxPQUFPLFdBQVcsRUFBRTtFQUN0QjtBQUNGO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcHJvbW8ge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBoZWlnaHQ6IDU1MHB4O1xufVxuLmNhcmQtaXRlbTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4udGh1bWJuYWlsLWl0ZW17XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmljb24tcHJvbW8tZmFjZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGNvbG9yOiAjQ0Y2QzFBO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xufVxuLmNhcmQtaW1nLXRvcCB7XG4gd2lkdGggOiAxMDAlO1xuIGhlaWdodCA6IDcwJTtcbiBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG5zdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yIDojYWY1ZTViO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy1sZWZ0OiA5ODBweDtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuLmNhcmQtc29sZCB7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHBhZGRpbmctbGVmdDogMTMwcHg7XG4gICAgaGVpZ2h0IDogNTUwcHg7XG59XG4uaWNvbi1zb2xkLWZhY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY29sb3I6ICNENDdBMTQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgZm9udC1zaXplOngtbGFyZ2U7XG59XG4uc3BvbnNvcmVkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDY2MHB4O1xufVxuLmNhcm91c2VsLWlubmVyIHtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgICB3aWR0aCA6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbn1cbi5zZWN0aW9uVGl0bGV7XG4gICAgaGVpZ2h0OjQwMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgcmdiKDMwLCAzOSwgNDYsMC4yNSksIFxuICAgICAgICByZ2IoMzAsIDM5LCA0NiwwLjI1KVxuICAgICAgKSwgdXJsKCdodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL3ZlY3RldXJzLWxpYnJlL2NvbmNlcHRpb24tZm9uZC1hYnN0cmFpdC12ZWN0b3JpZWxsZV8yMDY1LTE0Ny5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi50aXRsZS1zZWN0aW9ue1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4NXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtc2hhZG93OndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDRweCB3aGl0ZTtcbiAgICAvKiAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAqL1xuICAgIGNvbG9yOndoaXRlO1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG4uc2VjdGlvblRpdGxlMXtcbiAgICBoZWlnaHQ6NDAwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICByZ2IoMzAsIDM5LCA0NiwwLjI1KSwgXG4gICAgICAgIHJnYigzMCwgMzksIDQ2LDAuMjUpXG4gICAgICApLCB1cmwoJ2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vdmVjdGV1cnMtbGlicmUvY29uY2VwdGlvbi1mb25kLWFic3RyYWl0LXZlY3RvcmllbGxlXzIwNjUtNDYyLmpwZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgLnNlY29uZFJhd3tcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAudGl0bGUtc2VjdGlvbntcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG4gICAgLnB1Yi1kZWxldGV7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTc4MHB4KSB7XG4gICAgLnB1Yi1kZWxldGV7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG59XG4ub3JiIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjE5LCAyMTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAyNC43cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbiAgfVxuICAub3JiOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5tYXJxdWVlIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAxNDAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIH1cbiAgLm1hcnF1ZWUtLWlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjAwJTtcbiAgICBtYXJnaW46IDcwcHggMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYW5pbWF0aW9uOiBtYXJxdWVlIDIwcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgLm1hcnF1ZWUtLWlubmVyOmhvdmVyIHtcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICB9XG4gIC8qLmhhbGYge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMCU7XG4gIH0qL1xuICBzcGFuIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIEBrZXlmcmFtZXMgbWFycXVlZSB7XG4gICAgMCUgeyBsZWZ0OiAwOyB9XG4gICAgMTAwJSB7IGxlZnQ6IC0xMDAlOyB9XG4gIH1cbi5tYXJxdWVlLS1pbm5lciBhe1xuICAgIG1hcmdpbi1sZWZ0OjE0NXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");



class AdminComponent {
    constructor(route, authenticationservice) {
        this.route = route;
        this.authenticationservice = authenticationservice;
    }
    ngOnInit() {
        if (document.cookie.includes('GRAM')) {
            this.checkLog(this.cookiefinder(document.cookie));
        }
    }
    checkLog(cook) {
        console.log('cook');
        this.authenticationservice.checkLog(cook).subscribe((res) => {
            console.log(res);
            if (res.role != 'admin') {
                window.location.href = window.location.origin;
            }
        });
    }
    logout() {
        document.cookie = "GRAM=";
        document.location.href = "/";
    }
    cookiefinder(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('GRAM')) {
                found = strx[i].replace('GRAM=', '');
            }
        }
        return found;
    }
}
<<<<<<< HEAD
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["authentication"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 17, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", 2, "background-color", "#00A86B", "color", "white"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "/admin/products", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "/admin/addProduct", 1, "nav-link"], [1, "navbar-text", 2, "color", "white"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
=======
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 20, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", 2, "background-color", "#00A86B", "color", "white"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "adminproduct", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "addProduct", 1, "nav-link"], ["routerLink", "adminorders", 1, "nav-link"], [1, "navbar-text", 2, "color", "white"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GRAM-PARA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
<<<<<<< HEAD
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Admin Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
<<<<<<< HEAD
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Admin Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685


/***/ }),

/***/ "cSiL":
/*!*************************************************************!*\
  !*** ./src/app/components/item-card/item-card.component.ts ***!
  \*************************************************************/
/*! exports provided: ItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardComponent", function() { return ItemCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ItemCardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function ItemCardComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemCardComponent_ng_template_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.AddToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemCardComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemCardComponent_ng_template_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.AddToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add To Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ItemCardComponent {
    constructor() {
        this.productTitle = '';
        this.Productprice = '';
        this.productImage = '';
        this.productId = '';
        this.inCart = false;
    }
    ngOnInit() {
        this.CheckIncart();
    }
    AddToCart() {
        var cookies = document.cookie;
        if (cookies.includes('cart')) {
            var valueCook = this.cookiefinder(cookies);
            var objOfCookie = JSON.parse(valueCook);
            objOfCookie[objOfCookie.length] = { id: this.productId, quantity: 1 };
            var orderForCookie = JSON.stringify(objOfCookie);
            document.cookie = 'cart=' + orderForCookie;
        }
        else {
            var order = [{ id: this.productId, quantity: 1 }];
            var orderForCookie = JSON.stringify(order);
            document.cookie = 'cart=' + orderForCookie;
        }
        this.CheckIncart();
    }
    CheckIncart() {
        var cookies = document.cookie;
        console.log(cookies);
        if (cookies.includes(this.productId) && !cookies.includes('"id":"' + this.productId + '","quantity":0')) {
            this.inCart = true;
        }
    }
    cookiefinder(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('cart')) {
                found = strx[i].replace('cart=', '');
            }
        }
        return found;
    }
}
ItemCardComponent.ɵfac = function ItemCardComponent_Factory(t) { return new (t || ItemCardComponent)(); };
ItemCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemCardComponent, selectors: [["app-item-card"]], inputs: { productTitle: "productTitle", Productprice: "Productprice", productImage: "productImage", productId: "productId" }, decls: 13, vars: 6, consts: [[1, "card", "card-item", 2, "width", "18rem", "margin-right", "10px", "height", "auto"], ["routerLink", "product/:id", 2, "color", "black", "text-decoration", "none"], ["alt", "Card image cap", "height", "210px", 1, "card-img-top", 3, "src"], [1, "card-body", 2, "text-align", "center"], [1, "card-title", 2, "font-weight", "100"], [1, "card-title"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["alreadyAdded", ""], ["addtoCart", ""], ["type", "button", 1, "btn", "btn-secondary", 2, "font-weight", "200", "color", "white", "width", "80%", "background-color", "#e1b12c", "border", "#e1b12c", 3, "click"], [1, "fas", "fa-check"], ["type", "button", 1, "btn", "btn-success", 2, "font-weight", "200", "color", "white", "width", "80%", 3, "click"], [1, "fa", "fa-cart-plus"]], template: function ItemCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemCardComponent_div_8_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ItemCardComponent_ng_template_9_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ItemCardComponent_ng_template_11_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.productTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Productprice, " DT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inCart)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".card-item[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    \n}\n.thumbnail-item[_ngcontent-%COMP%]{\n    margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJpdGVtLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY2FyZC1pdGVtOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbn1cbi50aHVtYm5haWwtaXRlbXtcbiAgICBtYXJnaW46IGF1dG87XG59Il19 */"] });


/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: authentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authentication", function() { return authentication; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class authentication {
    constructor(http) {
        this.http = http;
    }
    login(email, password) {
        return this.http.post("http://localhost:5555/user/signin", { email, password });
    }
    checkLog(cookie) {
        return this.http.post("http://localhost:5555/session/check", { cookie });
    }
    logout() {
        return this.http.get("http://localhost:5555/session/loggout");
    }
}
authentication.ɵfac = function authentication_Factory(t) { return new (t || authentication)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
authentication.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: authentication, factory: authentication.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NavbarComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function NavbarComponent_ng_template_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "sign up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_81_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
<<<<<<< HEAD
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_81_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 26);
=======
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_81_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 31);
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(authenticationservice, router) {
        this.authenticationservice = authenticationservice;
        this.router = router;
        this.logged = false;
    }
    ngOnInit() {
        console.log("**********", this.router.snapshot.params);
        console.log(document.cookie);
        if (document.cookie.includes('GRAM')) {
            this.checkLog(this.cookiefinder(document.cookie));
        }
    }
    checkLog(cook) {
        console.log('cook');
        this.authenticationservice.checkLog(cook).subscribe((res) => {
            console.log(res);
            if (res.role == 'client') {
                this.logged = true;
            }
        });
    }
    logout() {
        document.cookie = "GRAM=";
        document.location.href = "/";
    }
    cookiefinder(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('GRAM')) {
                found = strx[i].replace('GRAM=', '');
            }
        }
        return found;
    }
}
<<<<<<< HEAD
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["authentication"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 83, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "nav-pc"], [1, "col-2"], ["href", "/"], ["src", "../../../assets/pictures/logo.png", "alt", "", "height", "50px", "width", "100px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", 2, "color", "white"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "justify-content-center", 2, "z-index", "2"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "white"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "categorie", 1, "dropdown-item"], ["id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "white"], ["routerLink", "product/606b4a68c2834657143e4b43", 1, "dropdown-item"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["notlogged", ""], ["loggedIn", ""], [1, "col-2", 2, "float", "right"], ["routerLink", "singin", "routerLinkActive", "active", 2, "color", "black", "font-size", "16px", "color", "white", "padding", "10px", "font-size", "25px"], ["routerLink", "register", "routerLinkActive", "active", 2, "color", "white", "font-size", "16px", "border", "none", "padding", "10px", "font-size", "25px"], ["routerLink", "cart", 2, "color", "white"], [1, "fas", "fa-cart-plus", 2, "size", "12x", "margin-left", "15px"], [1, "col-3", 2, "float", "right", "margin-left", "40px"], ["routerLink", "profile", "routerLinkActive", "active", 2, "color", "black", "font-size", "16px", "color", "white", "padding", "10px", "font-size", "20px"], ["routerLink", "setting", "routerLinkActive", "active", 2, "color", "white", "font-size", "16px", "border", "none", "padding", "10px", "font-size", "20px"], [2, "color", "white", "font-size", "16px", "border", "none", "padding", "10px", "font-size", "20px", 3, "click"], [1, "fas", "fa-cart-plus", 2, "size", "12x", "margin-left", "45px"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
=======
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["authentication"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 83, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "nav-pc"], [1, "col-2"], ["href", "/"], ["src", "../../../assets/pictures/logo.png", "alt", "", "height", "50px", "width", "100px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", 2, "color", "white"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse", "justify-content-center", 2, "z-index", "2"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "white"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], ["routerLink", "categorie/{CERINA AROMA}}", 1, "dropdown-item"], ["routerLink", "categorie/BARNANGEN", 1, "dropdown-item"], ["routerLink", "categorie/Gliss Masque Hydratant", 1, "dropdown-item"], ["routerLink", "categorie/Hemani", 1, "dropdown-item"], ["id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "color", "white"], ["routerLink", "categorie/Brazilian Glow Kit K\u00E9ratine", 1, "dropdown-item"], ["routerLink", "categorie", 1, "dropdown-item"], ["routerLink", "categorie/Evoluderm", 1, "dropdown-item"], ["routerLink", "categorie/", 1, "dropdown-item"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["notlogged", ""], ["loggedIn", ""], [1, "col-2", 2, "float", "right"], ["routerLink", "singin", "routerLinkActive", "active", 2, "color", "black", "font-size", "16px", "color", "white", "padding", "10px", "font-size", "25px"], ["routerLink", "register", "routerLinkActive", "active", 2, "color", "white", "font-size", "16px", "border", "none", "padding", "10px", "font-size", "25px"], [1, "col-3", 2, "float", "right", "margin-left", "40px"], ["routerLink", "profile", "routerLinkActive", "active", 2, "color", "black", "font-size", "16px", "color", "white", "padding", "10px", "font-size", "20px"], ["routerLink", "setting", "routerLinkActive", "active", 2, "color", "white", "font-size", "16px", "border", "none", "padding", "10px", "font-size", "20px"], [2, "color", "white", "font-size", "16px", "border", "none", "padding", "10px", "font-size", "20px", 3, "click"], ["routerLink", "cart", 2, "color", "white"], [1, "fas", "fa-cart-plus", 2, "size", "12x", "margin-left", "45px"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Skin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "BAUME EMOLLIENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Evoluderm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "CERINA AROMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "BARNANGEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Hair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hemani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Brazilian Glow Kit K\u00E9ratine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Gliss Masque Hydratant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Mother & Baby ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Brazilian Glow Kit K\u00E9ratine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Farmasi Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Garnier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Melon - Watermelon Yellow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Body ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "French Kiss Vanilla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Chocolate - Feathers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Mix - Cocktail Ice Cream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Durian Fruit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Solar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Wine - Rosso Del Veronese Igt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Bread - Pita, Mini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Versatainer Nc - 8288");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Chicken - White Meat With Tender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Medical material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Moisturizing and nourishing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Anti-aging and anti-wrinkle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Anti-dark spots and depigmenting agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Cleanser and makeup remover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, NavbarComponent_div_78_Template, 1, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
<<<<<<< HEAD
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, NavbarComponent_ng_template_79_Template, 7, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, NavbarComponent_ng_template_81_Template, 9, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
=======
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, NavbarComponent_ng_template_79_Template, 5, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, NavbarComponent_ng_template_81_Template, 9, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["body[_ngcontent-%COMP%] {\n    font-family: \"Courier New\", Courier, monospace;\n    margin: 0px;\n    padding: 0px;\n  }\n\n \n\n  .btn-search-pos[_ngcontent-%COMP%]{\n    position: relative;\n    left: 220px;\n  }\n\n \n\n  .div-search-cont[_ngcontent-%COMP%]{\n    position: relative;\n    left: 250px;\n  }\n\n \n\n  .div-btn-pos[_ngcontent-%COMP%]{\n   position: relative;\n    float:right;\n  }\n\n \n\n  .div-price[_ngcontent-%COMP%]{\n    position:relative; \n    right: 50px;\n }\n\n \n\n  .form-control[_ngcontent-%COMP%]{\n    width: 400px;\n\n  }\n\n \n\n  .form-pos-nav[_ngcontent-%COMP%]{\n    position: relative;\n    right: 800px;\n  }\n\n \n\n  nav[_ngcontent-%COMP%] {\n    margin: auto;\n        width: 100%;\n    background-color: #00a86b;\n    align-items: center;\n  }\n\n \n\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    margin-left :95px;\n    padding: 0px;\n  }\n\n \n\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n\n \n\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    float: left;\n    position: relative;\n  }\n\n \n\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 20px 30px;\n    color: #fff;\n  }\n\n \n\n  nav[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n    padding: 15px 30px 20px 30px;\n  }\n\n \n\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n  }\n\n \n\n  .submenu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n \n\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-decoration: none;\n    color: black;\n    cursor: grab;\n  }\n\n \n\n  .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n\n    border-bottom: 0.5px solid #0b6623;\n    background-color: white;\n    color: #0b6623;\n    font-weight: 500;\n    font-size: 16px;\n \n  }\n\n \n\n  nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .submenu[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: absolute;\n    top: 100%;\n    left: 0%;\n    padding: 0px;\n    z-index: 1000;\n  }\n\n \n\n  .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #ccc;\n    background-color: rgb(241, 242, 246,0.9);\n  }\n\n \n\n  .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 30px;\n    font-size: 13px;\n    color: #222538;\n    width: 270px;\n  }\n\n \n\n  .menu-skin[_ngcontent-%COMP%]:hover {\n    border-top: 5px solid #0b6623;\n    background-color: #0cc796;\n  }\n\n \n\n  .menu-skin[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    border-bottom: 0.5px solid #0b6623;\n    background-color: white;\n    color: #0b6623;\n    font-weight: 500;\n    font-size: 14px;\n    }\n\n \n\n  .menu-hair[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    border-bottom: 0.5px solid #0b6623;\n    }\n\n \n\n  .submenu[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n      color: #000;\n      font-weight: bold;\n    }\n\n \n\n  #nav-mobile[_ngcontent-%COMP%]{\n      display: none;\n    }\n\n \n\n  @media screen and (max-width: 1280px) {\n      #nav-mobile[_ngcontent-%COMP%]{\n        display: block;\n      }\n      #nav-pc[_ngcontent-%COMP%]{\n        display: none;\n      }\n    }\n\n \n\n  \n\n \n\n  .nav-pc[_ngcontent-%COMP%] {\n      background: linear-gradient(105deg, #0cc796,#0b6623, #0cc796);\n      font-size: 20px;\n    }\n\n \n\n  .nav-bar[_ngcontent-%COMP%]{\n      width:400px;\n      height:40px;\n      position:absolute;\n      overflow:hidden;\n      top:50%;\n      left:50%;\n      transform:translate(-50%,-50%);\n      background:transparent;\n      transition:0.5s;\n  }\n\n \n\n  .overflow-container[_ngcontent-%COMP%]{\n      height:100%;\n      width:100%;\n      overflow:hidden;\n  }\n\n \n\n  .links[_ngcontent-%COMP%]{\n      display:inline-block;\n      position: absolute;\n      width:0;\n      transition:all 0.5s;\n      overflow:hidden;\n      background:rgb(56,186,56);\n      color:#fff;\n      line-height: var(--nav-height);\n      border-radius:var(--nav-half);\n  }\n\n \n\n  .nav-bar.active[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\n      width:calc(100% - var(--nav-height));\n      border-radius:0;\n      border-bottom-right-radius:var(--nav-half);\n  }\n\n \n\n  .content[_ngcontent-%COMP%]{\n      border-radius:var(--nav-half);\n      width:calc(100% - var(--nav-height));\n      transition: 0.5s;\n      height:100%;\n      display: inline-block;\n      overflow: hidden;\n  }\n\n \n\n  .nav-bar.active[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\n      border-radius:0;\n      border-bottom-right-radius:var(--nav-half);\n  }\n\n \n\n  .link[_ngcontent-%COMP%]{\n      display:block;\n      line-height: var(--nav-height);\n      padding:0 30px;\n      text-decoration: none;\n      color:inherit;\n      text-align:center;\n      float:left;\n      transition:0.3s;\n      font-size:20px;\n  }\n\n \n\n  .link[_ngcontent-%COMP%]:hover{\n      background:rgb(86,206,86);\n  }\n\n \n\n  .open-nav[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]{\n      width:var(--nav-height);\n      height:100%;\n      background:rgb(56,186,56);\n      color:#fff;\n      border-radius:50%;\n      border:0;\n      float:left;\n      outline:0;\n      transition:0.5s;\n  }\n\n \n\n  .nav-bar.active[_ngcontent-%COMP%]   .open-nav[_ngcontent-%COMP%]{\n      background:rgb(86,206,86);\n      border-radius:0;\n      border-top-left-radius:var(--nav-half);\n  }\n\n \n\n  .nav-bar.active[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{\n      border-radius:0;\n      border-bottom-right-radius: var(--nav-half);\n  }\n\n \n\n  .nav-bar.active[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]:hover{\n      background:rgb(6,156,250);\n  }\n\n \n\n  .search-bar[_ngcontent-%COMP%]{\n      height:100%;\n      border:0;\n      padding:20px;\n      box-sizing:border-box;\n      background:#f8f8f8;\n      outline:0;\n      width:calc(100% - var(--nav-height));\n      display:block;\n      font-size:15px;\n      float:left;\n      transition:0.5s;\n  }\n\n \n\n  .btn[_ngcontent-%COMP%]{\n    height: calc(1.5em + .75rem + 2px);\n  }\n\n \n\n  .search-bar[_ngcontent-%COMP%]:focus{\n      background:#efefef;\n  }\n\n \n\n  .search[_ngcontent-%COMP%]{\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n      background:rgb(56,96,250);\n  }\n\n \n\n  .nav-bar.active[_ngcontent-%COMP%]   .fa-bars[_ngcontent-%COMP%], .nav-bar[_ngcontent-%COMP%]   .fa-close[_ngcontent-%COMP%]{display: none;}\n\n \n\n  .nav-bar.active[_ngcontent-%COMP%]   .fa-close[_ngcontent-%COMP%], .nav-bar[_ngcontent-%COMP%]   .fa-bars[_ngcontent-%COMP%]{display: inline-block;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOENBQThDO0lBQzlDLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7Ozs7RUFJQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7Ozs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7Ozs7RUFDQTtHQUNDLGtCQUFrQjtJQUNqQixXQUFXO0VBQ2I7Ozs7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0NBQ2Q7Ozs7RUFFQztJQUNFLFlBQVk7O0VBRWQ7Ozs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7Ozs7RUFDQTtJQUNFLFlBQVk7UUFDUixXQUFXO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7OztFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7OztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7Ozs7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7Ozs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7Ozs7RUFDQTtJQUNFLDRCQUE0QjtFQUM5Qjs7OztFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCOzs7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7Ozs7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7RUFDZDs7OztFQUVBOztJQUVFLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlOztFQUVqQjs7OztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0VBQ2Y7Ozs7RUFDQTtJQUNFLDZCQUE2QjtJQUM3Qix3Q0FBd0M7RUFDMUM7Ozs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7RUFDZDs7OztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHlCQUF5QjtFQUMzQjs7OztFQUdBO0lBQ0Usa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZjs7OztFQUVGO0lBQ0Usa0NBQWtDO0lBQ2xDOzs7O0VBR0Y7TUFDSSxXQUFXO01BQ1gsaUJBQWlCO0lBQ25COzs7O0VBR0E7TUFDRSxhQUFhO0lBQ2Y7Ozs7RUFDQTtNQUNFO1FBQ0UsY0FBYztNQUNoQjtNQUNBO1FBQ0UsYUFBYTtNQUNmO0lBQ0Y7Ozs7RUFHQTs7O09BR0c7Ozs7RUFDSDtNQUNFLDZEQUE2RDtNQUM3RCxlQUFlO0lBQ2pCOzs7O0VBQ0E7TUFDRSxXQUFXO01BQ1gsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixlQUFlO01BQ2YsT0FBTztNQUNQLFFBQVE7TUFDUiw4QkFBOEI7TUFDOUIsc0JBQXNCO01BQ3RCLGVBQWU7RUFDbkI7Ozs7RUFDQTtNQUNJLFdBQVc7TUFDWCxVQUFVO01BQ1YsZUFBZTtFQUNuQjs7OztFQUNBO01BQ0ksb0JBQW9CO01BQ3BCLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsbUJBQW1CO01BQ25CLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsVUFBVTtNQUNWLDhCQUE4QjtNQUM5Qiw2QkFBNkI7RUFDakM7Ozs7RUFDQTtNQUNJLG9DQUFvQztNQUNwQyxlQUFlO01BQ2YsMENBQTBDO0VBQzlDOzs7O0VBQ0E7TUFDSSw2QkFBNkI7TUFDN0Isb0NBQW9DO01BQ3BDLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gscUJBQXFCO01BQ3JCLGdCQUFnQjtFQUNwQjs7OztFQUNBO01BQ0ksZUFBZTtNQUNmLDBDQUEwQztFQUM5Qzs7OztFQUNBO01BQ0ksYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixjQUFjO01BQ2QscUJBQXFCO01BQ3JCLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsVUFBVTtNQUNWLGVBQWU7TUFDZixjQUFjO0VBQ2xCOzs7O0VBQ0E7TUFDSSx5QkFBeUI7RUFDN0I7Ozs7RUFDQTtNQUNJLHVCQUF1QjtNQUN2QixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsUUFBUTtNQUNSLFVBQVU7TUFDVixTQUFTO01BQ1QsZUFBZTtFQUNuQjs7OztFQUNBO01BQ0kseUJBQXlCO01BQ3pCLGVBQWU7TUFDZixzQ0FBc0M7RUFDMUM7Ozs7RUFDQTtNQUNJLGVBQWU7TUFDZiwyQ0FBMkM7RUFDL0M7Ozs7RUFDQTtNQUNJLHlCQUF5QjtFQUM3Qjs7OztFQUNBO01BQ0ksV0FBVztNQUNYLFFBQVE7TUFDUixZQUFZO01BQ1oscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixTQUFTO01BQ1Qsb0NBQW9DO01BQ3BDLGFBQWE7TUFDYixjQUFjO01BQ2QsVUFBVTtNQUNWLGVBQWU7RUFDbkI7Ozs7RUFDQTtJQUNFLGtDQUFrQztFQUNwQzs7OztFQUNBO01BQ0ksa0JBQWtCO0VBQ3RCOzs7O0VBQ0E7TUFDSSx5QkFBeUI7TUFDekIsNEJBQTRCO01BQzVCLHlCQUF5QjtFQUM3Qjs7OztFQUNBLDRDQUE0QyxhQUFhLENBQUM7Ozs7RUFDMUQsNENBQTRDLHFCQUFxQixDQUFDIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gXG5cbiAgLmJ0bi1zZWFyY2gtcG9ze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyMjBweDtcbiAgfVxuICAuZGl2LXNlYXJjaC1jb250e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyNTBweDtcbiAgfVxuICAuZGl2LWJ0bi1wb3N7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gIH1cbiAgLmRpdi1wcmljZXtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgXG4gICAgcmlnaHQ6IDUwcHg7XG4gfVxuXG4gIC5mb3JtLWNvbnRyb2x7XG4gICAgd2lkdGg6IDQwMHB4O1xuXG4gIH1cbiAgLmZvcm0tcG9zLW5hdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDgwMHB4O1xuICB9XG4gIG5hdiB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhODZiO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgbmF2ID4gdWwge1xuICAgIG1hcmdpbi1sZWZ0IDo5NXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBcbiAgbmF2ID4gdWw6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIG5hdiA+IHVsID4gbGkge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBuYXYgPiB1bCA+IGxpID4gYSB7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIG5hdiA+IHVsID4gbGk6aG92ZXIgYSB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4IDIwcHggMzBweDtcbiAgfVxuICBuYXYgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICBcbiAgLnN1Ym1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgbmF2IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogZ3JhYjtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XG5cbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMGI2NjIzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjMGI2NjIzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuIFxuICB9XG4gIG5hdiBsaTpob3ZlciAuc3VibWVudSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMCU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHotaW5kZXg6IDEwMDA7XG4gIH1cbiAgLnN1Ym1lbnUgbGkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MiwgMjQ2LDAuOSk7XG4gIH1cbiAgLnN1Ym1lbnUgbGkgYSB7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzIyMjUzODtcbiAgICB3aWR0aDogMjcwcHg7XG4gIH1cbiAgLm1lbnUtc2tpbjpob3ZlciB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwYjY2MjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjYzc5NjtcbiAgfVxuICBcbiAgXG4gIC5tZW51LXNraW4gLnN1Ym1lbnUgbGkgOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMGI2NjIzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiAjMGI2NjIzO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAubWVudS1oYWlyIC5zdWJtZW51IGxpIDpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzBiNjYyMztcbiAgICB9XG4gICBcbiAgICBcbiAgLnN1Ym1lbnU6aG92ZXIgYSB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAjbmF2LW1vYmlsZXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAgICAgI25hdi1tb2JpbGV7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgI25hdi1wY3tcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICBcbiAgICAvKiBhLmFjdGl2ZSwgYTpob3ZlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2VhZ3JlZW47XG4gICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICB9ICovXG4gICAgLm5hdi1wYyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTA1ZGVnLCAjMGNjNzk2LCMwYjY2MjMsICMwY2M3OTYpO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAubmF2LWJhcntcbiAgICAgIHdpZHRoOjQwMHB4O1xuICAgICAgaGVpZ2h0OjQwcHg7XG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgIHRvcDo1MCU7XG4gICAgICBsZWZ0OjUwJTtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2l0aW9uOjAuNXM7XG4gIH1cbiAgLm92ZXJmbG93LWNvbnRhaW5lcntcbiAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgfVxuICAubGlua3N7XG4gICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOjA7XG4gICAgICB0cmFuc2l0aW9uOmFsbCAwLjVzO1xuICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgYmFja2dyb3VuZDpyZ2IoNTYsMTg2LDU2KTtcbiAgICAgIGNvbG9yOiNmZmY7XG4gICAgICBsaW5lLWhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XG4gICAgICBib3JkZXItcmFkaXVzOnZhcigtLW5hdi1oYWxmKTtcbiAgfVxuICAubmF2LWJhci5hY3RpdmUgLmxpbmtze1xuICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gdmFyKC0tbmF2LWhlaWdodCkpO1xuICAgICAgYm9yZGVyLXJhZGl1czowO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6dmFyKC0tbmF2LWhhbGYpO1xuICB9XG4gIC5jb250ZW50e1xuICAgICAgYm9yZGVyLXJhZGl1czp2YXIoLS1uYXYtaGFsZik7XG4gICAgICB3aWR0aDpjYWxjKDEwMCUgLSB2YXIoLS1uYXYtaGVpZ2h0KSk7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5uYXYtYmFyLmFjdGl2ZSAuY29udGVudHtcbiAgICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOnZhcigtLW5hdi1oYWxmKTtcbiAgfVxuICAubGlua3tcbiAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogdmFyKC0tbmF2LWhlaWdodCk7XG4gICAgICBwYWRkaW5nOjAgMzBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICB0cmFuc2l0aW9uOjAuM3M7XG4gICAgICBmb250LXNpemU6MjBweDtcbiAgfVxuICAubGluazpob3ZlcntcbiAgICAgIGJhY2tncm91bmQ6cmdiKDg2LDIwNiw4Nik7XG4gIH1cbiAgLm9wZW4tbmF2LC5zZWFyY2h7XG4gICAgICB3aWR0aDp2YXIoLS1uYXYtaGVpZ2h0KTtcbiAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgYmFja2dyb3VuZDpyZ2IoNTYsMTg2LDU2KTtcbiAgICAgIGNvbG9yOiNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOjUwJTtcbiAgICAgIGJvcmRlcjowO1xuICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgIG91dGxpbmU6MDtcbiAgICAgIHRyYW5zaXRpb246MC41cztcbiAgfVxuICAubmF2LWJhci5hY3RpdmUgLm9wZW4tbmF2e1xuICAgICAgYmFja2dyb3VuZDpyZ2IoODYsMjA2LDg2KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6MDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tbmF2LWhhbGYpO1xuICB9XG4gIC5uYXYtYmFyLmFjdGl2ZSAuc2VhcmNoe1xuICAgICAgYm9yZGVyLXJhZGl1czowO1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLW5hdi1oYWxmKTtcbiAgfVxuICAubmF2LWJhci5hY3RpdmUgLnNlYXJjaCwuc2VhcmNoOmhvdmVye1xuICAgICAgYmFja2dyb3VuZDpyZ2IoNiwxNTYsMjUwKTtcbiAgfVxuICAuc2VhcmNoLWJhcntcbiAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgYm9yZGVyOjA7XG4gICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAgICBiYWNrZ3JvdW5kOiNmOGY4Zjg7XG4gICAgICBvdXRsaW5lOjA7XG4gICAgICB3aWR0aDpjYWxjKDEwMCUgLSB2YXIoLS1uYXYtaGVpZ2h0KSk7XG4gICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgZm9udC1zaXplOjE1cHg7XG4gICAgICBmbG9hdDpsZWZ0O1xuICAgICAgdHJhbnNpdGlvbjowLjVzO1xuICB9XG4gIC5idG57XG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcbiAgfVxuICAuc2VhcmNoLWJhcjpmb2N1c3tcbiAgICAgIGJhY2tncm91bmQ6I2VmZWZlZjtcbiAgfVxuICAuc2VhcmNoe1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICBiYWNrZ3JvdW5kOnJnYig1Niw5NiwyNTApO1xuICB9XG4gIC5uYXYtYmFyLmFjdGl2ZSAuZmEtYmFycywubmF2LWJhciAuZmEtY2xvc2V7ZGlzcGxheTogbm9uZTt9XG4gIC5uYXYtYmFyLmFjdGl2ZSAuZmEtY2xvc2UsLm5hdi1iYXIgLmZhLWJhcnN7ZGlzcGxheTogaW5saW5lLWJsb2NrO30iXX0= */"] });


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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class FootbarComponent {
    constructor(subUser) {
        this.subUser = subUser;
        this.email = '';
    }
    ngOnInit() {
    }
    changeData(event) {
        const { target } = event;
        if (target.id == 'emaill') {
            this.email = target.value;
        }
    }
    subscribeUser() {
        this.subUser.subscribee(this.email).subscribe((data) => {
            console.log(data);
        });
    }
}
FootbarComponent.ɵfac = function FootbarComponent_Factory(t) { return new (t || FootbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
FootbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FootbarComponent, selectors: [["app-footbar"]], decls: 66, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-sm-4", "col-xs-12"], [1, "single_footer"], [1, "col-md-4", "col-sm-4", "col-xs-12"], [1, "single_footer", "single_footer_address"], [1, "signup_form"], ["action", "#", 1, "subscribe"], ["type", "text", "placeholder", "Enter Email Address", "id", "emaill", 1, "subscribe__input", 3, "change"], ["type", "button", 1, "subscribe__btn", 3, "click"], [1, "fas", "fa-paper-plane"], [1, "social_profile"], ["href", "https://www.facebook.com/grampara", "target", "_blank"], [1, "fab", "fa-facebook-f"], ["href", "https://twitter.com/rihembensaad2", "target", "_blank"], [1, "fab", "fa-twitter"], ["href", "https://www.google.com/?hl=ar", "target", "_blank"], [1, "fab", "fa-google-plus-g"], ["href", "https://www.instagram.com/grampara1/\n\n                            ", "target", "_blank"], [1, "fab", "fa-instagram"], ["src", "", "alt", "", "srcset", ""], [1, "col-lg-12", "col-sm-12", "col-xs-12"], [1, "copyright"], ["href", "#"]], template: function FootbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Our purpose at Grump-para is to create a welcommning beauty medecial shopping ewperience and inspire free choises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Gramp-para is your space where you can find endless type of products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone: +216 71202121");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Mobile: +216 20202121 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email: gramp-para@gmail.tn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Address: RBK, Bloc B31, Elgazala Technopark, Raoued, Gouvernorat de l\u2019Ariana, 2088 Ariana \u2013 Tunisie. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Subscribe today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FootbarComponent_Template_input_change_40_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FootbarComponent_Template_button_click_41_listener() { return ctx.subscribeUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Copyright \u00A9 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "RBK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["@media (max-width: 940px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 60px;\n  }\n \n \n  }\nfooter[_ngcontent-%COMP%]{\n    position: relative;\n    width: 100%;\n    height: 100px;\n    left: 0;\n    bottom: 0;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active {\n    text-decoration: none;\n    outline: none;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\n    color: #333;\n    text-decoration: none;\n    transition-timing-function: ease-in-out;\n    -ms-transition-timing-function: ease-in-out;\n    -moz-transition-timing-function: ease-in-out;\n    -webkit-transition-timing-function: ease-in-out;\n    -o-transition-timing-function: ease-in-out;\n    transition-duration: .2s;\n    -ms-transition-duration: .2s;\n    -moz-transition-duration: .2s;\n    -webkit-transition-duration: .2s;\n    -o-transition-duration: .2s;\n}\nul[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\nimg[_ngcontent-%COMP%] {\nmax-width: 100%;\nheight: auto;\n}\nsection[_ngcontent-%COMP%] {\n    padding: 60px 0;\n   \n}\n.footer[_ngcontent-%COMP%] {\nbackground: linear-gradient(105deg, #0cc796,#0b6623, #0cc796);\npadding-top: 20px;\npadding-bottom: 10px;\n}\n\n@media only screen and (max-width:768px) { \n.single_footer[_ngcontent-%COMP%]{margin-bottom:30px;}\n}\n.single_footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\ncolor: #fff;\nmargin-top: 0;\nmargin-bottom: 25px;\nfont-weight: 700;\ntext-transform: uppercase;\nfont-size: 20px;\n}\n.single_footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\ncontent: \"\";\ndisplay: block;\nheight: 2px;\nwidth: 40px;\nbackground: #fff;\nmargin-top: 20px;\n}\n.single_footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;}\n.single_footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\nmargin: 0;\npadding: 0;\nlist-style: none;\n}\n.single_footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\ncolor: #fff;\ntransition: all 0.3s ease 0s;\nline-height: 36px;\nfont-size: 15px;\ntext-transform: capitalize;\n}\n.single_footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: #d35400; }\n.single_footer_address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fff;}\n.single_footer_address[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\nfont-weight: 400;\ncolor: #fff;\nline-height: 28px;\n}\n.contact_social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\nlist-style: outside none none;\nmargin: 0;\npadding: 0;\n}\n\n.subscribe[_ngcontent-%COMP%] {\ndisplay: block;\nposition: relative;\nmargin-top: 15px;\nwidth: 100%;\n}\n.subscribe__input[_ngcontent-%COMP%] {\nbackground-color: #fff;\nborder: medium none;\nborder-radius: 5px;\ncolor: #333;\ndisplay: block;\nfont-size: 15px;\nfont-weight: 500;\nheight: 60px;\nletter-spacing: 0.4px;\nmargin: 0;\npadding: 0 150px 0 20px;\ntext-align: center;\ntext-transform: capitalize;\nwidth: 100%;\n}\n@media only screen and (max-width:768px) { \n.subscribe__input[_ngcontent-%COMP%]{padding: 0 50px 0 20px;}\n}\n.subscribe__btn[_ngcontent-%COMP%] {\nbackground-color: transparent;\nborder-radius: 0 25px 25px 0;\ncolor: #0b6623;\ncursor: pointer;\ndisplay: block;\nfont-size: 20px;\nheight: 60px;\nposition: absolute;\nright: 0;\ntop: 0;\nwidth: 60px;\n}\n.subscribe__btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition: all 0.3s ease 0s;}\n@media only screen and (max-width:768px) { \n.subscribe__btn[_ngcontent-%COMP%]{right:0px;}\n}\n.subscribe__btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{\ncolor:#ff3666;\n}\nbutton[_ngcontent-%COMP%] {\npadding: 0;\nborder: none;\nbackground-color: transparent;\nborder-radius: 0;\n}\n\n\n.social_profile[_ngcontent-%COMP%] {margin-top:40px;}\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\nlist-style: outside none none;\nmargin: 0;\npadding: 0;\n}\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;}\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\ntext-align: center;\nborder: 0px;\ntext-transform: uppercase;\ntransition: all 0.3s ease 0s;\nmargin: 0px 5px;\nfont-size: 18px;\ncolor: #fff;\nborder-radius: 30px;\nwidth: 50px;\nheight: 50px;\nline-height: 50px;\ndisplay: block;\nborder: 1px solid rgba(255,255,255,0.2);\n}\n@media only screen and (max-width:768px) { \n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:10px;}\n}\n@media only screen and (max-width:480px) { \n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\nwidth:40px;\nheight:40px;\nline-height:40px;\n}\n}\n.social_profile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\nbackground:#01c7e9;\nborder: 1px solid #e90162;\ncolor:#fff;\nborder:0px;\n}\n\n.copyright[_ngcontent-%COMP%] {\nmargin-top: 70px;\npadding-top: 40px;\ncolor:#fff;\nfont-size: 15px;\nborder-top: 1px solid rgba(255,255,255,0.4);\ntext-align: center;\n}\n.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#01c7e9;transition: all 0.2s ease 0s;}\n.copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#e90162;\nfont-size: 16px;\ntransition: all .5s ease 0s;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3RiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7OztFQUdBO0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixPQUFPO0lBQ1AsU0FBUztBQUNiO0FBQ0E7Ozs7SUFJSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjtBQUVBOzs7SUFHSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHVDQUF1QztJQUN2QywyQ0FBMkM7SUFDM0MsNENBQTRDO0lBQzVDLCtDQUErQztJQUMvQywwQ0FBMEM7SUFDMUMsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtBQUNBLGVBQWU7QUFDZixZQUFZO0FBQ1o7QUFDQTtJQUNJLGVBQWU7R0FDaEIsc0JBQXNCO0FBQ3pCO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0QsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQjtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLGVBQWUsa0JBQWtCLENBQUM7QUFDbEM7QUFDQTtBQUNBLFdBQVc7QUFDWCxhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQix5QkFBeUI7QUFDekIsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsY0FBYztBQUNkLFdBQVc7QUFDWCxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjtBQUNBLGlCQUFpQixVQUFVLENBQUM7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsVUFBVTtBQUNWLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsV0FBVztBQUVYLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakIsZUFBZTtBQUNmLDBCQUEwQjtBQUMxQjtBQUNBLCtCQUErQixjQUFjLEVBQUU7QUFFL0MsNkJBQTZCLFVBQVUsQ0FBQztBQUN4QztBQUNBLGdCQUFnQjtBQUNoQixXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsU0FBUztBQUNULFVBQVU7QUFDVjtBQUVBLHVCQUF1QjtBQUN2QjtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLGNBQWM7QUFDZCxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsU0FBUztBQUNULHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQixDQUFDO0FBQ3pDO0FBRUE7QUFDQSw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLGNBQWM7QUFDZCxlQUFlO0FBQ2YsY0FBYztBQUNkLGVBQWU7QUFDZixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFFBQVE7QUFDUixNQUFNO0FBQ04sV0FBVztBQUNYO0FBQ0Esa0JBQWtCLDRCQUE0QixDQUFDO0FBQy9DO0FBQ0EsZ0JBQWdCLFNBQVMsQ0FBQztBQUMxQjtBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsWUFBWTtBQUNaLDZCQUE2QjtBQUU3QixnQkFBZ0I7QUFDaEI7QUFDQSxxQkFBcUI7QUFFckIsMkJBQTJCO0FBQzNCLGlCQUFpQixlQUFlLENBQUM7QUFDakM7QUFDQSw2QkFBNkI7QUFDN0IsU0FBUztBQUNULFVBQVU7QUFDVjtBQUNBLHNCQUFzQixVQUFVLENBQUM7QUFDakM7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFDNUIsZUFBZTtBQUNmLGVBQWU7QUFDZixXQUFXO0FBQ1gsbUJBQW1CO0FBQ25CLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsV0FBVztBQUNYLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLFVBQVU7QUFDVixlQUFlO0FBQ2YsMkNBQTJDO0FBQzNDLGtCQUFrQjtBQUNsQjtBQUNBLGFBQWEsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0FBQ3hELG1CQUFtQixhQUFhO0FBQ2hDLGVBQWU7QUFDZiwyQkFBMkIsQ0FBQyIsImZpbGUiOiJmb290YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtZWRpYSAobWF4LXdpZHRoOiA5NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbiBcbiBcbiAgfVxuZm9vdGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzLFxuYTphY3RpdmUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5hLFxuYTphY3RpdmUsXG5hOmZvY3VzIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgICAtbXMtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICAgIC1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbn1cblxudWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5pbWcge1xubWF4LXdpZHRoOiAxMDAlO1xuaGVpZ2h0OiBhdXRvO1xufVxuc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCAwO1xuICAgLyogbWluLWhlaWdodDogMTAwdmg7Ki9cbn1cbi5mb290ZXIge1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEwNWRlZywgIzBjYzc5NiwjMGI2NjIzLCAjMGNjNzk2KTtcbnBhZGRpbmctdG9wOiAyMHB4O1xucGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4vKkVORCBGT09URVIgU09DSUFMIERFU0lHTiovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHsgXG4uc2luZ2xlX2Zvb3RlcnttYXJnaW4tYm90dG9tOjMwcHg7fVxufVxuLnNpbmdsZV9mb290ZXIgaDQge1xuY29sb3I6ICNmZmY7XG5tYXJnaW4tdG9wOiAwO1xubWFyZ2luLWJvdHRvbTogMjVweDtcbmZvbnQtd2VpZ2h0OiA3MDA7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuZm9udC1zaXplOiAyMHB4O1xufVxuLnNpbmdsZV9mb290ZXIgaDQ6OmFmdGVyIHtcbmNvbnRlbnQ6IFwiXCI7XG5kaXNwbGF5OiBibG9jaztcbmhlaWdodDogMnB4O1xud2lkdGg6IDQwcHg7XG5iYWNrZ3JvdW5kOiAjZmZmO1xubWFyZ2luLXRvcDogMjBweDtcbn1cbi5zaW5nbGVfZm9vdGVyIHB7Y29sb3I6I2ZmZjt9XG4uc2luZ2xlX2Zvb3RlciB1bCB7XG5tYXJnaW46IDA7XG5wYWRkaW5nOiAwO1xubGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zaW5nbGVfZm9vdGVyIHVsIGxpIGEge1xuY29sb3I6ICNmZmY7XG4td2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG50cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xubGluZS1oZWlnaHQ6IDM2cHg7XG5mb250LXNpemU6IDE1cHg7XG50ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5zaW5nbGVfZm9vdGVyIHVsIGxpIGE6aG92ZXIgeyBjb2xvcjogI2QzNTQwMDsgfVxuXG4uc2luZ2xlX2Zvb3Rlcl9hZGRyZXNzIHVsIGxpe2NvbG9yOiNmZmY7fVxuLnNpbmdsZV9mb290ZXJfYWRkcmVzcyB1bCBsaSBzcGFuIHtcbmZvbnQtd2VpZ2h0OiA0MDA7XG5jb2xvcjogI2ZmZjtcbmxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmNvbnRhY3Rfc29jaWFsIHVsIHtcbmxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xubWFyZ2luOiAwO1xucGFkZGluZzogMDtcbn1cblxuLypTVEFSVCBORVdTTEVUVEVSIENTUyovXG4uc3Vic2NyaWJlIHtcbmRpc3BsYXk6IGJsb2NrO1xucG9zaXRpb246IHJlbGF0aXZlO1xubWFyZ2luLXRvcDogMTVweDtcbndpZHRoOiAxMDAlO1xufVxuLnN1YnNjcmliZV9faW5wdXQge1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbmJvcmRlcjogbWVkaXVtIG5vbmU7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG5jb2xvcjogIzMzMztcbmRpc3BsYXk6IGJsb2NrO1xuZm9udC1zaXplOiAxNXB4O1xuZm9udC13ZWlnaHQ6IDUwMDtcbmhlaWdodDogNjBweDtcbmxldHRlci1zcGFjaW5nOiAwLjRweDtcbm1hcmdpbjogMDtcbnBhZGRpbmc6IDAgMTUwcHggMCAyMHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xudGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG53aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkgeyBcbi5zdWJzY3JpYmVfX2lucHV0e3BhZGRpbmc6IDAgNTBweCAwIDIwcHg7fVxufVxuXG4uc3Vic2NyaWJlX19idG4ge1xuYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5ib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwO1xuY29sb3I6ICMwYjY2MjM7XG5jdXJzb3I6IHBvaW50ZXI7XG5kaXNwbGF5OiBibG9jaztcbmZvbnQtc2l6ZTogMjBweDtcbmhlaWdodDogNjBweDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnJpZ2h0OiAwO1xudG9wOiAwO1xud2lkdGg6IDYwcHg7XG59XG4uc3Vic2NyaWJlX19idG4gaXt0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO31cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkgeyBcbi5zdWJzY3JpYmVfX2J0bntyaWdodDowcHg7fVxufVxuXG4uc3Vic2NyaWJlX19idG46aG92ZXIgaXtcbmNvbG9yOiNmZjM2NjY7XG59XG5idXR0b24ge1xucGFkZGluZzogMDtcbmJvcmRlcjogbm9uZTtcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xuYm9yZGVyLXJhZGl1czogMDtcbn1cbi8qRU5EIE5FV1NMRVRURVIgQ1NTKi9cblxuLypTVEFSVCBTT0NJQUwgUFJPRklMRSBDU1MqL1xuLnNvY2lhbF9wcm9maWxlIHttYXJnaW4tdG9wOjQwcHg7fVxuLnNvY2lhbF9wcm9maWxlIHVse1xubGlzdC1zdHlsZTogb3V0c2lkZSBub25lIG5vbmU7XG5tYXJnaW46IDA7XG5wYWRkaW5nOiAwO1xufVxuLnNvY2lhbF9wcm9maWxlIHVsIGxpe2Zsb2F0OmxlZnQ7fVxuLnNvY2lhbF9wcm9maWxlIHVsIGxpIGEge1xudGV4dC1hbGlnbjogY2VudGVyO1xuYm9yZGVyOiAwcHg7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xudHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbm1hcmdpbjogMHB4IDVweDtcbmZvbnQtc2l6ZTogMThweDtcbmNvbG9yOiAjZmZmO1xuYm9yZGVyLXJhZGl1czogMzBweDtcbndpZHRoOiA1MHB4O1xuaGVpZ2h0OiA1MHB4O1xubGluZS1oZWlnaHQ6IDUwcHg7XG5kaXNwbGF5OiBibG9jaztcbmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkgeyBcbi5zb2NpYWxfcHJvZmlsZSB1bCBsaSBhe21hcmdpbi1yaWdodDoxMHB4O21hcmdpbi1ib3R0b206MTBweDt9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpIHsgXG4uc29jaWFsX3Byb2ZpbGUgdWwgbGkgYXtcbndpZHRoOjQwcHg7XG5oZWlnaHQ6NDBweDtcbmxpbmUtaGVpZ2h0OjQwcHg7XG59XG59XG4uc29jaWFsX3Byb2ZpbGUgdWwgbGkgYTpob3ZlcntcbmJhY2tncm91bmQ6IzAxYzdlOTtcbmJvcmRlcjogMXB4IHNvbGlkICNlOTAxNjI7XG5jb2xvcjojZmZmO1xuYm9yZGVyOjBweDtcbn1cbi8qRU5EIFNPQ0lBTCBQUk9GSUxFIENTUyovXG4uY29weXJpZ2h0IHtcbm1hcmdpbi10b3A6IDcwcHg7XG5wYWRkaW5nLXRvcDogNDBweDtcbmNvbG9yOiNmZmY7XG5mb250LXNpemU6IDE1cHg7XG5ib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvcHlyaWdodCBhe2NvbG9yOiMwMWM3ZTk7dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAwczt9XG4uY29weXJpZ2h0IGE6aG92ZXJ7Y29sb3I6I2U5MDE2MjtcbmZvbnQtc2l6ZTogMTZweDtcbnRyYW5zaXRpb246IGFsbCAuNXMgZWFzZSAwczt9XG5cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "mihR":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-orders/admin-orders.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/admin.component */ "cCTE");


class AdminOrdersComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminOrdersComponent.ɵfac = function AdminOrdersComponent_Factory(t) { return new (t || AdminOrdersComponent)(); };
AdminOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminOrdersComponent, selectors: [["app-admin-orders"]], decls: 37, vars: 0, consts: [[1, "container-fluid", 2, "border", "0.1px solid #b2bec3", "margin-top", "50px", "width", "80%"], [1, "row", "product", 2, "border-bottom", "0.5px solid #b2bec3", "padding", "15px", "font-size", "17px", "font-weight", "200"], [1, "col-md-2"], [1, "col-lg-2", 2, "margin", "auto"], [1, "col-md-2", 2, "margin", "auto"], [1, "col-md-1", 2, "margin", "auto"], ["src", "https://www.pharma-shop.tn/5431-large_default/a-derma-exomega-defi-baume-emollient-200ml.jpg", "height", "120px", "width", "100px"], ["type", "button", 1, "btn", "btn-info"], ["type", "button", 1, "btn", "btn-warning"]], template: function AdminOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Product title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Payment Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Delivery Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "A-DERMA EXOMEGA CONTROL BAUME EMOLLIENT 200ML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "BenThameur@mail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " pending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " preparing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1vcmRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "pnO4":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-products/admin-products.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin/admin.component */ "cCTE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function AdminProductsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "skin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_div_13_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const product_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.EditSelected(product_r2._id, product_r2.title, product_r2.price, product_r2.pricePromo, product_r2.imageUrl, product_r2.description, product_r2.producer, product_r2.category, product_r2.stock); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_div_13_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const product_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteProduct(product_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.title);
} }
function AdminProductsComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " product Updated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdminProductsComponent {
    constructor(prodservice) {
        this.prodservice = prodservice;
        this.products = [];
        this.title = '';
        this.price = '';
        this.pricepromo = '';
        this.imageUrl = '';
        this.description = '';
        this.producer = '';
        this.category = '';
        this.stock = '';
        this.id = '';
        this.alert = false;
    }
    ngOnInit() {
        this.getproducts();
    }
    deleteProduct(id) {
        this.prodservice.DeleteProduct(id).subscribe((result) => {
            this.getproducts();
        });
    }
    EditSelected(id, title, price, pricepromo, imageUrl, description, producer, category, stock) {
        this.title = title;
        this.price = price;
        this.pricepromo = pricepromo;
        this.imageUrl = imageUrl;
        this.description = description;
        this.producer = producer;
        this.category = category;
        this.stock = stock;
        this.id = id;
    }
    dismissAlert() {
        this.alert = false;
    }
    EditProduct() {
        this.prodservice.editProduct(this.id, this.title, this.price, this.pricepromo, this.imageUrl, this.description, this.producer, this.category, this.stock).subscribe((result) => {
            this.getproducts();
            this.alert = true;
        });
    }
    ChangeInput(event) {
        var { target } = event;
        if (target) {
            if (target.id == 'titleEdit') {
                this.title = target.value;
            }
            if (target.id == 'categoryEdit') {
                this.category = target.value;
            }
            if (target.id == 'priceEdit') {
                this.price = target.value;
            }
            if (target.id == 'pricePromo') {
                this.pricepromo = target.value;
            }
            if (target.id == 'producerEdit') {
                this.producer = target.value;
            }
            if (target.id == 'StockEdit') {
                this.stock = target.value;
            }
            if (target.id == 'imageUrlEdit') {
                this.imageUrl = target.value;
            }
            if (target.id == 'descreptionEdit') {
                this.description = target.value;
            }
        }
    }
    getproducts() {
        this.prodservice.getproduct().subscribe((data) => {
            this.products = data;
            console.log(data);
        });
    }
}
AdminProductsComponent.ɵfac = function AdminProductsComponent_Factory(t) { return new (t || AdminProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
AdminProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminProductsComponent, selectors: [["app-admin-products"]], decls: 63, vars: 10, consts: [[1, "container", 2, "border", "0.1px solid #b2bec3", "margin-top", "50px"], [1, "row", "product", 2, "border-bottom", "0.5px solid #b2bec3", "padding", "15px", "font-size", "17px", "font-weight", "200"], [1, "col-md-3"], [1, "col-md-3", 2, "margin", "auto"], [1, "col-md-2", 2, "margin", "auto"], [4, "ngFor", "ngForOf"], ["id", "editmodal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], [2, "font-size", "16px", "font-weight", "200", "margin-left", "8px", "color", "black"], ["type", "text", "placeholder", "title...", "id", "titleEdit", 1, "form-control", 3, "value", "change"], ["type", "text", "placeholder", "category...", "id", "categoryEdit", 1, "form-control", 3, "value", "change"], ["type", "text", "placeholder", "price...", "id", "priceEdit", 1, "form-control", 3, "value"], ["type", "text", "placeholder", "pricePromo...", "id", "pricePromoEdit", 1, "form-control", 3, "value", "change"], ["type", "text", "placeholder", "producer...", "id", "producerEdit", 1, "form-control", 3, "value", "change"], ["type", "text", "placeholder", "stock...", "id", "StockEdit", 1, "form-control", 3, "value", "change"], ["type", "text", "placeholder", "imageUrl...", "id", "imageUrlEdit", 1, "form-control", 3, "value", "change"], ["placeholder", "descreption...", "id", "descreptionEdit", 1, "form-control", 3, "value", "change"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["height", "120px", "width", "100px", 3, "src"], ["type", "button", "data-toggle", "modal", "data-target", "#editmodal", 1, "btn", "btn-info", 2, "background-color", "#e1b12c", "border", "#e1b12c", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["role", "alert", 1, "alert", "alert-success"]], template: function AdminProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Product title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " categorie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminProductsComponent_div_13_Template, 16, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Edit Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_Template_button_click_20_listener() { return ctx.dismissAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Title :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductsComponent_Template_input_change_28_listener($event) { return ctx.ChangeInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Category :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductsComponent_Template_input_change_32_listener($event) { return ctx.ChangeInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "price :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "price Promo :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductsComponent_Template_input_change_40_listener($event) { return ctx.ChangeInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Producer :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductsComponent_Template_input_change_44_listener($event) { return ctx.ChangeInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Stock :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductsComponent_Template_input_change_48_listener($event) { return ctx.ChangeInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "ImageUrl :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductsComponent_Template_input_change_52_listener($event) { return ctx.ChangeInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Description :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminProductsComponent_Template_textarea_change_56_listener($event) { return ctx.ChangeInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AdminProductsComponent_div_57_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_Template_button_click_59_listener() { return ctx.dismissAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminProductsComponent_Template_button_click_61_listener() { return ctx.EditProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Edit Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.pricepromo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.producer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.stock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alert);
    } }, directives: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UserService {
    constructor(http) {
        this.http = http;
        this.userData = [];
    }
    getuser() {
        return this.http.get("http://localhost:5555/user");
    }
    postFrom(data) {
        return this.http.post('http://localhost:5555/user/create', data);
    }
    editUser(id, firstName, lastName, email, password, phoneNumber, city, address1, address2, zipCode) {
        return this.http.put("http://localhost:5555/user/" + id, { firstName, lastName, email, password, phoneNumber, city, address1, address2, zipCode });
    }
    subscribee(email) {
        return this.http.post("http://localhost:5555/newsLetter/create", { email });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "r4SE":
/*!*******************************************************************!*\
  !*** ./src/app/components/payment-page/payment-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageComponent", function() { return PaymentPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/payment.service */ "s5zK");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







function PaymentPageComponent_div_28_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PaymentPageComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please Don't Close This Page Until Payment Is Done ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Status : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PaymentPageComponent_div_28_div_9_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.QrCodeLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.paidBtc)("ngIfThen", _r4)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Address : ", ctx_r0.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Amount in TND : ", ctx_r0.total, " DT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Amount in Bitcoin : ", ctx_r0.amountBtc, " BTC ");
} }
function PaymentPageComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PaymentPageComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "UNPAID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentPageComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PAID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentPageComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaymentPageComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PaymentPageComponent {
    constructor(prodservice, paymentservice, authenticationservice) {
        this.prodservice = prodservice;
        this.paymentservice = paymentservice;
        this.authenticationservice = authenticationservice;
        this.total = 0;
        this.products = [];
        this.cookie = {};
        this.address = "3CgNgHE4VbgdeU1zDD7uPcjorvxmLefwY1";
        this.QrCodeLink = "";
        this.paidBtc = false;
        this.MethodBtc = false;
        this.amountBtc = 0;
        this.continuePage = false;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.city = '';
        this.address1 = '';
        this.zipCode = '';
        this.phone = '';
        this.address2 = '';
    }
    ngOnInit() {
        var temp = document.cookie;
        if (temp.includes('GRAM')) {
            this.getDataUser(this.cookiefinderuser(temp));
        }
        this.GetData();
    }
    GetData() {
        var cookies = document.cookie;
        if (cookies.includes('cart')) {
            var valueCook = this.cookiefinder(cookies);
            var cookie = JSON.parse(valueCook);
            var productsLocal = [];
            for (var i = 0; i < cookie.length; i++) {
                this.total = 0;
                this.cookie = cookie[i];
                if (cookie[i] != null && cookie[i].quantity > 0) {
                    this.prodservice.getOneProduct(cookie[i].id).subscribe((data) => {
                        var res;
                        res = data;
                        res.quantity = this.cookie.quantity;
                        productsLocal.push(data);
                        this.total += this.cookie.quantity * res.price;
                    });
                }
            }
            this.GetAmount();
            this.products = productsLocal;
        }
    }
    GetAmount() {
        console.log('a');
        this.paymentservice.LastPrice().subscribe((data) => {
            this.amountBtc = (this.total * 0.36) / data.lprice;
            this.amountBtc = this.amountBtc.toFixed(5);
            this.total = this.total.toFixed(2);
        });
        this.QrCodeLink = 'https://www.bitcoinqrcodemaker.com/api/?style=bitcoin&address=' + this.address + '&amount=' + this.amountBtc;
    }
    checkPayment() {
        console.log("check");
        this.paymentservice.checkBtcPayment(this.address).subscribe((result) => {
            console.log(result);
            console.log(Number(result));
            if (Number(result) * 0.00000001 >= this.amountBtc) {
                this.paidBtc = true;
                this.continuePage = true;
            }
            else if (this.MethodBtc) {
                setTimeout(() => { this.checkPayment(); }, 3000);
            }
        });
    }
    changeChek(value) {
        if (value == 'bitcoin') {
            this.continuePage = false;
            this.MethodBtc = true;
            this.checkPayment();
        }
        else {
            this.MethodBtc = false;
            this.continuePage = true;
        }
    }
    getDataUser(cook) {
        this.authenticationservice.checkLog(cook).subscribe((res) => {
            console.log('s', res);
            this.firstName = res.firstName;
            this.lastName = res.lastName;
            this.email = res.email;
            this.city = res.city;
            this.address1 = res.address1;
            this.zipCode = res.zipCode;
            this.phone = res.phoneNumber;
            this.address2 = res.address2;
        });
    }
    cookiefinder(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('cart')) {
                found = strx[i].replace('cart=', '');
            }
        }
        return found;
    }
    cookiefinderuser(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('GRAM')) {
                found = strx[i].replace('GRAM=', '');
            }
        }
        return found;
    }
}
PaymentPageComponent.ɵfac = function PaymentPageComponent_Factory(t) { return new (t || PaymentPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_payment_service__WEBPACK_IMPORTED_MODULE_2__["PaymentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["authentication"])); };
PaymentPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentPageComponent, selectors: [["app-payment-page"]], decls: 43, vars: 11, consts: [[1, "container", 2, "border", "0.1px solid #b2bec3", "margin-top", "50px", "width", "80%", "margin-bottom", "10px", "padding", "29px"], [1, "row", 2, "font-weight", "500"], [2, "margin-left", "15px", "background-color", "rgb(99, 110, 114,0.18)", "width", "40%", "margin-top", "25px", "padding", "12px"], [1, "row", 2, "margin-left", "25px"], [1, "row", 2, "margin-top", "25px", "font-weight", "500"], [2, "margin-left", "30px", "font-size", "18px", "margin-top", "20px"], ["name", "radiocheck"], [1, "form-check"], ["type", "radio", "name", "PaymentMethod", "id", "bitcoin", "value", "bitcoin", 1, "form-check-input", 3, "change"], ["for", "bitcoin", 1, "form-check-label"], ["type", "radio", "name", "PaymentMethod", "id", "cash", "value", "cash", 1, "form-check-input", 3, "change"], ["for", "cash", 1, "form-check-label"], [4, "ngIf"], [1, "container", 2, "margin-bottom", "50px"], [1, "row", "justify-content-end"], [1, "col-2"], ["routerLink", "../ordercomplete"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["unpaid", ""], ["paid", ""], ["continueDisable", ""], ["continue", ""], [1, "row", 2, "margin-top", "15px", "margin-left", "50px"], [1, "col-md-3"], ["height", "200px", "width", "200px", 3, "src"], [1, "col-md-4", 2, "margin-left", "25px"], [1, "row", 2, "margin-top", "15px"], [1, "row", 2, "margin-top", "10px"], [2, "color", "#d63031"], [2, "color", "#27ae60"], ["type", "button", "disabled", "", 1, "btn", "btn-primary", 2, "margin-top", "10px"], ["type", "button", 1, "btn", "btn-primary", 2, "margin-top", "10px"]], template: function PaymentPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " 1 - Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 2 - Payment Method ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PaymentPageComponent_Template_input_change_21_listener() { return ctx.changeChek("bitcoin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Bitcoin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PaymentPageComponent_Template_input_change_25_listener() { return ctx.changeChek("cash"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Cash on Delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PaymentPageComponent_div_28_Template, 16, 7, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PaymentPageComponent_div_34_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PaymentPageComponent_ng_template_35_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PaymentPageComponent_ng_template_37_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PaymentPageComponent_ng_template_39_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PaymentPageComponent_ng_template_41_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Full Name : ", ctx.firstName, " ", ctx.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Address Line 1 : ", ctx.address1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Address Line 2 : ", ctx.address2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" City : ", ctx.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Postal Code : ", ctx.zipCode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Phone Number : ", ctx.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.MethodBtc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.continuePage)("ngIfThen", _r8)("ngIfElse", _r6);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "s5zK":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PaymentService {
    constructor(http) {
        this.http = http;
        this.productData = [];
    }
    checkBtcPayment(address) {
        return this.http.get("https://blockchain.info/q/addressbalance/" + address + "?confirmations=0");
    }
    LastPrice() {
        return this.http.get("http://cex.io/api/last_price/BTC/USD");
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "t+EI":
/*!***************************************************************!*\
  !*** ./src/app/components/addProduct/addProduct.component.ts ***!
  \***************************************************************/
/*! exports provided: addProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductComponent", function() { return addProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "Gdn9");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin/admin.component */ "cCTE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class addProductComponent {
    constructor(prodservice) {
        this.prodservice = prodservice;
        this.mydata = [];
        this.title = '';
        this.category = '';
        this.price = '';
        this.pricePromo = '';
        this.producer = '';
        this.imageUrl = '';
        this.description = '';
    }
    ngOnInit() { }
    changeData(event) {
        const { target } = event;
        if (target.id == 'titleaa') {
            this.title = target.value;
        }
        if (target.id == 'categoryaa') {
            this.category = target.value;
        }
        if (target.id == 'priceaa') {
            this.price = target.value;
        }
        if (target.id == 'pricePromoaa') {
            this.pricePromo = target.value;
        }
        if (target.id == 'produceraa') {
            this.producer = target.value;
        }
        if (target.id == 'imageUrlaa') {
            this.imageUrl = target.value;
        }
        if (target.id == 'descriptionaa') {
            this.description = target.value;
        }
    }
    addproducts() {
        this.prodservice.addproduct(this.title, this.category, this.price, this.pricePromo, this.producer, this.imageUrl, this.description).subscribe((data) => {
            console.log(data);
        });
    }
}
addProductComponent.ɵfac = function addProductComponent_Factory(t) { return new (t || addProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
addProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: addProductComponent, selectors: [["app-addProduct"]], decls: 26, vars: 0, consts: [[1, "modal-content", 2, "width", "50%", "margin", "auto", "margin-top", "50px"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "form-group"], ["type", "text", "placeholder", "title...", "id", "titleaa", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "category...", "id", "categoryaa", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "price...", "id", "priceaa", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "pricePromo...", "id", "pricePromoaa", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "producer...", "id", "produceraa", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "imageUrl...", "id", "imageUrlaa", 1, "form-control", 3, "change"], ["type", "text", "placeholder", "stock...", "id", "stockaa", 1, "form-control", 3, "change"], ["placeholder", "description...", "id", "descriptionaa", 1, "form-control", 3, "change"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function addProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function addProductComponent_Template_input_change_8_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function addProductComponent_Template_input_change_10_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function addProductComponent_Template_input_change_12_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function addProductComponent_Template_input_change_14_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function addProductComponent_Template_input_change_16_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function addProductComponent_Template_input_change_18_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function addProductComponent_Template_input_change_20_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function addProductComponent_Template_textarea_change_22_listener($event) { return ctx.changeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function addProductComponent_Template_button_click_24_listener() { return ctx.addproducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRQcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ujWA":
/*!*******************************************************************!*\
  !*** ./src/app/components/profile-page/profile-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageComponent", function() { return ProfilePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "ej43");



class ProfilePageComponent {
    constructor(userservice, authenticationservice) {
        this.userservice = userservice;
        this.authenticationservice = authenticationservice;
        this.userData = [];
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.city = '';
        this.address1 = '';
        this.zipCode = '';
    }
    ngOnInit() {
        this.editUsers();
        if (document.cookie.includes('GRAM')) {
            this.getDataUser(this.cookiefinder(document.cookie));
        }
    }
    editUsers() {
        this.userservice.getuser().subscribe((data) => {
            console.log("i am user", data);
            this.userData = data;
        });
    }
    getDataUser(cook) {
        this.authenticationservice.checkLog(cook).subscribe((res) => {
            console.log(res);
            if (res.role == 'client') {
                this.firstName = res.firstName;
                this.lastName = res.lastName;
                this.email = res.email;
                this.city = res.city;
                this.address1 = res.address1;
                this.zipCode = res.zipCode;
            }
        });
    }
    cookiefinder(str) {
        var strx = str.split('; ');
        var found = '';
        for (var i = 0; i < strx.length; i++) {
            if (strx[i].includes('GRAM')) {
                found = strx[i].replace('GRAM=', '');
            }
        }
        return found;
    }
}
ProfilePageComponent.ɵfac = function ProfilePageComponent_Factory(t) { return new (t || ProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["authentication"])); };
ProfilePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilePageComponent, selectors: [["app-profile-page"]], decls: 54, vars: 7, consts: [[1, "container", 2, "margin-top", "80px", "margin-bottom", "80px"], [1, "main-body"], ["aria-label", "breadcrumb", 1, "main-breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row", "gutters-sm"], [1, "col-md-4", "mb-3"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-column", "align-items-center", "text-center"], ["src", "https://bootdey.com/img/Content/avatar/avatar7.png", "alt", "Admin", "width", "150", 1, "rounded-circle"], [1, "mt-3"], [1, "card", "mt-3"], [1, "list-group", "list-group-flush"], [1, "col-md-8"], [1, "card", "mb-3"], [1, "row"], [1, "col-sm-3"], [1, "mb-0"], [1, "col-sm-9", "text-secondary"]], template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.firstName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.firstName, " ", ctx.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.address1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.zipCode, " ");
    } }, styles: [".main-body[_ngcontent-%COMP%] {\n    padding: 15px;\n}\n.card[_ngcontent-%COMP%] {\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);\n}\n.card[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 0 solid rgba(0,0,0,.125);\n    border-radius: .25rem;\n}\n.card-body[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    min-height: 1px;\n    padding: 1rem;\n}\n.gutters-sm[_ngcontent-%COMP%] {\n    margin-right: -8px;\n    margin-left: -8px;\n}\n.gutters-sm[_ngcontent-%COMP%] > .col[_ngcontent-%COMP%], .gutters-sm[_ngcontent-%COMP%] > [class*=col-][_ngcontent-%COMP%] {\n    padding-right: 8px;\n    padding-left: 8px;\n}\n.mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem!important;\n}\n.bg-gray-300[_ngcontent-%COMP%] {\n    background-color: #e2e8f0;\n}\n.h-100[_ngcontent-%COMP%] {\n    height: 100%!important;\n}\n.shadow-none[_ngcontent-%COMP%] {\n    box-shadow: none!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1FQUFtRTtBQUN2RTtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6InByb2ZpbGUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbi1ib2R5IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEpLCAwIDFweCAycHggMCByZ2JhKDAsMCwwLC4wNik7XG59XG5cbi5jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAwIHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLmd1dHRlcnMtc20ge1xuICAgIG1hcmdpbi1yaWdodDogLThweDtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbn1cblxuLmd1dHRlcnMtc20+LmNvbCwgLmd1dHRlcnMtc20+W2NsYXNzKj1jb2wtXSB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLm1iLTMsIC5teS0zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtIWltcG9ydGFudDtcbn1cblxuLmJnLWdyYXktMzAwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xufVxuLmgtMTAwIHtcbiAgICBoZWlnaHQ6IDEwMCUhaW1wb3J0YW50O1xufVxuLnNoYWRvdy1ub25lIHtcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcbn0iXX0= */"] });


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
<<<<<<< HEAD
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/payment-page/payment-page.component */ "r4SE");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/singin/singin.component */ "368S");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");
/* harmony import */ var _components_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/addProduct/addProduct.component */ "t+EI");
/* harmony import */ var _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-products/admin-products.component */ "pnO4");
/* harmony import */ var _components_categorie_page_categorie_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/categorie-page/categorie-page.component */ "3C8t");
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "ujWA");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/setting/setting.component */ "KxqT");
/* harmony import */ var _components_order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/order-complete/order-complete.component */ "RMJ0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
=======
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/payment-page/payment-page.component */ "r4SE");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/singin/singin.component */ "368S");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");
/* harmony import */ var _components_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/addProduct/addProduct.component */ "t+EI");
/* harmony import */ var _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin-products/admin-products.component */ "pnO4");
/* harmony import */ var _components_categorie_page_categorie_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/categorie-page/categorie-page.component */ "3C8t");
/* harmony import */ var _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile-page/profile-page.component */ "ujWA");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/setting/setting.component */ "KxqT");
/* harmony import */ var _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-orders/admin-orders.component */ "mihR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");

>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685















const routes = [
<<<<<<< HEAD
    { path: '', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: 'product/:id', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'singin', component: _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_5__["SinginComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"] },
    { path: 'cart/payment', component: _components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_3__["PaymentPageComponent"] },
    { path: 'admin/products', component: _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_8__["AdminProductsComponent"] },
    { path: 'admin/addProduct', component: _components_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_7__["addProductComponent"] },
    { path: 'categorie', component: _components_categorie_page_categorie_page_component__WEBPACK_IMPORTED_MODULE_9__["CategoriePageComponent"] },
    { path: 'profile', component: _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_10__["ProfilePageComponent"] },
    { path: 'setting', component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_11__["SettingComponent"] },
    { path: 'cart/ordercomplete', component: _components_order_complete_order_complete_component__WEBPACK_IMPORTED_MODULE_12__["OrderCompleteComponent"] }
=======
    { path: '', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'product/:id', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'singin', component: _components_singin_singin_component__WEBPACK_IMPORTED_MODULE_6__["SinginComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] },
    { path: 'cart/payment', component: _components_payment_page_payment_page_component__WEBPACK_IMPORTED_MODULE_4__["PaymentPageComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"] },
    { path: 'addProduct', component: _components_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_8__["addProductComponent"] },
    { path: 'admin', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'categorie/:id', component: _components_categorie_page_categorie_page_component__WEBPACK_IMPORTED_MODULE_10__["CategoriePageComponent"] },
    { path: 'admin/addProduct', component: _components_addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_8__["addProductComponent"] },
    { path: 'admin/adminproduct', component: _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_9__["AdminProductsComponent"] },
    { path: 'profile', component: _components_profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_11__["ProfilePageComponent"] },
    { path: 'admin/adminorders', component: _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__["AdminOrdersComponent"] },
    { path: 'setting', component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_12__["SettingComponent"] },
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
<<<<<<< HEAD
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
=======
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
>>>>>>> fdfbfe2249f0f3e54104bdb18ec5aa8b120b7685


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