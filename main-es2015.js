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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/grafica/banner/banner.component */ "./src/app/components/products/grafica/banner/banner.component.ts");
/* harmony import */ var _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/products/grafica/cards/cards.component */ "./src/app/components/products/grafica/cards/cards.component.ts");
/* harmony import */ var _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/products/grafica/flyer/flyer.component */ "./src/app/components/products/grafica/flyer/flyer.component.ts");
/* harmony import */ var _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/products/grafica/logo/logo.component */ "./src/app/components/products/grafica/logo/logo.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/products/web/aplicatii/aplicatii.component */ "./src/app/components/products/web/aplicatii/aplicatii.component.ts");
/* harmony import */ var _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/products/web/portofoliu/portofoliu.component */ "./src/app/components/products/web/portofoliu/portofoliu.component.ts");
/* harmony import */ var _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/products/web/site-de-prezentare/site-de-prezentare.component */ "./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts");
/* harmony import */ var _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/proiecte/in-curs/in-curs.component */ "./src/app/components/proiecte/in-curs/in-curs.component.ts");
/* harmony import */ var _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/proiecte/terminate/terminate.component */ "./src/app/components/proiecte/terminate/terminate.component.ts");




// import { IntroComponent } from './components/intro/intro.component';













const routes = [
    // { path: 'intro', component: IntroComponent },
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'portofoliu', component: _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_11__["PortofoliuComponent"] },
    { path: 'site-prezentare', component: _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_12__["SiteDePrezentareComponent"] },
    { path: 'aplicatii', component: _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_10__["AplicatiiComponent"] },
    { path: 'cards', component: _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"] },
    { path: 'flyer', component: _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_7__["FlyerComponent"] },
    { path: 'logo', component: _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"] },
    { path: 'banner', component: _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"] },
    { path: 'terminate', component: _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_14__["TerminateComponent"] },
    { path: 'incurs', component: _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_13__["InCursComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'PortofoliuAndrei';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/intro/intro.component */ "./src/app/components/intro/intro.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_main_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/about/about.component */ "./src/app/components/main/about/about.component.ts");
/* harmony import */ var _components_main_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/contact-main/contact-main.component */ "./src/app/components/main/contact-main/contact-main.component.ts");
/* harmony import */ var _components_main_main_products_main_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/main-products/main-products.component */ "./src/app/components/main/main-products/main-products.component.ts");
/* harmony import */ var _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/products/web/portofoliu/portofoliu.component */ "./src/app/components/products/web/portofoliu/portofoliu.component.ts");
/* harmony import */ var _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/products/web/site-de-prezentare/site-de-prezentare.component */ "./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts");
/* harmony import */ var _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/products/grafica/logo/logo.component */ "./src/app/components/products/grafica/logo/logo.component.ts");
/* harmony import */ var _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/products/grafica/flyer/flyer.component */ "./src/app/components/products/grafica/flyer/flyer.component.ts");
/* harmony import */ var _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/products/grafica/cards/cards.component */ "./src/app/components/products/grafica/cards/cards.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/proiecte/terminate/terminate.component */ "./src/app/components/proiecte/terminate/terminate.component.ts");
/* harmony import */ var _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/proiecte/in-curs/in-curs.component */ "./src/app/components/proiecte/in-curs/in-curs.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/products/web/aplicatii/aplicatii.component */ "./src/app/components/products/web/aplicatii/aplicatii.component.ts");
/* harmony import */ var _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/products/grafica/banner/banner.component */ "./src/app/components/products/grafica/banner/banner.component.ts");





// import { MatButtonModule } from '@angular/material/button';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatToolbarModule } from '@angular/material/toolbar';



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
        _components_main_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
        _components_main_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_10__["ContactMainComponent"],
        _components_main_main_products_main_products_component__WEBPACK_IMPORTED_MODULE_11__["MainProductsComponent"],
        _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_12__["PortofoliuComponent"],
        _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_13__["SiteDePrezentareComponent"],
        _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__["LogoComponent"],
        _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_15__["FlyerComponent"],
        _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_16__["CardsComponent"],
        _components_products_products_component__WEBPACK_IMPORTED_MODULE_17__["ProductsComponent"],
        _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_18__["TerminateComponent"],
        _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_19__["InCursComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
        _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_21__["AplicatiiComponent"],
        _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_22__["BannerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_intro_intro_component__WEBPACK_IMPORTED_MODULE_6__["IntroComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                    _components_main_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    _components_main_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_10__["ContactMainComponent"],
                    _components_main_main_products_main_products_component__WEBPACK_IMPORTED_MODULE_11__["MainProductsComponent"],
                    _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_12__["PortofoliuComponent"],
                    _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_13__["SiteDePrezentareComponent"],
                    _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_14__["LogoComponent"],
                    _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_15__["FlyerComponent"],
                    _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_16__["CardsComponent"],
                    _components_products_products_component__WEBPACK_IMPORTED_MODULE_17__["ProductsComponent"],
                    _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_18__["TerminateComponent"],
                    _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_19__["InCursComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                    _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_21__["AplicatiiComponent"],
                    _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_22__["BannerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 20, vars: 0, consts: [[1, "despre"], [1, "text-center"], [1, "row"], [1, "col-md-6", "col-xs-12", "poza"], ["src", "/assets/img/VISIOON1.png", "alt", "", 1, "logo"], [1, "col-md-6", "col-xs-12", "text"], [1, "vw"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Despre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Noi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Visioonwebsites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ofera servicii de webdesign si graphic design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Suntem la inceput de drum. Avand ca scop principal satisfacerea nevoilor clientilor. Cu ajutorul ultimelor tehnologii avem placerea de a pune la dispozita dumneavoastra produse de inalta calitate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Visioonwebsites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ajuta la dezvoltarea afacerii mediul online. Fiecare afacere este diferita, avand propriul progres. Asadar Visioonwebsites adopta cea mai benefica strategie pentru fiecare afacere in parte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Folosim tehnologii precum : HTML, CSS, JavaScript, Angular, MongoDb, MySql, Java, Spring, NodeJs, Express ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.despre[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #3b3b3b;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 5% 0;\n  font-family: monospace;\n  font-size: 2.4em;\n  white-space: nowrap;\n  font-size: 800;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n  text-transform: uppercase;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: red;\n  padding: 5% 0;\n  font-family: monospace;\n  font-size: 2.4em;\n  white-space: nowrap;\n  font-size: 800;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n}\n\n.logo[_ngcontent-%COMP%] {\n  min-width: 90%;\n  min-height: 90%;\n  max-width: 90%;\n  max-height: 90%;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 15%;\n  font-size: 2em;\n  color: #fff;\n}\n\n.vw[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: red;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 1% 5% 0 1%;\n  font-size: 2.2em;\n  color: white;\n  line-height: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcUG9ydG9mb2xpdUFuZHJlaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRENFO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENFO0VBQ0UsYUFBQTtFQUNGLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRENFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7QUNFSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHSjs7QURBRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNHSjs7QURERTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0lKOztBREZFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgLmRlc3ByZXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xyXG4gXHJcbn1cclxuICBoMXtcclxuICAgIHBhZGRpbmc6NSUgMCA7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBmb250LXNpemU6IDIuNGVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiA4MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCMwMDAsIDAuOSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBcclxuICB9XHJcbiAgc3BhbntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBwYWRkaW5nOjUlIDAgO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1zaXplOiA4MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoIzAwMCwgMC45KTtcclxuICB9XHJcbiAgLmxvZ297XHJcbiAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDkwJTtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWF4LWhlaWdodDogOTAlO1xyXG4gIH1cclxuICBcclxuICBoMntcclxuICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAudnd7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gIH1cclxuICBwe1xyXG4gICAgcGFkZGluZzoxJSA1JSAwIDElO1xyXG4gICAgZm9udC1zaXplOiAyLjJlbTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgfSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kZXNwcmUge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcbn1cblxuaDEge1xuICBwYWRkaW5nOiA1JSAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDIuNGVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDgwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZzogNSUgMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAyLjRlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiA4MDA7XG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG4ubG9nbyB7XG4gIG1pbi13aWR0aDogOTAlO1xuICBtaW4taGVpZ2h0OiA5MCU7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiA5MCU7XG59XG5cbmgyIHtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udncge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogcmVkO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMSUgNSUgMCAxJTtcbiAgZm9udC1zaXplOiAyLjJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 62, vars: 0, consts: [[1, "sec"], ["autoplay", "", "muted", "", "loop", "", "id", "myVideo"], ["src", "/assets/video/video1.mp4", "type", "video/mp4"], [1, "content"], [1, "container"], [1, "row"], [2, "text-align", "center"], [1, "social"], ["href", "whatsapp://tel:0748489982"], ["viewBox", "0 0 512 512", "fill", "#000", "width", "5.5em", "height", "5.5em", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m123.832031 475.464844c39.558594 23.804687 84.789063 36.351562 131.261719 36.351562 140.824219 0 256.90625-114.914062 256.90625-255.910156 0-140.832031-115.917969-255.90625-256.90625-255.90625-140.558594 0-254.910156 114.800781-254.910156 255.90625 0 47.09375 12.550781 92.667969 36.351562 132.257812l-36.535156 123.835938zm-93.65625-219.558594c0-124.570312 100.898438-225.917969 224.917969-225.917969 125.121094 0 226.917969 101.347657 226.917969 225.917969 0 124.574219-101.796875 225.917969-226.917969 225.917969-43.054688 0-84.894531-12.195313-120.984375-35.273438l-5.765625-3.683593-83.988281 24.78125 24.777343-83.992188-3.683593-5.761719c-23.078125-36.097656-35.273438-78.277343-35.273438-121.988281zm0 0"], ["d", "m124.628906 208.753906c4.953125 26.011719 19.65625 76.042969 62.464844 118.851563 42.808594 42.808593 92.839844 57.515625 118.855469 62.46875 29.789062 5.671875 73.503906 6.527343 94.867187-14.835938l11.910156-11.910156c6.011719-6.011719 9.324219-14.007813 9.324219-22.511719s-3.3125-16.496094-9.324219-22.507812l-47.628906-47.628906c-6.015625-6.015626-14.007812-9.324219-22.511718-9.324219-8.503907 0-16.496094 3.308593-22.511719 9.324219l-11.90625 11.90625c-7.273438 7.273437-21.003907 7.304687-28.332031.089843l-47.507813-49.5c-.070313-.074219-.140625-.148437-.214844-.21875-7.285156-7.285156-7.285156-19.140625 0-26.425781l11.90625-11.90625c12.445313-12.445312 12.445313-32.582031 0-45.023438l-47.628906-47.628906c-12.410156-12.410156-32.605469-12.410156-45.019531 0l-11.90625 11.910156v-.003906c-17.050782 17.054688-22.734375 53.40625-14.835938 94.875zm36.042969-73.664062c12.5-12.214844 11.832031-12.449219 13.210937-12.449219.472657 0 .945313.179687 1.304688.539063 50.1875 50.457031 48.171875 47.492187 48.171875 48.9375 0 .503906-.183594.945312-.539063 1.304687l-11.910156 11.90625c-18.964844 18.964844-19.039062 49.664063-.121094 68.714844l47.535157 49.53125c.074219.070312.144531.144531.21875.21875 18.960937 18.960937 51.808593 19.023437 70.832031 0l11.90625-11.90625c.71875-.71875 1.890625-.71875 2.609375 0 50.1875 50.453125 48.171875 47.488281 48.171875 48.933593 0 .507813-.183594.945313-.539062 1.304688l-11.910157 11.90625c-8.160156 8.160156-34.152343 13.042969-68.054687 6.585938-22.625-4.3125-66.128906-17.085938-103.257813-54.214844-37.128906-37.128906-49.902343-80.632813-54.210937-103.257813-6.460938-33.902343-1.578125-59.898437 6.582031-68.054687zm0 0"], ["target", "_blank", "href", "https://www.facebook.com/Visioonwebsites-100464558721297"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", "width", "5.5em", "height", "5.5em", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 167.657 167.657", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 167.657 167.657"], ["d", "M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626\n                   v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006\n                   c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154\n                   C167.657,37.881,130.125,0.349,83.829,0.349z", 2, "fill", "#010002"], [1, "row", "input-container"], [1, "col-xs-12"], [1, "styled-input", "wide"], ["type", "text", "required", ""], [1, "col-md-6", "col-sm-12"], [1, "styled-input"], [1, "styled-input", 2, "float", "right"], ["required", ""], [1, "btn-lrg", "submit-btn"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vreti sa discutam ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Nume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Numar de telefon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Mesaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Trimite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.sec[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sec[_ngcontent-%COMP%]   #myVideo[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 0;\n  background-color: rgba(255, 0, 0, 0.06);\n}\n\n.sec[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif, \"arial\";\n  font-weight: 600;\n  font-size: 72px;\n  color: white;\n  text-align: center;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  font-size: 20px;\n  color: #9b9b9b;\n  line-height: 1.5;\n}\n\n.social[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  filter: invert(1);\n  transform: scale(0.5);\n  transition: 0.5s;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(0.5) translateY(-15px);\n}\n\n\n\ninput[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  color: #999;\n  top: -5px;\n  transition: all 0.225s ease;\n}\n\n.styled-input[_ngcontent-%COMP%] {\n  float: left;\n  width: 293px;\n  margin: 1rem 0;\n  position: relative;\n  border-radius: 4px;\n}\n\n@media only screen and (max-width: 768px) {\n  .styled-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #999;\n  padding: 1.3rem 30px 1rem 30px;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  transition: all 0.25s ease;\n  pointer-events: none;\n}\n\n.styled-input.wide[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100%;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 30px;\n  border: 0;\n  width: 100%;\n  font-size: 1rem;\n  background-color: #2d2d2d;\n  color: white;\n  border-radius: 4px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: all 0.075s ease;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 15em;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100%;\n  margin: 20px auto 25px auto;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  float: right;\n  padding: 7px 35px;\n  border-radius: 60px;\n  display: inline-block;\n  background-color: #fb2323;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n  transition: all 300ms ease;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(1px);\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);\n}\n\n@media (max-width: 768px) {\n  .submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    float: none;\n    text-align: center;\n  }\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-style: italic;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: #f00;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtBQ0RKOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDRko7O0FET0U7RUFDRSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksMENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBRUUsZ0JBQUE7QUNORjs7QURRQTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURRQTtFQUVFLHVDQUFBO0FDTkY7O0FEU0Esc0JBQUE7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsMkJBQUE7QUNQSjs7QURVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURVQTtFQUNJO0lBQ0ksV0FBQTtFQ1BOO0FBQ0Y7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsMEJBQUE7RUFDQSxvQkFBQTtBQ1JKOztBRFdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNSSjs7QURXQTs7RUFFSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNSSjs7QURXQTs7RUFDaUIsVUFBQTtBQ1BqQjs7QURTQTs7RUFFSSxXQUFBO0VBRUEsMkJBQUE7QUNOSjs7QURTQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ05KOztBRFNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ05KOztBRFNBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNkVBQUE7RUFHQSwwQkFBQTtBQ1BKOztBRFVBO0VBQ0ksMEJBQUE7RUFDQSwyRUFBQTtBQ1BKOztBRFdBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDUk47QUFDRjs7QURXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG4uc2Vje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIFxyXG5cclxufVxyXG4uc2VjICNteVZpZGVvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMDYpO1xyXG4gIH1cclxuXHJcbiAgXHJcbi5zZWMgIC5jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlOyAgICAgIFxyXG4gICAgei1pbmRleDogMTtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uc29jaWFsXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG4uc29jaWFsIGxpXHJcbntcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zb2NpYWwgbGkgYVxyXG57XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uc29jaWFsIGxpIGE6aG92ZXJcclxue1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKC0xNXB4KTtcclxufVxyXG5cclxuLyogLy8vLy8gaW5wdXRzIC8vLy8vKi9cclxuXHJcbmlucHV0OmZvY3VzIH4gbGFiZWwsIHRleHRhcmVhOmZvY3VzIH4gbGFiZWwsIGlucHV0OnZhbGlkIH4gbGFiZWwsIHRleHRhcmVhOnZhbGlkIH4gbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRvcDogLTVweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjI1cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjI1cyBlYXNlO1xyXG59XHJcblxyXG4uc3R5bGVkLWlucHV0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI5M3B4O1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLnN0eWxlZC1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnN0eWxlZC1pbnB1dCBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHBhZGRpbmc6IDEuM3JlbSAzMHB4IDFyZW0gMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnN0eWxlZC1pbnB1dC53aWRlIHsgXHJcbiAgICB3aWR0aDogNjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMgeyBvdXRsaW5lOiAwOyB9XHJcblxyXG5pbnB1dDpmb2N1cyB+IHNwYW4sXHJcbnRleHRhcmVhOmZvY3VzIH4gc3BhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMDc1cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDc1cyBlYXNlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDE1ZW07XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjVweCBhdXRvO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA3cHggMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmIyMzIzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjA2KSxcclxuICAgICAgICAgICAgICAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjA3KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG46aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMTApLFxyXG4gICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4wOSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufSBcclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgY29sb3I6ICNmMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYyAjbXlWaWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA2KTtcbn1cblxuLnNlYyAuY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjOWI5YjliO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uc29jaWFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNvY2lhbCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zb2NpYWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmaWx0ZXI6IGludmVydCgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc29jaWFsIGxpIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtMTVweCk7XG59XG5cbi8qIC8vLy8vIGlucHV0cyAvLy8vLyovXG5pbnB1dDpmb2N1cyB+IGxhYmVsLCB0ZXh0YXJlYTpmb2N1cyB+IGxhYmVsLCBpbnB1dDp2YWxpZCB+IGxhYmVsLCB0ZXh0YXJlYTp2YWxpZCB+IGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGNvbG9yOiAjOTk5O1xuICB0b3A6IC01cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjI1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yMjVzIGVhc2U7XG59XG5cbi5zdHlsZWQtaW5wdXQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI5M3B4O1xuICBtYXJnaW46IDFyZW0gMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN0eWxlZC1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5zdHlsZWQtaW5wdXQgbGFiZWwge1xuICBjb2xvcjogIzk5OTtcbiAgcGFkZGluZzogMS4zcmVtIDMwcHggMXJlbSAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3R5bGVkLWlucHV0LndpZGUge1xuICB3aWR0aDogNjUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG5pbnB1dDpmb2N1cyB+IHNwYW4sXG50ZXh0YXJlYTpmb2N1cyB+IHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4wNzVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjA3NXMgZWFzZTtcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTVlbTtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2NTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggYXV0byAyNXB4IGF1dG87XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA3cHggMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmIyMzIzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG59XG5cbi5zdWJtaXQtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zdWJtaXQtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogI2YwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/intro/intro.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/intro/intro.component.ts ***!
  \*****************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IntroComponent {
    constructor() {
    }
    ngOnInit() {
        // var labelID;
        // $('label').click(function () {
        //   labelID = $(this).attr('for');
        //   $('#' + labelID).toggleClass('active');
        // });
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 0, vars: 0, template: function IntroComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/about/about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/main/about/about.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 17, vars: 0, consts: [[1, "text-center"], [1, "row"], [1, "col-md-6", "col-xs-12", "poza"], ["src", "/assets/img/VISIOON1.png", "alt", "", 1, "logo"], [1, "col-md-6", "col-xs-12", "text"], [1, "vw"], ["routerLink", "/about", 1, "text-center"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Despre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Noi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Visioonwebsites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " ofera servicii de webdesign si graphic design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Suntem la inceput de drum. Avand ca scop principal satisfacerea nevoilor clientilor. Cu ajutorul ultimelor tehnologii avem placerea de a pune la dispozita dumneavoastra produse de inalta calitate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mai mult");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  left: 10%;\n  top: 10%;\n  transform: translateX(-10%) translateY(-10%);\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #111;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: #333;\n  color: #ccc;\n  width: 200px;\n  height: 60px;\n  border: 0;\n  font-size: 18px;\n  border-radius: 4px;\n  font-family: \"Raleway\", sans-serif;\n  transition: 0.6s;\n  overflow: hidden;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\nbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.5);\n  width: 60px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0.5;\n  filter: blur(30px);\n  transform: translateX(-100px) skewX(-15deg);\n}\n\nbutton[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  width: 30px;\n  height: 100%;\n  left: 30px;\n  top: 0;\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(-100px) skewX(-15deg);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: #e71616;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 0.6;\n  transition: 0.7s;\n}\n\nbutton[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 1;\n  transition: 0.7s;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  letter-spacing: 2px;\n  font-family: sans-serif;\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 5% 0;\n  font-family: monospace;\n  font-size: 4.4em;\n  white-space: nowrap;\n  font-size: 800;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n  text-transform: uppercase;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.logo[_ngcontent-%COMP%] {\n  min-width: 90%;\n  min-height: 90%;\n  max-width: 90%;\n  max-height: 90%;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 15%;\n  font-size: 2em;\n  color: #fff;\n}\n\n.vw[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: red;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 1% 5% 0 1%;\n  font-size: 2.2em;\n  color: white;\n  line-height: 1.5em;\n}\n\n@media screen and (min-width: 668px) and (max-width: 1200px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.9em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    padding: 1% 5%;\n    line-height: 40px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n@media screen and (min-width: 401px) and (max-width: 667px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.7em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    padding: 1% 5%;\n    line-height: 30px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.2em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n    line-height: 30px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2Fib3V0L0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURZQTtFQVBNLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw0Q0FBQTtBQ0ROOztBRFNBO0VBQ0EsZ0JBQUE7QUNOQTs7QURTQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1BBOztBRFFBO0VBQ0UsVUFBQTtBQ05GOztBRFFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDTkY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUNORjs7QURRQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ05GOztBRE9FO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURPRTtFQUNFLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEU0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNORjs7QURVQTtFQUNFLGFBQUE7RUFDRixzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNQQTs7QURVQTtFQUNFLFVBQUE7QUNQRjs7QURTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNORjs7QURRQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0xGOztBRE9BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRFFBO0VBRUU7SUFDRSxnQkFBQTtFQ05GOztFRFFBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VDTEY7O0VEUUE7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDTEY7O0VET0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSw0Q0FBQTtFQ0pGO0VEUUU7SUFDRSxjQUFBO0VDTko7QUFDRjs7QURhQTtFQUVFO0lBQ0UsZ0JBQUE7RUNaRjs7RURjQTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtFQ1hGOztFRGNBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ1hGOztFRGFBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsNENBQUE7RUNWRjtFRGNFO0lBQ0UsZ0JBQUE7RUNaSjtBQUNGOztBRG9CQTtFQUVBO0lBQ0UsZ0JBQUE7RUNuQkE7O0VEcUJGO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VDbEJBOztFRHFCRjtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNsQkE7O0VEb0JGO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsNENBQUE7RUNqQkE7RURxQkE7SUFDRSxnQkFBQTtFQ25CRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbkBtaXhpbiBjZW50ZXIoJGV4dGVuZDogdHJ1ZSkge1xyXG4gIEBpZiAkZXh0ZW5kIHtcclxuICAgICAgQGV4dGVuZCAlY2VudGVyO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgdG9wOiAxMCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gIH1cclxufVxyXG5cclxuJWNlbnRlciB7XHJcbiAgQGluY2x1ZGUgY2VudGVyKCRleHRlbmQ6IGZhbHNlKTtcclxufVxyXG5cclxuYm9keXtcclxuYmFja2dyb3VuZDogIzExMTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG5AaW5jbHVkZSBjZW50ZXI7XHJcbmJhY2tncm91bmQ6ICMzMzM7XHJcbmNvbG9yOiAjY2NjO1xyXG53aWR0aDogMjAwcHg7XHJcbmhlaWdodDogNjBweDtcclxuYm9yZGVyOiAwO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbmJvcmRlci1yYWRpdXM6IDRweDtcclxuZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxudHJhbnNpdGlvbjogLjZzO1xyXG5vdmVyZmxvdzogaGlkZGVuO1xyXG4mOmZvY3Vze1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuJjpiZWZvcmV7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogLjU7XHJcbiAgZmlsdGVyOiBibHVyKDMwcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpICBza2V3WCgtMTVkZWcpO1xyXG59XHJcbiY6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMzBweDtcclxuICB0b3A6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG59XHJcbiY6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogI2U3MTYxNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpiZWZvcmV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpICBza2V3WCgtMTVkZWcpOyAgXHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB0cmFuc2l0aW9uOiAuN3M7XHJcbiAgfVxyXG4gICY6YWZ0ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7ICBcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuN3M7XHJcbiAgfVxyXG59XHJcbn1cclxuYXtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBcclxufSAgXHJcblxyXG5oMXtcclxuICBwYWRkaW5nOjUlIDAgO1xyXG5mb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5mb250LXNpemU6IDQuNGVtO1xyXG53aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5mb250LXNpemU6IDgwMDtcclxudGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCMwMDAsIDAuOSk7XHJcbmNvbG9yOiAjZmZmO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxufVxyXG5zcGFue1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmxvZ297XHJcbiAgbWluLXdpZHRoOiA5MCU7XHJcbiAgbWluLWhlaWdodDogOTAlO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIG1heC1oZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuaDJ7XHJcbiAgcGFkZGluZy10b3A6IDE1JTtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4udnd7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbn1cclxucHtcclxuICBwYWRkaW5nOjElIDUlIDAgMSU7XHJcbiAgZm9udC1zaXplOiAyLjJlbTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcblxyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAzLjllbTtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgcGFkZGluZzogMSUgNSUgO1xyXG4gIH1cclxuXHJcbiAgcHsgIFxyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIHBhZGRpbmc6IDElIDUlIDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDgwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC04MCUpO1xyXG4gICBcclxuICBcclxuICAgIFxyXG4gICAgYXtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDY2N3B4KXtcclxuXHJcbiAgaDF7XHJcbiAgICBmb250LXNpemU6IDMuN2VtO1xyXG4gIH1cclxuICBoMntcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAxJSA1JSA7XHJcbiAgfVxyXG5cclxuICBweyAgXHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcGFkZGluZzogMSUgNSUgO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvdHRvbTogODAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTgwJSk7XHJcbiAgIFxyXG4gIFxyXG4gICAgXHJcbiAgICBhe1xyXG4gICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcclxuXHJcbmgxe1xyXG4gIGZvbnQtc2l6ZTogMy4yZW07XHJcbn1cclxuaDJ7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBwYWRkaW5nOiAxJSA1JSA7XHJcbn1cclxuXHJcbnB7ICBcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIHBhZGRpbmc6IDElIDUlIDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYnV0dG9ue1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3R0b206IDgwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtODAlKTtcclxuIFxyXG5cclxuICBcclxuICBhe1xyXG4gICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgXHJcbiAgfVxyXG59XHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzExMTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMzBweDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNzE2MTY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbmJ1dHRvbjpob3ZlcjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuYSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDEge1xuICBwYWRkaW5nOiA1JSAwO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDQuNGVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDgwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmxvZ28ge1xuICBtaW4td2lkdGg6IDkwJTtcbiAgbWluLWhlaWdodDogOTAlO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogOTAlO1xufVxuXG5oMiB7XG4gIHBhZGRpbmctdG9wOiAxNSU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnZ3IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IHJlZDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDElIDUlIDAgMSU7XG4gIGZvbnQtc2l6ZTogMi4yZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAzLjllbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIHBhZGRpbmc6IDElIDUlO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICBwYWRkaW5nOiAxJSA1JTtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDgwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtODAlKTtcbiAgfVxuICBidXR0b24gYSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMy43ZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nOiAxJSA1JTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcGFkZGluZzogMSUgNSU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiA4MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTgwJSk7XG4gIH1cbiAgYnV0dG9uIGEge1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDMuMmVtO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogMSUgNSU7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHBhZGRpbmc6IDElIDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogODAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC04MCUpO1xuICB9XG4gIGJ1dHRvbiBhIHtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/contact-main/contact-main.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/main/contact-main/contact-main.component.ts ***!
  \************************************************************************/
/*! exports provided: ContactMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMainComponent", function() { return ContactMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactMainComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactMainComponent.ɵfac = function ContactMainComponent_Factory(t) { return new (t || ContactMainComponent)(); };
ContactMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactMainComponent, selectors: [["app-contact-main"]], decls: 60, vars: 0, consts: [[1, "sec"], [1, "content"], [1, "container"], [1, "row"], [2, "text-align", "center"], [1, "social"], ["href", "whatsapp://tel:0748489982"], ["viewBox", "0 0 512 512", "fill", "#000", "width", "5.5em", "height", "5.5em", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m123.832031 475.464844c39.558594 23.804687 84.789063 36.351562 131.261719 36.351562 140.824219 0 256.90625-114.914062 256.90625-255.910156 0-140.832031-115.917969-255.90625-256.90625-255.90625-140.558594 0-254.910156 114.800781-254.910156 255.90625 0 47.09375 12.550781 92.667969 36.351562 132.257812l-36.535156 123.835938zm-93.65625-219.558594c0-124.570312 100.898438-225.917969 224.917969-225.917969 125.121094 0 226.917969 101.347657 226.917969 225.917969 0 124.574219-101.796875 225.917969-226.917969 225.917969-43.054688 0-84.894531-12.195313-120.984375-35.273438l-5.765625-3.683593-83.988281 24.78125 24.777343-83.992188-3.683593-5.761719c-23.078125-36.097656-35.273438-78.277343-35.273438-121.988281zm0 0"], ["d", "m124.628906 208.753906c4.953125 26.011719 19.65625 76.042969 62.464844 118.851563 42.808594 42.808593 92.839844 57.515625 118.855469 62.46875 29.789062 5.671875 73.503906 6.527343 94.867187-14.835938l11.910156-11.910156c6.011719-6.011719 9.324219-14.007813 9.324219-22.511719s-3.3125-16.496094-9.324219-22.507812l-47.628906-47.628906c-6.015625-6.015626-14.007812-9.324219-22.511718-9.324219-8.503907 0-16.496094 3.308593-22.511719 9.324219l-11.90625 11.90625c-7.273438 7.273437-21.003907 7.304687-28.332031.089843l-47.507813-49.5c-.070313-.074219-.140625-.148437-.214844-.21875-7.285156-7.285156-7.285156-19.140625 0-26.425781l11.90625-11.90625c12.445313-12.445312 12.445313-32.582031 0-45.023438l-47.628906-47.628906c-12.410156-12.410156-32.605469-12.410156-45.019531 0l-11.90625 11.910156v-.003906c-17.050782 17.054688-22.734375 53.40625-14.835938 94.875zm36.042969-73.664062c12.5-12.214844 11.832031-12.449219 13.210937-12.449219.472657 0 .945313.179687 1.304688.539063 50.1875 50.457031 48.171875 47.492187 48.171875 48.9375 0 .503906-.183594.945312-.539063 1.304687l-11.910156 11.90625c-18.964844 18.964844-19.039062 49.664063-.121094 68.714844l47.535157 49.53125c.074219.070312.144531.144531.21875.21875 18.960937 18.960937 51.808593 19.023437 70.832031 0l11.90625-11.90625c.71875-.71875 1.890625-.71875 2.609375 0 50.1875 50.453125 48.171875 47.488281 48.171875 48.933593 0 .507813-.183594.945313-.539062 1.304688l-11.910157 11.90625c-8.160156 8.160156-34.152343 13.042969-68.054687 6.585938-22.625-4.3125-66.128906-17.085938-103.257813-54.214844-37.128906-37.128906-49.902343-80.632813-54.210937-103.257813-6.460938-33.902343-1.578125-59.898437 6.582031-68.054687zm0 0"], ["target", "_blank", "href", "https://www.facebook.com/Visioonwebsites-100464558721297"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", "width", "5.5em", "height", "5.5em", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 167.657 167.657", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 167.657 167.657"], ["d", "M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626\n                   v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006\n                   c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154\n                   C167.657,37.881,130.125,0.349,83.829,0.349z", 2, "fill", "#010002"], [1, "row", "input-container"], [1, "col-xs-12"], [1, "styled-input", "wide"], ["type", "text", "required", ""], [1, "col-md-6", "col-sm-12", "col-xs-12"], [1, "styled-input"], ["required", ""], [1, "btn-lrg", "submit-btn"]], template: function ContactMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vreti sa discutam ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Numar de telefon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Mesaj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Trimite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.sec[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(177, 29, 29, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(336deg, rgba(22, 3, 3, 0.8), rgba(255, 0, 0, 0) 70.71%);\n}\n\n.sec[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  position: absolute;\n  z-index: 1;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif, \"arial\";\n  font-weight: 600;\n  font-size: 72px;\n  color: white;\n  text-align: center;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  font-size: 20px;\n  color: #9b9b9b;\n  line-height: 1.5;\n}\n\n.social[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  filter: invert(1);\n  transform: scale(0.5);\n  transition: 0.5s;\n}\n\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(0.5) translateY(-15px);\n}\n\n\n\ninput[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  color: #999;\n  top: -5px;\n  transition: all 0.225s ease;\n}\n\n.styled-input[_ngcontent-%COMP%] {\n  float: left;\n  width: 293px;\n  margin: 1rem 0;\n  position: relative;\n  border-radius: 4px;\n}\n\n.styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #999;\n  padding: 1.3rem 30px 1rem 30px;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  transition: all 0.25s ease;\n  pointer-events: none;\n}\n\n.styled-input.wide[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100%;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 30px;\n  border: 0;\n  width: 100%;\n  font-size: 1rem;\n  background-color: #2d2d2d;\n  color: white;\n  border-radius: 4px;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: all 0.075s ease;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 15em;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100vw;\n  margin: 20px auto 25px auto;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  padding: 7px 35px;\n  border-radius: 60px;\n  display: inline-block;\n  background-color: #fb2323;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n  transition: all 300ms ease;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(1px);\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-style: italic;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: #f00;\n  font-style: normal;\n}\n\n@media only screen and (min-width: 301px) and (max-width: 768px) {\n  .styled-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 300px) {\n  .sec[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-family: \"Poppins\", sans-serif, \"arial\";\n    font-weight: 600;\n    font-size: 2.5em;\n    color: white;\n    text-align: center;\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif, \"arial\";\n    font-weight: 400;\n    font-size: 1em;\n    color: #9b9b9b;\n    line-height: 1.5;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    bottom: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    filter: invert(1);\n    transform: scale(0.5);\n    transition: 0.5s;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    transform: scale(0.5) translateY(-15px);\n  }\n\n  .styled-input[_ngcontent-%COMP%] {\n    float: left;\n    width: 90vw;\n    margin: 1rem 0;\n    position: relative;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #999;\n    padding: 0.5rem 30px 0.35rem 30px;\n    position: absolute;\n    top: 10px;\n    left: 0;\n    transition: all 0.25s ease;\n    pointer-events: none;\n  }\n\n  .styled-input.wide[_ngcontent-%COMP%] {\n    width: 650px;\n    max-width: 90vw;\n    max-height: 30vh;\n  }\n\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 0;\n    width: 90vw;\n    font-size: 1rem;\n    background-color: #2d2d2d;\n    color: white;\n    border-radius: 4px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .input-container[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    margin: auto;\n    max-height: 30vh;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2NvbnRhY3QtbWFpbi9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcUG9ydG9mb2xpdUFuZHJlaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcY29udGFjdC1tYWluXFxjb250YWN0LW1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9jb250YWN0LW1haW4vY29udGFjdC1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNDLHlPQUFBO0FDQ0w7O0FEbUJBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNoQko7O0FEcUJFO0VBQ0UsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNsQko7O0FEcUJBO0VBQ0ksMENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbkJGOztBRHNCQTtFQUVFLGdCQUFBO0FDcEJGOztBRHNCQTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNwQkY7O0FEc0JBO0VBRUUsdUNBQUE7QUNwQkY7O0FEdUJBLHNCQUFBOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUVBLDJCQUFBO0FDckJKOztBRHdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNyQko7O0FEMEJBO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLDBCQUFBO0VBQ0Esb0JBQUE7QUN2Qko7O0FEMEJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUN2Qko7O0FEMEJBOztFQUVJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3ZCSjs7QUQwQkE7O0VBQ2lCLFVBQUE7QUN0QmpCOztBRHdCQTs7RUFFSSxXQUFBO0VBRUEsMkJBQUE7QUNyQko7O0FEd0JBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDckJKOztBRHdCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDckJKOztBRHdCQTtFQUVJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNkVBQUE7RUFHQSwwQkFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSwwQkFBQTtFQUNBLDJFQUFBO0FDdkJKOztBRDBCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ3ZCSjs7QUQwQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUN2Qko7O0FEMEJFO0VBQ0U7SUFDSSxXQUFBO0VDdkJOO0FBQ0Y7O0FEMEJBO0VBQ0k7SUFDSSx1QkFBQTtFQ3hCTjs7RUQyQkU7SUFDSSwyQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDeEJOOztFRDJCRTtJQUNJLDBDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDeEJOOztFRDJCRTtJQUVFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQ3pCSjs7RUQ0QkU7SUFFRSxnQkFBQTtFQzFCSjs7RUQ0QkU7SUFFRSxxQkFBQTtJQUVBLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtFQzNCSjs7RUQ2QkU7SUFFRSx1Q0FBQTtFQzNCSjs7RUQrQkU7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQzVCTjs7RURpQ0U7SUFDSSxXQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBRUEsMEJBQUE7SUFDQSxvQkFBQTtFQzlCTjs7RURpQ0U7SUFDSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDOUJOOztFRGlDRTs7SUFFSSxhQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUM5Qk47O0VEZ0RFO0lBQ0ksV0FBQTtFQzdDTjs7RURxREU7SUFFSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUNuRE47O0VEdURFO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUNwRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9jb250YWN0LW1haW4vY29udGFjdC1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG59XHJcbi5zZWN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE3ZGVnLCByZ2JhKDI1NSwwLDAsLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgxMjdkZWcsIHJnYmEoMTc3LCAyOSwgMjksIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDMzNmRlZywgcmdiYSgyMiwgMywgMywgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSk7O1xyXG4gICAgXHJcbiAgICBcclxuXHJcbn1cclxuLy8gLnNlYyAjbXlWaWRlbyB7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICB0b3A6IDA7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4vLyAgICAgei1pbmRleDogMDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA2KTtcclxuLy8gICB9XHJcblxyXG4gIFxyXG4uc2VjICAuY29udGVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7ICAgICAgXHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzliOWI5YjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5zb2NpYWxcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcbi5zb2NpYWwgbGlcclxue1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLnNvY2lhbCBsaSBhXHJcbntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5zb2NpYWwgbGkgYTpob3ZlclxyXG57XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG59XHJcblxyXG4vKiAvLy8vLyBpbnB1dHMgLy8vLy8qL1xyXG5cclxuaW5wdXQ6Zm9jdXMgfiBsYWJlbCwgdGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCwgaW5wdXQ6dmFsaWQgfiBsYWJlbCwgdGV4dGFyZWE6dmFsaWQgfiBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yMjVzIGVhc2U7XHJcbn1cclxuXHJcbi5zdHlsZWQtaW5wdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjkzcHg7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuXHJcblxyXG4uc3R5bGVkLWlucHV0IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgcGFkZGluZzogMS4zcmVtIDMwcHggMXJlbSAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc3R5bGVkLWlucHV0LndpZGUgeyBcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyB7IG91dGxpbmU6IDA7IH1cclxuXHJcbmlucHV0OmZvY3VzIH4gc3BhbixcclxudGV4dGFyZWE6Zm9jdXMgfiBzcGFuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4wNzVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNzVzIGVhc2U7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTVlbTtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjVweCBhdXRvO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA3cHggMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmIyMzIzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjA2KSxcclxuICAgICAgICAgICAgICAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjA3KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG46aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuMTApLFxyXG4gICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4wOSk7XHJcbn1cclxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9IFxyXG4gIFxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICBjb2xvcjogI2YwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6IDMwMXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLnN0eWxlZC1pbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuc2Vje1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zb2NpYWxcclxuICAgIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgYm90dG9tOiAxZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5zb2NpYWwgbGlcclxuICAgIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zb2NpYWwgbGkgYVxyXG4gICAge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuICAgIC5zb2NpYWwgbGkgYTpob3ZlclxyXG4gICAge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtMTVweCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zdHlsZWQtaW5wdXQge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5zdHlsZWQtaW5wdXQgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAzMHB4IDAuMzVyZW0gMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0eWxlZC1pbnB1dC53aWRlIHsgXHJcbiAgICAgICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogOTB2dztcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMHZoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB3aWR0aDogOTB2dztcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvLyBsZWZ0OiA1MCU7XHJcbiAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gaW5wdXQ6Zm9jdXMsXHJcbiAgICAvLyB0ZXh0YXJlYTpmb2N1cyB7IG91dGxpbmU6IDA7IH1cclxuICAgIFxyXG4gICAgLy8gaW5wdXQ6Zm9jdXMgfiBzcGFuLFxyXG4gICAgLy8gdGV4dGFyZWE6Zm9jdXMgfiBzcGFuIHtcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjA3NXMgZWFzZTtcclxuICAgIC8vICAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNzVzIGVhc2U7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgXHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vIGxlZnQ6IDUwJTtcclxuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogIGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzB2aDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcbiIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zZWMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHJnYmEoMjU1LCAwLCAwLCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSwgbGluZWFyLWdyYWRpZW50KDEyN2RlZywgcmdiYSgxNzcsIDI5LCAyOSwgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSksIGxpbmVhci1ncmFkaWVudCgzMzZkZWcsIHJnYmEoMjIsIDMsIDMsIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpO1xufVxuXG4uc2VjIC5jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM5YjliOWI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5zb2NpYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc29jaWFsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnNvY2lhbCBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5zb2NpYWwgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKC0xNXB4KTtcbn1cblxuLyogLy8vLy8gaW5wdXRzIC8vLy8vKi9cbmlucHV0OmZvY3VzIH4gbGFiZWwsIHRleHRhcmVhOmZvY3VzIH4gbGFiZWwsIGlucHV0OnZhbGlkIH4gbGFiZWwsIHRleHRhcmVhOnZhbGlkIH4gbGFiZWwge1xuICBmb250LXNpemU6IDAuNzVlbTtcbiAgY29sb3I6ICM5OTk7XG4gIHRvcDogLTVweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjIyNXMgZWFzZTtcbn1cblxuLnN0eWxlZC1pbnB1dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjkzcHg7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnN0eWxlZC1pbnB1dCBsYWJlbCB7XG4gIGNvbG9yOiAjOTk5O1xuICBwYWRkaW5nOiAxLjNyZW0gMzBweCAxcmVtIDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zdHlsZWQtaW5wdXQud2lkZSB7XG4gIHdpZHRoOiA2NTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbmlucHV0OmZvY3VzIH4gc3BhbixcbnRleHRhcmVhOmZvY3VzIH4gc3BhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjA3NXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDc1cyBlYXNlO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxNWVtO1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDY1MHB4O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IDIwcHggYXV0byAyNXB4IGF1dG87XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgcGFkZGluZzogN3B4IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiMjMyMztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xufVxuXG4uc3VibWl0LWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wOSk7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogI2YwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnN0eWxlZC1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAuc2VjIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gIH1cblxuICBoNCB7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAuc29jaWFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgYm90dG9tOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnNvY2lhbCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuXG4gIC5zb2NpYWwgbGkgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG5cbiAgLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gIH1cblxuICAuc3R5bGVkLWlucHV0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuc3R5bGVkLWlucHV0IGxhYmVsIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMzBweCAwLjM1cmVtIDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAuc3R5bGVkLWlucHV0LndpZGUge1xuICAgIHdpZHRoOiA2NTBweDtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgbWF4LWhlaWdodDogMzB2aDtcbiAgfVxuXG4gIGlucHV0LFxudGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDMwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cblxuICAuc3VibWl0LWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-main',
                templateUrl: './contact-main.component.html',
                styleUrls: ['./contact-main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/main-products/main-products.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/main-products/main-products.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProductsComponent", function() { return MainProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MainProductsComponent {
    constructor() { }
    ngOnInit() {
        const left = document.querySelector('.stanga');
        const right = document.querySelector('.dreapta');
        const container = document.querySelector('.cont');
        left.addEventListener('mouseenter', () => container.classList.add('hover_stanga'));
        left.addEventListener('mouseleave', () => container.classList.remove('hover_stanga'));
        right.addEventListener('mouseenter', () => container.classList.add('hover_dreapta'));
        right.addEventListener('mouseleave', () => container.classList.remove('hover_dreapta'));
    }
}
MainProductsComponent.ɵfac = function MainProductsComponent_Factory(t) { return new (t || MainProductsComponent)(); };
MainProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainProductsComponent, selectors: [["app-main-products"]], decls: 52, vars: 0, consts: [[1, "sec"], [1, "cont"], [1, "split", "stanga"], [1, "site1", "site"], [1, "title"], ["routerLink", "/portofoliu"], [1, "site2", "site"], ["routerLink", "/site-prezentare"], [1, "site4", "site"], ["routerLink", "/aplicatii"], [1, "split", "dreapta", "col-xs-12"], ["routerLink", "/logo"], ["routerLink", "/banner"], [1, "site3", "site"], ["routerLink", "/cards"], ["routerLink", "/flyer"]], template: function MainProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WebDesign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Portofoliu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Site de prezentare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Aplicatii web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Grafica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Logo-steme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Carti de vizita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Flyere/fluturasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.sec[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 800;\n  letter-spacing: 2px;\n}\n\n.site[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  position: relative;\n  margin-top: 5%;\n}\n\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  bottom: -90%;\n  transform: translateX(-50%);\n  text-decoration: none;\n  color: black;\n  border: 2px solid white;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  font-weight: bold;\n  width: 15rem;\n  padding: 1.2rem;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  letter-spacing: 2px;\n}\n\n.site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  margin: 0 1%;\n}\n\n.cont[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #333;\n}\n\n.split[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.split.stanga[_ngcontent-%COMP%] {\n  left: 0;\n  background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(177, 29, 29, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(336deg, rgba(22, 3, 3, 0.8), rgba(255, 0, 0, 0) 70.71%);\n  color: white;\n}\n\n.split.stanga[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n\n.split.dreapta[_ngcontent-%COMP%] {\n  right: 0;\n  background: linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(127deg, rgba(177, 29, 29, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(336deg, rgba(22, 3, 3, 0.8), rgba(255, 0, 0, 0) 70.71%);\n  background: linear-gradient(-217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(-127deg, rgba(177, 29, 29, 0.8), rgba(255, 0, 0, 0) 70.71%), linear-gradient(-336deg, rgba(22, 3, 3, 0.8), rgba(255, 0, 0, 0) 70.71%);\n  color: white;\n}\n\n.split.dreapta[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n\n.split.stanga[_ngcontent-%COMP%], .split.dreapta[_ngcontent-%COMP%], .split.stanga[_ngcontent-%COMP%]::before, .split.dreapta[_ngcontent-%COMP%]::before {\n  transition: all 1000ms ease-in-out;\n}\n\n.hover_stanga[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.hover_stanga[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.hover_dreapta[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.hover_dreapta[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media only screen and (min-device-width: 992px) and (max-device-width: 1200px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 10%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 1.2rem;\n    width: 11rem;\n    padding: 0.9rem;\n    margin-top: 1.3em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.8em;\n    text-decoration: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 1201px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 9%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 2em;\n    width: 15rem;\n    padding: 1rem;\n    margin: 1em 0;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.9em;\n    text-decoration: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 668px) and (max-device-width: 991px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 13%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 1.2rem;\n    width: 11rem;\n    padding: 0.9rem;\n    margin-top: 1.3em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.8em;\n    text-decoration: none;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 482px) and (max-device-width: 667px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1.3rem;\n    width: 10rem;\n    padding: 0.6rem;\n    margin-top: 2em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.8em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n\n@media only screen and (min-device-width: 301px) and (max-device-width: 481px) and (orientation: portrait) {\n  .site[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1.1rem;\n    width: 8rem;\n    padding: 0.5rem;\n    margin-top: 2em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.7em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1em;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1rem;\n    width: 7rem;\n    padding: 0.5rem;\n    margin-top: 2em;\n  }\n  .site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 0.6em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 0.4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tcHJvZHVjdHMvQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUG9ydG9mb2xpdUFuZ3VsYXJcXFBvcnRvZm9saXVBbmRyZWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXG1haW4tcHJvZHVjdHNcXG1haW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXByb2R1Y3RzL21haW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FES0E7RUFDSSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNGSjs7QURJQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUNEUjs7QURHSTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURJSTtFQUNJLFlBQUE7QUNGUjs7QURNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURLQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBRE1BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURPQTtFQUNBLE9BQUE7RUFDQSx5T0FBQTtFQU1BLFlBQUE7QUNUQTs7QURXQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBckdTO0FDNkZiOztBRFVBO0VBQ0EsUUFBQTtFQUlBLHlPQUFBO0VBSUEsNE9BQUE7RUFHQSxZQUFBO0FDZkE7O0FEaUJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0F6SFU7QUMyR2Q7O0FEZ0JBOzs7O0VBSUksa0NBQUE7QUNiSjs7QURnQkE7RUFDSSxVQWxJVTtBQ3FIZDs7QURnQkE7RUFFSSxVQXRJVztBQ3dIZjs7QURnQkE7RUFFSSxVQTNJVTtBQzZIZDs7QURnQkE7RUFFSSxVQTlJVztBQ2dJZjs7QURnQkE7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxPQUFBO0lBQ0EsMEJBQUE7RUNiTjtFRGdCTTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUNkVjtFRGtCTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0VDaEJWOztFRG9CRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUNqQk47QUFDRjs7QURvQkE7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxPQUFBO0lBQ0EsMEJBQUE7RUNsQk47RURxQk07SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtFQ25CVjtFRHVCTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0VDckJWOztFRHlCRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQ3RCTjtBQUNGOztBRHlCQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLE9BQUE7SUFDQSwwQkFBQTtFQ3ZCTjtFRDBCTTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUN4QlY7RUQ0Qk07SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtFQzFCVjs7RUQ4QkU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDM0JOO0FBQ0Y7O0FEOEJBO0VBQ0k7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0VDNUJOO0VEK0JNO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDN0JWO0VEaUNNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0VDL0JWOztFRG1DRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUNoQ047QUFDRjs7QURtQ0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUNqQ047RURvQ007SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNsQ1Y7RURzQ007SUFDSSxZQUFBO0lBQ0EsZ0JBQUE7RUNwQ1Y7O0VEd0NFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ3JDTjtBQUNGOztBRHdDQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQ3RDTjtFRHlDTTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDdkNWO0VEMkNNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0VDekNWOztFRDZDRTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUMxQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXByb2R1Y3RzL21haW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuJGNvbG9yX2xlZnQ6IHJnYigzNCwgMzQsIDM0LC41KTtcclxuJGNvbG9yX3JpZ2h0OiByZ2IoMzQsIDM0LCAzNCwuNSk7XHJcbiRob3Zlcl9zdGFuZ2E6NzUlO1xyXG4kaG92ZXJfZHJlYXB0YToyNSU7XHJcbi5zZWN7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4udGl0bGV7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuLnNpdGV7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAtOTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luOiAwIDElO1xyXG59XHJcblxyXG5cclxuLmNvbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiBcclxuICAgIFxyXG5cclxufVxyXG4uc3BsaXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc3BsaXQuc3Rhbmdhe1xyXG5sZWZ0OiAwO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE3ZGVnLCByZ2JhKDI1NSwwLDAsLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxubGluZWFyLWdyYWRpZW50KDEyN2RlZywgcmdiYSgxNzcsIDI5LCAyOSwgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSksXHJcbmxpbmVhci1ncmFkaWVudCgzMzZkZWcsIHJnYmEoMjIsIDMsIDMsIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpOztcclxuLy8gYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9zdGFuZ2EuanBnJyk7XHJcbi8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc3BsaXQuc3RhbmdhOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OicnIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2xlZnQ7XHJcbn1cclxuLnNwbGl0LmRyZWFwdGF7XHJcbnJpZ2h0OiAwO1xyXG4vLyBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2RyZWFwdGEuanBnJyk7XHJcbi8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHJnYmEoMjU1LDAsMCwuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpLFxyXG5saW5lYXItZ3JhZGllbnQoMTI3ZGVnLCByZ2JhKDE3NywgMjksIDI5LCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxubGluZWFyLWdyYWRpZW50KDMzNmRlZywgcmdiYSgyMiwgMywgMywgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSk7XHJcblxyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTIxN2RlZywgcmdiYSgyNTUsMCwwLC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSksXHJcbmxpbmVhci1ncmFkaWVudCgtMTI3ZGVnLCByZ2JhKDE3NywgMjksIDI5LCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxubGluZWFyLWdyYWRpZW50KC0zMzZkZWcsIHJnYmEoMjIsIDMsIDMsIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpO1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6JycgO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfcmlnaHQ7XHJcbn1cclxuLnNwbGl0LnN0YW5nYSwgXHJcbi5zcGxpdC5kcmVhcHRhLCBcclxuLnNwbGl0LnN0YW5nYTo6YmVmb3JlLFxyXG4uc3BsaXQuZHJlYXB0YTo6YmVmb3Jle1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhvdmVyX3N0YW5nYSAuc3Rhbmdhe1xyXG4gICAgd2lkdGg6ICRob3Zlcl9zdGFuZ2E7XHJcbiAgICBcclxufVxyXG4uaG92ZXJfc3RhbmdhIC5kcmVhcHRhe1xyXG4gICBcclxuICAgIHdpZHRoOiAkaG92ZXJfZHJlYXB0YTtcclxufVxyXG4uaG92ZXJfZHJlYXB0YSAuZHJlYXB0YXtcclxuICAgIFxyXG4gICAgd2lkdGg6ICRob3Zlcl9zdGFuZ2E7XHJcbn1cclxuLmhvdmVyX2RyZWFwdGEgLnN0YW5nYXtcclxuICAgIFxyXG4gICAgd2lkdGg6ICRob3Zlcl9kcmVhcHRhO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDk5MnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnNpdGV7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgdG9wOiAyJTsgICAgICAgIFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUgKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUgKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC45cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjNlbTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XHJcbiAgICB9XHJcblxyXG4gIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTIwMXB4KSB7XHJcbiAgICAuc2l0ZXtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDklO1xyXG4gICAgICAgIHRvcDogMiU7ICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlICk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA5OTFweCkge1xyXG4gICAgLnNpdGV7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMyU7XHJcbiAgICAgICAgdG9wOiAyJTsgICAgICAgIFxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUgKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUgKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC45cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjNlbTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XHJcbiAgICB9XHJcblxyXG4gIH1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgycHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIHtcclxuICAgIC5zaXRle1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgICAgIHRvcDogMjAlOyAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUgKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUgKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC42cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMDFweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODFweCkgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkge1xyXG4gICAgLnNpdGV7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgICAgdG9wOiAyMCU7ICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDhyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAgIC5zaXRle1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgICAgIHRvcDogMjAlOyAgICAgICAgXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUgKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUgKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogN3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRlbTtcclxuICAgIH1cclxufSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zZWMge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uc2l0ZSB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cbi5zaXRlIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxlZnQ6IDUwJTtcbiAgYm90dG9tOiAtOTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxNXJlbTtcbiAgcGFkZGluZzogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4uc2l0ZSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG4uc2l0ZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luOiAwIDElO1xufVxuXG4uY29udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzMzMztcbn1cblxuLnNwbGl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zcGxpdC5zdGFuZ2Ege1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE3ZGVnLCByZ2JhKDI1NSwgMCwgMCwgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSksIGxpbmVhci1ncmFkaWVudCgxMjdkZWcsIHJnYmEoMTc3LCAyOSwgMjksIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpLCBsaW5lYXItZ3JhZGllbnQoMzM2ZGVnLCByZ2JhKDIyLCAzLCAzLCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3BsaXQuc3RhbmdhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcbn1cblxuLnNwbGl0LmRyZWFwdGEge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxN2RlZywgcmdiYSgyNTUsIDAsIDAsIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpLCBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCByZ2JhKDE3NywgMjksIDI5LCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSwgbGluZWFyLWdyYWRpZW50KDMzNmRlZywgcmdiYSgyMiwgMywgMywgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjE3ZGVnLCByZ2JhKDI1NSwgMCwgMCwgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSksIGxpbmVhci1ncmFkaWVudCgtMTI3ZGVnLCByZ2JhKDE3NywgMjksIDI5LCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSwgbGluZWFyLWdyYWRpZW50KC0zMzZkZWcsIHJnYmEoMjIsIDMsIDMsIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGxpdC5kcmVhcHRhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcbn1cblxuLnNwbGl0LnN0YW5nYSxcbi5zcGxpdC5kcmVhcHRhLFxuLnNwbGl0LnN0YW5nYTo6YmVmb3JlLFxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob3Zlcl9zdGFuZ2EgLnN0YW5nYSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5ob3Zlcl9zdGFuZ2EgLmRyZWFwdGEge1xuICB3aWR0aDogMjUlO1xufVxuXG4uaG92ZXJfZHJlYXB0YSAuZHJlYXB0YSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5ob3Zlcl9kcmVhcHRhIC5zdGFuZ2Ege1xuICB3aWR0aDogMjUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNpdGUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHRvcDogMiU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG4gIH1cbiAgLnNpdGUgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdpZHRoOiAxMXJlbTtcbiAgICBwYWRkaW5nOiAwLjlyZW07XG4gICAgbWFyZ2luLXRvcDogMS4zZW07XG4gIH1cbiAgLnNpdGUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDFweCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA5JTtcbiAgICB0b3A6IDIlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xuICB9XG4gIC5zaXRlIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB3aWR0aDogMTVyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDFlbSAwO1xuICB9XG4gIC5zaXRlIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogOTkxcHgpIHtcbiAgLnNpdGUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTMlO1xuICAgIHRvcDogMiU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG4gIH1cbiAgLnNpdGUgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdpZHRoOiAxMXJlbTtcbiAgICBwYWRkaW5nOiAwLjlyZW07XG4gICAgbWFyZ2luLXRvcDogMS4zZW07XG4gIH1cbiAgLnNpdGUgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSB7XG4gIC5zaXRlIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cbiAgLnNpdGUgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICB9XG4gIC5zaXRlIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMwMXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICB9XG4gIC5zaXRlIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICB9XG4gIC5zaXRlIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5zaXRlIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cbiAgLnNpdGUgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICB9XG4gIC5zaXRlIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuNmVtO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40ZW07XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-products',
                templateUrl: './main-products.component.html',
                styleUrls: ['./main-products.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/components/main/about/about.component.ts");
/* harmony import */ var _main_products_main_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-products/main-products.component */ "./src/app/components/main/main-products/main-products.component.ts");
/* harmony import */ var _contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-main/contact-main.component */ "./src/app/components/main/contact-main/contact-main.component.ts");






class MainComponent {
    constructor() { }
    ngOnInit() {
        var Messenger = function (el) {
            'use strict';
            var m = this;
            m.init = function () {
                m.codeletters = "&#*+%?£@§$";
                m.message = 0;
                m.current_length = 0;
                m.fadeBuffer = false;
                m.messages = [
                    'VISIOONWEBSITES',
                    'PORTOFOLI',
                    'SITE DE PREZENTARE',
                    'MAGAZIN ONLINE',
                    'APLICATII WEB',
                    'SABLOANE GRAFICE',
                    'LOGO - STEME'
                ];
                setTimeout(m.animateIn, 0);
            };
            m.generateRandomString = function (length) {
                var random_text = '';
                while (random_text.length < length) {
                    random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
                }
                return random_text;
            };
            m.animateIn = function () {
                if (m.current_length < m.messages[m.message].length) {
                    m.current_length = m.current_length + 2;
                    if (m.current_length > m.messages[m.message].length) {
                        m.current_length = m.messages[m.message].length;
                    }
                    var message = m.generateRandomString(m.current_length);
                    jquery__WEBPACK_IMPORTED_MODULE_1__(el).html(message);
                    setTimeout(m.animateIn, 20);
                }
                else {
                    setTimeout(m.animateFadeBuffer, 20);
                }
            };
            m.animateFadeBuffer = function () {
                if (m.fadeBuffer === false) {
                    m.fadeBuffer = [];
                    for (var i = 0; i < m.messages[m.message].length; i++) {
                        m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i) });
                    }
                }
                var do_cycles = false;
                var message = '';
                for (var i = 0; i < m.fadeBuffer.length; i++) {
                    var fader = m.fadeBuffer[i];
                    if (fader.c > 0) {
                        do_cycles = true;
                        fader.c--;
                        message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
                    }
                    else {
                        message += fader.l;
                    }
                }
                jquery__WEBPACK_IMPORTED_MODULE_1__(el).html(message);
                if (do_cycles === true) {
                    setTimeout(m.animateFadeBuffer, 50);
                }
                else {
                    setTimeout(m.cycleText, 2000);
                }
            };
            m.cycleText = function () {
                m.message = m.message + 1;
                if (m.message >= m.messages.length) {
                    m.message = 0;
                }
                m.current_length = 0;
                m.fadeBuffer = false;
                jquery__WEBPACK_IMPORTED_MODULE_1__(el).html('');
                setTimeout(m.animateIn, 200);
            };
            m.init();
        };
        console.clear();
        var messenger = new Messenger(jquery__WEBPACK_IMPORTED_MODULE_1__('#messenger'));
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 8, vars: 0, consts: [[1, "bk"], ["id", "messenger"], ["id", "despre", 1, "despre"], ["id", "produse", 1, "produse"], ["id", "contact", 1, "contact"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-main-products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-contact-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _main_products_main_products_component__WEBPACK_IMPORTED_MODULE_3__["MainProductsComponent"], _contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_4__["ContactMainComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:700\");\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.bk[_ngcontent-%COMP%] {\n  background: linear-gradient(276deg, #3e3e3e 0%, #503c3c 25%, #814141 50%, #b82424 75%, red 100%);\n  color: #fff;\n  text-align: center;\n  max-width: 100vw;\n  font-weight: 700;\n  overflow: hidden;\n  font-family: \"Montserrat\", sans-serif;\n  min-height: 100vh;\n}\n#messenger[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: monospace;\n  font-size: 4em;\n  white-space: nowrap;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n}\n\n.despre[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #3b3b3b;\n}\n.contact[_ngcontent-%COMP%] {\n  min-height: auto;\n  background-color: #d32424;\n  color: #fff;\n}\n@media screen and (min-width: 401px) and (max-width: 667px) {\n  #messenger[_ngcontent-%COMP%] {\n    font-size: 2.7em;\n  }\n}\n@media screen and (max-width: 400px) {\n  #messenger[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxxRUFBQTtBQUNSO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQ0NKO0FERUE7RUFNRSxnR0FBQTtFQUVDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7QUNMSDtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7QUNORjtBRDBDQTtrREFBQTtBQVlBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQ2pESjtBRG9EQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDakRKO0FEb0RBO0VBRUU7SUFFRSxnQkFBQTtFQ25ERjtBQUNGO0FEMERBO0VBRUU7SUFFRSxnQkFBQTtFQzFERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NzAwJyk7XHJcbip7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmJre1xyXG4gICBcclxuICAvLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2JrMS5qcGcpO1xyXG4gIC8vICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIC8vICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8vICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3NmRlZywgcmdiYSg2Miw2Miw2MiwxKSAwJSwgcmdiYSg4MCw2MCw2MCwxKSAyNSUsIHJnYmEoMTI5LDY1LDY1LDEpIDUwJSwgcmdiYSgxODQsMzYsMzYsMSkgNzUlLCByZ2JhKDI1NSwwLDAsMSkgMTAwJSk7XHJcbiAgLy8gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgIGNvbG9yOiAjZmZmO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICBcclxuICAgICAgXHJcbn1cclxuI21lc3NlbmdlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCMwMDAsIDAuOSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8vICNmbHktaW4ge1xyXG4vLyAgICAgZm9udC1zaXplOiA0ZW07XHJcbi8vICAgICBtYXJnaW46IDQwdmggYXV0bztcclxuLy8gICAgIGhlaWdodDogMjB2aDsgXHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyAgIH1cclxuXHJcbi8vICNmbHktaW4gc3BhbiB7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgZm9udC1zaXplOiAuNGVtO1xyXG4vLyAgIG9wYWNpdHk6IC44O1xyXG4vLyAgIG1hcmdpbi10b3A6IDJlbTtcclxuLy8gfVxyXG5cclxuLy8gI2ZseS1pbiBkaXYge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgXHJcbi8vICAgICAgbWFyZ2luOiAydmggMDtcclxuLy8gICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgIGxlZnQ6IDEwdnc7XHJcbi8vICAgICAgd2lkdGg6IDgwdnc7XHJcbi8vICAgICAgYW5pbWF0aW9uOiBzd2l0Y2ggMjRzIGxpbmVhciBpbmZpbml0ZTtcclxuLy8gICAgICAubG9nb3tcclxuLy8gICAgICAgIHdpZHRoOiA1MDBweDtcclxuLy8gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbi8vICAgICAgfVxyXG4vLyAgICB9XHJcblxyXG4vLyAjZmx5LWluIGRpdjpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IDRzfVxyXG4vLyAjZmx5LWluIGRpdjpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDhzfVxyXG4vLyAjZmx5LWluIGRpdjpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IDEyc31cclxuLy8gI2ZseS1pbiBkaXY6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAxNnN9XHJcbi8vICNmbHktaW4gZGl2Om50aC1jaGlsZCg2KSB7IGFuaW1hdGlvbi1kZWxheTogMjBzfVxyXG4vKiAjZmx5LWluIGRpdjpudGgtY2hpbGQoNykgeyBhbmltYXRpb24tZGVsYXk6IDI0c31cclxuI2ZseS1pbiBkaXY6bnRoLWNoaWxkKDgpIHsgYW5pbWF0aW9uLWRlbGF5OiAyOHN9ICovXHJcblxyXG4vLyBAa2V5ZnJhbWVzIHN3aXRjaCB7XHJcbi8vICAgICAwJSB7IG9wYWNpdHk6IDA7ZmlsdGVyOiBibHVyKDIwcHgpOyB0cmFuc2Zvcm06c2NhbGUoMTIpfVxyXG4vLyAgICAgMyUgeyBvcGFjaXR5OiAxO2ZpbHRlcjogYmx1cigwKTsgdHJhbnNmb3JtOnNjYWxlKDEpfVxyXG4vLyAgICAgMTAlIHsgb3BhY2l0eTogMTtmaWx0ZXI6IGJsdXIoMCk7IHRyYW5zZm9ybTpzY2FsZSguOSl9XHJcbi8vICAgICAxMyUgeyBvcGFjaXR5OiAwO2ZpbHRlcjogYmx1cigxMHB4KTsgdHJhbnNmb3JtOnNjYWxlKC4xKX1cclxuLy8gICAgIDgwJSB7IG9wYWNpdHk6IDB9XHJcbi8vICAgICAxMDAlIHsgb3BhY2l0eTogMH1cclxuLy8gfVxyXG4vLyBhYm91dCB1cyBcclxuLmRlc3ByZXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xyXG4gXHJcbn1cclxuLmNvbnRhY3R7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMzYsIDM2KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICBcclxufVxyXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiA2NjdweCl7XHJcblxyXG4gICNtZXNzZW5nZXIge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMi43ZW07XHJcbiAgXHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xyXG5cclxuICAjbWVzc2VuZ2VyIHtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gIFxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NzAwXCIpO1xuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJrIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3NmRlZywgIzNlM2UzZSAwJSwgIzUwM2MzYyAyNSUsICM4MTQxNDEgNTAlLCAjYjgyNDI0IDc1JSwgcmVkIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jbWVzc2VuZ2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiA0ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogI2ZseS1pbiBkaXY6bnRoLWNoaWxkKDcpIHsgYW5pbWF0aW9uLWRlbGF5OiAyNHN9XG4jZmx5LWluIGRpdjpudGgtY2hpbGQoOCkgeyBhbmltYXRpb24tZGVsYXk6IDI4c30gKi9cbi5kZXNwcmUge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcbn1cblxuLmNvbnRhY3Qge1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyNDI0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiA2NjdweCkge1xuICAjbWVzc2VuZ2VyIHtcbiAgICBmb250LXNpemU6IDIuN2VtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAjbWVzc2VuZ2VyIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor() {
    }
    ngOnInit() {
        const open_btn = document.querySelector('.open-btn');
        const close_btn = document.querySelector('.close-btn');
        const nav = document.querySelectorAll('.nav');
        open_btn.addEventListener('click', () => {
            nav.forEach(nav_el => nav_el.classList.add('visible'));
        });
        close_btn.addEventListener('click', () => {
            nav.forEach(nav_el => nav_el.classList.remove('visible'));
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 32, vars: 0, consts: [[1, "nav-btn", "open-btn"], [1, "bi", "bi-list"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-list"], ["fill-rule", "evenodd", "d", "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"], [1, "nav", "nav-black"], [1, "nav", "active", "nav-red"], [1, "nav", "nav-white"], [1, "nav-btn", "close-btn"], ["src", "/assets/img/VISIOON1.png", "alt", "", 1, "logo"], [1, "list"], ["routerLink", "/"], ["routerLink", "/about"], ["routerLink", "/products"], ["routerLink", "/contact"], ["routerLink", "/terminate"], ["routerLink", "/incurs"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Meniu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " X Inchide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Acasa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Despre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Produse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Proiecte terminate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Proiecte in lucru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n.body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 350px;\n  max-height: 300px;\n}\n\n.nav-btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  font-size: 30px;\n  color: aliceblue;\n}\n\n.open-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  z-index: 1;\n}\n\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  transform: translateX(-100%);\n  transition: transform 0.3s ease-in-out;\n  z-index: 10;\n}\n\n.nav.visible[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.nav-black[_ngcontent-%COMP%] {\n  background-color: #333;\n  width: 60%;\n  max-width: 480px;\n  min-width: 320px;\n  transition-delay: 0.4s;\n}\n\n.nav-black.visible[_ngcontent-%COMP%] {\n  transition-delay: 0s;\n}\n\n.nav-red[_ngcontent-%COMP%] {\n  background-color: #cc0505;\n  width: 95%;\n  transition-delay: 0.2s;\n}\n\n.nav-red.visible[_ngcontent-%COMP%] {\n  transition-delay: 0.2s;\n}\n\n.nav-white[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 95%;\n  padding: 40px;\n  position: relative;\n  transition-delay: 0s;\n}\n\n.nav-white.visible[_ngcontent-%COMP%] {\n  transition-delay: 0.4s;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 30px;\n  color: black;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUG9ydG9mb2xpdUFuZ3VsYXJcXFBvcnRvZm9saXVBbmRyZWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDRUo7O0FERUU7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FER0U7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLHdCQUFBO0FDQ0o7O0FERUU7RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDRTtFQUNFLG9CQUFBO0FDRUo7O0FEQUU7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0dKOztBRERFO0VBQ0Usc0JBQUE7QUNJSjs7QURGRTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDS0o7O0FESEU7RUFDRSxzQkFBQTtBQ01KOztBREpFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7QUNNSjs7QURIRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQ01KOztBREhFO0VBQ0UsY0FBQTtBQ01KOztBREpFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDT0o7O0FETEU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5ib2R5e1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dve1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcblxyXG4gIH1cclxuICBcclxuICAubmF2LWJ0bntcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbiAgLm9wZW4tYnRue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuICBcclxuICAubmF2LnZpc2libGV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtYmxhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgLm5hdi1ibGFjay52aXNpYmxle1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgfVxyXG4gIC5uYXYtcmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgNSwgNSk7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcclxuICB9XHJcbiAgLm5hdi1yZWQudmlzaWJsZXtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgfVxyXG4gIC5uYXYtd2hpdGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIH1cclxuICAubmF2LXdoaXRlLnZpc2libGV7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICAuY2xvc2UtYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0e1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QgbGl7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcbiAgLmxpc3QgbGkgYSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5saXN0IHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lIDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgXHJcbiAgfSIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ubmF2LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4ub3Blbi1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5uYXYudmlzaWJsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLm5hdi1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIHdpZHRoOiA2MCU7XG4gIG1heC13aWR0aDogNDgwcHg7XG4gIG1pbi13aWR0aDogMzIwcHg7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5uYXYtYmxhY2sudmlzaWJsZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuXG4ubmF2LXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzA1MDU7XG4gIHdpZHRoOiA5NSU7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5uYXYtcmVkLnZpc2libGUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4ubmF2LXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG5cbi5uYXYtd2hpdGUudmlzaWJsZSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmxpc3Qge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5saXN0IGxpIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5saXN0IGxpIGEge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5saXN0IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/products/grafica/banner/banner.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/products/grafica/banner/banner.component.ts ***!
  \************************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 2, vars: 0, template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "banner works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvZ3JhZmljYS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/products/grafica/cards/cards.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/products/grafica/cards/cards.component.ts ***!
  \**********************************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class CardsComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.flip-card').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).toggleClass('flipped');
        });
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 86, vars: 0, consts: [[1, "body"], [1, "row"], [1, "col-md-6", "col-md-12", "text"], [1, "text-center"], [1, "col-md-6", "col-md-12", "backButton"], ["routerLink", "/products", 1, "text-center"], [1, "produse"], [1, "wrapper"], [1, "card"], ["type", "checkbox", "id", "card1", "aria-hidden", "true", 1, "more"], [1, "content"], [1, "front", 2, "background-image", "url('/assets/img/Cards/fata.png')"], [1, "inner"], ["for", "card1", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/spate.png')"], ["for", "card1", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card2", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c1-f.jpg')"], ["for", "card2", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c1-s.jpg')"], ["for", "card2", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card4", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c3-f.jpg')"], ["for", "card4", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c3-s.jpg')"], ["for", "card4", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card5", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c4-f.jpg')"], ["for", "card5", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c4-s.jpg')"], ["for", "card5", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card3", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c2-f.jpg')"], ["for", "card3", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c2-s.jpg')"], ["for", "card3", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card6", "aria-hidden", "true", 1, "more"], ["for", "card6", "aria-hidden", "true", 1, "button"], ["for", "card6", "aria-hidden", "true", 1, "button", "return"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Carti de Vizita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Realizam sabloane pentru carti de vizita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Vor fi livrate in format pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pret: 50 de lei");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inapoi la produse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Spate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Fata ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Spate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Fata ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Spate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Fata ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Spate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Fata ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Spate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Fata ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Spate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Fata ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  max-height: 100vh;\n  max-width: 100vw;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 40%;\n  left: 50%;\n  top: 50%;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n}\n\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4em;\n  font-weight: 500;\n  letter-spacing: 4px;\n}\n\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n}\n\n.backButton[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: red;\n  height: 10%;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  transform: translate(0, -50%);\n}\n\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n  letter-spacing: 4px;\n  font-weight: 800;\n}\n\n.produse[_ngcontent-%COMP%] {\n  background-color: #c00404;\n  background-attachment: fixed;\n  color: #fff;\n  text-align: center;\n  font-weight: 700;\n  overflow: hidden;\n  min-height: auto;\n  min-width: 100vw;\n  max-height: auto;\n  max-width: 100vw;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  margin: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 340px;\n  margin: 2em 2em 0 0;\n  perspective: 1500px;\n  background-color: #c00404;\n}\n\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.8s cubic-bezier(0.75, 0, 0.85, 1);\n}\n\n.more[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.more[_ngcontent-%COMP%]:checked    ~ .content[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-style: preserve-3d;\n  border-radius: 6px;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  padding: 1.5em;\n  transform: translateZ(80px) scale(0.94);\n}\n\n.front[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.226);\n  background-size: cover;\n  background-position: center center;\n}\n\n.front[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  border-radius: 6px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background: linear-gradient(40deg, rgba(255, 255, 255, 0.5), rgba(44, 44, 43, 0.5));\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  grid-template-rows: 5fr 1fr 1fr 2fr 1fr;\n  justify-items: center;\n}\n\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  background-color: rgba(255, 255, 255, 0.226);\n  background-size: cover;\n  background-position: center center;\n  border: 2px solid white;\n}\n\n.back[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr 2fr 1fr 2fr 14fr 1fr 1fr;\n  grid-template-columns: repeat(4, auto);\n  grid-column-gap: 0.8em;\n  justify-items: center;\n}\n\n.back[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  justify-self: center;\n}\n\n.button[_ngcontent-%COMP%] {\n  grid-row: -1;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  cursor: pointer;\n  display: block;\n  padding: 0 1.5em;\n  height: 3em;\n  line-height: 2.9em;\n  min-width: 3em;\n  background-color: transparent;\n  border: solid 2px #c00404;\n  color: red;\n  border-radius: 4px;\n  text-align: center;\n  left: 50%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: 0.3s ease-in-out;\n  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(192, 4, 4, 0.575);\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\n  text-shadow: none;\n  color: #c00404;\n}\n\n.button.return[_ngcontent-%COMP%] {\n  line-height: 3em;\n  color: #c00404;\n  border-color: #c00404;\n  text-shadow: none;\n}\n\n.button.return[_ngcontent-%COMP%]:hover {\n  background-color: #c00404;\n  color: #fff;\n  box-shadow: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #fb2f2f;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #c00404;\n}\n\n@media screen and (min-width: 150px) and (max-width: 430px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n\n@media screen and (min-width: 430px) and (max-width: 1200px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n\n@media screen and (min-width: 1201px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 4em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 5px;\n    padding: 20px;\n    line-height: 2em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.2em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 500;\n    letter-spacing: 3px;\n    padding: 10px 20px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n\n@media screen and (min-width: 401px) and (max-width: 667px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    padding: 0vh 0vh;\n    min-width: 100vw;\n    margin: 5vh;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 5vh 0vh;\n    min-width: 175vw;\n    margin: 30vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2NhcmRzL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xcZ3JhZmljYVxcY2FyZHNcXGNhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDQUo7O0FERUc7RUFDSyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURJSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDRlI7O0FET0E7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ0pKOztBRE1JO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtBQ0pSOztBRE9JO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNMUjs7QURTQTtFQUtJLHlCQXhFVztFQXlFWCw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRDJCQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0csU0FBQTtBQ3hCSjs7QUQyQkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDRyx5QkE5R1c7QUNzRmY7O0FENkJDO0VBQ0Msa0JBQUE7RUFDTSxXQUFBO0VBQ04sWUFBQTtFQUNBLDRCQUFBO0VBQ0EseURBQUE7QUMzQkY7O0FEK0JBO0VBQ0MsYUFBQTtBQzVCRDs7QUQ4QkM7RUFDQywwQkFBQTtBQzVCRjs7QURnQ0E7O0VBRUMsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUM3QkQ7O0FEK0JDOztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0FDNUJGOztBRGdDQTtFQUNDLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQzdCRDs7QUQ4QkM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1GQUFBO0FDNUJGOztBRGtDQztFQUNDLHVDQUFBO0VBQ0EscUJBQUE7QUNoQ0Y7O0FEd0NBO0VBQ0MsMEJBQUE7RUFDRyw0Q0FBQTtFQUNILHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQ3JDRDs7QURzQ0M7RUFDQyxnREFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ3BDRjs7QUR3Q0M7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0FDdENGOztBRDBDQTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1Q0FBQTtBQ3ZDRDs7QUR5Q0M7RUFDQyx3Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQWxPYTtBQzJMZjs7QUQwQ0M7RUFDQyxnQkFBQTtFQUNBLGNBdk9hO0VBd09iLHFCQXhPYTtFQXlPYixpQkFBQTtBQ3hDRjs7QUR5Q0U7RUFDQyx5QkEzT1k7RUE0T1osV0FBQTtFQUNBLGdCQUFBO0FDdkNIOztBRDRDQTtFQUNDLFVBQUE7QUN6Q0Q7O0FEMkNBO0VBQ0MsbUJBQUE7QUN4Q0Q7O0FEMENBO0VBQ0MsbUJBQUE7QUN2Q0Q7O0FEeUNBO0VBQ0MsbUJBNVBjO0FDc05mOztBRHlDQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQ0FBQTtFQ3ZDTjtFRDBDSztJQUNLLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ3hDVjtFRDRDTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQzFDVjtFRDhDTztJQUNHLGtCQUFBO0VDNUNWOztFRCtDRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDNUNOO0VEOENNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQzVDVjtFRCtDTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDN0NWO0FBQ0Y7O0FEaURBO0VBUUk7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDdEROO0VEeURLO0lBQ0ssVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDdkRWO0VEMkRNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDekRWO0VENkRPO0lBQ0csa0JBQUE7RUMzRFY7O0VEOERFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUMzRE47RUQ2RE07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDM0RWO0VEOERNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUM1RFY7QUFDRjs7QUQ4REE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0NBQUE7RUM1RE47RUQrREs7SUFDSyxVQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUM3RFY7RURpRU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUMvRFY7RURtRU87SUFDRyxrQkFBQTtFQ2pFVjs7RURvRUU7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ2pFTjtFRG1FTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ2pFVjtFRG9FTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDbEVWO0FBQ0Y7O0FEb0VBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ2xFTjtFRG9FTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUNsRVY7RURxRU07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ25FVjs7RURzRUU7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ25FTjtBQUNGOztBRHFFQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUNuRU47RURxRU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDbkVWO0VEc0VNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNwRVY7O0VEdUVFO0lBS0ksd0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQ3BFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2NhcmRzL2NhcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiRhY2NlbnQtY29sb3I6IHJnYmEoMTkyLCA0LCA0LCApO1xyXG5cclxuLmJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYyLDYyLDYyLDEpIDAlLCByZ2JhKDAsMCwwLDEpIDEwMCUpO1xyXG5cclxufVxyXG4udGV4dHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC01MCUsIC01MCUgKTtcclxuXHJcbiAgIGgxe1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IFxyXG4gICB9XHJcbiAgICBcclxuXHJcbiAgICBoMixwe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxufVxyXG4uYmFja0J1dHRvbntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC01MCUgKTtcclxuICBcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVzZXtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9ia0NhcmQxLmpwZyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWF4LWhlaWdodDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGJvZHkge1xyXG4vLyBcdG1hcmdpbjogMDtcclxuLy8gXHRkaXNwbGF5OiBmbGV4O1xyXG4vLyBcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vIFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gXHRoZWlnaHQ6IDEwMHZoO1xyXG4vLyBcdGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbi8vIH1cclxuLndyYXBwZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1mbG93OiByb3cgd3JhcDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjowXHJcbn1cclxuXHJcbi5jYXJkIHtcclxuXHR3aWR0aDogNjAwcHg7XHJcblx0aGVpZ2h0OiAzNDBweDtcclxuXHRtYXJnaW46MmVtIDJlbSAwIDA7IFxyXG5cdHBlcnNwZWN0aXZlOiAxNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRhY2NlbnQtY29sb3I7XHJcbiAgICAvLyBpbWd7XHJcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy8gfVxyXG5cdC5jb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC44NSwgMSk7XHJcblx0fVxyXG59XHJcblxyXG4ubW9yZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHJcblx0JjpjaGVja2VkIH4gLmNvbnRlbnQge1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG4uZnJvbnQsXHJcbi5iYWNrIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcblx0LmlubmVyIHtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRwYWRkaW5nOiAxLjVlbTtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWig4MHB4KSBzY2FsZSgwLjk0KTtcclxuXHR9XHJcbn1cclxuXHJcbi5mcm9udCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyNik7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuXHRcdFx0NDBkZWcsXHJcblx0XHRcdHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuXHRcdFx0cmdiYSg0NCwgNDQsIDQzLCAwLjUpXHJcblx0XHQpO1xyXG5cdH1cclxuXHQuaW5uZXIge1xyXG5cdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZnIgMWZyIDFmciAyZnIgMWZyO1xyXG5cdFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi5iYWNrIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMjYpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuXHRib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcblx0LmlubmVyIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMmZyIDE0ZnIgMWZyIDFmcjtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xyXG5cdFx0Z3JpZC1jb2x1bW4tZ2FwOiAwLjhlbTtcclxuXHRcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdFxyXG5cdC5idXR0b24ge1xyXG5cdFx0Z3JpZC1jb2x1bW46IDEvLTE7XHJcblx0XHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuXHR9XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG5cdGdyaWQtcm93OiAtMTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMCAxLjVlbTtcclxuXHRoZWlnaHQ6IDNlbTtcclxuXHRsaW5lLWhlaWdodDogMi45ZW07XHJcblx0bWluLXdpZHRoOiAzZW07XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiBzb2xpZCAycHggJGFjY2VudC1jb2xvcjtcclxuXHRjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRsZWZ0OiA1MCU7XHJcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0dGV4dC1zaGFkb3c6IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCA0LCA0LCAwLjU3NSk7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHR0ZXh0LXNoYWRvdzogbm9uZTtcclxuXHRcdGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cdH1cclxuXHJcblx0Ji5yZXR1cm4ge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDNlbTtcclxuXHRcdGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cdFx0dGV4dC1zaGFkb3c6IG5vbmU7XHJcblx0XHQmOmhvdmVyIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHR3aWR0aDogNXB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cdGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0YmFja2dyb3VuZDogbGlnaHRlbigkYWNjZW50LWNvbG9yLCAyMCUpO1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuXHJcbiAgICAudGV4dHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNDAlLCAtNDAlICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgaDIscHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG59fVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblx0Ly8gLmNhcmR7XHJcblx0Ly8gXHRtYXgtd2lkdGg6IDkwdnc7XHJcblx0XHRcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcblx0Ly8gfVxyXG4gICAgLnRleHR7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTQwJSwgLTQwJSApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICBoMXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGgyLHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtNTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxufX1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KSB7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNDAlLCAtNDAlICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBoMixwe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC01MCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxufX1cclxuQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNjY3cHgpe1xyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtMTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIHBhZGRpbmc6IDB2aCAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOjEwMHZ3O1xyXG4gICAgICAgIG1hcmdpbjogNXZoO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtMTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwYWRkaW5nOiA1dmggMHZoO1xyXG4gICAgICAgIG1pbi13aWR0aDoxNzV2dztcclxuICAgICAgICBtYXJnaW46IDMwdmg7XHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4iLCIqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzNlM2UzZSAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udGV4dCBoMSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xufVxuLnRleHQgaDIsIC50ZXh0IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5iYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuLmJhY2tCdXR0b24gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cbi5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICBjb2xvcjogIzMzMztcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnByb2R1c2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAwNDA0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDM0MHB4O1xuICBtYXJnaW46IDJlbSAyZW0gMCAwO1xuICBwZXJzcGVjdGl2ZTogMTUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAwNDA0O1xufVxuLmNhcmQgLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigwLjc1LCAwLCAwLjg1LCAxKTtcbn1cblxuLm1vcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1vcmU6Y2hlY2tlZCB+IC5jb250ZW50IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mcm9udCxcbi5iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmZyb250IC5pbm5lcixcbi5iYWNrIC5pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMS41ZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWig4MHB4KSBzY2FsZSgwLjk0KTtcbn1cblxuLmZyb250IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyNik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uZnJvbnQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSg0NCwgNDQsIDQzLCAwLjUpKTtcbn1cbi5mcm9udCAuaW5uZXIge1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVmciAxZnIgMWZyIDJmciAxZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyNik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuLmJhY2sgLmlubmVyIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmciAyZnIgMTRmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwLjhlbTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLmJhY2sgLmJ1dHRvbiB7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIGdyaWQtcm93OiAtMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAxLjVlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjllbTtcbiAgbWluLXdpZHRoOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDJweCAjYzAwNDA0O1xuICBjb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogNTAlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgNCwgNCwgMC41NzUpO1xuICBib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2MwMDQwNDtcbn1cbi5idXR0b24ucmV0dXJuIHtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbiAgY29sb3I6ICNjMDA0MDQ7XG4gIGJvcmRlci1jb2xvcjogI2MwMDQwNDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4uYnV0dG9uLnJldHVybjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDA0MDQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZmIyZjJmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2MwMDQwNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcbiAgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xuICB9XG4gIC50ZXh0IGgxIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgfVxuICAudGV4dCBwIHtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gIH1cblxuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgcGFkZGluZzogMHZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogNXZoO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogNXZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDE3NXZ3O1xuICAgIG1hcmdpbjogMzB2aDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards',
                templateUrl: './cards.component.html',
                styleUrls: ['./cards.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/products/grafica/flyer/flyer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/products/grafica/flyer/flyer.component.ts ***!
  \**********************************************************************/
/*! exports provided: FlyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyerComponent", function() { return FlyerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FlyerComponent {
    constructor() { }
    ngOnInit() {
    }
}
FlyerComponent.ɵfac = function FlyerComponent_Factory(t) { return new (t || FlyerComponent)(); };
FlyerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlyerComponent, selectors: [["app-flyer"]], decls: 2, vars: 0, template: function FlyerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "flyer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvZ3JhZmljYS9mbHllci9mbHllci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlyerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flyer',
                templateUrl: './flyer.component.html',
                styleUrls: ['./flyer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/products/grafica/logo/logo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/products/grafica/logo/logo.component.ts ***!
  \********************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 37, vars: 0, consts: [[1, "body"], [1, "row"], [1, "col-md-6", "col-md-12", "text"], [1, "text-center"], [1, "col-md-6", "col-md-12", "backButton"], ["routerLink", "/products", 1, "text-center"], [1, "produse", "align-items-center"], [1, "container", "px-4", "overflow-hidden"], [1, "row", "g-0"], [1, "col-md-3", "col-sm-6", "col-xs-12"], ["src", "/assets/img/logo/Logo5.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo1.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo2.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo3.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo4.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo6.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo8.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo7.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo9.jpg", 1, "logo", "img-fluid"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logo-Embleme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Realizam Logo - embleme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Vor fi livrate in format pdf, psd, png, jpg, svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pret: 500 de lei");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inapoi la produse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  max-height: 100vh;\n  max-width: 100vw;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 40%;\n  left: 50%;\n  top: 50%;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n}\n\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 10px 0;\n}\n\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.3em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 0.8em;\n}\n\n.backButton[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: red;\n  height: 10%;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  transform: translate(0, -50%);\n}\n\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n  letter-spacing: 4px;\n  font-weight: 800;\n}\n\n.produse[_ngcontent-%COMP%] {\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-height: auto;\n  line-height: 1em;\n  padding: 0;\n}\n\n.logo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 290px;\n  height: 290px;\n  left: 0;\n  top: 0px;\n  border: 2px solid black;\n  overflow: hidden;\n  transition: width 0.3s ease, height 0.3s ease, left 0.3s ease, top 0.3s ease;\n  -webkit-transition: width 0.3s ease, height 0.3s ease, left 0.3s ease, top 0.3s ease;\n  -o-transition: width 0.3s ease, height 0.3s ease, left 0.3s ease, top 0.3s ease;\n  -moz-transition: width 0.3s ease, height 0.3s ease, left 0.3s ease, top 0.3s ease;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  width: 320px;\n  height: 320px;\n  left: -15px;\n  top: -15px;\n  z-index: 0;\n}\n\n@media screen and (min-width: 333px) and (max-width: 575px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 320px;\n    height: 320px;\n    left: 50%;\n    transform: translate(-50%);\n  }\n}\n\n@media screen and (min-width: 150px) and (max-width: 430px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n\n@media screen and (min-width: 430px) and (max-width: 902px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2xvZ28vQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUG9ydG9mb2xpdUFuZ3VsYXJcXFBvcnRvZm9saXVBbmRyZWkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxncmFmaWNhXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksc0JBQUE7QUNESjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUNISjs7QURPQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNKSjs7QURPRztFQUNLLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNMUjs7QURTSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDUFI7O0FEV0s7RUFDRyxrQkFBQTtBQ1RSOztBRFlBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7QUNUSjs7QURXSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsNkJBQUE7QUNUUjs7QURZSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVlI7O0FEY0E7RUFFSSwyREFBQTtBQ1pKOztBRGNBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ1hKOztBRHdCQTtFQUVJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0RUFBQTtFQUNBLG9GQUFBO0VBQ0EsK0VBQUE7RUFDQSxpRkFBQTtBQ3RCSjs7QUQwQkE7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ3hCSjs7QUQ2QkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtJQUNBLDBCQUFBO0VDMUJOO0FBQ0Y7O0FENkJBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDM0JOO0VEOEJLO0lBQ0ssVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDNUJWO0VEZ0NNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDOUJWO0VEa0NPO0lBQ0csa0JBQUE7RUNoQ1Y7O0VEbUNFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUNoQ047RURrQ007SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDaENWO0VEbUNNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNqQ1Y7QUFDRjs7QURxQ0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0NBQUE7RUNuQ047RURzQ0s7SUFDSyxVQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNwQ1Y7RUR3Q007SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUN0Q1Y7RUQwQ087SUFDRyxrQkFBQTtFQ3hDVjs7RUQyQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ3hDTjtFRDBDTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUN4Q1Y7RUQyQ007SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ3pDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICAvLyBwYWRkaW5nOiAwO1xyXG4gICAgLy8gbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4kYWNjZW50LWNvbG9yOiByZ2JhKDE5MiwgNCwgNCwgKTtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAxMHB4ICFkZWZhdWx0O1xyXG5cclxuLmJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYyLDYyLDYyLDEpIDAlLCByZ2JhKDAsMCwwLDEpIDEwMCUpO1xyXG4gICAgXHJcblxyXG59XHJcbi50ZXh0e1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTUwJSwgLTUwJSApO1xyXG4gICAgXHJcblxyXG4gICBoMXtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgIH1cclxuICAgIFxyXG5cclxuICAgIGgyLHB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgIHB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xyXG4gICAgIH1cclxufVxyXG4uYmFja0J1dHRvbntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC01MCUgKTtcclxuICBcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG5cclxufVxyXG4ucHJvZHVzZXtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2Miw2Miw2MiwxKSAwJSwgcmdiYSgwLDAsMCwxKSAxMDAlKTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7ICAgICBcclxuICAgIG1heC1oZWlnaHQ6IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4vLyAubm8tZ3V0dGVycyB7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMDtcclxuICBcclxuLy8gICAgID4gLmNvbCxcclxuLy8gICAgID4gW2NsYXNzKj1cImNvbC1tZC0zXCJdIHtcclxuLy8gICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuLy8gICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi5sb2dvXHJcbntcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6MjkwcHg7XHJcbiAgICBoZWlnaHQ6MjkwcHg7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB0b3A6MHB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UsaGVpZ2h0IDAuM3MgZWFzZSxsZWZ0IDAuM3MgZWFzZSx0b3AgMC4zcyBlYXNlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UsaGVpZ2h0IDAuM3MgZWFzZSxsZWZ0IDAuM3MgZWFzZSx0b3AgMC4zcyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLGhlaWdodCAwLjNzIGVhc2UsbGVmdCAwLjNzIGVhc2UsdG9wIDAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLGhlaWdodCAwLjNzIGVhc2UsbGVmdCAwLjNzIGVhc2UsdG9wIDAuM3MgZWFzZTtcclxuICAgIFxyXG59XHJcblxyXG4ubG9nbzpob3ZlclxyXG57XHJcbiAgICB3aWR0aDozMjBweDtcclxuICAgIGhlaWdodDozMjBweDtcclxuICAgIGxlZnQ6LTE1cHg7XHJcbiAgICB0b3A6LTE1cHg7XHJcbiAgICB6LWluZGV4OjA7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMzM3B4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIHdpZHRoOjMyMHB4O1xyXG4gICAgICAgIGhlaWdodDozMjBweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSApO1xyXG5cclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNDAlLCAtNDAlICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgaDIscHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG59fVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogOTAycHgpIHtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC00MCUsIC00MCUgKTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBoMixwe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBwe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTUwJSApO1xyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbn19XHJcbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzNlM2UzZSAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udGV4dCBoMSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4udGV4dCBoMiwgLnRleHQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi50ZXh0IHAge1xuICBsaW5lLWhlaWdodDogMC44ZW07XG59XG5cbi5iYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuLmJhY2tCdXR0b24gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cbi5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICBjb2xvcjogIzMzMztcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnByb2R1c2Uge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjM2UzZTNlIDAlLCBibGFjayAxMDAlKTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI5MHB4O1xuICBoZWlnaHQ6IDI5MHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSwgaGVpZ2h0IDAuM3MgZWFzZSwgbGVmdCAwLjNzIGVhc2UsIHRvcCAwLjNzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLCBoZWlnaHQgMC4zcyBlYXNlLCBsZWZ0IDAuM3MgZWFzZSwgdG9wIDAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLCBoZWlnaHQgMC4zcyBlYXNlLCBsZWZ0IDAuM3MgZWFzZSwgdG9wIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UsIGhlaWdodCAwLjNzIGVhc2UsIGxlZnQgMC4zcyBlYXNlLCB0b3AgMC4zcyBlYXNlO1xufVxuXG4ubG9nbzpob3ZlciB7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgbGVmdDogLTE1cHg7XG4gIHRvcDogLTE1cHg7XG4gIHotaW5kZXg6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMzM3B4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDkwMnB4KSB7XG4gIC50ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNDAlKTtcbiAgfVxuICAudGV4dCBoMSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gIH1cbiAgLnRleHQgaDIsIC50ZXh0IHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cbiAgLnRleHQgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xuICB9XG5cbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class ProductsComponent {
    constructor() { }
    ngOnInit() {
        const left = document.querySelector('.stanga');
        const right = document.querySelector('.dreapta');
        const container = document.querySelector('.cont');
        left.addEventListener('mouseenter', () => container.classList.add('hover_stanga'));
        left.addEventListener('mouseleave', () => container.classList.remove('hover_stanga'));
        right.addEventListener('mouseenter', () => container.classList.add('hover_dreapta'));
        right.addEventListener('mouseleave', () => container.classList.remove('hover_dreapta'));
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 52, vars: 0, consts: [[1, "sec"], [1, "cont"], [1, "split", "stanga", "col-xs-12"], [1, "site1", "site"], ["routerLink", "/portofoliu"], [1, "site2", "site"], ["routerLink", "/site-prezentare"], [1, "site4", "site"], [1, "split", "dreapta", "col-xs-12"], [1, "site3", "site"], ["routerLink", "/cards"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WebDesign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Portofoliu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Site de prezentare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Aplicatii web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Grafica");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Logo-steme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Carti de vizita");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Flyere/fluturasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Afla mai multe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.sec[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n\n.site[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  position: relative;\n  margin-top: 5%;\n}\n\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  bottom: -90%;\n  transform: translateX(-50%);\n  text-decoration: none;\n  color: black;\n  border: 2px solid white;\n  font-size: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  font-weight: bold;\n  width: 15rem;\n  padding: 1.2rem;\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  letter-spacing: 2px;\n}\n\n.site[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  margin: 0 1%;\n}\n\n.cont[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #333;\n}\n\n.split[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.split.stanga[_ngcontent-%COMP%] {\n  left: 0;\n  background: url(\"/assets/img/stanga.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\n\n.split.stanga[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n\n.split.dreapta[_ngcontent-%COMP%] {\n  right: 0;\n  background: url(\"/assets/img/dreapta.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\n\n.split.dreapta[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n\n.split.stanga[_ngcontent-%COMP%], .split.dreapta[_ngcontent-%COMP%], .split.stanga[_ngcontent-%COMP%]::before, .split.dreapta[_ngcontent-%COMP%]::before {\n  transition: all 1000ms ease-in-out;\n}\n\n.hover_stanga[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.hover_stanga[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.hover_dreapta[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.hover_dreapta[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media only screen and (min-device-width: 481px) and (max-device-width: 768px) and (orientation: portrait) {\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcUG9ydG9mb2xpdUFuZHJlaS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREtBO0VBQ0ksaUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDREo7O0FESUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUNGUjs7QURJSTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURLSTtFQUNJLFlBQUE7QUNIUjs7QURPQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE9BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURRQTtFQUNBLE9BQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDTEE7O0FET0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQTdGUztBQ3lGYjs7QURNQTtFQUNBLFFBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDSEE7O0FES0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQTFHVTtBQ3dHZDs7QURJQTs7OztFQUlJLGtDQUFBO0FDREo7O0FESUE7RUFDSSxVQW5IVTtBQ2tIZDs7QURJQTtFQUVJLFVBdkhXO0FDcUhmOztBRElBO0VBRUksVUE1SFU7QUMwSGQ7O0FESUE7RUFFSSxVQS9IVztBQzZIZjs7QURPQTtFQUNJLDhCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiRjb2xvcl9sZWZ0OiByZ2IoMzQsIDM0LCAzNCwuNSk7XHJcbiRjb2xvcl9yaWdodDogcmdiKDM0LCAzNCwgMzQsLjUpO1xyXG4kaG92ZXJfc3RhbmdhOjc1JTtcclxuJGhvdmVyX2RyZWFwdGE6MjUlO1xyXG4uc2Vje1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLnNpdGV7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAtOTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luOiAwIDElO1xyXG59XHJcblxyXG5cclxuLmNvbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiBcclxuICAgIFxyXG5cclxufVxyXG4uc3BsaXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc3BsaXQuc3Rhbmdhe1xyXG5sZWZ0OiAwO1xyXG5iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL3N0YW5nYS5qcGcnKTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zcGxpdC5zdGFuZ2E6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6JycgO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfbGVmdDtcclxufVxyXG4uc3BsaXQuZHJlYXB0YXtcclxucmlnaHQ6IDA7XHJcbmJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvZHJlYXB0YS5qcGcnKTtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zcGxpdC5kcmVhcHRhOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OicnIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3JpZ2h0O1xyXG59XHJcbi5zcGxpdC5zdGFuZ2EsIFxyXG4uc3BsaXQuZHJlYXB0YSwgXHJcbi5zcGxpdC5zdGFuZ2E6OmJlZm9yZSxcclxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5ob3Zlcl9zdGFuZ2EgLnN0YW5nYXtcclxuICAgIHdpZHRoOiAkaG92ZXJfc3RhbmdhO1xyXG4gICAgXHJcbn1cclxuLmhvdmVyX3N0YW5nYSAuZHJlYXB0YXtcclxuICAgXHJcbiAgICB3aWR0aDogJGhvdmVyX2RyZWFwdGE7XHJcbn1cclxuLmhvdmVyX2RyZWFwdGEgLmRyZWFwdGF7XHJcbiAgICBcclxuICAgIHdpZHRoOiAkaG92ZXJfc3RhbmdhO1xyXG59XHJcbi5ob3Zlcl9kcmVhcHRhIC5zdGFuZ2F7XHJcbiAgICBcclxuICAgIHdpZHRoOiAkaG92ZXJfZHJlYXB0YTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDgxcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIHtcclxuICAgIC8qIEZvciBwb3J0cmFpdCBsYXlvdXRzIG9ubHkgKi9cclxuICB9IiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnNlYyB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaXRlIHtcbiAgcGFkZGluZzogMzBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLnNpdGUgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IC05MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDE1cmVtO1xuICBwYWRkaW5nOiAxLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5zaXRlIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5zaXRlIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDEwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDMwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDAgMSU7XG59XG5cbi5jb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xufVxuXG4uc3BsaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNwbGl0LnN0YW5nYSB7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL3N0YW5nYS5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwbGl0LnN0YW5nYTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIDAuNSk7XG59XG5cbi5zcGxpdC5kcmVhcHRhIHtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2RyZWFwdGEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGxpdC5kcmVhcHRhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcbn1cblxuLnNwbGl0LnN0YW5nYSxcbi5zcGxpdC5kcmVhcHRhLFxuLnNwbGl0LnN0YW5nYTo6YmVmb3JlLFxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob3Zlcl9zdGFuZ2EgLnN0YW5nYSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5ob3Zlcl9zdGFuZ2EgLmRyZWFwdGEge1xuICB3aWR0aDogMjUlO1xufVxuXG4uaG92ZXJfZHJlYXB0YSAuZHJlYXB0YSB7XG4gIHdpZHRoOiA3NSU7XG59XG5cbi5ob3Zlcl9kcmVhcHRhIC5zdGFuZ2Ege1xuICB3aWR0aDogMjUlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLyogRm9yIHBvcnRyYWl0IGxheW91dHMgb25seSAqL1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/products/web/aplicatii/aplicatii.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/products/web/aplicatii/aplicatii.component.ts ***!
  \**************************************************************************/
/*! exports provided: AplicatiiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AplicatiiComponent", function() { return AplicatiiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AplicatiiComponent {
    constructor() { }
    ngOnInit() {
    }
}
AplicatiiComponent.ɵfac = function AplicatiiComponent_Factory(t) { return new (t || AplicatiiComponent)(); };
AplicatiiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AplicatiiComponent, selectors: [["app-aplicatii"]], decls: 2, vars: 0, template: function AplicatiiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aplicatii works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvd2ViL2FwbGljYXRpaS9hcGxpY2F0aWkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AplicatiiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aplicatii',
                templateUrl: './aplicatii.component.html',
                styleUrls: ['./aplicatii.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/products/web/portofoliu/portofoliu.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/products/web/portofoliu/portofoliu.component.ts ***!
  \****************************************************************************/
/*! exports provided: PortofoliuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortofoliuComponent", function() { return PortofoliuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class PortofoliuComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            var curPage = 1;
            var numOfPages = jquery__WEBPACK_IMPORTED_MODULE_1__(".skw-page").length;
            var animTime = 1000;
            var scrolling = false;
            var pgPrefix = ".skw-page-";
            function pagination() {
                scrolling = true;
                jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + curPage).removeClass("inactive").addClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + (curPage - 1)).addClass("inactive");
                jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + (curPage + 1)).removeClass("active");
                setTimeout(function () {
                    scrolling = false;
                }, animTime);
            }
            ;
            function navigateUp() {
                if (curPage === 1)
                    return;
                curPage--;
                pagination();
            }
            ;
            function navigateDown() {
                if (curPage === numOfPages)
                    return;
                curPage++;
                pagination();
            }
            ;
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).on("mousewheel DOMMouseScroll", function (e) {
                if (scrolling)
                    return;
                if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                    navigateUp();
                }
                else {
                    navigateDown();
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).on("keydown", function (e) {
                if (scrolling)
                    return;
                if (e.which === 38) {
                    navigateUp();
                }
                else if (e.which === 40) {
                    navigateDown();
                }
            });
        });
    }
}
PortofoliuComponent.ɵfac = function PortofoliuComponent_Factory(t) { return new (t || PortofoliuComponent)(); };
PortofoliuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortofoliuComponent, selectors: [["app-portofoliu"]], decls: 44, vars: 0, consts: [[1, "skw-pages"], [1, "skw-page", "skw-page-1", "active"], [1, "skw-page__half", "skw-page__half--left"], [1, "skw-page__skewed"], [1, "skw-page__content"], [1, "skw-page__half", "skw-page__half--right"], [1, "skw-page__heading"], [1, "skw-page__description"], ["href", ""], [1, "skw-page", "skw-page-2"]], template: function PortofoliuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Portofoliu Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1-5 pagini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fara traducere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fara animatii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pret: De la 150 de Euro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Portofoliu Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Just scroll down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "10-25 pagini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Traducere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Animatii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Pret: De la 450 de Euro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #15181A;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n}\n\n.skw-pages[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 100vh;\n}\n\n.skw-page[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n.skw-page__half[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 50%;\n  height: 100vh;\n  transition: transform 1s;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translate3d(-32.4vh, 100%, 0);\n}\n\n.skw-page__half--right[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate3d(32.4vh, -100%, 0);\n}\n\n.skw-page.active[_ngcontent-%COMP%]   .skw-page__half[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n}\n\n.skw-page__skewed[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 140%;\n  height: 100%;\n  transform: skewX(-5deg);\n  background: #000;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%]   .skw-page__skewed[_ngcontent-%COMP%] {\n  left: -40%;\n}\n\n.skw-page__half--right[_ngcontent-%COMP%]   .skw-page__skewed[_ngcontent-%COMP%] {\n  right: -40%;\n}\n\n.skw-page__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 30%;\n  color: #fff;\n  transform: skewX(5deg);\n  transition: transform 1s, opacity 1s;\n  background-size: cover;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  padding-left: 30%;\n  padding-right: 30%;\n  transform-origin: 100% 0;\n}\n\n.skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  padding-left: 30%;\n  padding-right: 30%;\n  transform-origin: 0 100%;\n}\n\n.skw-page.inactive[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transform: skewX(5deg) scale(0.95);\n}\n\n.skw-page__heading[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  font-size: 25px;\n  text-align: center;\n}\n\n.skw-page__description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n\n.skw-page__link[_ngcontent-%COMP%] {\n  color: #FFA0A0;\n}\n\n.skw-page-1[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/portofoliuStandard.jpg\");\n}\n\n.skw-page-1[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-2[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-2[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/portofoliuPremium.jpg\");\n}\n\n.skw-page-3[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg\");\n}\n\n.skw-page-3[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-4[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-4[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg\");\n}\n\n.skw-page-5[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg\");\n}\n\n.skw-page-5[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvcG9ydG9mb2xpdS9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcUG9ydG9mb2xpdUFuZHJlaS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXHdlYlxccG9ydG9mb2xpdVxccG9ydG9mb2xpdS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvcG9ydG9mb2xpdS9wb3J0b2ZvbGl1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0RKOztBRElFO0VBQ0UsbUJBQUE7RUFDQSxzREFIUztBQ0ViOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNESjs7QURRRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDTEo7O0FET0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDTE47O0FET007RUFDRSxPQUFBO0VBQ0Esd0NBQUE7QUNMUjs7QURRTTtFQUNFLFNBQUE7RUFDQSx3Q0FBQTtBQ05SOztBRFNNO0VBQ0UsK0JBQUE7QUNQUjs7QURXSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDVE47O0FEV007RUFDRSxVQUFBO0FDVFI7O0FEV007RUFDRSxXQUFBO0FDVFI7O0FEYUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUNYTjs7QURhTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ1hSOztBRGFNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDWFI7O0FEY007RUFDRSxZQUFBO0VBQ0Esa0NBQUE7QUNaUjs7QURnQkk7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDZE47O0FEaUJJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDZk47O0FEa0JJO0VBQ0UsY0FBQTtBQ2hCTjs7QURvQk07RUFDRSwyREFBQTtBQ2xCUjs7QURvQk07RUFDRSxtQkFBQTtBQ2xCUjs7QURzQk07RUFDRSxtQkFBQTtBQ3BCUjs7QURzQk07RUFDRSwwREFBQTtBQ3BCUjs7QUR3Qk07RUFDRSwrRkFBQTtBQ3RCUjs7QUR3Qk07RUFDRSxtQkFBQTtBQ3RCUjs7QUQwQk07RUFDRSxtQkFBQTtBQ3hCUjs7QUQwQk07RUFDRSwyRkFBQTtBQ3hCUjs7QUQ0Qk07RUFDRSx5RkFBQTtBQzFCUjs7QUQ0Qk07RUFDRSxtQkFBQTtBQzFCUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvd2ViL3BvcnRvZm9saXUvcG9ydG9mb2xpdS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gICRvcGVuU2FuczogJ09wZW4gU2FucycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTUxODFBO1xyXG4gICAgZm9udC1mYW1pbHk6ICRvcGVuU2FucztcclxuICB9XHJcbiAgXHJcbiAgLnNrdy1wYWdlcyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgJHNrZXdEZWc6IDVkZWc7XHJcbiAgJG1hZ2ljVkg6IDMyLjR2aDsgLy8gdGhpcyBudW1iZXIgaXMgbWFnaWMgYW5kIGRlcGVuZHMgb24gc2tldyBhbmdsZVxyXG4gICRzY3JvbGxUaW1lOiAxcztcclxuICBcclxuICAuc2t3LXBhZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgJl9faGFsZiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHNjcm9sbFRpbWU7XHJcbiAgXHJcbiAgICAgICYtLWxlZnQge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtJG1hZ2ljVkgsIDEwMCUsIDApO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAmLS1yaWdodCB7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJG1hZ2ljVkgsIC0xMDAlLCAwKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc2t3LXBhZ2UuYWN0aXZlICYge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19za2V3ZWQge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDE0MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNmb3JtOiBza2V3WCgkc2tld0RlZyAqIC0xKTtcclxuICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICBcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0ICYge1xyXG4gICAgICAgIGxlZnQ6IC00MCU7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAmIHtcclxuICAgICAgICByaWdodDogLTQwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgcGFkZGluZzogMCAzMCU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKCRza2V3RGVnKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICRzY3JvbGxUaW1lLCBvcGFjaXR5ICRzY3JvbGxUaW1lO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIFxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgJiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzAlO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0ICYge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwJTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNrdy1wYWdlLmluYWN0aXZlICYge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKCRza2V3RGVnKSBzY2FsZSgwLjk1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9faGVhZGluZyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJl9fbGluayB7XHJcbiAgICAgIGNvbG9yOiAjRkZBMEEwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJi0xIHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9wb3J0b2ZvbGl1U3RhbmRhcmQuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLTIge1xyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMxQzFDMUMsIDUlKTtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9wb3J0b2ZvbGl1UHJlbWl1bS5qcGcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0zIHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvbW91c292ZXItaW1nLTIuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLTQge1xyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMxQzFDMUMsIDUlKTtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvc2VjdGlvbnMtMy5qcGcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi01IHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvaW1nLXRlc3QuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzE1MTgxQTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5za3ctcGFnZXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5za3ctcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5za3ctcGFnZV9faGFsZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG4uc2t3LXBhZ2VfX2hhbGYtLWxlZnQge1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMi40dmgsIDEwMCUsIDApO1xufVxuLnNrdy1wYWdlX19oYWxmLS1yaWdodCB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMi40dmgsIC0xMDAlLCAwKTtcbn1cbi5za3ctcGFnZS5hY3RpdmUgLnNrdy1wYWdlX19oYWxmIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5za3ctcGFnZV9fc2tld2VkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fc2tld2VkIHtcbiAgbGVmdDogLTQwJTtcbn1cbi5za3ctcGFnZV9faGFsZi0tcmlnaHQgLnNrdy1wYWdlX19za2V3ZWQge1xuICByaWdodDogLTQwJTtcbn1cbi5za3ctcGFnZV9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAzMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMXM7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDMwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xufVxuLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgcGFkZGluZy1yaWdodDogMzAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG59XG4uc2t3LXBhZ2UuaW5hY3RpdmUgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2Zvcm06IHNrZXdYKDVkZWcpIHNjYWxlKDAuOTUpO1xufVxuLnNrdy1wYWdlX19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2t3LXBhZ2VfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2t3LXBhZ2VfX2xpbmsge1xuICBjb2xvcjogI0ZGQTBBMDtcbn1cbi5za3ctcGFnZS0xIC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wb3J0b2ZvbGl1U3RhbmRhcmQuanBnXCIpO1xufVxuLnNrdy1wYWdlLTEgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufVxuLnNrdy1wYWdlLTIgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyOTI5Mjk7XG59XG4uc2t3LXBhZ2UtMiAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3BvcnRvZm9saXVQcmVtaXVtLmpwZ1wiKTtcbn1cbi5za3ctcGFnZS0zIC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvbW91c292ZXItaW1nLTIuanBnXCIpO1xufVxuLnNrdy1wYWdlLTMgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufVxuLnNrdy1wYWdlLTQgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICMyOTI5Mjk7XG59XG4uc2t3LXBhZ2UtNCAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0Mjk5Ni9zZWN0aW9ucy0zLmpwZ1wiKTtcbn1cbi5za3ctcGFnZS01IC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvaW1nLXRlc3QuanBnXCIpO1xufVxuLnNrdy1wYWdlLTUgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortofoliuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portofoliu',
                templateUrl: './portofoliu.component.html',
                styleUrls: ['./portofoliu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SiteDePrezentareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteDePrezentareComponent", function() { return SiteDePrezentareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class SiteDePrezentareComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            var curPage = 1;
            var numOfPages = jquery__WEBPACK_IMPORTED_MODULE_1__(".skw-page").length;
            var animTime = 1000;
            var scrolling = false;
            var pgPrefix = ".skw-page-";
            function pagination() {
                scrolling = true;
                jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + curPage).removeClass("inactive").addClass("active");
                jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + (curPage - 1)).addClass("inactive");
                jquery__WEBPACK_IMPORTED_MODULE_1__(pgPrefix + (curPage + 1)).removeClass("active");
                setTimeout(function () {
                    scrolling = false;
                }, animTime);
            }
            ;
            function navigateUp() {
                if (curPage === 1)
                    return;
                curPage--;
                pagination();
            }
            ;
            function navigateDown() {
                if (curPage === numOfPages)
                    return;
                curPage++;
                pagination();
            }
            ;
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).on("mousewheel DOMMouseScroll", function (e) {
                if (scrolling)
                    return;
                if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
                    navigateUp();
                }
                else {
                    navigateDown();
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__(document).on("keydown", function (e) {
                if (scrolling)
                    return;
                if (e.which === 38) {
                    navigateUp();
                }
                else if (e.which === 40) {
                    navigateDown();
                }
            });
        });
    }
}
SiteDePrezentareComponent.ɵfac = function SiteDePrezentareComponent_Factory(t) { return new (t || SiteDePrezentareComponent)(); };
SiteDePrezentareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteDePrezentareComponent, selectors: [["app-site-de-prezentare"]], decls: 42, vars: 0, consts: [[1, "skw-pages"], [1, "skw-page", "skw-page-1", "active"], [1, "skw-page__half", "skw-page__half--left"], [1, "skw-page__skewed"], [1, "skw-page__content"], [1, "skw-page__half", "skw-page__half--right"], [1, "skw-page__heading"], [1, "skw-page__description"], ["href", ""], [1, "skw-page", "skw-page-2"], ["href", "https:/www.pepinieravolintir.com"]], template: function SiteDePrezentareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Site de prezentare Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "10-25 pagini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fara traducere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fara animatii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pret: De la 300 de Euro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Site de prezentare Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "25-50 pagini");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Traducere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Animatii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pret: De la 500 de Euro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #15181A;\n  font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n}\n\n.skw-pages[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 100vh;\n}\n\n.skw-page[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n.skw-page__half[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 50%;\n  height: 100vh;\n  transition: transform 1s;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translate3d(-32.4vh, 100%, 0);\n}\n\n.skw-page__half--right[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate3d(32.4vh, -100%, 0);\n}\n\n.skw-page.active[_ngcontent-%COMP%]   .skw-page__half[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n}\n\n.skw-page__skewed[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 140%;\n  height: 100%;\n  transform: skewX(-5deg);\n  background: #000;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%]   .skw-page__skewed[_ngcontent-%COMP%] {\n  left: -40%;\n}\n\n.skw-page__half--right[_ngcontent-%COMP%]   .skw-page__skewed[_ngcontent-%COMP%] {\n  right: -40%;\n}\n\n.skw-page__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column wrap;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 30%;\n  color: #fff;\n  transform: skewX(5deg);\n  transition: transform 1s, opacity 1s;\n  background-size: cover;\n}\n\n.skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  padding-left: 30%;\n  padding-right: 30%;\n  transform-origin: 100% 0;\n}\n\n.skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  padding-left: 30%;\n  padding-right: 30%;\n  transform-origin: 0 100%;\n}\n\n.skw-page.inactive[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transform: skewX(5deg) scale(0.95);\n}\n\n.skw-page__heading[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  text-transform: uppercase;\n  font-size: 25px;\n  text-align: center;\n}\n\n.skw-page__description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n}\n\n.skw-page__link[_ngcontent-%COMP%] {\n  color: #FFA0A0;\n}\n\n.skw-page-1[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/site-uri-responsive.jpg\");\n}\n\n.skw-page-1[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-2[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-2[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/portofoliuPremium.jpg\");\n}\n\n.skw-page-3[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/mousover-img-2.jpg\");\n}\n\n.skw-page-3[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-4[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n\n.skw-page-4[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg\");\n}\n\n.skw-page-5[_ngcontent-%COMP%]   .skw-page__half--left[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/img-test.jpg\");\n}\n\n.skw-page-5[_ngcontent-%COMP%]   .skw-page__half--right[_ngcontent-%COMP%]   .skw-page__content[_ngcontent-%COMP%] {\n  background: #292929;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvc2l0ZS1kZS1wcmV6ZW50YXJlL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxQb3J0b2ZvbGl1QW5kcmVpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xcd2ViXFxzaXRlLWRlLXByZXplbnRhcmVcXHNpdGUtZGUtcHJlemVudGFyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvc2l0ZS1kZS1wcmV6ZW50YXJlL3NpdGUtZGUtcHJlemVudGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJRTtFQUNFLG1CQUFBO0VBQ0Esc0RBSFM7QUNFYjs7QURJRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDREo7O0FEUUU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRE9JO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0xOOztBRE9NO0VBQ0UsT0FBQTtFQUNBLHdDQUFBO0FDTFI7O0FEUU07RUFDRSxTQUFBO0VBQ0Esd0NBQUE7QUNOUjs7QURTTTtFQUNFLCtCQUFBO0FDUFI7O0FEV0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1ROOztBRFdNO0VBQ0UsVUFBQTtBQ1RSOztBRFdNO0VBQ0UsV0FBQTtBQ1RSOztBRGFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FDWE47O0FEYU07RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNYUjs7QURhTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ1hSOztBRGNNO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0FDWlI7O0FEZ0JJO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2ROOztBRGlCSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ2ZOOztBRGtCSTtFQUNFLGNBQUE7QUNoQk47O0FEb0JNO0VBQ0UsNERBQUE7QUNsQlI7O0FEb0JNO0VBQ0UsbUJBQUE7QUNsQlI7O0FEc0JNO0VBQ0UsbUJBQUE7QUNwQlI7O0FEc0JNO0VBQ0UsMERBQUE7QUNwQlI7O0FEd0JNO0VBQ0UsK0ZBQUE7QUN0QlI7O0FEd0JNO0VBQ0UsbUJBQUE7QUN0QlI7O0FEMEJNO0VBQ0UsbUJBQUE7QUN4QlI7O0FEMEJNO0VBQ0UsMkZBQUE7QUN4QlI7O0FENEJNO0VBQ0UseUZBQUE7QUMxQlI7O0FENEJNO0VBQ0UsbUJBQUE7QUMxQlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3dlYi9zaXRlLWRlLXByZXplbnRhcmUvc2l0ZS1kZS1wcmV6ZW50YXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgJG9wZW5TYW5zOiAnT3BlbiBTYW5zJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICMxNTE4MUE7XHJcbiAgICBmb250LWZhbWlseTogJG9wZW5TYW5zO1xyXG4gIH1cclxuICBcclxuICAuc2t3LXBhZ2VzIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICAkc2tld0RlZzogNWRlZztcclxuICAkbWFnaWNWSDogMzIuNHZoOyAvLyB0aGlzIG51bWJlciBpcyBtYWdpYyBhbmQgZGVwZW5kcyBvbiBza2V3IGFuZ2xlXHJcbiAgJHNjcm9sbFRpbWU6IDFzO1xyXG4gIFxyXG4gIC5za3ctcGFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICAmX19oYWxmIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAkc2Nyb2xsVGltZTtcclxuICBcclxuICAgICAgJi0tbGVmdCB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0kbWFnaWNWSCwgMTAwJSwgMCk7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICYtLXJpZ2h0IHtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgkbWFnaWNWSCwgLTEwMCUsIDApO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5za3ctcGFnZS5hY3RpdmUgJiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgICZfX3NrZXdlZCB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogMTQwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKCRza2V3RGVnICogLTEpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIFxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgJiB7XHJcbiAgICAgICAgbGVmdDogLTQwJTtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0ICYge1xyXG4gICAgICAgIHJpZ2h0OiAtNDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwIDMwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRyYW5zZm9ybTogc2tld1goJHNrZXdEZWcpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHNjcm9sbFRpbWUsIG9wYWNpdHkgJHNjcm9sbFRpbWU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgXHJcbiAgICAgIC5za3ctcGFnZV9faGFsZi0tbGVmdCAmIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5za3ctcGFnZV9faGFsZi0tcmlnaHQgJiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzAlO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc2t3LXBhZ2UuaW5hY3RpdmUgJiB7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goJHNrZXdEZWcpIHNjYWxlKDAuOTUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19oZWFkaW5nIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmX19saW5rIHtcclxuICAgICAgY29sb3I6ICNGRkEwQTA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmLTEge1xyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL3NpdGUtdXJpLXJlc3BvbnNpdmUuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLTIge1xyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMxQzFDMUMsIDUlKTtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9wb3J0b2ZvbGl1UHJlbWl1bS5qcGcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0zIHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvbW91c292ZXItaW1nLTIuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLTQge1xyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMxQzFDMUMsIDUlKTtcclxuICAgICAgfVxyXG4gICAgICAuc2t3LXBhZ2VfX2hhbGYtLXJpZ2h0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvc2VjdGlvbnMtMy5qcGcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi01IHtcclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvaW1nLXRlc3QuanBnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oIzFDMUMxQywgNSUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzE1MTgxQTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5za3ctcGFnZXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5za3ctcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5za3ctcGFnZV9faGFsZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG59XG4uc2t3LXBhZ2VfX2hhbGYtLWxlZnQge1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMi40dmgsIDEwMCUsIDApO1xufVxuLnNrdy1wYWdlX19oYWxmLS1yaWdodCB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMi40dmgsIC0xMDAlLCAwKTtcbn1cbi5za3ctcGFnZS5hY3RpdmUgLnNrdy1wYWdlX19oYWxmIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cbi5za3ctcGFnZV9fc2tld2VkIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxNDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLnNrdy1wYWdlX19oYWxmLS1sZWZ0IC5za3ctcGFnZV9fc2tld2VkIHtcbiAgbGVmdDogLTQwJTtcbn1cbi5za3ctcGFnZV9faGFsZi0tcmlnaHQgLnNrdy1wYWdlX19za2V3ZWQge1xuICByaWdodDogLTQwJTtcbn1cbi5za3ctcGFnZV9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAzMCU7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHNrZXdYKDVkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMXM7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDMwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xufVxuLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDMwJTtcbiAgcGFkZGluZy1yaWdodDogMzAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG59XG4uc2t3LXBhZ2UuaW5hY3RpdmUgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2Zvcm06IHNrZXdYKDVkZWcpIHNjYWxlKDAuOTUpO1xufVxuLnNrdy1wYWdlX19oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2t3LXBhZ2VfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2t3LXBhZ2VfX2xpbmsge1xuICBjb2xvcjogI0ZGQTBBMDtcbn1cbi5za3ctcGFnZS0xIC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9zaXRlLXVyaS1yZXNwb25zaXZlLmpwZ1wiKTtcbn1cbi5za3ctcGFnZS0xIC5za3ctcGFnZV9faGFsZi0tcmlnaHQgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzI5MjkyOTtcbn1cbi5za3ctcGFnZS0yIC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufVxuLnNrdy1wYWdlLTIgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9wb3J0b2ZvbGl1UHJlbWl1bS5qcGdcIik7XG59XG4uc2t3LXBhZ2UtMyAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQyOTk2L21vdXNvdmVyLWltZy0yLmpwZ1wiKTtcbn1cbi5za3ctcGFnZS0zIC5za3ctcGFnZV9faGFsZi0tcmlnaHQgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzI5MjkyOTtcbn1cbi5za3ctcGFnZS00IC5za3ctcGFnZV9faGFsZi0tbGVmdCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xufVxuLnNrdy1wYWdlLTQgLnNrdy1wYWdlX19oYWxmLS1yaWdodCAuc2t3LXBhZ2VfX2NvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDI5OTYvc2VjdGlvbnMtMy5qcGdcIik7XG59XG4uc2t3LXBhZ2UtNSAuc2t3LXBhZ2VfX2hhbGYtLWxlZnQgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQyOTk2L2ltZy10ZXN0LmpwZ1wiKTtcbn1cbi5za3ctcGFnZS01IC5za3ctcGFnZV9faGFsZi0tcmlnaHQgLnNrdy1wYWdlX19jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzI5MjkyOTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteDePrezentareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-site-de-prezentare',
                templateUrl: './site-de-prezentare.component.html',
                styleUrls: ['./site-de-prezentare.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/proiecte/in-curs/in-curs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/proiecte/in-curs/in-curs.component.ts ***!
  \******************************************************************/
/*! exports provided: InCursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InCursComponent", function() { return InCursComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InCursComponent {
    constructor() { }
    ngOnInit() {
    }
}
InCursComponent.ɵfac = function InCursComponent_Factory(t) { return new (t || InCursComponent)(); };
InCursComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InCursComponent, selectors: [["app-in-curs"]], decls: 2, vars: 0, template: function InCursComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "in-curs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvaWVjdGUvaW4tY3Vycy9pbi1jdXJzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InCursComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-in-curs',
                templateUrl: './in-curs.component.html',
                styleUrls: ['./in-curs.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/proiecte/terminate/terminate.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/proiecte/terminate/terminate.component.ts ***!
  \**********************************************************************/
/*! exports provided: TerminateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminateComponent", function() { return TerminateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TerminateComponent {
    constructor() { }
    ngOnInit() {
    }
}
TerminateComponent.ɵfac = function TerminateComponent_Factory(t) { return new (t || TerminateComponent)(); };
TerminateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminateComponent, selectors: [["app-terminate"]], decls: 2, vars: 0, template: function TerminateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "terminate works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvaWVjdGUvdGVybWluYXRlL3Rlcm1pbmF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terminate',
                templateUrl: './terminate.component.html',
                styleUrls: ['./terminate.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\Desktop\PortofoliuAngular\PortofoliuAndrei\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map