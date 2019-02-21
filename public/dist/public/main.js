(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-product/add-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-product/add-product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-product/add-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-product/add-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [routerLink]=\"['/']\">Home</button>\n<h1>Add a new product:</h1>\n<form (submit) = \"addProduct()\">\n  <label>Name:</label>\n  <input name=\"name\" type=\"text\" [(ngModel)]=\"product.name\"/>\n  <br>\n  <label>Description:</label>\n  <textarea name=\"desc\" [(ngModel)]=\"product.desc\"></textarea>\n  <br>\n  <label>Price:</label>\n  <input name=\"price\" type=\"number\" min=0 [(ngModel)]=\"product.price\"/>\n  <br>\n  <label>Quanity:</label>\n  <input name=\"quanity\" type=\"number\" min=0 [(ngModel)]=\"product.quanity\"/>\n  <br>\n  <label>Category:</label>\n  <select name=\"category\" [(ngModel)]=\"product.category\">\n    <option value=\"new\">New</option>\n    <option value=\"bestsellers\">Bestsellers</option>\n    <option value=\"U20\">Under $20</option>\n    <option value=\"tools\">Tools & Tech</option>\n    <option value=\"solar\">Solar-Powered</option>\n    <option value=\"windup\">Wind-Up Toys</option>\n  </select>\n  <br>\n  <label>Img1:</label>\n  <input type=\"text\" name=\"img1\" [(ngModel)]=\"product.img1\"/>\n  <br>\n  <label>Search:</label>\n  <input name=\"search\" type=\"text\" [(ngModel)]=\"product.search\"/>\n  <br>\n  <input type = \"submit\" value=\"Submit\"/>\n</form>\n<button [routerLink]=\"['/']\">Cancel</button>\n<div>\n    {{product.name}}\n    {{product.desc}}\n    {{product.price}}\n    {{product.image}}\n    {{product.category}}\n</div>\n"

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.product = {
            name: "",
            desc: "",
            price: 0,
            quanity: 0,
            category: "",
            img1: "",
            search: ""
        };
        this.error = '';
    };
    AddProductComponent.prototype.addProduct = function () {
        var _this = this;
        var observable = this._httpService.addProductService(this.product);
        observable.subscribe(function (data) {
            console.log("Subscribe: ", data);
            if (data != undefined) {
                _this.error = data;
            }
            else {
                _this.product = { name: "", desc: "", price: 0, image: "", category: "" };
            }
        });
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/add-product/add-product.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bestsellers/bestsellers.component */ "./src/app/bestsellers/bestsellers.component.ts");
/* harmony import */ var _under20_under20_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./under20/under20.component */ "./src/app/under20/under20.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _ckoutnav_ckoutnav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ckoutnav/ckoutnav.component */ "./src/app/ckoutnav/ckoutnav.component.ts");
/* harmony import */ var _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainnav/mainnav.component */ "./src/app/mainnav/mainnav.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _solar_solar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./solar/solar.component */ "./src/app/solar/solar.component.ts");
/* harmony import */ var _windup_windup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./windup/windup.component */ "./src/app/windup/windup.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _write_review_write_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./write-review/write-review.component */ "./src/app/write-review/write-review.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _revieworder_revieworder_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./revieworder/revieworder.component */ "./src/app/revieworder/revieworder.component.ts");
/* harmony import */ var _orderplaced_orderplaced_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./orderplaced/orderplaced.component */ "./src/app/orderplaced/orderplaced.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'gidget' },
    { path: 'gidget', component: _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_8__["MainnavComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'main' },
            { path: 'main', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], children: [
                    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"] }
                ] },
            { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] }, { path: 'U20', component: _under20_under20_component__WEBPACK_IMPORTED_MODULE_4__["Under20Component"] }, { path: 'bestsellers', component: _bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_3__["BestsellersComponent"] },
            { path: 'tools', component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_9__["ToolsComponent"] }, { path: 'solar', component: _solar_solar_component__WEBPACK_IMPORTED_MODULE_10__["SolarComponent"] }, { path: 'windup', component: _windup_windup_component__WEBPACK_IMPORTED_MODULE_11__["WindupComponent"] },
            { path: 'addProduct', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__["AddProductComponent"] }, { path: 'details/:id', component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"] }, { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"] },
            { path: 'addreview', component: _write_review_write_review_component__WEBPACK_IMPORTED_MODULE_15__["WriteReviewComponent"] }
        ] },
    { path: 'checkout', component: _ckoutnav_ckoutnav_component__WEBPACK_IMPORTED_MODULE_7__["CkoutnavComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'cart' },
            { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] }, { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_16__["PaymentComponent"] }, { path: 'revieworder', component: _revieworder_revieworder_component__WEBPACK_IMPORTED_MODULE_17__["RevieworderComponent"] },
            { path: 'orderplaced', component: _orderplaced_orderplaced_component__WEBPACK_IMPORTED_MODULE_18__["OrderplacedComponent"] }
        ] }
];
// { path: 'gidget/new', component: NewComponent },
// { path: 'gidget/U20', component: Under20Component },
// { path: 'gidget/bestsellers', component: BestsellersComponent},
// { path: 'gidget/cart', component: CartComponent}];
//   { path: 'reviews', component: ReviewComponent, children: [
//     { path: 'details/:id', component: ReviewDetailComponent },
//     { path: 'author/:id', component: AuthorComponent },
//     { path: 'all/:id', component: AllreviewsComponent }]
// }
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".root {\r\n  background-color: #F5928D;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb290IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjU5MjhEO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"root\" style=\"text-align:center\">\n    <a href=\"/\"><img src=\"images/gidget-logo.png\"/></a>\n</div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'public';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bestsellers/bestsellers.component */ "./src/app/bestsellers/bestsellers.component.ts");
/* harmony import */ var _under20_under20_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./under20/under20.component */ "./src/app/under20/under20.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _ckoutnav_ckoutnav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ckoutnav/ckoutnav.component */ "./src/app/ckoutnav/ckoutnav.component.ts");
/* harmony import */ var _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mainnav/mainnav.component */ "./src/app/mainnav/mainnav.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _solar_solar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./solar/solar.component */ "./src/app/solar/solar.component.ts");
/* harmony import */ var _windup_windup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./windup/windup.component */ "./src/app/windup/windup.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _write_review_write_review_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./write-review/write-review.component */ "./src/app/write-review/write-review.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _revieworder_revieworder_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./revieworder/revieworder.component */ "./src/app/revieworder/revieworder.component.ts");
/* harmony import */ var _orderplaced_orderplaced_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./orderplaced/orderplaced.component */ "./src/app/orderplaced/orderplaced.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                _bestsellers_bestsellers_component__WEBPACK_IMPORTED_MODULE_9__["BestsellersComponent"],
                _under20_under20_component__WEBPACK_IMPORTED_MODULE_10__["Under20Component"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["CartComponent"],
                _ckoutnav_ckoutnav_component__WEBPACK_IMPORTED_MODULE_13__["CkoutnavComponent"],
                _mainnav_mainnav_component__WEBPACK_IMPORTED_MODULE_14__["MainnavComponent"],
                _tools_tools_component__WEBPACK_IMPORTED_MODULE_15__["ToolsComponent"],
                _solar_solar_component__WEBPACK_IMPORTED_MODULE_16__["SolarComponent"],
                _windup_windup_component__WEBPACK_IMPORTED_MODULE_17__["WindupComponent"],
                _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_18__["AddProductComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailsComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"],
                _write_review_write_review_component__WEBPACK_IMPORTED_MODULE_21__["WriteReviewComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_22__["PaymentComponent"],
                _revieworder_revieworder_component__WEBPACK_IMPORTED_MODULE_23__["RevieworderComponent"],
                _orderplaced_orderplaced_component__WEBPACK_IMPORTED_MODULE_24__["OrderplacedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bestsellers/bestsellers.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bestsellers/bestsellers.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlc3RzZWxsZXJzL2Jlc3RzZWxsZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bestsellers/bestsellers.component.html":
/*!********************************************************!*\
  !*** ./src/app/bestsellers/bestsellers.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\" >\n    <div class=\"item\" *ngFor='let item of bestsellProducts'>\n      <h2 class=\"name\">{{item.name}}</h2>\n      <a [routerLink]=\"['../details/' + item._id]\">\n        <img src=\"products/{{item.images[0]}}\">\n      </a>\n      <h2>${{item.price}}</h2>\n    </div>  \n  </div>\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>  "

/***/ }),

/***/ "./src/app/bestsellers/bestsellers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bestsellers/bestsellers.component.ts ***!
  \******************************************************/
/*! exports provided: BestsellersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestsellersComponent", function() { return BestsellersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BestsellersComponent = /** @class */ (function () {
    function BestsellersComponent(_httpService) {
        this._httpService = _httpService;
        this.bestsellProducts = [];
    }
    BestsellersComponent.prototype.ngOnInit = function () {
        this.getBestsellProducts();
    };
    BestsellersComponent.prototype.getBestsellProducts = function () {
        var _this = this;
        var observable = this._httpService.getBestsellProductsFromService();
        observable.subscribe(function (bestsellProducts) {
            console.log(bestsellProducts);
            _this.bestsellProducts = bestsellProducts;
        });
    };
    BestsellersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bestsellers',
            template: __webpack_require__(/*! ./bestsellers.component.html */ "./src/app/bestsellers/bestsellers.component.html"),
            styles: [__webpack_require__(/*! ./bestsellers.component.css */ "./src/app/bestsellers/bestsellers.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], BestsellersComponent);
    return BestsellersComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shopping_cart\" *ngFor='let idx of cart'>\n    <h2 class=\"name\">{{idx.name}}</h2>\n    <a [routerLink]=\"['../details/' + idx._id]\">\n    <img src=\"products/{{idx.image}}\">\n    </a>\n    <h2>${{idx.price}}</h2>\n    <form (submit)=\"deleteCart(idx)\">\n        <button>Delete</button>\n    </form>  \n</div>  \n\n<a [routerLink]=\"['../payment']\">Proceed To Checkout</a>\n\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(_httpService) {
        this._httpService = _httpService;
        this.cart = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    CartComponent.prototype.getCart = function () {
        var _this = this;
        var observable = this._httpService.getCartFromService();
        observable.subscribe(function (cart) {
            console.log(cart);
            _this.cart = cart;
        });
    };
    CartComponent.prototype.deleteCart = function (item) {
        var observable = this._httpService.deleteCartFromService(item);
        observable.subscribe(function (deleted) {
            console.log(deleted);
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/ckoutnav/ckoutnav.component.css":
/*!*************************************************!*\
  !*** ./src/app/ckoutnav/ckoutnav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ckoutnav{\n    font-size:15px;\n    color:white;\n    margin-left: 20%;\n}\n\n.rightnav{\n    font-size: 11px;\n    margin-left: 10px;\n    vertical-align: right;\n    padding: 10px;\n}\n\n#search{\n    margin-left: 35%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2tvdXRuYXYvY2tvdXRuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Nrb3V0bmF2L2Nrb3V0bmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2tvdXRuYXZ7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbn1cblxuLnJpZ2h0bmF2e1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI3NlYXJjaHtcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/ckoutnav/ckoutnav.component.html":
/*!**************************************************!*\
  !*** ./src/app/ckoutnav/ckoutnav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <span class=\"ckoutnav\">\n    Shipping + Payment > Review Order > Order Placed!\n    </span>\n    <a id=\"search\" class=\"rightnav\" href=\"\">Search</a> \n    <a class=\"rightnav\" [routerLink]=\"['/checkout/cart']\">Cart</a> \n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/ckoutnav/ckoutnav.component.ts":
/*!************************************************!*\
  !*** ./src/app/ckoutnav/ckoutnav.component.ts ***!
  \************************************************/
/*! exports provided: CkoutnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkoutnavComponent", function() { return CkoutnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CkoutnavComponent = /** @class */ (function () {
    function CkoutnavComponent() {
    }
    CkoutnavComponent.prototype.ngOnInit = function () {
    };
    CkoutnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ckoutnav',
            template: __webpack_require__(/*! ./ckoutnav.component.html */ "./src/app/ckoutnav/ckoutnav.component.html"),
            styles: [__webpack_require__(/*! ./ckoutnav.component.css */ "./src/app/ckoutnav/ckoutnav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CkoutnavComponent);
    return CkoutnavComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh3 {\r\n  font-family: 'Mouse Memoirs', sans-serif;\r\n  }\r\n/* \r\n  .items1 {\r\n    background-color: skyblue;\r\n    height: 500px;\r\n  } */\r\n.items1 p {\r\n    color: white;\r\n  }\r\n/* .items1 h3 {\r\n    background-color: green;\r\n  } */\r\n.items1 div{\r\n    display: inline-block;\r\n    margin: 1%;\r\n    padding-left: 100px;\r\n  }\r\n.items1 img {\r\n    background-color: white;\r\n  }\r\n/* .items2 {\r\n    background-color: skyblue;\r\n  } */\r\n.items2 div{\r\n    display: inline-block;\r\n    margin: 1%;\r\n    padding-left: 100px;\r\n  }\r\n.items2 p {\r\n    color: white;\r\n  }\r\nimg {\r\n    width: 300px;\r\n    height: 300px;\r\n  }\r\n/* .items2 h3 {\r\n    background-color: green;\r\n  } */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseUNBQXlDO0dBQ3hDO0FBQ0g7Ozs7TUFJTTtBQUVKO0lBQ0UsYUFBYTtHQUNkO0FBRUQ7O01BRUk7QUFFSjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0JBQW9CO0dBQ3JCO0FBRUQ7SUFDRSx3QkFBd0I7R0FDekI7QUFFRDs7TUFFSTtBQUVKO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7R0FDckI7QUFFRDtJQUNFLGFBQWE7R0FDZDtBQUVEO0lBQ0UsYUFBYTtJQUNiLGNBQWM7R0FDZjtBQUVEOztNQUVJIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDMge1xyXG4gIGZvbnQtZmFtaWx5OiAnTW91c2UgTWVtb2lycycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4vKiBcclxuICAuaXRlbXMxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH0gKi9cclxuXHJcbiAgLml0ZW1zMSBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC8qIC5pdGVtczEgaDMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgfSAqL1xyXG5cclxuICAuaXRlbXMxIGRpdntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW1zMSBpbWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAvKiAuaXRlbXMyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgfSAqL1xyXG5cclxuICAuaXRlbXMyIGRpdntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW1zMiBwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLyogLml0ZW1zMiBoMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICB9ICovXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\" >\n    <div class=\"item\" *ngFor='let item of products'>\n      <h2 class=\"name\">{{item.name}}</h2>\n      <a [routerLink]=\"['../details/' + item._id]\">\n        <img src=\"products/{{item.images[0]}}\">\n      </a>\n      <h2>${{item.price}}</h2>\n    </div>  \n  </div>\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
        this.products = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.allProducts();
    };
    HomeComponent.prototype.allProducts = function () {
        var _this = this;
        var observable = this._httpService.allProductsFromService();
        observable.subscribe(function (products) {
            console.log(products);
            _this.products = products;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.addProductService = function (product) {
        console.log("In Service");
        return this._http.post('/create', product);
    };
    HttpService.prototype.allProductsFromService = function () {
        return this._http.get('/gidget');
    };
    HttpService.prototype.getToolProductsFromService = function () {
        return this._http.get('/tools');
    };
    HttpService.prototype.getBestsellProductsFromService = function () {
        return this._http.get('/bestsellers');
    };
    HttpService.prototype.getU20ProductsFromService = function () {
        return this._http.get('/u20s');
    };
    HttpService.prototype.getSolarProductsFromService = function () {
        return this._http.get('/solars');
    };
    HttpService.prototype.getWindUpProductsFromService = function () {
        return this._http.get('/windups');
    };
    HttpService.prototype.getNewProductsFromService = function () {
        return this._http.get('/new');
    };
    HttpService.prototype.addToCartFromService = function (id, product, quanity) {
        console.log("In Service", quanity);
        return this._http.post('/addToCart/' + id, product, quanity);
        //return this._http.get('/createCart')
    };
    HttpService.prototype.getCartFromService = function () {
        return this._http.get('/getCart');
    };
    HttpService.prototype.getSearchFromService = function (input) {
        console.log("Service search: ", input);
        return this._http.post('/searchQuery', { input: input });
    };
    HttpService.prototype.findProductFromService = function (id) {
        return this._http.get('/gidget/' + id);
    };
    HttpService.prototype.addReviewFromService = function (review, id) {
        console.log("Servive Review:", review);
        return this._http.post('/addreview/' + id, review);
    };
    HttpService.prototype.submitOrderFromService = function () {
        return this._http.get('/submitOrder');
    };
    HttpService.prototype.deleteCartFromService = function (item) {
        console.log("ID in service:", item._id);
        return this._http.post('/deleteitem/' + item._id, item);
    };
    // temporary
    HttpService.prototype.createACartFromService = function () {
        return this._http.get('/createCart');
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/mainnav/mainnav.component.css":
/*!***********************************************!*\
  !*** ./src/app/mainnav/mainnav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.mainnav{\n    font-size: 25px;\n    margin-left: 15px;\n    vertical-align: middle;\n\n}\n\n.rightnav{\n    float: right;\n    font-size: 20px;\n    /* margin-left: 20px; */\n    vertical-align: right;\n    padding: 5px;\n}\n\n#search{\n    margin-left: 5px;\n}\n\n#menu ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    background-color: #F5928D;\n  }\n\n#menu li {\n    float: left;\n  }\n\n#menu li a {\n    display: block;\n    color: white;\n    text-align: center;\n    padding: 36px;\n    text-decoration: none;\n  }\n\n#menu li a:hover {\n    background-color: #111111;\n  }\n\n#scroller {\n    position: relative;\n    background-color: #DAF891;\n  }\n\n/* For the inner holder, we clip anything that runs over, via \"overflow: hidden\".  We position the holder to fully fill its parent, the #scroller div. */\n\n#scroller .innerScrollArea {\n    overflow: hidden;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n/* On the unordered list that holds our photos, we remove the default margin and padding.  We also use \"position: relative\" so the list items can be laid out in a horizontal row. */\n\n#scroller ul {\n    padding: 0;\n    margin: 0;\n    position: relative;\n  }\n\n/* On the individual list items, we remove the default padding, margin and list bullets.  The position is set to absolute; we'll use JavaScript to set the precise left positioning value. */\n\n#scroller li {\n    padding: 0;\n    margin: 10px;\n    list-style-type: none;\n    position: absolute;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbm5hdi9tYWlubmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7O0NBRTFCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMEJBQTBCO0dBQzNCOztBQUVEO0lBQ0UsWUFBWTtHQUNiOztBQUVEO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHNCQUFzQjtHQUN2Qjs7QUFFRDtJQUNFLDBCQUEwQjtHQUMzQjs7QUFFRDtJQUNFLG1CQUFtQjtJQUNuQiwwQkFBMEI7R0FDM0I7O0FBRUQseUpBQXlKOztBQUN6SjtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsVUFBVTtHQUNYOztBQUVELHFMQUFxTDs7QUFDckw7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtHQUNwQjs7QUFFRCw2TEFBNkw7O0FBQzdMO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0dBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbWFpbm5hdi9tYWlubmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYWlubmF2e1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG59XG5cbi5yaWdodG5hdntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAyMHB4OyAqL1xuICAgIHZlcnRpY2FsLWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbiNzZWFyY2h7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI21lbnUgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNTkyOEQ7XG4gIH1cblxuICAjbWVudSBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cblxuICAjbWVudSBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDM2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgI21lbnUgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcbiAgfVxuXG4gICNzY3JvbGxlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUY4OTE7XG4gIH1cblxuICAvKiBGb3IgdGhlIGlubmVyIGhvbGRlciwgd2UgY2xpcCBhbnl0aGluZyB0aGF0IHJ1bnMgb3ZlciwgdmlhIFwib3ZlcmZsb3c6IGhpZGRlblwiLiAgV2UgcG9zaXRpb24gdGhlIGhvbGRlciB0byBmdWxseSBmaWxsIGl0cyBwYXJlbnQsIHRoZSAjc2Nyb2xsZXIgZGl2LiAqL1xuICAjc2Nyb2xsZXIgLmlubmVyU2Nyb2xsQXJlYSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgLyogT24gdGhlIHVub3JkZXJlZCBsaXN0IHRoYXQgaG9sZHMgb3VyIHBob3Rvcywgd2UgcmVtb3ZlIHRoZSBkZWZhdWx0IG1hcmdpbiBhbmQgcGFkZGluZy4gIFdlIGFsc28gdXNlIFwicG9zaXRpb246IHJlbGF0aXZlXCIgc28gdGhlIGxpc3QgaXRlbXMgY2FuIGJlIGxhaWQgb3V0IGluIGEgaG9yaXpvbnRhbCByb3cuICovXG4gICNzY3JvbGxlciB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLyogT24gdGhlIGluZGl2aWR1YWwgbGlzdCBpdGVtcywgd2UgcmVtb3ZlIHRoZSBkZWZhdWx0IHBhZGRpbmcsIG1hcmdpbiBhbmQgbGlzdCBidWxsZXRzLiAgVGhlIHBvc2l0aW9uIGlzIHNldCB0byBhYnNvbHV0ZTsgd2UnbGwgdXNlIEphdmFTY3JpcHQgdG8gc2V0IHRoZSBwcmVjaXNlIGxlZnQgcG9zaXRpb25pbmcgdmFsdWUuICovXG4gICNzY3JvbGxlciBsaSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/mainnav/mainnav.component.html":
/*!************************************************!*\
  !*** ./src/app/mainnav/mainnav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <a class=\"mainnav\" [routerLink]=\"['./new']\">New </a>\n    <a class=\"mainnav\" [routerLink]=\"['./bestsellers']\">Bestsellers</a>\n    <a class=\"mainnav\" [routerLink]=\"['./U20']\">Gifts under $20</a>\n    <a class=\"mainnav\" [routerLink]=\"['./tools']\">Tools & Tech</a>\n    <a class=\"mainnav\" [routerLink]=\"['./solar']\">Solar-Powered</a>\n    <a class=\"mainnav\" [routerLink]=\"['./windup']\">Wind-Up Toys</a>\n    <a class=\"rightnav\" [routerLink]=\"['/checkout/cart']\">Cart (3)</a>    \n    <form class=\"rightnav\">\n      <input name=\"search_bar\" type=\"text\" id=\"search\" placeholder=\"Search...\" [(ngModel)]=\"input.query\">\n      <a [routerLink]=\"['./search']\" fragment=\"{{input.query}}\">Search</a>\n    </form>\n</nav>\n<!-- [routerLink]=\"['./search']\" -->\n<!-- (click)=\"search()\" -->\n\n\n<div id=\"scroller\" style=\"width: 800px; min-height: 200px; margin: 0 auto; background-image:url(images/Homepage6.png); background-size: 1500px 200px; background-repeat: no-repeat;\">\n  <div class=\"innerScrollArea\">\n    <ul>\n        <!-- Define photos here -->\n        <li><a href=\"somewhere.html\"><img src=\"images/log.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/waiter.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/bug1.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/penguin-361x380_large.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/camera_539x400.png\" width=\"200\" height=\"200\" /></a></li>\n        <li><a href=\"somewhere.html\"><img src=\"images/penguin-361x380_large.png\" width=\"200\" height=\"200\" /></a></li>\n    </ul>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n\n<!-- <app-home></app-home> -->\n"

/***/ }),

/***/ "./src/app/mainnav/mainnav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mainnav/mainnav.component.ts ***!
  \**********************************************/
/*! exports provided: MainnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainnavComponent", function() { return MainnavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainnavComponent = /** @class */ (function () {
    function MainnavComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.searched = [];
    }
    MainnavComponent.prototype.ngOnInit = function () {
        this.input = { query: '' };
    };
    MainnavComponent.prototype.search = function () {
        // let observable = this._httpService.getSearchFromService(this.input);
        // observable.subscribe((search) => {
        //   console.log("Search return: ", search)
        //   this.searched = search;
        //this.router.navigate(['./search']);
        // });
    };
    MainnavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainnav',
            template: __webpack_require__(/*! ./mainnav.component.html */ "./src/app/mainnav/mainnav.component.html"),
            styles: [__webpack_require__(/*! ./mainnav.component.css */ "./src/app/mainnav/mainnav.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainnavComponent);
    return MainnavComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: 'Mouse Memoirs', sans-serif;\n  }\n/*\n  .items1 {\n    background-color: skyblue;\n    height: 500px;\n  } */\n.items1 p {\n    color: white;\n  }\n/* .items1 h3 {\n    background-color: green;\n  } */\n.items1 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n.items1 img {\n    background-color: white;\n  }\n/* .items2 {\n    background-color: skyblue;\n  } */\n.items2 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n.items2 p {\n    color: white;\n  }\n/* .items2 h3 {\n    background-color: green;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0dBQ3hDO0FBQ0g7Ozs7TUFJTTtBQUVKO0lBQ0UsYUFBYTtHQUNkO0FBRUQ7O01BRUk7QUFFSjtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsb0JBQW9CO0dBQ3JCO0FBRUQ7SUFDRSx3QkFBd0I7R0FDekI7QUFFRDs7TUFFSTtBQUVKO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7R0FDckI7QUFFRDtJQUNFLGFBQWE7R0FDZDtBQUVEOztNQUVJIiwiZmlsZSI6InNyYy9hcHAvbmV3L25ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICBmb250LWZhbWlseTogJ01vdXNlIE1lbW9pcnMnLCBzYW5zLXNlcmlmO1xuICB9XG4vKlxuICAuaXRlbXMxIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH0gKi9cblxuICAuaXRlbXMxIHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC8qIC5pdGVtczEgaDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9ICovXG5cbiAgLml0ZW1zMSBkaXZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgfVxuXG4gIC5pdGVtczEgaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC8qIC5pdGVtczIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XG4gIH0gKi9cblxuICAuaXRlbXMyIGRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICB9XG5cbiAgLml0ZW1zMiBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAvKiAuaXRlbXMyIGgzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgfSAqL1xuIl19 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\" >\n    <div class=\"item\" *ngFor='let item of newProducts'>\n      <h2 class=\"name\">{{item.name}}</h2>\n        <a [routerLink]=\"['../details/' + item._id]\">\n          <img src=\"products/{{item.images[0]}}\">\n        </a>\n      <h2>${{item.price}}</h2>\n    </div>  \n  </div>\n  \n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n  \n  "

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService) {
        this._httpService = _httpService;
        this.newProducts = [];
    }
    NewComponent.prototype.ngOnInit = function () {
        this.getNewProducts();
    };
    NewComponent.prototype.getNewProducts = function () {
        var _this = this;
        var observable = this._httpService.getNewProductsFromService();
        observable.subscribe(function (newProducts) {
            console.log(newProducts);
            _this.newProducts = newProducts;
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/orderplaced/orderplaced.component.css":
/*!*******************************************************!*\
  !*** ./src/app/orderplaced/orderplaced.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycGxhY2VkL29yZGVycGxhY2VkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/orderplaced/orderplaced.component.html":
/*!********************************************************!*\
  !*** ./src/app/orderplaced/orderplaced.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  orderplaced works!\n</p>\n\n<a [routerLink]=\"['/']\">Home</a>\n"

/***/ }),

/***/ "./src/app/orderplaced/orderplaced.component.ts":
/*!******************************************************!*\
  !*** ./src/app/orderplaced/orderplaced.component.ts ***!
  \******************************************************/
/*! exports provided: OrderplacedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderplacedComponent", function() { return OrderplacedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderplacedComponent = /** @class */ (function () {
    function OrderplacedComponent() {
    }
    OrderplacedComponent.prototype.ngOnInit = function () {
    };
    OrderplacedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderplaced',
            template: __webpack_require__(/*! ./orderplaced.component.html */ "./src/app/orderplaced/orderplaced.component.html"),
            styles: [__webpack_require__(/*! ./orderplaced.component.css */ "./src/app/orderplaced/orderplaced.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderplacedComponent);
    return OrderplacedComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment.component.css":
/*!***********************************************!*\
  !*** ./src/app/payment/payment.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/payment/payment.component.html":
/*!************************************************!*\
  !*** ./src/app/payment/payment.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Billing and Contact</h1>\n<br>\n<input type=\"text\" name=\"first_name\"placeholder=\"First Name\" >\n<br>\n<input type=\"text\" name=\"last_name\" placeholder=\"Last Name\">\n<br>\n<input type=\"text\" name=\"email\" placeholder=\"Email\">\n<br>\n<input type=\"text\" name=\"address\" placeholder=\"Mailing Address\">\n<br>\n<input type=\"text\" name=\"phone_number\" placeholder=\"Phone Number\">\n<br>\n\n<h1>Payment Options</h1>\n<br>\n<input type=\"text\" name=\"card_number\"placeholder=\"Card Number\" >\n<br>\n<input type=\"text\" name=\"expiration_date\" placeholder=\"Expiration Date\">\n<br>\n<input type=\"text\" name=\"security_code\" placeholder=\"Security Code\">\n<br>\n\n<a [routerLink]=\"['../revieworder']\">Proceed To Checkout</a>\n"

/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prod_img {\n    display: inline-block;\n    width: 50%\n}\n\n.prod_img img {\n    height: 250px;\n    width: 250px;\n    margin: 1%\n}\n\n.prod_info {\n    display: inline-block;\n    width: 50%;\n    vertical-align: top;\n    font-size: 30px;\n}\n\n.review_div {\n    background-color: #3DB89B\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7Q0FDYjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsVUFBVTtDQUNiOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0kseUJBQXlCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2RfaW1nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJVxufVxuXG4ucHJvZF9pbWcgaW1nIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW46IDElXG59XG5cbi5wcm9kX2luZm8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ucmV2aWV3X2RpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNEQjg5QlxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"prod_img\">\n      <img *ngFor='let idx of product.images' src=\"products/{{idx}}\">\n  </div>\n  <div class=\"prod_info\">\n      <h1>{{product.name}}</h1>\n      <h2>${{product.price}}</h2>\n      <p>{{product.description}}</p>\n      <form (submit)=addToCart()>\n        <input type=\"number\" min=0 name=\"amount\"[(ngModel)]=\"product.quanity\">\n        <button>Add To Cart</button>\n      </form>\n      <!-- <form (submit)=createACart()>\n        <button>Create a Cart</button>\n      </form> -->\n      <h2>View Reviews</h2>\n      <div class=\"review_div\" *ngFor='let review of product.reviews'>\n        <p>Name: {{review.name}}</p>\n        <p>Rating: {{review.rating}}</p>\n        <p>Review: {{review.review}}</p>\n      </div>\n  </div>\n  <app-write-review></app-write-review>\n</div>\n"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
        });
        this.getProduct(this.id);
        this.product = { quanity: 0 };
        this.quanity = {};
    };
    ProductDetailsComponent.prototype.getProduct = function (id) {
        var _this = this;
        var observable = this._httpService.findProductFromService(id);
        observable.subscribe(function (data) {
            _this.product = data;
            console.log(_this.product);
        });
    };
    ProductDetailsComponent.prototype.addToCart = function () {
        var observable = this._httpService.addToCartFromService(this.id, this.product, this.quanity);
        observable.subscribe(function (data) {
            console.log(data);
        });
    };
    ProductDetailsComponent.prototype.createACart = function () {
        var observable = this._httpService.createACartFromService();
        observable.subscribe(function (data) {
            console.log(data);
        });
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/revieworder/revieworder.component.css":
/*!*******************************************************!*\
  !*** ./src/app/revieworder/revieworder.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlld29yZGVyL3Jldmlld29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/revieworder/revieworder.component.html":
/*!********************************************************!*\
  !*** ./src/app/revieworder/revieworder.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Review Order</h1>\n\n<form (submit)=\"submitOrder()\">\n  <button>Submit Order</button>\n</form>\n\n<a [routerLink]=\"['../orderplaced']\">Proceed To Checkout</a>\n"

/***/ }),

/***/ "./src/app/revieworder/revieworder.component.ts":
/*!******************************************************!*\
  !*** ./src/app/revieworder/revieworder.component.ts ***!
  \******************************************************/
/*! exports provided: RevieworderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevieworderComponent", function() { return RevieworderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RevieworderComponent = /** @class */ (function () {
    function RevieworderComponent(_httpService) {
        this._httpService = _httpService;
    }
    RevieworderComponent.prototype.ngOnInit = function () {
    };
    RevieworderComponent.prototype.submitOrder = function () {
        var observable = this._httpService.submitOrderFromService();
        observable.subscribe(function (data) {
            console.log(data);
        });
    };
    RevieworderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-revieworder',
            template: __webpack_require__(/*! ./revieworder.component.html */ "./src/app/revieworder/revieworder.component.html"),
            styles: [__webpack_require__(/*! ./revieworder.component.css */ "./src/app/revieworder/revieworder.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], RevieworderComponent);
    return RevieworderComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    height: 200px;\n    width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Results:</h2>\n\n<div *ngFor='let item of searched'>\n  <p>{{item.name}}</p>\n  <img src=\"products/{{item.images[0]}}\">\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(_httpService, route) {
        this._httpService = _httpService;
        this.route = route;
        this.searched = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        //this.search = this.input;
        console.log(this.route.snapshot.fragment); // only update on component creation
        this.route.fragment.subscribe(function (fragments) { return console.log(fragments); }); // update on all changes
        this.input = this.route.snapshot.fragment;
        console.log("This is the search:", this.input);
        this.search(this.input);
    };
    SearchComponent.prototype.search = function (input) {
        var _this = this;
        var observable = this._httpService.getSearchFromService(input);
        observable.subscribe(function (search) {
            console.log("Search return: ", search);
            _this.searched = search;
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/solar/solar.component.css":
/*!*******************************************!*\
  !*** ./src/app/solar/solar.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbGFyL3NvbGFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/solar/solar.component.html":
/*!********************************************!*\
  !*** ./src/app/solar/solar.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\" >\n    <div class=\"item\" *ngFor='let item of solarProducts'>\n      <h2 class=\"name\">{{item.name}}</h2>\n      <a [routerLink]=\"['../details/' + item._id]\">\n        <img src=\"products/{{item.images[0]}}\">\n      </a>\n      <h2>${{item.price}}</h2>\n    </div>  \n  </div>\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n  "

/***/ }),

/***/ "./src/app/solar/solar.component.ts":
/*!******************************************!*\
  !*** ./src/app/solar/solar.component.ts ***!
  \******************************************/
/*! exports provided: SolarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolarComponent", function() { return SolarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SolarComponent = /** @class */ (function () {
    function SolarComponent(_httpService) {
        this._httpService = _httpService;
        this.solarProducts = [];
    }
    SolarComponent.prototype.ngOnInit = function () {
        this.getSolarProducts();
    };
    SolarComponent.prototype.getSolarProducts = function () {
        var _this = this;
        var observable = this._httpService.getSolarProductsFromService();
        observable.subscribe(function (solarProducts) {
            console.log(solarProducts);
            _this.solarProducts = solarProducts;
        });
    };
    SolarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solar',
            template: __webpack_require__(/*! ./solar.component.html */ "./src/app/solar/solar.component.html"),
            styles: [__webpack_require__(/*! ./solar.component.css */ "./src/app/solar/solar.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], SolarComponent);
    return SolarComponent;
}());



/***/ }),

/***/ "./src/app/tools/tools.component.css":
/*!*******************************************!*\
  !*** ./src/app/tools/tools.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xzL3Rvb2xzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tools/tools.component.html":
/*!********************************************!*\
  !*** ./src/app/tools/tools.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\" >\n  <div class=\"item\" *ngFor='let item of toolProducts'>\n    <h2 class=\"name\">{{item.name}}</h2>\n      <a [routerLink]=\"['../details/' + item._id]\">\n        <img src=\"products/{{item.images[0]}}\">\n      </a>\n    <h2>${{item.price}}</h2>\n  </div>  \n</div>\n\n<footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n\n"

/***/ }),

/***/ "./src/app/tools/tools.component.ts":
/*!******************************************!*\
  !*** ./src/app/tools/tools.component.ts ***!
  \******************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolsComponent = /** @class */ (function () {
    function ToolsComponent(_httpService, router) {
        this._httpService = _httpService;
        this.router = router;
        this.toolProducts = [];
    }
    ToolsComponent.prototype.ngOnInit = function () {
        this.getToolProducts();
    };
    ToolsComponent.prototype.getToolProducts = function () {
        var _this = this;
        var observable = this._httpService.getToolProductsFromService();
        observable.subscribe(function (toolProducts) {
            console.log(toolProducts);
            _this.toolProducts = toolProducts;
        });
    };
    ToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.css */ "./src/app/tools/tools.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "./src/app/under20/under20.component.css":
/*!***********************************************!*\
  !*** ./src/app/under20/under20.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-family: 'Mouse Memoirs', sans-serif;\n  }\n/*\n  .items1 {\n    background-color: skyblue;\n    height: 500px;\n  } */\n.items1 p {\n    color: white;\n  }\n/* .items1 h3 {\n    background-color: green;\n  } */\n.items1 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n.items1 img {\n    background-color: white;\n  }\n/* .items2 {\n    background-color: skyblue;\n  } */\n.items2 div{\n    display: inline-block;\n    margin: 1%;\n    padding-left: 100px;\n  }\n.items2 p {\n    color: white;\n  }\n/* .items2 h3 {\n    background-color: green;\n  } */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5kZXIyMC91bmRlcjIwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBeUM7R0FDeEM7QUFDSDs7OztNQUlNO0FBRUo7SUFDRSxhQUFhO0dBQ2Q7QUFFRDs7TUFFSTtBQUVKO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxvQkFBb0I7R0FDckI7QUFFRDtJQUNFLHdCQUF3QjtHQUN6QjtBQUVEOztNQUVJO0FBRUo7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG9CQUFvQjtHQUNyQjtBQUVEO0lBQ0UsYUFBYTtHQUNkO0FBRUQ7O01BRUkiLCJmaWxlIjoic3JjL2FwcC91bmRlcjIwL3VuZGVyMjAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgZm9udC1mYW1pbHk6ICdNb3VzZSBNZW1vaXJzJywgc2Fucy1zZXJpZjtcbiAgfVxuLypcbiAgLml0ZW1zMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9ICovXG5cbiAgLml0ZW1zMSBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAvKiAuaXRlbXMxIGgzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgfSAqL1xuXG4gIC5pdGVtczEgZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDElO1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIH1cblxuICAuaXRlbXMxIGltZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAvKiAuaXRlbXMyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xuICB9ICovXG5cbiAgLml0ZW1zMiBkaXZ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMSU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgfVxuXG4gIC5pdGVtczIgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLyogLml0ZW1zMiBoMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIH0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/under20/under20.component.html":
/*!************************************************!*\
  !*** ./src/app/under20/under20.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\" >\n    <div class=\"item\" *ngFor='let item of u20Products'>\n      <h2 class=\"name\">{{item.name}}</h2>\n        <a [routerLink]=\"['../details/' + item._id]\">\n          <img src=\"products/{{item.images[0]}}\">\n        </a>\n      <h2>${{item.price}}</h2>\n    </div>  \n  </div>\n  \n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n  \n  "

/***/ }),

/***/ "./src/app/under20/under20.component.ts":
/*!**********************************************!*\
  !*** ./src/app/under20/under20.component.ts ***!
  \**********************************************/
/*! exports provided: Under20Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Under20Component", function() { return Under20Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Under20Component = /** @class */ (function () {
    function Under20Component(_httpService) {
        this._httpService = _httpService;
        this.u20Products = [];
    }
    Under20Component.prototype.ngOnInit = function () {
        this.getU20Products();
    };
    Under20Component.prototype.getU20Products = function () {
        var _this = this;
        var observable = this._httpService.getU20ProductsFromService();
        observable.subscribe(function (u20Products) {
            console.log(u20Products);
            _this.u20Products = u20Products;
        });
    };
    Under20Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-under20',
            template: __webpack_require__(/*! ./under20.component.html */ "./src/app/under20/under20.component.html"),
            styles: [__webpack_require__(/*! ./under20.component.css */ "./src/app/under20/under20.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], Under20Component);
    return Under20Component;
}());



/***/ }),

/***/ "./src/app/windup/windup.component.css":
/*!*********************************************!*\
  !*** ./src/app/windup/windup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbmR1cC93aW5kdXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/windup/windup.component.html":
/*!**********************************************!*\
  !*** ./src/app/windup/windup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item_container\" >\n    <div class=\"item\" *ngFor='let item of windupProducts'>\n      <h2 class=\"name\">{{item.name}}</h2>\n      <a [routerLink]=\"['../details/' + item._id]\">\n        <img src=\"products/{{item.images[0]}}\">\n      </a>\n      <h2>${{item.price}}</h2>\n    </div>  \n  </div>\n  <footer>Photos Courtesy of Kikkerland Design Inc.</footer>\n  "

/***/ }),

/***/ "./src/app/windup/windup.component.ts":
/*!********************************************!*\
  !*** ./src/app/windup/windup.component.ts ***!
  \********************************************/
/*! exports provided: WindupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindupComponent", function() { return WindupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WindupComponent = /** @class */ (function () {
    function WindupComponent(_httpService) {
        this._httpService = _httpService;
        this.windupProducts = [];
    }
    WindupComponent.prototype.ngOnInit = function () {
        this.getWindUpProducts();
    };
    WindupComponent.prototype.getWindUpProducts = function () {
        var _this = this;
        var observable = this._httpService.getWindUpProductsFromService();
        observable.subscribe(function (windupProducts) {
            console.log(windupProducts);
            _this.windupProducts = windupProducts;
        });
    };
    WindupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-windup',
            template: __webpack_require__(/*! ./windup.component.html */ "./src/app/windup/windup.component.html"),
            styles: [__webpack_require__(/*! ./windup.component.css */ "./src/app/windup/windup.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], WindupComponent);
    return WindupComponent;
}());



/***/ }),

/***/ "./src/app/write-review/write-review.component.css":
/*!*********************************************************!*\
  !*** ./src/app/write-review/write-review.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyaXRlLXJldmlldy93cml0ZS1yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/write-review/write-review.component.html":
/*!**********************************************************!*\
  !*** ./src/app/write-review/write-review.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"addReview()\">\n  <label>Name:</label>\n  <br>\n  <input type=\"text\" name=\"name\" [(ngModel)]=\"review.name\">\n  <br>\n  <label>Rating:</label>\n  <br>\n  <input type=\"number\" name=\"rating\" min=1 max=5 [(ngModel)]=\"review.rating\">\n  <br>\n  <label>Leave a Review:</label>\n  <br>\n  <textarea name=\"review\" [(ngModel)]=\"review.review\"></textarea>\n  <br>\n  <button>Submit Review</button>\n</form>"

/***/ }),

/***/ "./src/app/write-review/write-review.component.ts":
/*!********************************************************!*\
  !*** ./src/app/write-review/write-review.component.ts ***!
  \********************************************************/
/*! exports provided: WriteReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteReviewComponent", function() { return WriteReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WriteReviewComponent = /** @class */ (function () {
    function WriteReviewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    WriteReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            _this.id = params['id'];
        });
        this.review = { name: '', rating: 1, review: '' };
    };
    WriteReviewComponent.prototype.addReview = function () {
        var observable = this._httpService.addReviewFromService(this.review, this.id);
        observable.subscribe(function (data) {
            console.log(data);
        });
    };
    WriteReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-write-review',
            template: __webpack_require__(/*! ./write-review.component.html */ "./src/app/write-review/write-review.component.html"),
            styles: [__webpack_require__(/*! ./write-review.component.css */ "./src/app/write-review/write-review.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WriteReviewComponent);
    return WriteReviewComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lg/Documents/CodingDojo/MEAN/MEAN-Angular-Gidget-Project/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map