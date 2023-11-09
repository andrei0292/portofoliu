function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/products/grafica/banner/banner.component */
    "./src/app/components/products/grafica/banner/banner.component.ts");
    /* harmony import */


    var _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/products/grafica/cards/cards.component */
    "./src/app/components/products/grafica/cards/cards.component.ts");
    /* harmony import */


    var _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/products/grafica/flyer/flyer.component */
    "./src/app/components/products/grafica/flyer/flyer.component.ts");
    /* harmony import */


    var _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/products/grafica/logo/logo.component */
    "./src/app/components/products/grafica/logo/logo.component.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/products/web/aplicatii/aplicatii.component */
    "./src/app/components/products/web/aplicatii/aplicatii.component.ts");
    /* harmony import */


    var _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/products/web/portofoliu/portofoliu.component */
    "./src/app/components/products/web/portofoliu/portofoliu.component.ts");
    /* harmony import */


    var _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/products/web/site-de-prezentare/site-de-prezentare.component */
    "./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts");
    /* harmony import */


    var _components_products_web_tip2_tip2_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/products/web/tip2/tip2.component */
    "./src/app/components/products/web/tip2/tip2.component.ts");
    /* harmony import */


    var _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/proiecte/in-curs/in-curs.component */
    "./src/app/components/proiecte/in-curs/in-curs.component.ts");
    /* harmony import */


    var _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/proiecte/terminate/terminate.component */
    "./src/app/components/proiecte/terminate/terminate.component.ts");

    var routes = [{
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
    }, {
      path: 'about',
      component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }, {
      path: 'products',
      component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_9__["ProductsComponent"]
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }, {
      path: 'portofoliu',
      component: _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_11__["PortofoliuComponent"]
    }, {
      path: 'site-prezentare',
      component: _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_12__["SiteDePrezentareComponent"]
    }, {
      path: 'aplicatii',
      component: _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_10__["AplicatiiComponent"]
    }, {
      path: 'cartidevizitadigitale',
      component: _components_products_web_tip2_tip2_component__WEBPACK_IMPORTED_MODULE_13__["Tip2Component"]
    }, {
      path: 'cards',
      component: _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"]
    }, {
      path: 'flyer',
      component: _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_7__["FlyerComponent"]
    }, {
      path: 'logo',
      component: _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_8__["LogoComponent"]
    }, {
      path: 'animatielogo',
      component: _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"]
    }, {
      path: 'terminate',
      component: _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_15__["TerminateComponent"]
    }, {
      path: 'incurs',
      component: _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_14__["InCursComponent"]
    }];

    var AppRoutingModule = /*@__PURE__*/function () {
      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          scrollPositionRestoration: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      return AppRoutingModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*@__PURE__*/function () {
      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'site';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [["page_id", "3956060981287631", 1, "fb-customerchat"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
          }
        },
        directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-family: \"font2\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUG9ydG9mb2xpdUFuZ3VsYXJcXFZpc2lvb25cXHNpdGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxzREFBQTtBQ0NKO0FERUE7RUFDSSxvQkFBQTtFQUNBLHNEQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250MSc7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250OS5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250Mic7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250My5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDInO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9mb250OS5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbioge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJmb250MlwiO1xufSJdfQ== */"]
      });
      return AppComponent;
    }();
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_main_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/main/about/about.component */
    "./src/app/components/main/about/about.component.ts");
    /* harmony import */


    var _components_main_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/main/contact-main/contact-main.component */
    "./src/app/components/main/contact-main/contact-main.component.ts");
    /* harmony import */


    var _components_main_main_products_main_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/main/main-products/main-products.component */
    "./src/app/components/main/main-products/main-products.component.ts");
    /* harmony import */


    var _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/products/web/portofoliu/portofoliu.component */
    "./src/app/components/products/web/portofoliu/portofoliu.component.ts");
    /* harmony import */


    var _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/products/web/site-de-prezentare/site-de-prezentare.component */
    "./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts");
    /* harmony import */


    var _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/products/grafica/logo/logo.component */
    "./src/app/components/products/grafica/logo/logo.component.ts");
    /* harmony import */


    var _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/products/grafica/flyer/flyer.component */
    "./src/app/components/products/grafica/flyer/flyer.component.ts");
    /* harmony import */


    var _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/products/grafica/cards/cards.component */
    "./src/app/components/products/grafica/cards/cards.component.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/proiecte/terminate/terminate.component */
    "./src/app/components/proiecte/terminate/terminate.component.ts");
    /* harmony import */


    var _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/proiecte/in-curs/in-curs.component */
    "./src/app/components/proiecte/in-curs/in-curs.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/products/web/aplicatii/aplicatii.component */
    "./src/app/components/products/web/aplicatii/aplicatii.component.ts");
    /* harmony import */


    var _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/products/grafica/banner/banner.component */
    "./src/app/components/products/grafica/banner/banner.component.ts");
    /* harmony import */


    var _components_products_web_tip2_tip2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/products/web/tip2/tip2.component */
    "./src/app/components/products/web/tip2/tip2.component.ts");
    /* harmony import */


    var _components_main_branding_branding_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/main/branding/branding.component */
    "./src/app/components/main/branding/branding.component.ts");

    var AppModule = /*@__PURE__*/function () {
      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"]
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
      });
      return AppModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"], _components_main_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_main_contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_8__["ContactMainComponent"], _components_main_main_products_main_products_component__WEBPACK_IMPORTED_MODULE_9__["MainProductsComponent"], _components_products_web_portofoliu_portofoliu_component__WEBPACK_IMPORTED_MODULE_10__["PortofoliuComponent"], _components_products_web_site_de_prezentare_site_de_prezentare_component__WEBPACK_IMPORTED_MODULE_11__["SiteDePrezentareComponent"], _components_products_grafica_logo_logo_component__WEBPACK_IMPORTED_MODULE_12__["LogoComponent"], _components_products_grafica_flyer_flyer_component__WEBPACK_IMPORTED_MODULE_13__["FlyerComponent"], _components_products_grafica_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__["CardsComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"], _components_proiecte_terminate_terminate_component__WEBPACK_IMPORTED_MODULE_16__["TerminateComponent"], _components_proiecte_in_curs_in_curs_component__WEBPACK_IMPORTED_MODULE_17__["InCursComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"], _components_products_web_aplicatii_aplicatii_component__WEBPACK_IMPORTED_MODULE_19__["AplicatiiComponent"], _components_products_grafica_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__["BannerComponent"], _components_products_web_tip2_tip2_component__WEBPACK_IMPORTED_MODULE_21__["Tip2Component"], _components_main_branding_branding_component__WEBPACK_IMPORTED_MODULE_22__["BrandingComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = /*@__PURE__*/function () {
      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 25,
        vars: 0,
        consts: [[1, "despre"], [1, "text-center"], [1, "row"], [1, "col-md-6", "col-xs-12", "poza"], ["src", "/assets/img/VISIOON1.png", "alt", "", 1, "logo"], [1, "col-md-6", "col-xs-12", "text"], [1, "vw"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Despre Noi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Visioonwebsites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ofer\u0103 servicii de identitate vizual\u0103 complet\u0103. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Av\xE2nd ca scop principal satisfacerea nevoilor clien\u021Bilor, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Visioonwebsites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " se adapteaz\u0103 trendului, iar cu ajutorul ultimelor tehnologii avem pl\u0103cerea de a pune la dispozi\u021Bia dumneavoastr\u0103 produse \u0219i servicii de \xEEnalt\u0103 calitate. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Visioonwebsites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ajut\u0103 la dezvoltarea afacerii mediul online. Fiecare afacere este diferit\u0103, av\xE2nd propriul progres. A\u0219adar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Visioonwebsites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " adopt\u0103 cea mai benefic\u0103 strategie pentru fiecare afacere in parte. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pentru realizarea site-urilor folosim tehnologii precum : HTML, CSS, JavaScript, Angular, MongoDb, MySql, Java, Spring, NodeJs, Express ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.despre[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #3b3b3b;\n}\nh1[_ngcontent-%COMP%] {\n  padding: 5% 0;\n  font-family: \"font1\", monospace;\n  font-size: 3.4rem;\n  white-space: nowrap;\n  font-size: 200;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: red;\n  text-transform: uppercase;\n}\n.logo[_ngcontent-%COMP%] {\n  min-width: 90%;\n  min-height: 90%;\n  max-width: 90%;\n  max-height: 90%;\n}\nh2[_ngcontent-%COMP%] {\n  padding-top: 15%;\n  font-size: 2em;\n  color: #fff;\n  font-family: \"font2\", monospace;\n}\n.vw[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: red;\n}\np[_ngcontent-%COMP%] {\n  padding: 1% 5% 0 1%;\n  font-size: 2.2em;\n  color: white;\n  line-height: 1.5em;\n  font-family: \"font2\", monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcVmlzaW9vblxcc2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxzREFBQTtBQ0NGO0FEQ0E7RUFDRSxvQkFBQTtFQUNBLHNEQUFBO0FDQ0Y7QURFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNBRjtBREVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0VBQ0YsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDQ0E7QURHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDQUY7QURFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtBQ0NGO0FEQ0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ2ZvbnQxJztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250OS5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250Mic7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvZm9udDMub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmRlc3ByZXtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XHJcblxyXG59XHJcbmgxe1xyXG4gIHBhZGRpbmc6NSUgMCA7XHJcbmZvbnQtZmFtaWx5Oidmb250MScgLCBtb25vc3BhY2U7XHJcbmZvbnQtc2l6ZTogMy40cmVtO1xyXG53aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5mb250LXNpemU6IDIwMDtcclxudGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCMwMDAsIDAuOSk7XHJcbmNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbn1cclxuXHJcbi5sb2dve1xyXG4gIG1pbi13aWR0aDogOTAlO1xyXG4gIG1pbi1oZWlnaHQ6IDkwJTtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBtYXgtaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbmgye1xyXG4gIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6J2ZvbnQyJyAsIG1vbm9zcGFjZTtcclxufVxyXG4udnd7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbn1cclxucHtcclxuICBwYWRkaW5nOjElIDUlIDAgMSU7XHJcbiAgZm9udC1zaXplOiAyLjJlbTtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICBmb250LWZhbWlseTonZm9udDInICwgbW9ub3NwYWNlO1xyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9mb250OS5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5kZXNwcmUge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcbn1cblxuaDEge1xuICBwYWRkaW5nOiA1JSAwO1xuICBmb250LWZhbWlseTogXCJmb250MVwiLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMy40cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDIwMDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5sb2dvIHtcbiAgbWluLXdpZHRoOiA5MCU7XG4gIG1pbi1oZWlnaHQ6IDkwJTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbn1cblxuaDIge1xuICBwYWRkaW5nLXRvcDogMTUlO1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIG1vbm9zcGFjZTtcbn1cblxuLnZ3IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IHJlZDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDElIDUlIDAgMSU7XG4gIGZvbnQtc2l6ZTogMi4yZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBtb25vc3BhY2U7XG59Il19 */"]
      });
      return AboutComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*@__PURE__*/function () {
      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 83,
        vars: 0,
        consts: [[1, "sec"], ["autoplay", "", "muted", "", "loop", "", "id", "myVideo"], ["src", "/assets/video/video1.mp4", "type", "video/mp4"], [1, "content"], [1, "container"], [1, "row"], [1, "text-center"], [1, "social"], ["href", "https://wa.me/+40748489982"], ["viewBox", "0 0 512 512", "fill", "#000", "width", "5.5em", "height", "5.5em", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m123.832031 475.464844c39.558594 23.804687 84.789063 36.351562 131.261719 36.351562 140.824219 0 256.90625-114.914062 256.90625-255.910156 0-140.832031-115.917969-255.90625-256.90625-255.90625-140.558594 0-254.910156 114.800781-254.910156 255.90625 0 47.09375 12.550781 92.667969 36.351562 132.257812l-36.535156 123.835938zm-93.65625-219.558594c0-124.570312 100.898438-225.917969 224.917969-225.917969 125.121094 0 226.917969 101.347657 226.917969 225.917969 0 124.574219-101.796875 225.917969-226.917969 225.917969-43.054688 0-84.894531-12.195313-120.984375-35.273438l-5.765625-3.683593-83.988281 24.78125 24.777343-83.992188-3.683593-5.761719c-23.078125-36.097656-35.273438-78.277343-35.273438-121.988281zm0 0"], ["d", "m124.628906 208.753906c4.953125 26.011719 19.65625 76.042969 62.464844 118.851563 42.808594 42.808593 92.839844 57.515625 118.855469 62.46875 29.789062 5.671875 73.503906 6.527343 94.867187-14.835938l11.910156-11.910156c6.011719-6.011719 9.324219-14.007813 9.324219-22.511719s-3.3125-16.496094-9.324219-22.507812l-47.628906-47.628906c-6.015625-6.015626-14.007812-9.324219-22.511718-9.324219-8.503907 0-16.496094 3.308593-22.511719 9.324219l-11.90625 11.90625c-7.273438 7.273437-21.003907 7.304687-28.332031.089843l-47.507813-49.5c-.070313-.074219-.140625-.148437-.214844-.21875-7.285156-7.285156-7.285156-19.140625 0-26.425781l11.90625-11.90625c12.445313-12.445312 12.445313-32.582031 0-45.023438l-47.628906-47.628906c-12.410156-12.410156-32.605469-12.410156-45.019531 0l-11.90625 11.910156v-.003906c-17.050782 17.054688-22.734375 53.40625-14.835938 94.875zm36.042969-73.664062c12.5-12.214844 11.832031-12.449219 13.210937-12.449219.472657 0 .945313.179687 1.304688.539063 50.1875 50.457031 48.171875 47.492187 48.171875 48.9375 0 .503906-.183594.945312-.539063 1.304687l-11.910156 11.90625c-18.964844 18.964844-19.039062 49.664063-.121094 68.714844l47.535157 49.53125c.074219.070312.144531.144531.21875.21875 18.960937 18.960937 51.808593 19.023437 70.832031 0l11.90625-11.90625c.71875-.71875 1.890625-.71875 2.609375 0 50.1875 50.453125 48.171875 47.488281 48.171875 48.933593 0 .507813-.183594.945313-.539062 1.304688l-11.910157 11.90625c-8.160156 8.160156-34.152343 13.042969-68.054687 6.585938-22.625-4.3125-66.128906-17.085938-103.257813-54.214844-37.128906-37.128906-49.902343-80.632813-54.210937-103.257813-6.460938-33.902343-1.578125-59.898437 6.582031-68.054687zm0 0"], ["target", "_blank", "href", "https://www.facebook.com/Visioonwebsites-100464558721297"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", "width", "5.5em", "height", "5.5em", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 167.657 167.657", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 167.657 167.657"], ["d", "M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626\n                   v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006\n                   c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154\n                   C167.657,37.881,130.125,0.349,83.829,0.349z", 2, "fill", "#010002"], ["target", "_blank", "href", "https://www.youtube.com/channel/UCN-Zw1CnhKuuAod70MlDAfw"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", "fill", "#000", "width", "5.5em", "height", "5.5em", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 461.001 461.001", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 461.001 461.001"], ["d", "M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728\n                                    c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137\n                                    C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607\n                                    c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z", 2, "fill", "#000000"], ["method", "POST", "action", "https://formsubmit.co/andrei0292@gmail.com"], [1, "row", "input-container"], [1, "col-xs-12"], [1, "styled-input", "wide"], ["type", "text", "name", "name", "required", ""], [1, "col-md-6", "col-sm-12", "col-xs-12"], ["id", "mail", 1, "styled-input"], ["type", "text", "name", "email", "required", ""], ["id", "nr", 1, "styled-input"], ["type", "text", "name", "number", "required", ""], ["name", "message", "required", ""], [1, "actions"], ["type", "submit", "value", "Trimite mesaj", 1, "btn-lrg", "submit-btn"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Vre\u021Bi s\u0103 discut\u0103m ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "svg", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "form", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Nume");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Numar de telefon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "textarea", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Mesaj");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.sec[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.sec[_ngcontent-%COMP%]   #myVideo[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 0;\n  background-color: rgba(255, 0, 0, 0.06);\n}\n.sec[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  position: absolute;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"font1\", \"Poppins\", sans-serif, \"arial\";\n  font-weight: 200;\n  font-size: 72px;\n  color: red;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  font-size: 20px;\n  color: #ffffff;\n  line-height: 1.5;\n}\nli[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.social[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  filter: invert(1);\n  transform: scale(0.5);\n  transition: 0.5s;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(0.5) translateY(-15px);\n}\n\ninput[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 400;\n  color: #999;\n  top: 2px;\n  transition: all 0.225s ease;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.styled-input[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  padding: 10px;\n}\n.styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #999;\n  padding: 1rem 30px;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  transition: all 0.25s ease;\n  pointer-events: none;\n}\n.styled-input.wide[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100%;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n  border: 0;\n  width: 100%;\n  font-size: 1rem;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  background-color: #2d2d2d;\n  color: white;\n  border-radius: 4px;\n}\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: all 0.075s ease;\n}\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 15em;\n}\n.input-container[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100vw;\n  margin: 20px auto 25px auto;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  padding: 7px 35px;\n  border-radius: 60px;\n  display: inline-block;\n  background-color: #fb2323;\n  color: white;\n  font-size: 18px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  cursor: pointer;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  letter-spacing: 2px;\n  font-weight: 400;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);\n}\ninput[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-style: italic;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: #f00;\n  font-style: normal;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n@media only screen and (min-width: 724px) and (max-width: 767px) {\n  .sec[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    min-height: 150vh;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-family: \"Poppins\", sans-serif, \"arial\";\n    font-weight: 600;\n    font-size: 2.5em;\n    color: white;\n    text-align: center;\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif, \"arial\";\n    font-weight: 400;\n    font-size: 1em;\n    color: #9b9b9b;\n    line-height: 1.5;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    bottom: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    filter: invert(1);\n    transform: scale(0.5);\n    transition: 0.5s;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    transform: scale(0.5) translateY(-15px);\n  }\n\n  .styled-input[_ngcontent-%COMP%] {\n    margin: 0.51rem 0;\n    position: relative;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #999;\n    padding: 0.5rem 30px 0.35rem 30px;\n    position: absolute;\n    top: 10%;\n    width: 60vw;\n    transition: all 0.25s ease;\n    pointer-events: none;\n    position: absolute;\n    left: 10%;\n    transform: translateX(-10%);\n  }\n\n  .styled-input.wide[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    height: auto;\n  }\n\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 0;\n    width: 100%;\n    font-size: 1rem;\n    color: white;\n    border-radius: 4px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 100%;\n  }\n\n  .input-container[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    margin: auto;\n    max-height: 15vh;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n@media screen and (max-width: 723px) {\n  .sec[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    min-height: 150vh;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-family: \"Poppins\", sans-serif, \"arial\";\n    font-weight: 600;\n    font-size: 2.5em;\n    color: white;\n    text-align: center;\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif, \"arial\";\n    font-weight: 400;\n    font-size: 1em;\n    color: #9b9b9b;\n    line-height: 1.5;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    bottom: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    filter: invert(1);\n    transform: scale(0.5);\n    transition: 0.5s;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    transform: scale(0.5) translateY(-15px);\n  }\n\n  .styled-input[_ngcontent-%COMP%] {\n    float: left;\n    width: 90vw;\n    margin: 0.51rem 0;\n    position: relative;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #999;\n    padding: 0.5rem 30px 0.35rem 30px;\n    position: absolute;\n    top: 10%;\n    width: 60vw;\n    transition: all 0.25s ease;\n    pointer-events: none;\n    position: absolute;\n    left: 10%;\n    transform: translateX(-10%);\n  }\n\n  .styled-input.wide[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    height: auto;\n  }\n\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 0;\n    width: 100%;\n    font-size: 1rem;\n    color: white;\n    border-radius: 4px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 100%;\n  }\n\n  .input-container[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    margin: auto;\n    max-height: 15vh;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxWaXNpb29uXFxzaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0Esc0RBQUE7QUNDSjtBREVBO0VBQ0ksb0JBQUE7RUFDQSxzREFBQTtBQ0FKO0FESUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FETUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRFVBOztFQUVJLHFCQUFBO0FDUEo7QURVQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSx1Q0FBQTtBQ1BKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1JKO0FEYUE7RUFDSSxvREFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNWSjtBRGNBO0VBQ0ksbURBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRGNBO0VBQ0kscUJBQUE7QUNYSjtBRGNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDWEo7QURlQTtFQUNJLGdCQUFBO0FDWko7QURlQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNaSjtBRGVBO0VBQ0ksdUNBQUE7QUNaSjtBRGdCQSxzQkFBQTtBQUVBOzs7O0VBSUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7RUFDQSxtREFBQTtBQ2RKO0FEaUJBO0VBSUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNqQko7QURzQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsMEJBQUE7RUFDQSxvQkFBQTtBQ25CSjtBRHNCQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDbkJKO0FEc0JBOztFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ25CSjtBRHNCQTs7RUFFSSxVQUFBO0FDbkJKO0FEc0JBOztFQUVJLFdBQUE7RUFFQSwyQkFBQTtBQ25CSjtBRHNCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ25CSjtBRHNCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDbkJKO0FEc0JBO0VBRUksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLDZFQUFBO0VBR0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUN0Qko7QUR5QkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkVBQUE7QUN0Qko7QUQwQkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtBQ3ZCSjtBRDBCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FDdkJKO0FEMEJBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLGlCQUFBO0VDdkJOOztFRDBCRTtJQUNJLDJDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUN2Qk47O0VEMEJFO0lBQ0ksMENBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUN2Qk47O0VEMEJFO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VDdkJOOztFRDJCRTtJQUNJLGdCQUFBO0VDeEJOOztFRDJCRTtJQUNJLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0VDeEJOOztFRDJCRTtJQUNJLHVDQUFBO0VDeEJOOztFRDRCRTtJQUVJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUMxQk47O0VEZ0NFO0lBQ0ksV0FBQTtJQUNBLGlDQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUVBLDBCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQzdCTjs7RURpQ0U7SUFFSSxlQUFBO0lBQ0EsWUFBQTtFQy9CTjs7RURtQ0U7O0lBRUksYUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUVBLFlBQUE7SUFDQSxrQkFBQTtFQ2pDTjs7RUR1Q0U7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7RUNwQ047O0VEeUNFO0lBRUksZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0VDdkNOOztFRDRDRTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0VDekNOO0FBQ0Y7QUQ2Q0E7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsaUJBQUE7RUMzQ047O0VEOENFO0lBQ0ksMkNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQzNDTjs7RUQ4Q0U7SUFDSSwwQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQzNDTjs7RUQ4Q0U7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUMzQ047O0VEK0NFO0lBQ0ksZ0JBQUE7RUM1Q047O0VEK0NFO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7RUM1Q047O0VEK0NFO0lBQ0ksdUNBQUE7RUM1Q047O0VEZ0RFO0lBQ0ksV0FBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDN0NOOztFRG1ERTtJQUNJLFdBQUE7SUFDQSxpQ0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFFQSwwQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUNoRE47O0VEb0RFO0lBRUksZUFBQTtJQUNBLFlBQUE7RUNsRE47O0VEc0RFOztJQUVJLGFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFFQSxZQUFBO0lBQ0Esa0JBQUE7RUNwRE47O0VEMERFO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0VDdkROOztFRDRERTtJQUVJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQzFETjs7RUQrREU7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQzVETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvZm9udDkub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDInO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvZm9udDMub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG5cclxuLnNlYyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTEwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbnVsLFxyXG5saSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWMgI215VmlkZW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4wNik7XHJcbn1cclxuXHJcblxyXG4uc2VjIC5jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG5cclxufVxyXG5cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnLCAnUG9wcGlucycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG5cclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxubGkge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc29jaWFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5zb2NpYWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnNvY2lhbCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLnNvY2lhbCBsaSBhOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKC0xNXB4KTtcclxufVxyXG5cclxuXHJcbi8qIC8vLy8vIGlucHV0cyAvLy8vLyovXHJcblxyXG5pbnB1dDpmb2N1c35sYWJlbCxcclxudGV4dGFyZWE6Zm9jdXN+bGFiZWwsXHJcbmlucHV0OnZhbGlkfmxhYmVsLFxyXG50ZXh0YXJlYTp2YWxpZH5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjIyNXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjIyNXMgZWFzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxufVxyXG5cclxuLnN0eWxlZC1pbnB1dCB7XHJcbiAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgIC8vIHdpZHRoOiAyOTNweDtcclxuICAgIC8vIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4uc3R5bGVkLWlucHV0IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgcGFkZGluZzogMXJlbSAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc3R5bGVkLWlucHV0LndpZGUge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXN+c3BhbixcclxudGV4dGFyZWE6Zm9jdXN+c3BhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMDc1cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDc1cyBlYXNlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDE1ZW07XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDI1cHggYXV0bztcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogN3B4IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiMjMyMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksXHJcbiAgICAgICAgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcblxyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0bjpob3ZlciB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xMCksXHJcbiAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF0rbGFiZWwge1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQrbGFiZWwge1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLXdpZHRoOiA3MjRweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuc2VjIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTB2aDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGJvdHRvbTogMWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbCBsaSB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsIGxpIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmaWx0ZXI6IGludmVydCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsIGxpIGE6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnN0eWxlZC1pbnB1dCB7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMC41MXJlbSAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuc3R5bGVkLWlucHV0IGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMzBweCAwLjM1cmVtIDMwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zdHlsZWQtaW5wdXQud2lkZSB7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogOTB2dztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1jb250YWluZXIge1xyXG5cclxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dmg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjNweCkge1xyXG4gICAgLnNlYyB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTUwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICBib3R0b206IDFlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbCBsaSBhIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbCBsaSBhOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSkgdHJhbnNsYXRlWSgtMTVweCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zdHlsZWQtaW5wdXQge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMC41MXJlbSAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuc3R5bGVkLWlucHV0IGxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMzBweCAwLjM1cmVtIDMwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zdHlsZWQtaW5wdXQud2lkZSB7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogOTB2dztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuXHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1jb250YWluZXIge1xyXG5cclxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dmg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmb250MlwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZm9udDMub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNlYyAjbXlWaWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA2KTtcbn1cblxuLnNlYyAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJmb250MVwiLCBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5saSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNvY2lhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc29jaWFsIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xufVxuXG4vKiAvLy8vLyBpbnB1dHMgLy8vLy8qL1xuaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcbnRleHRhcmVhOmZvY3VzIH4gbGFiZWwsXG5pbnB1dDp2YWxpZCB+IGxhYmVsLFxudGV4dGFyZWE6dmFsaWQgfiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjOTk5O1xuICB0b3A6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjIyNXMgZWFzZTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuXG4uc3R5bGVkLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdHlsZWQtaW5wdXQgbGFiZWwge1xuICBjb2xvcjogIzk5OTtcbiAgcGFkZGluZzogMXJlbSAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3R5bGVkLWlucHV0LndpZGUge1xuICB3aWR0aDogNjUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiBzcGFuLFxudGV4dGFyZWE6Zm9jdXMgfiBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMDc1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4wNzVzIGVhc2U7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE1ZW07XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICB3aWR0aDogNjUwcHg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG1hcmdpbjogMjBweCBhdXRvIDI1cHggYXV0bztcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiA3cHggMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmIyMzIzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3VibWl0LWJ0bjpob3ZlciB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsIHtcbiAgY29sb3I6ICNmMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyNHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNlYyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWluLWhlaWdodDogMTUwdmg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLnNvY2lhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5zb2NpYWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICAuc29jaWFsIGxpIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIC5zb2NpYWwgbGkgYTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dCB7XG4gICAgbWFyZ2luOiAwLjUxcmVtIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dCBsYWJlbCB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgcGFkZGluZzogMC41cmVtIDMwcHggMC4zNXJlbSAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwJTtcbiAgICB3aWR0aDogNjB2dztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dC53aWRlIHtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5pbnB1dC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LWhlaWdodDogMTV2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIzcHgpIHtcbiAgLnNlYyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWluLWhlaWdodDogMTUwdmg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLnNvY2lhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5zb2NpYWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICAuc29jaWFsIGxpIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIC5zb2NpYWwgbGkgYTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWFyZ2luOiAwLjUxcmVtIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dCBsYWJlbCB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgcGFkZGluZzogMC41cmVtIDMwcHggMC4zNXJlbSAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwJTtcbiAgICB3aWR0aDogNjB2dztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dC53aWRlIHtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5pbnB1dC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LWhlaWdodDogMTV2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxufSJdfQ== */"]
      });
      return ContactComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/main/about/about.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/main/about/about.component.ts ***!
    \**********************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsMainAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AboutComponent = /*@__PURE__*/function () {
      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 29,
        vars: 0,
        consts: [[1, "section"], [1, "text-center"], [1, "row"], [1, "col-md-6", "col-xs-12", "poza"], ["src", "/assets/img/VISIOON1.png", "alt", "logo", 1, "logo"], [1, "col-md-6", "col-xs-12", "text"], [1, "vw"], [1, "col-md-6"], ["routerLink", "/about", 1, "text-center"], ["download", "model", "href", "assets\\download\\model.pdf", 1, "text-center"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Visioonwebsites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " ofer\u0103 servicii de identitate vizual\u0103 complet\u0103. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Av\xE2nd ca scop principal satisfacerea nevoilor clien\u021Bilor, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Visioonwebsites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " se adapteaz\u0103 trendului, iar cu ajutorul ultimelor tehnologii avem pl\u0103cerea de a pune la dispozi\u021Bia dumneavoastr\u0103 produse \u0219i servicii de \xEEnalt\u0103 calitate. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mai mult");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Descarc\u0103 model");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  left: 10%;\n  top: 10%;\n  transform: translateX(-10%) translateY(-10%);\n}\nbody[_ngcontent-%COMP%] {\n  background: #111;\n}\nsection[_ngcontent-%COMP%] {\n  min-height: auto;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 10% 0;\n  background: #333;\n  color: #ccc;\n  width: 200px;\n  height: 60px;\n  border: 0;\n  font-size: 15px;\n  border-radius: 4px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  transition: 0.6s;\n  overflow: hidden;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\nbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.5);\n  width: 60px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0.5;\n  filter: blur(30px);\n  transform: translateX(-100px) skewX(-15deg);\n}\nbutton[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  width: 30px;\n  height: 100%;\n  left: 30px;\n  top: 0;\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(-100px) skewX(-15deg);\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #e71616;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 0.6;\n  transition: 0.7s;\n}\nbutton[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 1;\n  transition: 0.7s;\n}\na[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  letter-spacing: 2px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\nh1[_ngcontent-%COMP%] {\n  padding: 5% 0;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n  font-size: 4.4em;\n  white-space: nowrap;\n  font-weight: 400;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n  text-transform: uppercase;\n}\nspan[_ngcontent-%COMP%] {\n  color: red;\n}\n.logo[_ngcontent-%COMP%] {\n  min-width: 90%;\n  min-height: 90%;\n  max-width: 90%;\n  max-height: 90%;\n}\nh2[_ngcontent-%COMP%] {\n  padding-top: 15%;\n  font-size: 2em;\n  color: #fff;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.vw[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: red;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\np[_ngcontent-%COMP%] {\n  padding: 1% 5% 0 1%;\n  font-size: 2.2em;\n  color: white;\n  line-height: 1.5em;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n@media screen and (min-width: 1200px) {\n  a[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media screen and (min-width: 668px) and (max-width: 1200px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.9em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    padding: 1% 5%;\n    line-height: 40px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media screen and (min-width: 767px) and (max-width: 806px) {\n  .button[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n}\n@media screen and (min-width: 200px) and (max-width: 766px) {\n  .row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media screen and (min-width: 401px) and (max-width: 667px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.7em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    padding: 1% 5%;\n    line-height: 30px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n  }\n}\n@media screen and (min-width: 301px) and (max-width: 400px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.2em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n    line-height: 30px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n  }\n}\n@media screen and (min-width: 351px) and (max-width: 400px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.2em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n    line-height: 30px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n  }\n}\n@media screen and (max-width: 350px) {\n  .row[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n  }\n\n  h2[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    padding: 1% 5%;\n    line-height: 30px;\n    text-align: center;\n  }\n\n  button[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 50px;\n    position: relative;\n    left: 50%;\n    bottom: 80%;\n    transform: translateX(-50%) translateY(-80%);\n  }\n  button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2Fib3V0L0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxWaXNpb29uXFxzaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0RBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7RUFDQSxzREFBQTtBQ0FGO0FER0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDREY7QURpQkE7RUFQSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNENBQUE7QUNOSjtBRGNBO0VBQ0UsZ0JBQUE7QUNYRjtBRGNBO0VBRUUsZ0JBQUE7QUNaRjtBRGdCQTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNkRjtBRGdCRTtFQUNFLFVBQUE7QUNkSjtBRGlCRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ2ZKO0FEa0JFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0FDaEJKO0FEbUJFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDakJKO0FEbUJJO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNqQk47QURvQkk7RUFDRSwwQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2xCTjtBRHVCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ3BCRjtBRHdCQTtFQUNFLGFBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDckJGO0FEeUJBO0VBQ0UsVUFBQTtBQ3RCRjtBRHlCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbURBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtBQ3RCRjtBRHlCQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtBQ3RCRjtBRHlCQTtFQUNFO0lBQ0UsY0FBQTtFQ3RCRjtBQUNGO0FEeUJBO0VBRUU7SUFDRSxnQkFBQTtFQ3hCRjs7RUQyQkE7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUN4QkY7O0VEMkJBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ3hCRjs7RUQyQkE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSw0Q0FBQTtFQ3hCRjtFRDRCRTtJQUNFLGNBQUE7RUMxQko7QUFDRjtBRGlDQTtFQUNFO0lBQ0UsWUFBQTtFQy9CRjs7RURrQ0E7SUFDRSxnQkFBQTtFQy9CRjtBQUNGO0FEa0NBO0VBQ0U7SUFDRSxZQUFBO0VDaENGOztFRG1DQTtJQUNFLFNBQUE7RUNoQ0Y7QUFDRjtBRHFDQTtFQUVFO0lBQ0UsZ0JBQUE7RUNwQ0Y7O0VEdUNBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0VDcENGOztFRHVDQTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNwQ0Y7O0VEdUNBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsNENBQUE7RUNwQ0Y7RUR3Q0U7SUFDRSxnQkFBQTtFQ3RDSjtBQUNGO0FEOENBO0VBRUU7SUFDRSxnQkFBQTtFQzdDRjs7RURnREE7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUM3Q0Y7O0VEZ0RBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQzdDRjs7RURnREE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSw0Q0FBQTtFQzdDRjtFRGlERTtJQUNFLGdCQUFBO0VDL0NKO0FBQ0Y7QURvREE7RUFFRTtJQUNFLGdCQUFBO0VDbkRGOztFRHNEQTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtFQ25ERjs7RURzREE7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDbkRGOztFRHNEQTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLDRDQUFBO0VDbkRGO0VEdURFO0lBQ0UsZ0JBQUE7RUNyREo7QUFDRjtBRDBEQTtFQUNFO0lBQ0UsWUFBQTtFQ3hERjs7RUQyREE7SUFDRSxnQkFBQTtFQ3hERjs7RUQyREE7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUN4REY7O0VEMkRBO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ3hERjs7RUQyREE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSw0Q0FBQTtFQ3hERjtFRDRERTtJQUNFLGdCQUFBO0VDMURKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ2ZvbnQxJztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250OS5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDInO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuQG1peGluIGNlbnRlcigkZXh0ZW5kOiB0cnVlKSB7XHJcbiAgQGlmICRleHRlbmQge1xyXG4gICAgQGV4dGVuZCAlY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGVsc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSkgdHJhbnNsYXRlWSgtMTAlKTtcclxuICB9XHJcbn1cclxuXHJcbiVjZW50ZXIge1xyXG4gIEBpbmNsdWRlIGNlbnRlcigkZXh0ZW5kOiBmYWxzZSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICMxMTE7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG5cclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBAaW5jbHVkZSBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMCUgMDtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gIHRyYW5zaXRpb246IC42cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U3MTYxNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICB0cmFuc2l0aW9uOiAuN3M7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogLjdzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG5oMSB7XHJcbiAgcGFkZGluZzogNSUgMDtcclxuICBmb250LWZhbWlseTogJ2ZvbnQxJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgZm9udC1zaXplOiA0LjRlbTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCMwMDAsIDAuOSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtaW4td2lkdGg6IDkwJTtcclxuICBtaW4taGVpZ2h0OiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgbWF4LWhlaWdodDogOTAlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgcGFkZGluZy10b3A6IDE1JTtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbn1cclxuXHJcbi52dyB7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG59XHJcblxyXG5wIHtcclxuICBwYWRkaW5nOiAxJSA1JSAwIDElO1xyXG4gIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzLjllbTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBwYWRkaW5nOiAxJSA1JTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIHBhZGRpbmc6IDElIDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm90dG9tOiA4MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtODAlKTtcclxuXHJcblxyXG5cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogODA2cHgpIHtcclxuICAuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xyXG4gIC5yb3cge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzLjdlbTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAxJSA1JTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBhZGRpbmc6IDElIDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm90dG9tOiA4MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtODAlKTtcclxuXHJcblxyXG5cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDAuNWVtO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogMzAxcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDMuMmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHBhZGRpbmc6IDElIDUlO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgcGFkZGluZzogMSUgNSU7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3R0b206IDgwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC04MCUpO1xyXG5cclxuXHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWluLXdpZHRoOiAzNTFweCkgYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMy4yZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgcGFkZGluZzogMSUgNSU7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBwYWRkaW5nOiAxJSA1JTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvdHRvbTogODAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTgwJSk7XHJcblxyXG5cclxuXHJcbiAgICBhIHtcclxuICAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gIC5yb3cge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBwYWRkaW5nOiAxJSA1JTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHBhZGRpbmc6IDElIDUlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm90dG9tOiA4MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtODAlKTtcclxuXHJcblxyXG5cclxuICAgIGEge1xyXG4gICAgICBmb250LXNpemU6IDAuNWVtO1xyXG5cclxuICAgIH1cclxuICB9XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmb250MlwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZm9udDMub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMCU7XG4gIHRvcDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSkgdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMxMTE7XG59XG5cbnNlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiBhdXRvO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDEwJSAwO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogI2NjYztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5idXR0b246YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZmlsdGVyOiBibHVyKDMwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xufVxuYnV0dG9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2U3MTYxNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uOmhvdmVyOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcbiAgb3BhY2l0eTogMC42O1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuYnV0dG9uOmhvdmVyOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KSBza2V3WCgtMTVkZWcpO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG5hIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDEge1xuICBwYWRkaW5nOiA1JSAwO1xuICBmb250LWZhbWlseTogXCJmb250MVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIGZvbnQtc2l6ZTogNC40ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5sb2dvIHtcbiAgbWluLXdpZHRoOiA5MCU7XG4gIG1pbi1oZWlnaHQ6IDkwJTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbn1cblxuaDIge1xuICBwYWRkaW5nLXRvcDogMTUlO1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cblxuLnZ3IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMSUgNSUgMCAxJTtcbiAgZm9udC1zaXplOiAyLjJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAzLjllbTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIHBhZGRpbmc6IDElIDUlO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICBwYWRkaW5nOiAxJSA1JTtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDgwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtODAlKTtcbiAgfVxuICBidXR0b24gYSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSBhbmQgKG1heC13aWR0aDogODA2cHgpIHtcbiAgLmJ1dHRvbiB7XG4gICAgd2lkdGg6IDE5MHB4O1xuICB9XG5cbiAgYSB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjZweCkge1xuICAucm93IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMy43ZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwYWRkaW5nOiAxJSA1JTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgcGFkZGluZzogMSUgNSU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiA4MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTgwJSk7XG4gIH1cbiAgYnV0dG9uIGEge1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMXB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMy4yZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBwYWRkaW5nOiAxJSA1JTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogMSUgNSU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiA4MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTgwJSk7XG4gIH1cbiAgYnV0dG9uIGEge1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1MXB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMy4yZW07XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBwYWRkaW5nOiAxJSA1JTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogMSUgNSU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiA4MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTgwJSk7XG4gIH1cbiAgYnV0dG9uIGEge1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gIC5yb3cge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuN2VtO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgcGFkZGluZzogMSUgNSU7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHBhZGRpbmc6IDElIDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogODAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC04MCUpO1xuICB9XG4gIGJ1dHRvbiBhIHtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICB9XG59Il19 */"]
      });
      return AboutComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/main/branding/branding.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/main/branding/branding.component.ts ***!
    \****************************************************************/

  /*! exports provided: BrandingComponent */

  /***/
  function srcAppComponentsMainBrandingBrandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandingComponent", function () {
      return BrandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BrandingComponent = /*@__PURE__*/function () {
      var BrandingComponent = /*#__PURE__*/function () {
        function BrandingComponent() {
          _classCallCheck(this, BrandingComponent);
        }

        _createClass(BrandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BrandingComponent;
      }();

      BrandingComponent.ɵfac = function BrandingComponent_Factory(t) {
        return new (t || BrandingComponent)();
      };

      BrandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BrandingComponent,
        selectors: [["app-branding"]],
        decls: 37,
        vars: 0,
        consts: [[1, "row"], [1, "col-md-6", "col-xl-6"], [1, "text-center", "h1"], [1, "p"], ["src", "/assets/img/brand.png", "alt", "", 1, "brand_image"], [1, "model"], ["download", "model", "href", "assets\\download\\model.pdf", 1, "text-center"], [1, "video"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/MoNq2VZrjIQ", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]],
        template: function BrandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ce este ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Brand-ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Brand-ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " con\u021Bine tot ceea ce poate afecta modul \xEEn care o persoan\u0103 poate percepe o companie, cum ar fii un logo, un c\xE2ntec, angaja\u021Bii, conducerea firmei, tot ceea ce o companie face, care poate fii sim\u021Bit, mirosit, v\u0103zut, auzit sau gustat reprezint\u0103 brand-ul.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ce este ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Identitatea vizual\u0103");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Identitatea vizual\u0103");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " se preocup\u0103 de elementele vizuale care alc\u0103tuiesc un brand. Astfel \xEEnc\xE2t acesta include totul de la alegerea culorilor la design-ul unui logo , la desig-ul unui site la elementele imprimate(c\u0103r\u021Bi de vizit\u0103, flyer),s.a.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C\xE2nd se realizeaz\u0103 un proiect de ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Identitate vizual\u0103 complet\u0103");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " nu se prezint\u0103 doar un logo ci se prezint\u0103 toat\u0103 estetica vizual\u0103 pe care compania o poate folosi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pute\u021Bi vedea un exemplu desc\u0103rc\xE2nd modelul al\u0103turat. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Descarc\u0103 model");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "iframe", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  overflow: hidden;\n  background-color: #d32424;\n}\n\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  left: 10%;\n  top: 10%;\n  transform: translateX(-10%) translateY(-10%);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 0 10% 0;\n  background-color: white;\n  color: #ccc;\n  width: auto;\n  height: 60px;\n  border: 0;\n  font-size: 15px;\n  border-radius: 4px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  transition: 0.6s;\n  overflow: hidden;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\nbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.5);\n  width: 60px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0.5;\n  filter: blur(30px);\n  transform: translateX(-100px) skewX(-15deg);\n}\n\nbutton[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  width: 30px;\n  height: 100%;\n  left: 30px;\n  top: 0;\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(-100px) skewX(-15deg);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background: #333;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 0.6;\n  transition: 0.7s;\n}\n\nbutton[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 1;\n  transition: 0.7s;\n}\n\n.model[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate(-50%);\n  position: relative;\n  margin-bottom: 20%;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 1em;\n  letter-spacing: 2px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 1%;\n}\n\nh1[_ngcontent-%COMP%] {\n  padding: 5% 0;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n  font-size: 2.4rem;\n  white-space: nowrap;\n  font-weight: 600;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n  text-transform: uppercase;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 5% 2%;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-size: 1.4rem;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 800;\n}\n\n.brand_image[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate(-50%);\n  position: relative;\n  width: auto;\n  height: 300px;\n  margin: 10% 0 0 0;\n}\n\n.text[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  font-size: 1em;\n  transform-origin: 0 100px;\n}\n\n.video[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media screen and (max-width: 1200px) {\n  button[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  a[_ngcontent-%COMP%] {\n    font-size: 1em;\n    letter-spacing: 1px;\n    font-weight: 200;\n  }\n}\n\n@media screen and (min-width: 668px) and (max-width: 1200px) {\n  .brand_image[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 20%;\n    transform: translate(-20% -50%);\n    position: relative;\n    height: 200px;\n  }\n\n  .h1[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .p[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  iframe[_ngcontent-%COMP%] {\n    width: 400px;\n    height: auto;\n    margin-bottom: 5%;\n  }\n}\n\n@media screen and (min-width: 768px) and (max-width: 954px) {\n  .h1[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n\n  .p[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  iframe[_ngcontent-%COMP%] {\n    width: 300px;\n    height: auto;\n    margin-bottom: 5%;\n  }\n}\n\n@media screen and (min-width: 300px) and (max-width: 768px) {\n  .h1[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .p[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    padding: 0 5%;\n  }\n\n  iframe[_ngcontent-%COMP%] {\n    width: 300px;\n    height: auto;\n    margin-bottom: 5%;\n  }\n\n  .brand_image[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 20%;\n    transform: translate(-20% -50%);\n    position: relative;\n    height: 150px;\n    margin: 0 0 10% 0;\n  }\n}\n\n@media screen and (min-width: 240px) and (max-width: 300px) {\n  .h1[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n\n  .p[_ngcontent-%COMP%] {\n    font-size: 0.6em;\n    padding: 0 5%;\n  }\n\n  iframe[_ngcontent-%COMP%] {\n    width: 200px;\n    height: auto;\n    margin-bottom: 5%;\n  }\n\n  .brand_image[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 20%;\n    transform: translate(-20% -50%);\n    position: relative;\n    height: 100px;\n    margin: 0 0 10% 0;\n  }\n}\n\n@media screen and (min-width: 200px) and (max-width: 239px) {\n  .h1[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n\n  .p[_ngcontent-%COMP%] {\n    font-size: 0.4em;\n    padding: 0 5%;\n  }\n\n  iframe[_ngcontent-%COMP%] {\n    width: 100px;\n    height: auto;\n    margin-bottom: 5%;\n  }\n\n  .brand_image[_ngcontent-%COMP%] {\n    left: 50%;\n    top: 20%;\n    transform: translate(-20% -50%);\n    position: relative;\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2JyYW5kaW5nL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxWaXNpb29uXFxzaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxicmFuZGluZ1xcYnJhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9icmFuZGluZy9icmFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEZUE7RUFQUSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNENBQUE7QUNKUjs7QURZQTtFQUVJLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDVko7O0FEWUk7RUFDSSxVQUFBO0FDVlI7O0FEYUk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNYUjs7QURjSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQ1pSOztBRGVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDYlI7O0FEZVE7RUFDSSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2JaOztBRGdCUTtFQUNJLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDZFo7O0FEbUJBO0VBQ0ksU0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2hCSjs7QURtQkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ2hCSjs7QURvQkE7RUFDSSxpQkFBQTtBQ2pCSjs7QURvQkE7RUFDSSxhQUFBO0VBQ0EsbURBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2pCSjs7QURzQkE7RUFDSSxjQUFBO0VBQ0EsbURBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsV0FBQTtBQ25CSjs7QUR1QkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNwQko7O0FEdUJBO0VBQ0ksU0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDcEJKOztBRHdCQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNyQko7O0FEd0JBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDckJKOztBRDRCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUN6Qko7O0FENkJBO0VBQ0k7SUFDSSxXQUFBO0VDMUJOOztFRDhCRTtJQUNJLGNBQUE7SUFDQSxtQkFBQTtJQUVBLGdCQUFBO0VDNUJOO0FBQ0Y7O0FEa0NBO0VBRUk7SUFDSSxTQUFBO0lBQ0EsUUFBQTtJQUNBLCtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0VDakNOOztFRHNDRTtJQUNJLGlCQUFBO0VDbkNOOztFRHNDRTtJQUNJLGNBQUE7RUNuQ047O0VEc0NFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ25DTjtBQUNGOztBRHdDQTtFQUVJO0lBQ0ksaUJBQUE7RUN2Q047O0VEMENFO0lBQ0ksY0FBQTtFQ3ZDTjs7RUQwQ0U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDdkNOO0FBQ0Y7O0FENkNBO0VBRUk7SUFDSSxlQUFBO0VDNUNOOztFRCtDRTtJQUNJLGdCQUFBO0lBQ0EsYUFBQTtFQzVDTjs7RUQrQ0U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDNUNOOztFRGdERTtJQUNJLFNBQUE7SUFDQSxRQUFBO0lBQ0EsK0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtFQzdDTjtBQUNGOztBRGlEQTtFQUVJO0lBQ0ksaUJBQUE7RUNoRE47O0VEbURFO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0VDaEROOztFRG1ERTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUNoRE47O0VEb0RFO0lBQ0ksU0FBQTtJQUNBLFFBQUE7SUFDQSwrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0VDakROO0FBQ0Y7O0FEcURBO0VBRUk7SUFDSSxpQkFBQTtFQ3BETjs7RUR1REU7SUFDSSxnQkFBQTtJQUNBLGFBQUE7RUNwRE47O0VEdURFO0lBQ0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ3BETjs7RUR3REU7SUFDSSxTQUFBO0lBQ0EsUUFBQTtJQUNBLCtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VDckROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vYnJhbmRpbmcvYnJhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzI0MjQ7XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXIoJGV4dGVuZDogdHJ1ZSkge1xyXG4gICAgQGlmICRleHRlbmQge1xyXG4gICAgICAgIEBleHRlbmQgJWNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBAZWxzZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSkgdHJhbnNsYXRlWSgtMTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuJWNlbnRlciB7XHJcbiAgICBAaW5jbHVkZSBjZW50ZXIoJGV4dGVuZDogZmFsc2UpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgQGluY2x1ZGUgY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDAgMTAlIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICAgdHJhbnNpdGlvbjogLjZzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAzMHB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpIHNrZXdYKC0xNWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC43cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC43cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2RlbCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgcGFkZGluZzogNSUgMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoIzAwMCwgMC45KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcblxyXG59XHJcblxyXG5wIHtcclxuICAgIHBhZGRpbmc6IDUlIDIlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoIzAwMCwgMC45KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5icmFuZF9pbWFnZSB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1hcmdpbjogMTAlIDAgMCAwO1xyXG59XHJcblxyXG5cclxuLnRleHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0IHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLnZpZGVvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuXHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgICAuYnJhbmRfaW1hZ2Uge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlIC01MCUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIC8vIG1hcmdpbjogMjAlIDAgMCAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTRweCkge1xyXG5cclxuICAgIC5oMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC5oMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wIHtcclxuICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgcGFkZGluZzogMCA1JTtcclxuICAgIH1cclxuXHJcbiAgICBpZnJhbWUge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5icmFuZF9pbWFnZSB7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUgLTUwJSk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTAlIDA7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNDBweCkgYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcblxyXG4gICAgLmgxIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAucCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNSU7XHJcbiAgICB9XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYnJhbmRfaW1hZ2Uge1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlIC01MCUpO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwJSAwO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAyMzlweCkge1xyXG5cclxuICAgIC5oMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjRlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmcmFtZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmJyYW5kX2ltYWdlIHtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSAtNTAlKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuXHJcbiAgICB9XHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMyNDI0O1xufVxuXG5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEwJTtcbiAgdG9wOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAgMCAxMCUgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjY2NjO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMzBweDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbmJ1dHRvbjpob3ZlcjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuLm1vZGVsIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG5cbmEge1xuICBmb250LXNpemU6IDFlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cblxuaDEge1xuICBwYWRkaW5nOiA1JSAwO1xuICBmb250LWZhbWlseTogXCJmb250MVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnAge1xuICBwYWRkaW5nOiA1JSAyJTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5icmFuZF9pbWFnZSB7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogMTAlIDAgMCAwO1xufVxuXG4udGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRleHQgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBmb250LXNpemU6IDFlbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDBweDtcbn1cblxuLnZpZGVvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICBidXR0b24ge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgYSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NjhweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuYnJhbmRfaW1hZ2Uge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlIC01MCUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLmgxIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gIC5wIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuXG4gIGlmcmFtZSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5NTRweCkge1xuICAuaDEge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgLnAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG5cbiAgaWZyYW1lIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oMSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLnAge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgcGFkZGluZzogMCA1JTtcbiAgfVxuXG4gIGlmcmFtZSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxuXG4gIC5icmFuZF9pbWFnZSB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMCUgLTUwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiAwIDAgMTAlIDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI0MHB4KSBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLmgxIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuXG4gIC5wIHtcbiAgICBmb250LXNpemU6IDAuNmVtO1xuICAgIHBhZGRpbmc6IDAgNSU7XG4gIH1cblxuICBpZnJhbWUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cblxuICAuYnJhbmRfaW1hZ2Uge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjAlIC01MCUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMCAwIDEwJSAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyMDBweCkgYW5kIChtYXgtd2lkdGg6IDIzOXB4KSB7XG4gIC5oMSB7XG4gICAgZm9udC1zaXplOiAwLjVyZW07XG4gIH1cblxuICAucCB7XG4gICAgZm9udC1zaXplOiAwLjRlbTtcbiAgICBwYWRkaW5nOiAwIDUlO1xuICB9XG5cbiAgaWZyYW1lIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICB9XG5cbiAgLmJyYW5kX2ltYWdlIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSAtNTAlKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG59Il19 */"]
      });
      return BrandingComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/main/contact-main/contact-main.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/main/contact-main/contact-main.component.ts ***!
    \************************************************************************/

  /*! exports provided: ContactMainComponent */

  /***/
  function srcAppComponentsMainContactMainContactMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMainComponent", function () {
      return ContactMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactMainComponent = /*@__PURE__*/function () {
      var ContactMainComponent = /*#__PURE__*/function () {
        function ContactMainComponent() {
          _classCallCheck(this, ContactMainComponent);
        }

        _createClass(ContactMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactMainComponent;
      }();

      ContactMainComponent.ɵfac = function ContactMainComponent_Factory(t) {
        return new (t || ContactMainComponent)();
      };

      ContactMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactMainComponent,
        selectors: [["app-contact-main"]],
        decls: 81,
        vars: 0,
        consts: [[1, "sec"], [1, "content"], [1, "container"], [1, "row"], [1, "text-center"], [1, "social"], ["href", "https://wa.me/+40748489982"], ["viewBox", "0 0 512 512", "fill", "#000", "width", "5.5em", "height", "5.5em", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m123.832031 475.464844c39.558594 23.804687 84.789063 36.351562 131.261719 36.351562 140.824219 0 256.90625-114.914062 256.90625-255.910156 0-140.832031-115.917969-255.90625-256.90625-255.90625-140.558594 0-254.910156 114.800781-254.910156 255.90625 0 47.09375 12.550781 92.667969 36.351562 132.257812l-36.535156 123.835938zm-93.65625-219.558594c0-124.570312 100.898438-225.917969 224.917969-225.917969 125.121094 0 226.917969 101.347657 226.917969 225.917969 0 124.574219-101.796875 225.917969-226.917969 225.917969-43.054688 0-84.894531-12.195313-120.984375-35.273438l-5.765625-3.683593-83.988281 24.78125 24.777343-83.992188-3.683593-5.761719c-23.078125-36.097656-35.273438-78.277343-35.273438-121.988281zm0 0"], ["d", "m124.628906 208.753906c4.953125 26.011719 19.65625 76.042969 62.464844 118.851563 42.808594 42.808593 92.839844 57.515625 118.855469 62.46875 29.789062 5.671875 73.503906 6.527343 94.867187-14.835938l11.910156-11.910156c6.011719-6.011719 9.324219-14.007813 9.324219-22.511719s-3.3125-16.496094-9.324219-22.507812l-47.628906-47.628906c-6.015625-6.015626-14.007812-9.324219-22.511718-9.324219-8.503907 0-16.496094 3.308593-22.511719 9.324219l-11.90625 11.90625c-7.273438 7.273437-21.003907 7.304687-28.332031.089843l-47.507813-49.5c-.070313-.074219-.140625-.148437-.214844-.21875-7.285156-7.285156-7.285156-19.140625 0-26.425781l11.90625-11.90625c12.445313-12.445312 12.445313-32.582031 0-45.023438l-47.628906-47.628906c-12.410156-12.410156-32.605469-12.410156-45.019531 0l-11.90625 11.910156v-.003906c-17.050782 17.054688-22.734375 53.40625-14.835938 94.875zm36.042969-73.664062c12.5-12.214844 11.832031-12.449219 13.210937-12.449219.472657 0 .945313.179687 1.304688.539063 50.1875 50.457031 48.171875 47.492187 48.171875 48.9375 0 .503906-.183594.945312-.539063 1.304687l-11.910156 11.90625c-18.964844 18.964844-19.039062 49.664063-.121094 68.714844l47.535157 49.53125c.074219.070312.144531.144531.21875.21875 18.960937 18.960937 51.808593 19.023437 70.832031 0l11.90625-11.90625c.71875-.71875 1.890625-.71875 2.609375 0 50.1875 50.453125 48.171875 47.488281 48.171875 48.933593 0 .507813-.183594.945313-.539062 1.304688l-11.910157 11.90625c-8.160156 8.160156-34.152343 13.042969-68.054687 6.585938-22.625-4.3125-66.128906-17.085938-103.257813-54.214844-37.128906-37.128906-49.902343-80.632813-54.210937-103.257813-6.460938-33.902343-1.578125-59.898437 6.582031-68.054687zm0 0"], ["target", "_blank", "href", "https://www.facebook.com/Visioonwebsites-100464558721297"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", "width", "5.5em", "height", "5.5em", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 167.657 167.657", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 167.657 167.657"], ["d", "M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626\n                   v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006\n                   c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154\n                   C167.657,37.881,130.125,0.349,83.829,0.349z", 2, "fill", "#010002"], ["target", "_blank", "href", "https://www.youtube.com/channel/UCN-Zw1CnhKuuAod70MlDAfw"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", "fill", "#000", "width", "5.5em", "height", "5.5em", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 461.001 461.001", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 461.001 461.001"], ["d", "M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728\n                                c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137\n                                C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607\n                                c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z", 2, "fill", "#000000"], ["method", "POST", "action", "https://formsubmit.co/andrei0292@gmail.com"], [1, "row", "input-container"], [1, "col-xs-12"], [1, "styled-input", "wide"], ["type", "text", "name", "name", "required", ""], [1, "col-md-6", "col-sm-12", "col-xs-12"], ["id", "mail", 1, "styled-input"], ["type", "text", "name", "email", "required", ""], ["id", "nr", 1, "styled-input"], ["type", "text", "name", "number", "required", ""], ["name", "message", "required", ""], [1, "actions"], ["type", "submit", "value", "Trimite mesaj", 1, "btn-lrg", "submit-btn"]],
        template: function ContactMainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vre\u021Bi s\u0103 discut\u0103m ? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "g");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Nume");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Numar de telefon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "textarea", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Mesaj");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.sec[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.sec[_ngcontent-%COMP%]   #myVideo[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 0;\n  background-color: rgba(255, 0, 0, 0.06);\n}\n.sec[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  position: absolute;\n  z-index: 0;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"font1\", \"Poppins\", sans-serif, \"arial\";\n  font-weight: 200;\n  font-size: 72px;\n  color: black;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  font-size: 20px;\n  color: #ffffff;\n  line-height: 1.5;\n}\n.social[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  filter: invert(1);\n  transform: scale(0.5);\n  transition: 0.5s;\n}\n.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(0.5) translateY(-15px);\n}\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\ninput[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:valid    ~ label[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 400;\n  color: #999;\n  top: 2px;\n  transition: all 0.225s ease;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.styled-input[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px;\n  padding: 10px;\n}\n.styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #999;\n  padding: 1rem 30px;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  transition: all 0.25s ease;\n  pointer-events: none;\n}\n.styled-input.wide[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100%;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n  border: 0;\n  width: 100%;\n  font-size: 1rem;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  background-color: #2d2d2d;\n  color: white;\n  border-radius: 4px;\n}\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\ninput[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: all 0.075s ease;\n}\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 15em;\n}\n.input-container[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100vw;\n  margin: 20px auto 25px auto;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  padding: 7px 35px;\n  border-radius: 60px;\n  display: inline-block;\n  background-color: #fb2323;\n  color: white;\n  font-size: 18px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  cursor: pointer;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n}\n.submit-btn[_ngcontent-%COMP%]:hover {\n  letter-spacing: 2px;\n  font-weight: 400;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);\n}\ninput[type=checkbox][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-style: italic;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: #f00;\n  font-style: normal;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n@media only screen and (min-width: 724px) and (max-width: 767px) {\n  .sec[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    min-height: 150vh;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-family: \"Poppins\", sans-serif, \"arial\";\n    font-weight: 600;\n    font-size: 2.5em;\n    color: white;\n    text-align: center;\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif, \"arial\";\n    font-weight: 400;\n    font-size: 1em;\n    color: #9b9b9b;\n    line-height: 1.5;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    bottom: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    filter: invert(1);\n    transform: scale(0.5);\n    transition: 0.5s;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    transform: scale(0.5) translateY(-15px);\n  }\n\n  .styled-input[_ngcontent-%COMP%] {\n    margin: 0.51rem 0;\n    position: relative;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #999;\n    padding: 0.5rem 30px 0.35rem 30px;\n    position: absolute;\n    top: 10%;\n    width: 60vw;\n    transition: all 0.25s ease;\n    pointer-events: none;\n    position: absolute;\n    left: 10%;\n    transform: translateX(-10%);\n  }\n\n  .styled-input.wide[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    height: auto;\n  }\n\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 0;\n    width: 100%;\n    font-size: 1rem;\n    color: white;\n    border-radius: 4px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 100%;\n  }\n\n  .input-container[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    margin: auto;\n    max-height: 15vh;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n@media screen and (max-width: 723px) {\n  .sec[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    min-height: 100vh;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-family: \"Poppins\", sans-serif, \"arial\";\n    font-weight: 600;\n    font-size: 2.5em;\n    color: white;\n    text-align: center;\n    margin-top: 10%;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-family: \"Roboto\", sans-serif, \"arial\";\n    font-weight: 400;\n    font-size: 1em;\n    color: #9b9b9b;\n    line-height: 1.5;\n  }\n\n  .social[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 10;\n    bottom: 1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style: none;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: inline-block;\n    filter: invert(1);\n    transform: scale(0.5);\n    transition: 0.5s;\n  }\n\n  .social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    transform: scale(0.5) translateY(-15px);\n  }\n\n  .styled-input[_ngcontent-%COMP%] {\n    float: left;\n    width: 90vw;\n    margin: 0.51rem 0;\n    position: relative;\n    border-radius: 4px;\n    padding: 10px;\n  }\n\n  .styled-input[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: #999;\n    padding: 0.5rem 30px 0.35rem 30px;\n    position: absolute;\n    top: 10%;\n    width: 60vw;\n    transition: all 0.25s ease;\n    pointer-events: none;\n    position: absolute;\n    left: 10%;\n    transform: translateX(-10%);\n  }\n\n  .styled-input.wide[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    height: auto;\n  }\n\n  input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n    padding: 10px;\n    border: 0;\n    width: 100%;\n    font-size: 1rem;\n    color: white;\n    border-radius: 4px;\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 100%;\n  }\n\n  .input-container[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    margin: auto;\n    max-height: 15vh;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2NvbnRhY3QtbWFpbi9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcVmlzaW9vblxcc2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcY29udGFjdC1tYWluXFxjb250YWN0LW1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9jb250YWN0LW1haW4vY29udGFjdC1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxzREFBQTtBQ0NKO0FEQ0U7RUFDRSxvQkFBQTtFQUNBLHNEQUFBO0FDQ0o7QURHQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDREo7QURJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0RKO0FET0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsdUNBQUE7QUNKSjtBRFFBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNMSjtBRFVFO0VBQ0Usb0RBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDUEo7QURXQTtFQUNJLG1EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUko7QURXQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1RGO0FEWUE7RUFFRSxnQkFBQTtBQ1ZGO0FEWUE7RUFFRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDVkY7QURZQTtFQUVFLHVDQUFBO0FDVkY7QURZQTtFQUNJLHFCQUFBO0FDVEo7QURZQSxzQkFBQTtBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBRUEsMkJBQUE7RUFDQSxtREFBQTtBQ1ZKO0FEYUE7RUFJSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2JKO0FEa0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLDBCQUFBO0VBQ0Esb0JBQUE7QUNmSjtBRGtCQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDZko7QURrQkE7O0VBRUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtREFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDZko7QURrQkE7O0VBQ2lCLFVBQUE7QUNkakI7QURnQkE7O0VBRUksV0FBQTtFQUVBLDJCQUFBO0FDYko7QURnQkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNiSjtBRGdCQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDYko7QURnQkE7RUFFSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7RUFDQSxlQUFBO0VBQ0EsNkVBQUE7RUFHQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRG1CQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyRUFBQTtBQ2hCSjtBRG1CQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0FDaEJKO0FEbUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUNoQko7QURtQkU7RUFDRTtJQUNJLHVCQUFBO0lBQ0EsaUJBQUE7RUNoQk47O0VEbUJFO0lBQ0ksMkNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQ2hCTjs7RURtQkU7SUFDSSwwQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFQ2hCTjs7RURtQkU7SUFFRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUNqQko7O0VEb0JFO0lBRUUsZ0JBQUE7RUNsQko7O0VEb0JFO0lBRUUscUJBQUE7SUFDQSxpQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7RUNsQko7O0VEb0JFO0lBRUUsdUNBQUE7RUNsQko7O0VEc0JFO0lBRUksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtFQ3BCTjs7RUQwQkU7SUFDSSxXQUFBO0lBQ0EsaUNBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBRUEsMEJBQUE7SUFDQSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0VDdkJOOztFRDJCRTtJQUVJLGVBQUE7SUFDQSxZQUFBO0VDekJOOztFRDZCRTs7SUFFSSxhQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBRUEsWUFBQTtJQUNBLGtCQUFBO0VDM0JOOztFRGlDRTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtFQzlCTjs7RURtQ0U7SUFFSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUNqQ047O0VEc0NFO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7RUNuQ047QUFDRjtBRHVDQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSxpQkFBQTtFQ3JDTjs7RUR3Q0U7SUFDSSwyQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDckNOOztFRHdDRTtJQUNJLDBDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDckNOOztFRHdDRTtJQUVFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQ3RDSjs7RUR5Q0U7SUFFRSxnQkFBQTtFQ3ZDSjs7RUR5Q0U7SUFFRSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtFQ3ZDSjs7RUR5Q0U7SUFFRSx1Q0FBQTtFQ3ZDSjs7RUQyQ0U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUN4Q047O0VEOENFO0lBQ0ksV0FBQTtJQUNBLGlDQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUVBLDBCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSwyQkFBQTtFQzNDTjs7RUQrQ0U7SUFFSSxlQUFBO0lBQ0EsWUFBQTtFQzdDTjs7RURpREU7O0lBRUksYUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUVBLFlBQUE7SUFDQSxrQkFBQTtFQy9DTjs7RURxREU7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7RUNsRE47O0VEdURFO0lBRUksZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0VDckROOztFRDBERTtJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0VDdkROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vY29udGFjdC1tYWluL2NvbnRhY3QtbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250MSc7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250OS5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgfVxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250Mic7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250My5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgfVxyXG5cclxuXHJcbip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG4uc2Vje1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBcclxuICAgIFxyXG4gICAgXHJcblxyXG59XHJcbi5zZWMgI215VmlkZW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4wNik7XHJcbiAgfVxyXG5cclxuICBcclxuLnNlYyAgLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlOyAgICAgIFxyXG4gICAgei1pbmRleDogMDtcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5Oidmb250MScsICdQb3BwaW5zJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG5cclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6J2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4uc29jaWFsXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxufVxyXG4uc29jaWFsIGxpXHJcbntcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5zb2NpYWwgbGkgYVxyXG57XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmaWx0ZXI6IGludmVydCgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uc29jaWFsIGxpIGE6aG92ZXJcclxue1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKC0xNXB4KTtcclxufVxyXG51bCxsaXtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG59XHJcblxyXG4vKiAvLy8vLyBpbnB1dHMgLy8vLy8qL1xyXG5cclxuaW5wdXQ6Zm9jdXMgfiBsYWJlbCwgdGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCwgaW5wdXQ6dmFsaWQgfiBsYWJlbCwgdGV4dGFyZWE6dmFsaWQgfiBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjIyNXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjIyNXMgZWFzZTtcclxuICAgIGZvbnQtZmFtaWx5Oidmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG59XHJcblxyXG4uc3R5bGVkLWlucHV0IHtcclxuICAgIC8vIGZsb2F0OiBsZWZ0O1xyXG4gICAgLy8gd2lkdGg6IDI5M3B4O1xyXG4gICAgLy8gbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5zdHlsZWQtaW5wdXQgbGFiZWwge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDMwcHggO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc3R5bGVkLWlucHV0LndpZGUgeyBcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6J2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQyZDJkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMgeyBvdXRsaW5lOiAwOyB9XHJcblxyXG5pbnB1dDpmb2N1cyB+IHNwYW4sXHJcbnRleHRhcmVhOmZvY3VzIH4gc3BhbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMDc1cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDc1cyBlYXNlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDE1ZW07XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDI1cHggYXV0bztcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogN3B4IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiMjMyMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5Oidmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwwLjA2KSxcclxuICAgICAgICAgICAgICAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjA3KTtcclxuICAgIFxyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0bjpob3ZlciB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xMCksXHJcbiAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwwLjA5KTtcclxufVxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsIHtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1mYW1pbHk6J2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgfSBcclxuICBcclxuICBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LWZhbWlseTonZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4td2lkdGg6IDcyNHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLnNlY3tcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTB2aDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc29jaWFsXHJcbiAgICB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIGJvdHRvbTogMWVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuc29jaWFsIGxpXHJcbiAgICB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsIGxpIGFcclxuICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbCBsaSBhOmhvdmVyXHJcbiAgICB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnN0eWxlZC1pbnB1dCB7XHJcbiAgICBcclxuICAgICAgICBtYXJnaW46IDAuNTFyZW0gMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC5zdHlsZWQtaW5wdXQgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAzMHB4IDAuMzVyZW0gMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgd2lkdGg6IDYwdnc7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3R5bGVkLWlucHV0LndpZGUgeyBcclxuICAgICAgICBcclxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnB1dCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1heC13aWR0aDogOTB2dztcclxuICAgICAgICBtYXJnaW46ICBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dmg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgIC5zdWJtaXQtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjNweCkge1xyXG4gICAgLnNlY3tcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICBjb2xvcjogIzliOWI5YjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc29jaWFsXHJcbiAgICB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIGJvdHRvbTogMWVtO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuc29jaWFsIGxpXHJcbiAgICB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsIGxpIGFcclxuICAgIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbCBsaSBhOmhvdmVyXHJcbiAgICB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnN0eWxlZC1pbnB1dCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgbWFyZ2luOiAwLjUxcmVtIDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5zdHlsZWQtaW5wdXQgbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAzMHB4IDAuMzVyZW0gMzBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgd2lkdGg6IDYwdnc7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKTtcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3R5bGVkLWlucHV0LndpZGUgeyBcclxuICAgICAgICBcclxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5wdXQsXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcclxuICAgICAgICBcclxuICAgICAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICAgICAgbWFyZ2luOiAgYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNXZoO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmb250MlwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZm9udDMub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYyAjbXlWaWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjA2KTtcbn1cblxuLnNlYyAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJmb250MVwiLCBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5zb2NpYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc29jaWFsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLnNvY2lhbCBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5zb2NpYWwgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KSB0cmFuc2xhdGVZKC0xNXB4KTtcbn1cblxudWwsIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4vKiAvLy8vLyBpbnB1dHMgLy8vLy8qL1xuaW5wdXQ6Zm9jdXMgfiBsYWJlbCwgdGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCwgaW5wdXQ6dmFsaWQgfiBsYWJlbCwgdGV4dGFyZWE6dmFsaWQgfiBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjOTk5O1xuICB0b3A6IDJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjIyNXMgZWFzZTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuXG4uc3R5bGVkLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdHlsZWQtaW5wdXQgbGFiZWwge1xuICBjb2xvcjogIzk5OTtcbiAgcGFkZGluZzogMXJlbSAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc3R5bGVkLWlucHV0LndpZGUge1xuICB3aWR0aDogNjUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiBzcGFuLFxudGV4dGFyZWE6Zm9jdXMgfiBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMDc1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4wNzVzIGVhc2U7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDE1ZW07XG59XG5cbi5pbnB1dC1jb250YWluZXIge1xuICB3aWR0aDogNjUwcHg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG1hcmdpbjogMjBweCBhdXRvIDI1cHggYXV0bztcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiA3cHggMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmIyMzIzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3VibWl0LWJ0bjpob3ZlciB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA5KTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsIHtcbiAgY29sb3I6ICNmMDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyNHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNlYyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWluLWhlaWdodDogMTUwdmg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLnNvY2lhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5zb2NpYWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICAuc29jaWFsIGxpIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIC5zb2NpYWwgbGkgYTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dCB7XG4gICAgbWFyZ2luOiAwLjUxcmVtIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dCBsYWJlbCB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgcGFkZGluZzogMC41cmVtIDMwcHggMC4zNXJlbSAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwJTtcbiAgICB3aWR0aDogNjB2dztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dC53aWRlIHtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5pbnB1dC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LWhlaWdodDogMTV2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIzcHgpIHtcbiAgLnNlYyB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICB9XG5cbiAgaDQge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLnNvY2lhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5zb2NpYWwgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICAuc29jaWFsIGxpIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIC5zb2NpYWwgbGkgYTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWFyZ2luOiAwLjUxcmVtIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dCBsYWJlbCB7XG4gICAgY29sb3I6ICM5OTk7XG4gICAgcGFkZGluZzogMC41cmVtIDMwcHggMC4zNXJlbSAzMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwJTtcbiAgICB3aWR0aDogNjB2dztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xuICB9XG5cbiAgLnN0eWxlZC1pbnB1dC53aWRlIHtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgaW5wdXQsXG50ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cblxuICB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5pbnB1dC1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LWhlaWdodDogMTV2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxufSJdfQ== */"]
      });
      return ContactMainComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/main/main-products/main-products.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/main/main-products/main-products.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MainProductsComponent */

  /***/
  function srcAppComponentsMainMainProductsMainProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainProductsComponent", function () {
      return MainProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainProductsComponent = /*@__PURE__*/function () {
      var MainProductsComponent = /*#__PURE__*/function () {
        function MainProductsComponent() {
          _classCallCheck(this, MainProductsComponent);
        }

        _createClass(MainProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// const left = document.querySelector('.stanga');
            // const right = document.querySelector('.dreapta');
            // const container = document.querySelector('.cont');
            // left.addEventListener('mouseenter', () => container.classList.add('hover_stanga'));
            // left.addEventListener('mouseleave', () => container.classList.remove('hover_stanga'));
            // right.addEventListener('mouseenter', () => container.classList.add('hover_dreapta'));
            // right.addEventListener('mouseleave', () => container.classList.remove('hover_dreapta'));
            // function btnClick() {
            //   this.router.navigateByUrl('/flyer');
            // };
          }
        }]);

        return MainProductsComponent;
      }();

      MainProductsComponent.ɵfac = function MainProductsComponent_Factory(t) {
        return new (t || MainProductsComponent)();
      };

      MainProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainProductsComponent,
        selectors: [["app-main-products"]],
        decls: 0,
        vars: 0,
        template: function MainProductsComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXByb2R1Y3RzL21haW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      return MainProductsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/components/main/about/about.component.ts");
    /* harmony import */


    var _branding_branding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./branding/branding.component */
    "./src/app/components/main/branding/branding.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contact-main/contact-main.component */
    "./src/app/components/main/contact-main/contact-main.component.ts");

    var MainComponent = /*@__PURE__*/function () {
      var MainComponent = /*#__PURE__*/function () {
        function MainComponent() {
          _classCallCheck(this, MainComponent);
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var Messenger = function Messenger(el) {
              'use strict';

              var m = this;

              m.init = function () {
                m.codeletters = "&#*+%?£@§$";
                m.message = 0;
                m.current_length = 0;
                m.fadeBuffer = false;
                m.messages = ['VISIOONWEBSITES', 'BLACKFRIDAY', '-50% PORTOFOLII', '-50% SITE-URI', '-50% LOGO'];
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
                } else {
                  setTimeout(m.animateFadeBuffer, 20);
                }
              };

              m.animateFadeBuffer = function () {
                if (m.fadeBuffer === false) {
                  m.fadeBuffer = [];

                  for (var i = 0; i < m.messages[m.message].length; i++) {
                    m.fadeBuffer.push({
                      c: Math.floor(Math.random() * 12) + 1,
                      l: m.messages[m.message].charAt(i)
                    });
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
                  } else {
                    message += fader.l;
                  }
                }

                jquery__WEBPACK_IMPORTED_MODULE_1__(el).html(message);

                if (do_cycles === true) {
                  setTimeout(m.animateFadeBuffer, 50);
                } else {
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
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)();
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 10,
        vars: 0,
        consts: [[1, "bk"], ["id", "messenger", 1, "container"], ["id", "despre", 1, "despre"], ["id", "branding", 1, "branding"], ["id", "produse", 1, "produse"], ["id", "contact", 1, "contact"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-branding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-contact-main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _branding_branding_component__WEBPACK_IMPORTED_MODULE_3__["BrandingComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"], _contact_main_contact_main_component__WEBPACK_IMPORTED_MODULE_5__["ContactMainComponent"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.bk[_ngcontent-%COMP%] {\n  background-image: url(/assets/img/bk1.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  color: #fff;\n  text-align: center;\n  max-width: 100vw;\n  font-weight: 700;\n  overflow: hidden;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n  min-height: 100vh;\n}\n#messenger[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-size: 4em;\n  white-space: nowrap;\n  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);\n  color: #fff;\n}\n\n.despre[_ngcontent-%COMP%] {\n  min-height: auto;\n  background-color: #3b3b3b;\n}\n.branding[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.produse[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.contact[_ngcontent-%COMP%] {\n  min-height: 120vh;\n  background-color: #d32424;\n  color: #fff;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n@media screen and (min-width: 401px) and (max-width: 667px) {\n  #messenger[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n}\n@media screen and (max-width: 400px) {\n  #messenger[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media screen and (max-width: 800px) {\n  .contact[_ngcontent-%COMP%] {\n    min-height: 150vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxWaXNpb29uXFxzaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0RBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7RUFDQSxzREFBQTtBQ0FGO0FER0E7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDREY7QURJQTtFQUVFLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBRUEsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtFQUNBLGlCQUFBO0FDSEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxXQUFBO0FDTEY7QUR5Q0E7a0RBQUE7QUFZQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7QUNoREY7QURvREE7RUFDRSxnQkFBQTtBQ2pERjtBRG9EQTtFQUNFLGFBQUE7QUNqREY7QURvREE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1EQUFBO0FDakRGO0FEcURBO0VBRUU7SUFFRSxnQkFBQTtFQ3BERjtBQUNGO0FENERBO0VBRUU7SUFFRSxnQkFBQTtFQzVERjtBQUNGO0FEaUVBO0VBRUU7SUFDRSxpQkFBQTtFQ2hFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ2ZvbnQxJztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250OS5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDInO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmJrIHtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2JrMS5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3NmRlZywgcmdiYSg2Miw2Miw2MiwxKSAwJSwgcmdiYSg4MCw2MCw2MCwxKSAyNSUsIHJnYmEoMTI5LDY1LDY1LDEpIDUwJSwgcmdiYSgxODQsMzYsMzYsMSkgNzUlLCByZ2JhKDI1NSwwLDAsMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1mYW1pbHk6ICdmb250MScsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cclxuXHJcbn1cclxuXHJcbiNtZXNzZW5nZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKCMwMDAsIDAuOSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8vICNmbHktaW4ge1xyXG4vLyAgICAgZm9udC1zaXplOiA0ZW07XHJcbi8vICAgICBtYXJnaW46IDQwdmggYXV0bztcclxuLy8gICAgIGhlaWdodDogMjB2aDsgXHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyAgIH1cclxuXHJcbi8vICNmbHktaW4gc3BhbiB7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgZm9udC1zaXplOiAuNGVtO1xyXG4vLyAgIG9wYWNpdHk6IC44O1xyXG4vLyAgIG1hcmdpbi10b3A6IDJlbTtcclxuLy8gfVxyXG5cclxuLy8gI2ZseS1pbiBkaXYge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuXHJcbi8vICAgICAgbWFyZ2luOiAydmggMDtcclxuLy8gICAgICBvcGFjaXR5OiAwO1xyXG4vLyAgICAgIGxlZnQ6IDEwdnc7XHJcbi8vICAgICAgd2lkdGg6IDgwdnc7XHJcbi8vICAgICAgYW5pbWF0aW9uOiBzd2l0Y2ggMjRzIGxpbmVhciBpbmZpbml0ZTtcclxuLy8gICAgICAubG9nb3tcclxuLy8gICAgICAgIHdpZHRoOiA1MDBweDtcclxuLy8gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbi8vICAgICAgfVxyXG4vLyAgICB9XHJcblxyXG4vLyAjZmx5LWluIGRpdjpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IDRzfVxyXG4vLyAjZmx5LWluIGRpdjpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDhzfVxyXG4vLyAjZmx5LWluIGRpdjpudGgtY2hpbGQoNCkgeyBhbmltYXRpb24tZGVsYXk6IDEyc31cclxuLy8gI2ZseS1pbiBkaXY6bnRoLWNoaWxkKDUpIHsgYW5pbWF0aW9uLWRlbGF5OiAxNnN9XHJcbi8vICNmbHktaW4gZGl2Om50aC1jaGlsZCg2KSB7IGFuaW1hdGlvbi1kZWxheTogMjBzfVxyXG4vKiAjZmx5LWluIGRpdjpudGgtY2hpbGQoNykgeyBhbmltYXRpb24tZGVsYXk6IDI0c31cclxuI2ZseS1pbiBkaXY6bnRoLWNoaWxkKDgpIHsgYW5pbWF0aW9uLWRlbGF5OiAyOHN9ICovXHJcblxyXG4vLyBAa2V5ZnJhbWVzIHN3aXRjaCB7XHJcbi8vICAgICAwJSB7IG9wYWNpdHk6IDA7ZmlsdGVyOiBibHVyKDIwcHgpOyB0cmFuc2Zvcm06c2NhbGUoMTIpfVxyXG4vLyAgICAgMyUgeyBvcGFjaXR5OiAxO2ZpbHRlcjogYmx1cigwKTsgdHJhbnNmb3JtOnNjYWxlKDEpfVxyXG4vLyAgICAgMTAlIHsgb3BhY2l0eTogMTtmaWx0ZXI6IGJsdXIoMCk7IHRyYW5zZm9ybTpzY2FsZSguOSl9XHJcbi8vICAgICAxMyUgeyBvcGFjaXR5OiAwO2ZpbHRlcjogYmx1cigxMHB4KTsgdHJhbnNmb3JtOnNjYWxlKC4xKX1cclxuLy8gICAgIDgwJSB7IG9wYWNpdHk6IDB9XHJcbi8vICAgICAxMDAlIHsgb3BhY2l0eTogMH1cclxuLy8gfVxyXG4vLyBhYm91dCB1cyBcclxuLmRlc3ByZSB7XHJcbiAgbWluLWhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XHJcblxyXG59XHJcblxyXG4uYnJhbmRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5wcm9kdXNlIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uY29udGFjdCB7XHJcbiAgbWluLWhlaWdodDogMTIwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMzYsIDM2KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDY2N3B4KSB7XHJcblxyXG4gICNtZXNzZW5nZXIge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblxyXG4gICNtZXNzZW5nZXIge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblxyXG4gIC5jb250YWN0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHZoO1xyXG5cclxuICB9XHJcblxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9mb250OS5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5iayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9iazEuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJmb250MVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jbWVzc2VuZ2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXNpemU6IDRlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKiAjZmx5LWluIGRpdjpudGgtY2hpbGQoNykgeyBhbmltYXRpb24tZGVsYXk6IDI0c31cbiNmbHktaW4gZGl2Om50aC1jaGlsZCg4KSB7IGFuaW1hdGlvbi1kZWxheTogMjhzfSAqL1xuLmRlc3ByZSB7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XG59XG5cbi5icmFuZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5wcm9kdXNlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNvbnRhY3Qge1xuICBtaW4taGVpZ2h0OiAxMjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMjQyNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiA2NjdweCkge1xuICAjbWVzc2VuZ2VyIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAjbWVzc2VuZ2VyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29udGFjdCB7XG4gICAgbWluLWhlaWdodDogMTUwdmg7XG4gIH1cbn0iXX0= */"]
      });
      return MainComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*@__PURE__*/function () {
      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var open_btn = document.querySelector('.open-btn');
            var close_btn = document.querySelector('.close-btn');
            var link_acasa = document.querySelector('.link_acasa');
            var link_despre = document.querySelector('.link_despre');
            var link_produse = document.querySelector('.link_produse');
            var link_contact = document.querySelector('.link_contact');
            var nav = document.querySelectorAll('.nav');
            open_btn.addEventListener('click', function () {
              nav.forEach(function (nav_el) {
                return nav_el.classList.add('visible');
              });
            });
            close_btn.addEventListener('click', function () {
              nav.forEach(function (nav_el) {
                return nav_el.classList.remove('visible');
              });
            });
            link_acasa.addEventListener('click', function () {
              nav.forEach(function (nav_el) {
                return nav_el.classList.remove('visible');
              });
            });
            link_despre.addEventListener('click', function () {
              nav.forEach(function (nav_el) {
                return nav_el.classList.remove('visible');
              });
            });
            link_produse.addEventListener('click', function () {
              nav.forEach(function (nav_el) {
                return nav_el.classList.remove('visible');
              });
            });
            link_contact.addEventListener('click', function () {
              nav.forEach(function (nav_el) {
                return nav_el.classList.remove('visible');
              });
            });
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 24,
        vars: 0,
        consts: [[1, "nav-btn", "open-btn"], [1, "bi", "bi-list"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-list"], ["fill-rule", "evenodd", "d", "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"], [1, "nav", "nav-black"], [1, "nav", "active", "nav-red"], [1, "nav", "nav-white"], [1, "nav-btn", "close-btn"], ["src", "/assets/img/VISIOON1.png", "alt", "logo", 1, "logo"], [1, "list"], ["routerLink", "/", 1, "link_acasa"], ["routerLink", "/about", 1, "link_despre"], ["routerLink", "/products", 1, "link_produse"], ["routerLink", "/contact", 1, "link_contact"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " X \xCEnchide ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Acas\u0103");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Despre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Servicii");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n}\n\n.body[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 350px;\n  max-height: 300px;\n}\n\n.nav-btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  font-size: 30px;\n  color: aliceblue;\n}\n\n.open-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  z-index: 10;\n}\n\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  transform: translateX(-100%);\n  transition: transform 0.3s ease-in-out;\n  z-index: 10;\n}\n\n.nav.visible[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.nav-black[_ngcontent-%COMP%] {\n  background-color: #333;\n  width: 60%;\n  max-width: 480px;\n  min-width: 320px;\n  transition-delay: 0.4s;\n}\n\n.nav-black.visible[_ngcontent-%COMP%] {\n  transition-delay: 0s;\n}\n\n.nav-red[_ngcontent-%COMP%] {\n  background-color: #cc0505;\n  width: 95%;\n  transition-delay: 0.2s;\n}\n\n.nav-red.visible[_ngcontent-%COMP%] {\n  transition-delay: 0.2s;\n}\n\n.nav-white[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 95%;\n  padding: 40px;\n  position: relative;\n  transition-delay: 0s;\n}\n\n.nav-white.visible[_ngcontent-%COMP%] {\n  transition-delay: 0.4s;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  right: 30px;\n  color: black;\n}\n\n.list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  text-decoration: none;\n  text-transform: uppercase;\n}\n\n.list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding-left: 20px;\n}\n\n@media screen and (min-width: 451px) and (max-width: 550px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 15px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 90vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 250px;\n    max-height: 200px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 551px) and (max-width: 767px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 15px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 250px;\n    max-height: 200px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 351px) and (max-width: 450px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 15px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 250px;\n    max-height: 200px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media screen and (min-width: 301px) and (max-width: 350px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 19px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 250px;\n    max-height: 200px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@media screen and (min-width: 241px) and (max-width: 300px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 15px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 200px;\n    max-height: 150px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n@media screen and (max-width: 240px) {\n  .nav-btn[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .close-btn[_ngcontent-%COMP%] {\n    left: 10px;\n  }\n\n  .nav-black[_ngcontent-%COMP%] {\n    min-width: 100vw;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    max-width: 150px;\n    max-height: 100px;\n  }\n\n  .list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUG9ydG9mb2xpdUFuZ3VsYXJcXFZpc2lvb25cXHNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNDRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURNQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0Usd0JBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0Usb0JBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDSEY7O0FETUE7RUFDRSxzQkFBQTtBQ0hGOztBRE1BO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtBQ0pGOztBRE9BO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURPQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUVFO0lBRUUsZUFBQTtFQ05GOztFRFdBO0lBQ0UsVUFBQTtFQ1JGOztFRFdBO0lBRUUsZUFBQTtFQ1RGOztFRGVBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDWkY7O0VEZ0JBO0lBQ0UsZUFBQTtFQ2JGO0FBQ0Y7O0FEZ0JBO0VBRUU7SUFFRSxlQUFBO0VDaEJGOztFRHFCQTtJQUNFLFVBQUE7RUNsQkY7O0VENkJBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDMUJGOztFRDhCQTtJQUNFLGVBQUE7RUMzQkY7QUFDRjs7QUQ4QkE7RUFFRTtJQUVFLGVBQUE7RUM5QkY7O0VEbUNBO0lBQ0UsVUFBQTtFQ2hDRjs7RURtQ0E7SUFFRSxnQkFBQTtFQ2pDRjs7RUR1Q0E7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUNwQ0Y7O0VEd0NBO0lBQ0UsZUFBQTtFQ3JDRjtBQUNGOztBRHdDQTtFQUVFO0lBRUUsZUFBQTtFQ3hDRjs7RUQ2Q0E7SUFDRSxVQUFBO0VDMUNGOztFRDZDQTtJQUVFLGdCQUFBO0VDM0NGOztFRGlEQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQzlDRjs7RURrREE7SUFDRSxlQUFBO0VDL0NGO0FBQ0Y7O0FEa0RBO0VBRUU7SUFFRSxlQUFBO0VDbERGOztFRHVEQTtJQUNFLFVBQUE7RUNwREY7O0VEdURBO0lBRUUsZ0JBQUE7RUNyREY7O0VEMkRBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDeERGOztFRDREQTtJQUNFLGVBQUE7RUN6REY7QUFDRjs7QUQ2REE7RUFFRTtJQUVFLGVBQUE7RUM3REY7O0VEa0VBO0lBQ0UsVUFBQTtFQy9ERjs7RURrRUE7SUFFRSxnQkFBQTtFQ2hFRjs7RURvRUE7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUNqRUY7O0VEcUVBO0lBQ0UsZUFBQTtFQ2xFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5sb2dvIHtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG5cclxufVxyXG5cclxuLm5hdi1idG4ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5vcGVuLWJ0biB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMzBweDtcclxuICBsZWZ0OiAzMHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubmF2LnZpc2libGUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLm5hdi1ibGFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICB3aWR0aDogNjAlO1xyXG4gIG1heC13aWR0aDogNDgwcHg7XHJcbiAgbWluLXdpZHRoOiAzMjBweDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4ubmF2LWJsYWNrLnZpc2libGUge1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG59XHJcblxyXG4ubmF2LXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgNSwgNSk7XHJcbiAgd2lkdGg6IDk1JTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG59XHJcblxyXG4ubmF2LXJlZC52aXNpYmxlIHtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG59XHJcblxyXG4ubmF2LXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxufVxyXG5cclxuLm5hdi13aGl0ZS52aXNpYmxlIHtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG5cclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5saXN0IGxpIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLmxpc3QgbGkgYSB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubGlzdCB1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUxcHgpIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG5cclxuICAubmF2LWJ0biB7XHJcblxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICAuY2xvc2UtYnRuIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWJsYWNrIHtcclxuXHJcbiAgICBtaW4td2lkdGg6IDkwdnc7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICAubG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5saXN0IGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAubmF2LWJ0biB7XHJcblxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICAuY2xvc2UtYnRuIHtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAvLyAubmF2LWJsYWNre1xyXG5cclxuICAvLyAgIG1pbi13aWR0aDogNTB2dztcclxuXHJcbiAgLy8gfVxyXG5cclxuXHJcblxyXG4gIC5sb2dvIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmxpc3QgbGkgYSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNTFweCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcblxyXG4gIC5uYXYtYnRuIHtcclxuXHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC5jbG9zZS1idG4ge1xyXG4gICAgbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIC5uYXYtYmxhY2sge1xyXG5cclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICAubG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5saXN0IGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAxcHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG5cclxuICAubmF2LWJ0biB7XHJcblxyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICAuY2xvc2UtYnRuIHtcclxuICAgIGxlZnQ6IDE5cHg7XHJcbiAgfVxyXG5cclxuICAubmF2LWJsYWNrIHtcclxuXHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG5cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgfVxyXG5cclxuICAubGlzdCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuXHJcbiAgLm5hdi1idG4ge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWJ0biB7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1ibGFjayB7XHJcblxyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5sb2dvIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmxpc3QgbGkgYSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjQwcHgpIHtcclxuXHJcbiAgLm5hdi1idG4ge1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLmNsb3NlLWJ0biB7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1ibGFjayB7XHJcblxyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuXHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5saXN0IGxpIGEge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufSIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubG9nbyB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ubmF2LWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYWxpY2VibHVlO1xufVxuXG4ub3Blbi1idG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ubmF2LnZpc2libGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5uYXYtYmxhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICB3aWR0aDogNjAlO1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4ubmF2LWJsYWNrLnZpc2libGUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cblxuLm5hdi1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwNTA1O1xuICB3aWR0aDogOTUlO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4ubmF2LXJlZC52aXNpYmxlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLm5hdi13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuXG4ubmF2LXdoaXRlLnZpc2libGUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5saXN0IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGlzdCBsaSB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4ubGlzdCBsaSBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubGlzdCB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTFweCkgYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5uYXYtYnRuIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICBsZWZ0OiAxNXB4O1xuICB9XG5cbiAgLm5hdi1ibGFjayB7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5saXN0IGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2LWJ0biB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgLmNsb3NlLWJ0biB7XG4gICAgbGVmdDogMTVweDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gIH1cblxuICAubGlzdCBsaSBhIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM1MXB4KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLm5hdi1idG4ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIC5jbG9zZS1idG4ge1xuICAgIGxlZnQ6IDE1cHg7XG4gIH1cblxuICAubmF2LWJsYWNrIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5saXN0IGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAxcHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAubmF2LWJ0biB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5cbiAgLmNsb3NlLWJ0biB7XG4gICAgbGVmdDogMTlweDtcbiAgfVxuXG4gIC5uYXYtYmxhY2sge1xuICAgIG1pbi13aWR0aDogMTAwdnc7XG4gIH1cblxuICAubG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLmxpc3QgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5uYXYtYnRuIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICBsZWZ0OiAxNXB4O1xuICB9XG5cbiAgLm5hdi1ibGFjayB7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMTUwcHg7XG4gIH1cblxuICAubGlzdCBsaSBhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC5uYXYtYnRuIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuY2xvc2UtYnRuIHtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG5cbiAgLm5hdi1ibGFjayB7XG4gICAgbWluLXdpZHRoOiAxMDB2dztcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gIH1cblxuICAubGlzdCBsaSBhIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn0iXX0= */"]
      });
      return NavbarComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/products/grafica/banner/banner.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/products/grafica/banner/banner.component.ts ***!
    \************************************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppComponentsProductsGraficaBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BannerComponent = /*@__PURE__*/function () {
      var BannerComponent = /*#__PURE__*/function () {
        function BannerComponent() {
          _classCallCheck(this, BannerComponent);
        }

        _createClass(BannerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BannerComponent;
      }();

      BannerComponent.ɵfac = function BannerComponent_Factory(t) {
        return new (t || BannerComponent)();
      };

      BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BannerComponent,
        selectors: [["app-banner"]],
        decls: 38,
        vars: 0,
        consts: [[1, "body"], [1, "row"], [1, "col-md-6", "col-md-12", "text"], [1, "text-center", "titlu"], [1, "text-center"], [1, "col-md-6", "col-md-12", "backButton"], ["routerLink", "/products", 1, "text-center"], [1, "body1"], [1, "col-md-6", "col-md-6", "video"], [1, "text-center", "subtitlu"], ["src", "https://www.youtube.com/embed/Z6WjjJ4krJk", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["src", "https://www.youtube.com/embed/Q6H0FG8Hm3Y", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["src", "https://www.youtube.com/embed/CfL8HKE_q90", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["src", "https://www.youtube.com/embed/ohlfDL4rZvM", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["src", "https://www.youtube.com/embed/LTpicUViQTA", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]],
        template: function BannerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Anima\u021Bii logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Realiz\u0103m anima\u021Bii logo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Vor fi livrate in format mp4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Pret: 30 Euro ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \xCEnapoi la produse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Anima\u021Bie Model 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "iframe", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Anima\u021Bie Model 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "iframe", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Anima\u021Bie Model 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "iframe", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Anima\u021Bie Model 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "iframe", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Anima\u021Bie Model 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "iframe", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  max-height: 100vh;\n  max-width: 100vw;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n.body1[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: auto;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n.row[_ngcontent-%COMP%] {\n  min-height: 60vh;\n}\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 40%;\n  left: 50%;\n  top: 50%;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n}\n.text[_ngcontent-%COMP%]   .titlu[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n  margin-top: 5%;\n}\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.subtitlu[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\niframe[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 80%;\n  left: 50%;\n  transform: translate(-50%);\n  position: relative;\n}\n.backButton[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: red;\n  height: 10%;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  transform: translate(0, -50%);\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  text-decoration: none;\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n  letter-spacing: 4px;\n  font-weight: 800;\n}\n@media screen and (min-width: 150px) and (max-width: 430px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   .titlu[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 1.5em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n    margin-top: 5%;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 430px) and (max-width: 1200px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   .titlu[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 1201px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   .titlu[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 4em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 5px;\n    padding: 20px;\n    line-height: 2em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.2em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 500;\n    letter-spacing: 3px;\n    padding: 10px 20px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 401px) and (max-width: 467px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 400px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 285px) and (max-width: 319px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 250px) and (max-width: 284px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 225px) and (max-width: 249px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (max-width: 224px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2Jhbm5lci9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcVmlzaW9vblxcc2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXGdyYWZpY2FcXGJhbm5lclxcYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0Esc0RBQUE7QUNDSjtBREVBO0VBQ0ksb0JBQUE7RUFDQSxzREFBQTtBQ0FKO0FER0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDREo7QURNQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUNISjtBRE9BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSwyREFBQTtBQ0pKO0FEUUE7RUFDSSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDTEo7QURPSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0VBQ0EsY0FBQTtBQ0xSO0FEU0k7O0VBRUksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtBQ1BSO0FEZUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO0FDWko7QURpQkE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDZEo7QURpQkE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ2RKO0FEZ0JJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLG1EQUFBO0VBQ0EscUJBQUE7QUNkUjtBRGtCSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDaEJSO0FEc0JBO0VBRUk7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDcEJOO0VEdUJNO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNyQlY7RUR5Qk07O0lBRUksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDdkJWO0VENEJNO0lBQ0ksa0JBQUE7RUMxQlY7O0VEOEJFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUMzQk47RUQ2Qk07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDM0JWO0VEK0JNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUM3QlY7QUFDRjtBRGtDQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQ0FBQTtFQ2pDTjtFRG9DTTtJQUNJLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ2xDVjtFRHNDTTs7SUFFSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNwQ1Y7RUR5Q007SUFDSSxrQkFBQTtFQ3ZDVjs7RUQyQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ3hDTjtFRDBDTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUN4Q1Y7RUQ0Q007SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQzFDVjtBQUNGO0FEOENBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDNUNOO0VEK0NNO0lBQ0ksVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDN0NWO0VEaURNOztJQUVJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtFQy9DVjtFRG9ETTtJQUNJLGtCQUFBO0VDbERWOztFRHNERTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDbkROO0VEcURNO0lBQ0ksWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDbkRWO0VEdURNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNyRFY7QUFDRjtBRDBEQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUN4RE47RUQwRE07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDeERWO0VENERNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUMxRFY7QUFDRjtBRCtEQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUM3RE47RUQrRE07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDN0RWO0VEaUVNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUMvRFY7QUFDRjtBRHFFQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUNuRU47RURxRU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDbkVWO0VEdUVNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNyRVY7QUFDRjtBRDBFQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUN4RU47RUQwRU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDeEVWO0VENEVNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUMxRVY7QUFDRjtBRCtFQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUM3RU47RUQrRU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDN0VWO0VEaUZNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUMvRVY7QUFDRjtBRG9GQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUNsRk47RURvRk07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDbEZWO0VEc0ZNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNwRlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvZ3JhZmljYS9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQxJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuJGFjY2VudC1jb2xvcjogcmdiYSgxOTIsIDQsIDQsICk7XHJcblxyXG4uYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYyLCA2MiwgNjIsIDEpIDAlLCByZ2JhKDAsIDAsIDAsIDEpIDEwMCUpO1xyXG5cclxufVxyXG5cclxuLmJvZHkxIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoNjIsIDYyLCA2MiwgMSkgMCUsIHJnYmEoMCwgMCwgMCwgMSkgMTAwJSk7XHJcblxyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgIC50aXRsdSB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ2ZvbnQxJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGgyLFxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLnN1YnRpdGx1IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcblxyXG5cclxufVxyXG5cclxuaWZyYW1lIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFja0J1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xyXG5cclxuXHJcbiAgICAgICAgLnRpdGx1IHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrQnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNDAlKTtcclxuXHJcblxyXG4gICAgICAgIC50aXRsdSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBoMixcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFja0J1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcclxuICAgIC50ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNDAlKTtcclxuXHJcblxyXG4gICAgICAgIC50aXRsdSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYmFja0J1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNDY3cHgpIHtcclxuICAgIC5iYWNrQnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuYmFja0J1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogMjg1cHgpIGFuZCAobWF4LXdpZHRoOiAzMTlweCkge1xyXG4gICAgLmJhY2tCdXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAyODRweCkge1xyXG4gICAgLmJhY2tCdXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogMjI1cHgpIGFuZCAobWF4LXdpZHRoOiAyNDlweCkge1xyXG4gICAgLmJhY2tCdXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNHB4KSB7XHJcbiAgICAuYmFja0J1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmb250MlwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZm9udDMub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMzZTNlM2UgMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4uYm9keTEge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzNlM2UzZSAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi5yb3cge1xuICBtaW4taGVpZ2h0OiA2MHZoO1xufVxuXG4udGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnRleHQgLnRpdGx1IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG4udGV4dCBoMixcbi50ZXh0IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cblxuLnN1YnRpdGx1IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG59XG5cbmlmcmFtZSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogODAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5iYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuLmJhY2tCdXR0b24gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcbiAgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xuICB9XG4gIC50ZXh0IC50aXRsdSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxuICAudGV4dCBoMixcbi50ZXh0IHAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cbiAgLnRleHQgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xuICB9XG5cbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNDAlKTtcbiAgfVxuICAudGV4dCAudGl0bHUge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLFxuLnRleHQgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICAudGV4dCBwIHtcbiAgICBsaW5lLWhlaWdodDogMC44ZW07XG4gIH1cblxuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KSB7XG4gIC50ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNDAlKTtcbiAgfVxuICAudGV4dCAudGl0bHUge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cbiAgLnRleHQgaDIsXG4udGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgfVxuICAudGV4dCBwIHtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gIH1cblxuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNDY3cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI4NXB4KSBhbmQgKG1heC13aWR0aDogMzE5cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1MHB4KSBhbmQgKG1heC13aWR0aDogMjg0cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIyNXB4KSBhbmQgKG1heC13aWR0aDogMjQ5cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNHB4KSB7XG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59Il19 */"]
      });
      return BannerComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/products/grafica/cards/cards.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/products/grafica/cards/cards.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CardsComponent */

  /***/
  function srcAppComponentsProductsGraficaCardsCardsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsComponent", function () {
      return CardsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CardsComponent = /*@__PURE__*/function () {
      var CardsComponent = /*#__PURE__*/function () {
        function CardsComponent() {
          _classCallCheck(this, CardsComponent);
        }

        _createClass(CardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.flip-card').on('click', function () {
              jquery__WEBPACK_IMPORTED_MODULE_1__(this).toggleClass('flipped');
            });
          }
        }]);

        return CardsComponent;
      }();

      CardsComponent.ɵfac = function CardsComponent_Factory(t) {
        return new (t || CardsComponent)();
      };

      CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardsComponent,
        selectors: [["app-cards"]],
        decls: 216,
        vars: 0,
        consts: [[1, "body"], [1, "row"], [1, "col-md-6", "col-md-12", "text"], [1, "text-center"], [1, "col-md-6", "col-md-12", "backButton"], ["routerLink", "/products", 1, "text-center"], [1, "produse"], [1, "wrapper"], [1, "card"], ["type", "checkbox", "id", "card1", "aria-hidden", "true", 1, "more"], [1, "content"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c1-f.jpg')"], [1, "inner"], ["for", "card1", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c2-s.jpg')"], ["for", "card1", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card2", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c2-f.jpg')"], ["for", "card2", "aria-hidden", "true", 1, "button"], ["for", "card2", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card3", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c3-f.jpg')"], ["for", "card3", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c3-s.jpg')"], ["for", "card3", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card4", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c4-f.jpg')"], ["for", "card4", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c4-s.jpg')"], ["for", "card4", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card5", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c5-f.jpg')"], ["for", "card5", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c5-s.jpg')"], ["for", "card5", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card6", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c6-f.jpg')"], ["for", "card6", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c6-s.jpg')"], ["for", "card6", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card7", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c7-f.jpg')"], ["for", "card7", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c7-s.jpg')"], ["for", "card7", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card8", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c8-f.jpg')"], ["for", "card8", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c8-s.jpg')"], ["for", "card8", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card9", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c9-f.jpg')"], ["for", "card9", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c9-s.jpg')"], ["for", "card9", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card10", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c10-f.jpg')"], ["for", "card10", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c10-s.jpg')"], ["for", "card10", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card11", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c11-f.jpg')"], ["for", "card11", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c11-s.jpg')"], ["for", "card11", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card12", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c12-f.jpg')"], ["for", "card12", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c12-s.jpg')"], ["for", "card12", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card13", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c13-f.jpg')"], ["for", "card13", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c13-s.jpg')"], ["for", "card13", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card14", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c14-f.jpg')"], ["for", "card14", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c14-s.jpg')"], ["for", "card14", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card15", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c15-f.jpg')"], ["for", "card15", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c15-s.jpg')"], ["for", "card15", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card16", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c16-f.png')"], ["for", "card16", "aria-hidden", "true", 1, "button"], [1, "back", 2, "background-image", "url('/assets/img/Cards/c16-s.png')"], ["for", "card16", "aria-hidden", "true", 1, "button", "return"], ["type", "checkbox", "id", "card17", "aria-hidden", "true", 1, "more"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c17.jpg')"], [1, "front", 2, "background-image", "url('/assets/img/Cards/c18.jpg')"]],
        template: function CardsComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 19);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 29);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "input", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "label", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "label", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "label", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "input", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "label", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "input", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "label", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "label", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "input", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "label", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "input", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "label", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Spate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "label", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, " Fata ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "input", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "input", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "div", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  max-height: 100vh;\n  max-width: 100vw;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 40%;\n  left: 50%;\n  top: 50%;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n}\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n}\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.backButton[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: red;\n  height: 10%;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  transform: translate(0, -50%);\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  text-decoration: none;\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n  letter-spacing: 4px;\n  font-weight: 800;\n}\n.produse[_ngcontent-%COMP%] {\n  background-color: #c00404;\n  background-attachment: fixed;\n  color: #fff;\n  text-align: center;\n  font-weight: 700;\n  overflow: hidden;\n  min-height: auto;\n  min-width: 100vw;\n  max-height: auto;\n  max-width: 100vw;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  margin: 0;\n}\n.card[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 340px;\n  margin: 2em 2em 0 0;\n  perspective: 1500px;\n  background-color: #c00404;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.8s cubic-bezier(0.75, 0, 0.85, 1);\n}\n.more[_ngcontent-%COMP%] {\n  display: none;\n}\n.more[_ngcontent-%COMP%]:checked    ~ .content[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.front[_ngcontent-%COMP%], .back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-style: preserve-3d;\n  border-radius: 6px;\n}\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%], .back[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n  padding: 1.5em;\n  transform: translateZ(80px) scale(0.94);\n}\n.front[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.226);\n  background-size: cover;\n  background-position: center center;\n}\n.front[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  border-radius: 6px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  background: linear-gradient(40deg, rgba(255, 255, 255, 0.5), rgba(44, 44, 43, 0.5));\n}\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  grid-template-rows: 5fr 1fr 1fr 2fr 1fr;\n  justify-items: center;\n}\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  background-color: rgba(255, 255, 255, 0.226);\n  background-size: cover;\n  background-position: center center;\n  border: 2px solid white;\n}\n.back[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr 2fr 1fr 2fr 14fr 1fr 1fr;\n  grid-template-columns: repeat(4, auto);\n  grid-column-gap: 0.8em;\n  justify-items: center;\n}\n.back[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  justify-self: center;\n}\n.button[_ngcontent-%COMP%] {\n  grid-row: -1;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 600;\n  cursor: pointer;\n  display: block;\n  padding: 0 1.5em;\n  height: 3em;\n  line-height: 2.9em;\n  min-width: 3em;\n  background-color: transparent;\n  border: solid 2px #c00404;\n  color: red;\n  border-radius: 4px;\n  text-align: center;\n  left: 50%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: 0.3s ease-in-out;\n  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(192, 4, 4, 0.575);\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\n  text-shadow: none;\n  color: #c00404;\n}\n.button.return[_ngcontent-%COMP%] {\n  line-height: 3em;\n  color: #c00404;\n  border-color: #c00404;\n  text-shadow: none;\n}\n.button.return[_ngcontent-%COMP%]:hover {\n  background-color: #c00404;\n  color: #fff;\n  box-shadow: none;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #fb2f2f;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #c00404;\n}\n@media screen and (min-width: 150px) and (max-width: 430px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 430px) and (max-width: 1200px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 1201px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 4em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 5px;\n    padding: 20px;\n    line-height: 2em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.2em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 500;\n    letter-spacing: 3px;\n    padding: 10px 20px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 468px) and (max-width: 633px) {\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 1.8vh 31vh;\n    min-width: 185vw;\n    margin: 60vh 0;\n  }\n}\n@media screen and (min-width: 401px) and (max-width: 467px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 1.5vh 15vh;\n    min-width: 185vw;\n    margin: 60vh 0;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 400px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 2vh 0vh;\n    min-width: 175vw;\n    margin: 30vh;\n  }\n}\n@media screen and (min-width: 285px) and (max-width: 319px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 5vh 0vh;\n    min-width: 175vw;\n    margin: 30vh;\n  }\n}\n@media screen and (min-width: 250px) and (max-width: 284px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 8vh 0vh;\n    min-width: 175vw;\n    margin: 30vh;\n  }\n}\n@media screen and (min-width: 225px) and (max-width: 249px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 12vh 0vh;\n    min-width: 170vw;\n    margin: 30vh;\n  }\n}\n@media screen and (max-width: 224px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    padding: 16vh 0vh;\n    min-width: 170vw;\n    margin: 10vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2NhcmRzL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxWaXNpb29uXFxzaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xcZ3JhZmljYVxcY2FyZHNcXGNhcmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvY2FyZHMvY2FyZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHNEQUFBO0FDQ0o7QURDRTtFQUNFLG9CQUFBO0VBQ0Esc0RBQUE7QUNDSjtBREVBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQ0FKO0FESUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FDREo7QURJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNESjtBREdHO0VBQ0ssVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7QUNEUjtBREtJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtBQ0hSO0FEUUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ0xKO0FET0k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtBQ0xSO0FEUUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ05SO0FEVUE7RUFLSSx5QkE1RVc7RUE2RVgsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNYSjtBRDRCQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0csU0FBQTtBQ3pCSjtBRDRCQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNHLHlCQWxIVztBQ3lGZjtBRDhCQztFQUNDLGtCQUFBO0VBQ00sV0FBQTtFQUNOLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlEQUFBO0FDNUJGO0FEZ0NBO0VBQ0MsYUFBQTtBQzdCRDtBRCtCQztFQUNDLDBCQUFBO0FDN0JGO0FEaUNBOztFQUVDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDOUJEO0FEZ0NDOztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0FDN0JGO0FEaUNBO0VBQ0MsNENBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0FDOUJEO0FEK0JDO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtRkFBQTtBQzdCRjtBRG1DQztFQUNDLHVDQUFBO0VBQ0EscUJBQUE7QUNqQ0Y7QUR5Q0E7RUFDQywwQkFBQTtFQUNHLDRDQUFBO0VBQ0gsc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDdENEO0FEdUNDO0VBQ0MsZ0RBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNyQ0Y7QUR5Q0M7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0FDdkNGO0FEMkNBO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHVDQUFBO0VBQ0csbURBQUE7QUN4Q0o7QUQwQ0M7RUFDQyx3Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXZPYTtBQytMZjtBRDJDQztFQUNDLGdCQUFBO0VBQ0EsY0E1T2E7RUE2T2IscUJBN09hO0VBOE9iLGlCQUFBO0FDekNGO0FEMENFO0VBQ0MseUJBaFBZO0VBaVBaLFdBQUE7RUFDQSxnQkFBQTtBQ3hDSDtBRDZDQTtFQUNDLFVBQUE7QUMxQ0Q7QUQ0Q0E7RUFDQyxtQkFBQTtBQ3pDRDtBRDJDQTtFQUNDLG1CQUFBO0FDeENEO0FEMENBO0VBQ0MsbUJBalFjO0FDME5mO0FEMENBO0VBRUk7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDeENOO0VEMkNLO0lBQ0ssVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDekNWO0VENkNNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDM0NWO0VEK0NPO0lBQ0csa0JBQUE7RUM3Q1Y7O0VEZ0RFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUM3Q047RUQrQ007SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDN0NWO0VEZ0RNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUM5Q1Y7QUFDRjtBRGtEQTtFQVFJO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQ0FBQTtFQ3ZETjtFRDBESztJQUNLLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ3hEVjtFRDRETTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQzFEVjtFRDhETztJQUNHLGtCQUFBO0VDNURWOztFRCtERTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDNUROO0VEOERNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQzVEVjtFRCtETTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDN0RWO0FBQ0Y7QUQrREE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0NBQUE7RUM3RE47RURnRUs7SUFDSyxVQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUM5RFY7RURrRU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUNoRVY7RURvRU87SUFDRyxrQkFBQTtFQ2xFVjs7RURxRUU7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ2xFTjtFRG9FTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ2xFVjtFRHFFTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDbkVWO0FBQ0Y7QURzRUE7RUFDSTtJQUtJLHdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNwRU47QUFDRjtBRHNFQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUNwRU47RURzRU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDcEVWO0VEdUVNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNyRVY7O0VEd0VFO0lBS0ksd0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQ3JFTjtBQUNGO0FEd0VBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ3RFTjtFRHdFTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUN0RVY7RUR5RU07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ3ZFVjs7RUQwRUU7SUFLSSx3QkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDdkVOO0FBQ0Y7QUQ2RUU7RUFDRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDM0VOO0VENkVNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQzNFVjtFRDhFTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDNUVWOztFRCtFRTtJQUtJLHdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUM1RU47QUFDRjtBRDhFRTtFQUNFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUM1RU47RUQ4RU07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDNUVWO0VEK0VNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUM3RVY7O0VEaUZFO0lBS0ksd0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQzlFTjtBQUNGO0FEaUZFO0VBQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQy9FTjtFRGlGTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUMvRVY7RURrRk07SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ2hGVjs7RURvRkU7SUFLSSx3QkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VDakZOO0FBQ0Y7QURtRkU7RUFDRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDakZOO0VEbUZNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ2pGVjtFRG9GTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDbEZWOztFRHNGRTtJQUtJLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUNuRk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvZ3JhZmljYS9jYXJkcy9jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250MSc7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250OS5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgfVxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250Mic7XHJcbiAgICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250My5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgfVxyXG5cclxuKntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiRhY2NlbnQtY29sb3I6IHJnYmEoMTkyLCA0LCA0LCApO1xyXG5cclxuLmJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYyLDYyLDYyLDEpIDAlLCByZ2JhKDAsMCwwLDEpIDEwMCUpO1xyXG5cclxufVxyXG4udGV4dHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC01MCUsIC01MCUgKTtcclxuXHJcbiAgIGgxe1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IFxyXG4gICAgICAgIGZvbnQtZmFtaWx5Oidmb250MScsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICB9XHJcbiAgICBcclxuXHJcbiAgICBoMixwe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5Oidmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxufVxyXG4uYmFja0J1dHRvbntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC01MCUgKTtcclxuICBcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICBmb250LWZhbWlseTonZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxufVxyXG5cclxuLnByb2R1c2V7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYmtDYXJkMS5qcGcpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1heC1oZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBib2R5IHtcclxuLy8gXHRtYXJnaW46IDA7XHJcbi8vIFx0ZGlzcGxheTogZmxleDtcclxuLy8gXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyBcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIFx0aGVpZ2h0OiAxMDB2aDtcclxuLy8gXHRmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4vLyB9XHJcbi53cmFwcGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46MFxyXG59XHJcblxyXG4uY2FyZCB7XHJcblx0d2lkdGg6IDYwMHB4O1xyXG5cdGhlaWdodDogMzQwcHg7XHJcblx0bWFyZ2luOjJlbSAyZW0gMCAwOyBcclxuXHRwZXJzcGVjdGl2ZTogMTUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokYWNjZW50LWNvbG9yO1xyXG4gICAgLy8gaW1ne1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8vIH1cclxuXHQuY29udGVudCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHMgY3ViaWMtYmV6aWVyKDAuNzUsIDAsIDAuODUsIDEpO1xyXG5cdH1cclxufVxyXG5cclxuLm1vcmUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblxyXG5cdCY6Y2hlY2tlZCB+IC5jb250ZW50IHtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG5cdH1cclxufVxyXG5cclxuLmZyb250LFxyXG4uYmFjayB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG5cdC5pbm5lciB7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBncmlkO1xyXG5cdFx0cGFkZGluZzogMS41ZW07XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVooODBweCkgc2NhbGUoMC45NCk7XHJcblx0fVxyXG59XHJcblxyXG4uZnJvbnQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMjYpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuXHQmOmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0XHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcblx0XHRcdDQwZGVnLFxyXG5cdFx0XHRyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcblx0XHRcdHJnYmEoNDQsIDQ0LCA0MywgMC41KVxyXG5cdFx0KTtcclxuXHR9XHJcblx0LmlubmVyIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtcm93czogNWZyIDFmciAxZnIgMmZyIDFmcjtcclxuXHRcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG4uYmFjayB7XHJcblx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjI2KTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcblx0Ym9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG5cdC5pbm5lciB7XHJcblx0XHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyIDJmciAxNGZyIDFmciAxZnI7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBhdXRvKTtcclxuXHRcdGdyaWQtY29sdW1uLWdhcDogMC44ZW07XHJcblx0XHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHRcclxuXHQuYnV0dG9uIHtcclxuXHRcdGdyaWQtY29sdW1uOiAxLy0xO1xyXG5cdFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcblx0fVxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuXHRncmlkLXJvdzogLTE7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBhZGRpbmc6IDAgMS41ZW07XHJcblx0aGVpZ2h0OiAzZW07XHJcblx0bGluZS1oZWlnaHQ6IDIuOWVtO1xyXG5cdG1pbi13aWR0aDogM2VtO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlcjogc29saWQgMnB4ICRhY2NlbnQtY29sb3I7XHJcblx0Y29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGVmdDogNTAlO1xyXG5cdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cdHRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGZvbnQtZmFtaWx5Oidmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkyLCA0LCA0LCAwLjU3NSk7XHJcblx0XHRib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0XHR0ZXh0LXNoYWRvdzogbm9uZTtcclxuXHRcdGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cdH1cclxuXHJcblx0Ji5yZXR1cm4ge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDNlbTtcclxuXHRcdGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG5cdFx0dGV4dC1zaGFkb3c6IG5vbmU7XHJcblx0XHQmOmhvdmVyIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1jb2xvcjtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGJveC1zaGFkb3c6IG5vbmU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuXHR3aWR0aDogNXB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5cdGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcblx0YmFja2dyb3VuZDogbGlnaHRlbigkYWNjZW50LWNvbG9yLCAyMCUpO1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogNDMwcHgpIHtcclxuXHJcbiAgICAudGV4dHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNDAlLCAtNDAlICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgaDIscHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG59fVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblx0Ly8gLmNhcmR7XHJcblx0Ly8gXHRtYXgtd2lkdGg6IDkwdnc7XHJcblx0XHRcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcblx0Ly8gfVxyXG4gICAgLnRleHR7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTQwJSwgLTQwJSApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICBoMXtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGgyLHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgIHB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtNTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxufX1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMXB4KSB7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNDAlLCAtNDAlICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBoMixwe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC01MCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxufX1cclxuXHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA0NjhweCkgYW5kIChtYXgtd2lkdGg6IDYzM3B4KXtcclxuICAgIC5jYXJke1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwYWRkaW5nOiAxLjh2aCAzMXZoO1xyXG4gICAgICAgIG1pbi13aWR0aDoxODV2dztcclxuICAgICAgICBtYXJnaW46IDYwdmggMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiA0NjdweCl7XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXZoIDE1dmg7XHJcbiAgICAgICAgbWluLXdpZHRoOjE4NXZ3O1xyXG4gICAgICAgIG1hcmdpbjogNjB2aCAwO1xyXG4gICAgfVxyXG4gICAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtMTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwYWRkaW5nOiAydmggMHZoO1xyXG4gICAgICAgIG1pbi13aWR0aDoxNzV2dztcclxuICAgICAgICBtYXJnaW46IDMwdmg7XHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6IDI4NXB4KSBhbmQgKG1heC13aWR0aDogMzE5cHgpe1xyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtMTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwYWRkaW5nOiA1dmggMHZoO1xyXG4gICAgICAgIG1pbi13aWR0aDoxNzV2dztcclxuICAgICAgICBtYXJnaW46IDMwdmg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAyODRweCl7XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJke1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwYWRkaW5nOiA4dmggMHZoO1xyXG4gICAgICAgIG1pbi13aWR0aDoxNzV2dztcclxuICAgICAgICBtYXJnaW46IDMwdmg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6IDIyNXB4KSBhbmQgKG1heC13aWR0aDogMjQ5cHgpe1xyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtMTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcGFkZGluZzogMTJ2aCAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOjE3MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMzB2aDtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjI0cHgpe1xyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtMTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgcGFkZGluZzogMTZ2aCAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOjE3MHZ3O1xyXG4gICAgICAgIG1hcmdpbjogMTB2aDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9mb250OS5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjM2UzZTNlIDAlLCBibGFjayAxMDAlKTtcbn1cblxuLnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50ZXh0IGgxIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cbi50ZXh0IGgyLCAudGV4dCBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG59XG5cbi5iYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuLmJhY2tCdXR0b24gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5wcm9kdXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMDQwNDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWF4LWhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDB2dztcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiAzNDBweDtcbiAgbWFyZ2luOiAyZW0gMmVtIDAgMDtcbiAgcGVyc3BlY3RpdmU6IDE1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMDQwNDtcbn1cbi5jYXJkIC5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC44NSwgMSk7XG59XG5cbi5tb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb3JlOmNoZWNrZWQgfiAuY29udGVudCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZnJvbnQsXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5mcm9udCAuaW5uZXIsXG4uYmFjayAuaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooODBweCkgc2NhbGUoMC45NCk7XG59XG5cbi5mcm9udCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMjYpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmZyb250OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHJnYmEoNDQsIDQ0LCA0MywgMC41KSk7XG59XG4uZnJvbnQgLmlubmVyIHtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1ZnIgMWZyIDFmciAyZnIgMWZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMjYpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi5iYWNrIC5pbm5lciB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnIgMmZyIDE0ZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XG4gIGdyaWQtY29sdW1uLWdhcDogMC44ZW07XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbi5iYWNrIC5idXR0b24ge1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5idXR0b24ge1xuICBncmlkLXJvdzogLTE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMS41ZW07XG4gIGhlaWdodDogM2VtO1xuICBsaW5lLWhlaWdodDogMi45ZW07XG4gIG1pbi13aWR0aDogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2MwMDQwNDtcbiAgY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICB0ZXh0LXNoYWRvdzogMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgNCwgNCwgMC41NzUpO1xuICBib3gtc2hhZG93OiAwIDAgNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBjb2xvcjogI2MwMDQwNDtcbn1cbi5idXR0b24ucmV0dXJuIHtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbiAgY29sb3I6ICNjMDA0MDQ7XG4gIGJvcmRlci1jb2xvcjogI2MwMDQwNDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4uYnV0dG9uLnJldHVybjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMDA0MDQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZmIyZjJmO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2MwMDQwNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcbiAgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xuICB9XG4gIC50ZXh0IGgxIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgfVxuICAudGV4dCBwIHtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gIH1cblxuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ2OHB4KSBhbmQgKG1heC13aWR0aDogNjMzcHgpIHtcbiAgLmNhcmQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwYWRkaW5nOiAxLjh2aCAzMXZoO1xuICAgIG1pbi13aWR0aDogMTg1dnc7XG4gICAgbWFyZ2luOiA2MHZoIDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNDY3cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHBhZGRpbmc6IDEuNXZoIDE1dmg7XG4gICAgbWluLXdpZHRoOiAxODV2dztcbiAgICBtYXJnaW46IDYwdmggMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogMnZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDE3NXZ3O1xuICAgIG1hcmdpbjogMzB2aDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjg1cHgpIGFuZCAobWF4LXdpZHRoOiAzMTlweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogNXZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDE3NXZ3O1xuICAgIG1hcmdpbjogMzB2aDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAyODRweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogOHZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDE3NXZ3O1xuICAgIG1hcmdpbjogMzB2aDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjI1cHgpIGFuZCAobWF4LXdpZHRoOiAyNDlweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgcGFkZGluZzogMTJ2aCAwdmg7XG4gICAgbWluLXdpZHRoOiAxNzB2dztcbiAgICBtYXJnaW46IDMwdmg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNHB4KSB7XG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBwYWRkaW5nOiAxNnZoIDB2aDtcbiAgICBtaW4td2lkdGg6IDE3MHZ3O1xuICAgIG1hcmdpbjogMTB2aDtcbiAgfVxufSJdfQ== */"]
      });
      return CardsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/products/grafica/flyer/flyer.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/products/grafica/flyer/flyer.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FlyerComponent */

  /***/
  function srcAppComponentsProductsGraficaFlyerFlyerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlyerComponent", function () {
      return FlyerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FlyerComponent = /*@__PURE__*/function () {
      var FlyerComponent = /*#__PURE__*/function () {
        function FlyerComponent() {
          _classCallCheck(this, FlyerComponent);
        }

        _createClass(FlyerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FlyerComponent;
      }();

      FlyerComponent.ɵfac = function FlyerComponent_Factory(t) {
        return new (t || FlyerComponent)();
      };

      FlyerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FlyerComponent,
        selectors: [["app-flyer"]],
        decls: 14,
        vars: 0,
        consts: [[1, "body"], [1, "row"], [1, "col-md-6", "col-md-12", "text"], [1, "text-center"], [1, "col-md-6", "col-md-12", "backButton"], ["routerLink", "/products", 1, "text-center"]],
        template: function FlyerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Flyer - Banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Realizam Flutura\u0219i \u0219i banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Vor fi livrate in format pdf, psd, png, jpg, svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pret:De la 75 de lei");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Inapoi la produse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  max-height: 100vh;\n  max-width: 100vw;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 40%;\n  left: 50%;\n  top: 50%;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n}\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n}\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.5em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.backButton[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: red;\n  height: 10%;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  transform: translate(0, -50%);\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  text-decoration: none;\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n  letter-spacing: 4px;\n  font-weight: 800;\n}\n@media screen and (min-width: 150px) and (max-width: 430px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 430px) and (max-width: 1200px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 1201px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 4em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 5px;\n    padding: 20px;\n    line-height: 2em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 1.2em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1.2em;\n    font-weight: 500;\n    letter-spacing: 3px;\n    padding: 10px 20px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 401px) and (max-width: 467px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 320px) and (max-width: 400px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 285px) and (max-width: 319px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 250px) and (max-width: 284px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 225px) and (max-width: 249px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n@media screen and (max-width: 224px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 50%;\n    background-color: red;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 2px;\n    font-weight: 800;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2ZseWVyL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxWaXNpb29uXFxzaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xcZ3JhZmljYVxcZmx5ZXJcXGZseWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvZmx5ZXIvZmx5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLHNEQUFBO0FDQ0o7QURDRTtFQUNFLG9CQUFBO0VBQ0Esc0RBQUE7QUNDSjtBREVBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQ0FKO0FESUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0FDREo7QURJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNESjtBREdHO0VBQ0ssVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7QUNEUjtBREtJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtBQ0hSO0FEUUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtBQ0xKO0FET0k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtBQ0xSO0FEUUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ05SO0FEWUE7RUFFSTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0NBQUE7RUNWTjtFRGFLO0lBQ0ssVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDWFY7RURlTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQ2JWO0VEaUJPO0lBQ0csa0JBQUE7RUNmVjs7RURrQkU7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ2ZOO0VEaUJNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ2ZWO0VEa0JNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNoQlY7QUFDRjtBRG9CQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQ0FBQTtFQ25CTjtFRHNCSztJQUNLLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ3BCVjtFRHdCTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQ3RCVjtFRDBCTztJQUNHLGtCQUFBO0VDeEJWOztFRDJCRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDeEJOO0VEMEJNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ3hCVjtFRDJCTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDekJWO0FBQ0Y7QUQyQkE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0NBQUE7RUN6Qk47RUQ0Qks7SUFDSyxVQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUMxQlY7RUQ4Qk07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7RUM1QlY7RURnQ087SUFDRyxrQkFBQTtFQzlCVjs7RURpQ0U7SUFDSSxVQUFBO0lBQ0EscUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQzlCTjtFRGdDTTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQzlCVjtFRGlDTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDL0JWO0FBQ0Y7QURtQ0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDakNOO0VEbUNNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ2pDVjtFRG9DTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDbENWO0FBQ0Y7QURzQ0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDcENOO0VEc0NNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ3BDVjtFRHVDTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDckNWO0FBQ0Y7QUQyQ0U7RUFDRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDekNOO0VEMkNNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ3pDVjtFRDRDTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDMUNWO0FBQ0Y7QUQ4Q0U7RUFDRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDNUNOO0VEOENNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQzVDVjtFRCtDTTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDN0NWO0FBQ0Y7QURrREU7RUFDRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDaEROO0VEa0RNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ2hEVjtFRG1ETTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDakRWO0FBQ0Y7QURxREU7RUFDRTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDbkROO0VEcURNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ25EVjtFRHNETTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDcERWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvZmx5ZXIvZmx5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvZm9udDkub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gIH1cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDInO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvZm9udDMub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gIH1cclxuXHJcbip7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4kYWNjZW50LWNvbG9yOiByZ2JhKDE5MiwgNCwgNCwgKTtcclxuXHJcbi5ib2R5e1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2Miw2Miw2MiwxKSAwJSwgcmdiYSgwLDAsMCwxKSAxMDAlKTtcclxuXHJcbn1cclxuLnRleHR7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNTAlLCAtNTAlICk7XHJcblxyXG4gICBoMXtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICBmb250LWZhbWlseTonZm9udDEnLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgfVxyXG4gICAgXHJcblxyXG4gICAgaDIscHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTonZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbn1cclxuLmJhY2tCdXR0b257XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtNTAlICk7XHJcbiAgXHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlICk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgYTpob3ZlcntcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xyXG5cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC00MCUsIC00MCUgKTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgICBoMixwe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBwe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTEwJSApO1xyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbn19XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDMwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuXHJcbiAgICAudGV4dHtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAtNDAlLCAtNDAlICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgICAgIGgxe1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgaDIscHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgcHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xyXG4gICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC01MCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG59fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIC00MCUsIC00MCUgKTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIGgyLHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBwe1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTUwJSApO1xyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG59fVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gIGFuZCAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDQ2N3B4KXtcclxuICAgIC5iYWNrQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggMCwgLTEwJSApO1xyXG4gICAgICBcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSAgYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6IDI4NXB4KSBhbmQgKG1heC13aWR0aDogMzE5cHgpe1xyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtMTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAyODRweCl7XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogMjI1cHgpIGFuZCAobWF4LXdpZHRoOiAyNDlweCl7XHJcbiAgICAuYmFja0J1dHRvbntcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoIDAsIC0xMCUgKTtcclxuICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjI0cHgpe1xyXG4gICAgLmJhY2tCdXR0b257XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCAwLCAtMTAlICk7XHJcbiAgICAgIFxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmb250MlwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZm9udDMub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMzZTNlM2UgMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4udGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnRleHQgaDEge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuLnRleHQgaDIsIC50ZXh0IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cblxuLmJhY2tCdXR0b24ge1xuICB3aWR0aDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG4uYmFja0J1dHRvbiBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICBjb2xvcjogIzMzMztcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcbiAgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB0b3A6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xuICB9XG4gIC50ZXh0IGgxIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IGgyLCAudGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgfVxuICAudGV4dCBwIHtcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gIH1cblxuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMXB4KSBhbmQgKG1heC13aWR0aDogNDY3cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI4NXB4KSBhbmQgKG1heC13aWR0aDogMzE5cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1MHB4KSBhbmQgKG1heC13aWR0aDogMjg0cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIyNXB4KSBhbmQgKG1heC13aWR0aDogMjQ5cHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIyNHB4KSB7XG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59Il19 */"]
      });
      return FlyerComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/products/grafica/logo/logo.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/products/grafica/logo/logo.component.ts ***!
    \********************************************************************/

  /*! exports provided: LogoComponent */

  /***/
  function srcAppComponentsProductsGraficaLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
      return LogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LogoComponent = /*@__PURE__*/function () {
      var LogoComponent = /*#__PURE__*/function () {
        function LogoComponent() {
          _classCallCheck(this, LogoComponent);
        }

        _createClass(LogoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LogoComponent;
      }();

      LogoComponent.ɵfac = function LogoComponent_Factory(t) {
        return new (t || LogoComponent)();
      };

      LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogoComponent,
        selectors: [["app-logo"]],
        decls: 61,
        vars: 0,
        consts: [[1, "body"], [1, "row"], [1, "col-md-6", "col-md-12", "text"], [1, "text-center"], [1, "text-center", 2, "color", "red", "font-weight", "800"], [1, "col-md-6", "col-md-12", "backButton"], ["routerLink", "/products", 1, "text-center"], [1, "produse", "align-items-center"], [1, "container", "px-4", "overflow-hidden"], [1, "row", "g-0"], [1, "col-md-3", "col-sm-6", "col-xs-12"], ["src", "/assets/img/logo/Logo5.jpg", "alt", "logo_concreteGarden", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo18.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo9.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo4.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo17.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo19.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo8.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo7.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo10.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo11.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo12.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo14.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo1.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo2.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo3.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo6.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo16.jpg", 1, "logo", "img-fluid"], ["src", "/assets/img/logo/Logo15.jpg", 1, "logo", "img-fluid"]],
        template: function LogoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Realizam Logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Vor fi livrate in format pdf, psd, png, jpg, svg");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Pret: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "del");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "100 de euro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "M(A)Y Sale -50% : De la 50 de euro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Inapoi la produse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-height: 100vh;\n  min-width: 100vw;\n  max-width: 100vw;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 40%;\n  left: 50%;\n  top: 50%;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n}\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 10px 0;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n}\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.3em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 0.8em;\n}\n.backButton[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: red;\n  height: 10%;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  transform: translate(0, -50%);\n  overflow: hidden;\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  text-decoration: none;\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n  letter-spacing: 4px;\n  font-weight: 800;\n}\n.produse[_ngcontent-%COMP%] {\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n  min-width: 100vw;\n  max-width: 100vw;\n  overflow: hidden;\n}\n.container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-height: auto;\n  line-height: 1em;\n  padding: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 290px;\n  height: 290px;\n  border: 2px solid black;\n  overflow: hidden;\n}\n@media screen and (min-width: 333px) and (max-width: 575px) {\n  .logo[_ngcontent-%COMP%] {\n    width: 320px;\n    height: 320px;\n    left: 50%;\n    transform: translate(-50%);\n  }\n}\n@media screen and (min-width: 150px) and (max-width: 430px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 430px) and (max-width: 902px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 3em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 13%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 903px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 25%;\n    height: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9ncmFmaWNhL2xvZ28vQzpcXFVzZXJzXFxhbmRyZVxcRGVza3RvcFxcUG9ydG9mb2xpdUFuZ3VsYXJcXFZpc2lvb25cXHNpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2R1Y3RzXFxncmFmaWNhXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxzREFBQTtBQ0NKO0FERUE7RUFDSSxvQkFBQTtFQUNBLHNEQUFBO0FDQUo7QURJQTtFQUdJLHNCQUFBO0FDSko7QURXQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QUNSSjtBRGFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ1ZKO0FEY0k7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbURBQUE7QUNaUjtBRGdCSTs7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1EQUFBO0FDZFI7QURtQkk7RUFDSSxrQkFBQTtBQ2pCUjtBRHFCQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNsQko7QURvQkk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtBQ2xCUjtBRHFCSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDbkJSO0FEeUJBO0VBRUksMkRBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUN2Qko7QUQwQkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDdkJKO0FEMkJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUN4Qko7QUQrQkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtJQUNBLDBCQUFBO0VDNUJOO0FBQ0Y7QURnQ0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0NBQUE7RUM5Qk47RURpQ007SUFFSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ2hDVjtFRG9DTTs7SUFHSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQ25DVjtFRHdDTTtJQUNJLGtCQUFBO0VDdENWOztFRDBDRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSw2QkFBQTtFQ3ZDTjtFRHlDTTtJQUNJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNkJBQUE7RUN2Q1Y7RUQyQ007SUFDSSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQ3pDVjtBQUNGO0FEOENBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDNUNOO0VEK0NNO0lBQ0ksVUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDN0NWO0VEaURNOztJQUVJLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQy9DVjtFRG9ETTtJQUNJLGtCQUFBO0VDbERWOztFRHNERTtJQUNJLFVBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxRQUFBO0lBQ0EsNEJBQUE7SUFDQSwrQkFBQTtJQUNBLDZCQUFBO0VDbkROO0VEcURNO0lBQ0ksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw2QkFBQTtFQ25EVjtFRHVETTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDckRWO0FBQ0Y7QUR5REE7RUFDSTtJQUNJLFVBQUE7SUFFQSxXQUFBO0VDeEROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL2dyYWZpY2EvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQxJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuXHJcbioge1xyXG4gICAgLy8gcGFkZGluZzogMDtcclxuICAgIC8vIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG59XHJcblxyXG4kYWNjZW50LWNvbG9yOiByZ2JhKDE5MiwgNCwgNCwgKTtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiA1cHggIWRlZmF1bHQ7XHJcblxyXG4uYm9keSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYyLCA2MiwgNjIsIDEpIDAlLCByZ2JhKDAsIDAsIDAsIDEpIDEwMCUpO1xyXG5cclxuXHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuXHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgaDIsXHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjNlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrQnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5wcm9kdXNlIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYyLCA2MiwgNjIsIDEpIDAlLCByZ2JhKDAsIDAsIDAsIDEpIDEwMCUpO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LWhlaWdodDogYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuLmxvZ28ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgaGVpZ2h0OiAyOTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMzM3B4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIC5sb2dvIHtcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XHJcblxyXG5cclxuICAgICAgICBoMSB7XHJcblxyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGgyLFxyXG4gICAgICAgIHAge1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tCdXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAlKTtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDMwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDJweCkge1xyXG4gICAgLnRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xyXG5cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tCdXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTMlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAzcHgpIHtcclxuICAgIC5iYWNrQnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgIH1cclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmb250MVwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZm9udDkub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9mb250My5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMzZTNlM2UgMCUsIGJsYWNrIDEwMCUpO1xufVxuXG4udGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLnRleHQgaDEge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDRlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LWZhbWlseTogXCJmb250MVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG59XG4udGV4dCBoMixcbi50ZXh0IHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cbi50ZXh0IHAge1xuICBsaW5lLWhlaWdodDogMC44ZW07XG59XG5cbi5iYWNrQnV0dG9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJhY2tCdXR0b24gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5wcm9kdXNlIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzNlM2UzZSAwJSwgYmxhY2sgMTAwJSk7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiAyOTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMzM3B4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xuICAudGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHRvcDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwJSwgLTQwJSk7XG4gIH1cbiAgLnRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgfVxuICAudGV4dCBoMixcbi50ZXh0IHAge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICAudGV4dCBwIHtcbiAgICBsaW5lLWhlaWdodDogMC44ZW07XG4gIH1cblxuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAxMCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzBweCkgYW5kIChtYXgtd2lkdGg6IDkwMnB4KSB7XG4gIC50ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNDAlKTtcbiAgfVxuICAudGV4dCBoMSB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gIH1cbiAgLnRleHQgaDIsXG4udGV4dCBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBoZWlnaHQ6IDEzJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDNweCkge1xuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgfVxufSJdfQ== */"]
      });
      return LogoComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/products/products.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/products/products.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductsComponent = /*@__PURE__*/function () {
      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent() {
          _classCallCheck(this, ProductsComponent);
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var left = document.querySelector('.stanga');
            var right = document.querySelector('.dreapta');
            var container = document.querySelector('.cont');
            left.addEventListener('mouseenter', function () {
              return container.classList.add('hover_stanga');
            });
            left.addEventListener('mouseleave', function () {
              return container.classList.remove('hover_stanga');
            });
            right.addEventListener('mouseenter', function () {
              return container.classList.add('hover_dreapta');
            });
            right.addEventListener('mouseleave', function () {
              return container.classList.remove('hover_dreapta');
            });
          }
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)();
      };

      ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        decls: 34,
        vars: 0,
        consts: [[1, "sec"], [1, "cont"], [1, "split", "stanga"], [1, "site1", "site"], [1, "title"], ["routerLink", "/cartidevizitadigitale"], [1, "site2", "site"], ["routerLink", "/portofoliu"], [1, "site3", "site"], ["routerLink", "/site-prezentare"], [1, "site4", "site"], ["routerLink", "/aplicatii"], [1, "split", "dreapta", "col-xs-12"], ["routerLink", "/logo"], ["routerLink", "/animatielogo"], ["routerLink", "/cards"], ["routerLink", "/flyer"]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "WebDesign");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "C\u0103r\u021Bi de vizit\u0103 Tip II ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Portofoliu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Site de prezentare");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Aplica\u021Bii web");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Grafica");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Anima\u021Bie Logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "C\u0103r\u021Bi de vizit\u0103");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Flyer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.sec[_ngcontent-%COMP%] {\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  height: 100vh;\n  overflow: hidden;\n  margin: 0;\n}\n.title[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: 800;\n  letter-spacing: 2px;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n  font-size: 2em;\n}\n.site[_ngcontent-%COMP%] {\n  padding: 18px 0;\n  position: relative;\n  margin-top: 5%;\n}\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 50%;\n  bottom: -90%;\n  transform: translateX(-50%);\n  text-decoration: none;\n  color: black;\n  border: 2px solid white;\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: bold;\n  width: auto;\n  height: 30px;\n  padding: 1rem;\n  background-color: rgba(255, 255, 255, 0.1);\n  color: white;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.5);\n  letter-spacing: 1px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: white;\n  position: absolute;\n  left: 50%;\n  top: 30%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  margin: 0 1%;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.cont[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #333;\n}\n.split[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n}\n.split.stanga[_ngcontent-%COMP%] {\n  left: 0;\n  background: url(\"/assets/img/stanga.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\n.split.stanga[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n.split.dreapta[_ngcontent-%COMP%] {\n  right: 0;\n  background: url(\"/assets/img/dreapta.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: white;\n}\n.split.dreapta[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(34, 34, 34, 0.5);\n}\n.split.stanga[_ngcontent-%COMP%], .split.dreapta[_ngcontent-%COMP%], .split.stanga[_ngcontent-%COMP%]::before, .split.dreapta[_ngcontent-%COMP%]::before {\n  transition: all 1000ms ease-in-out;\n}\n.hover_stanga[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.hover_stanga[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.hover_dreapta[_ngcontent-%COMP%]   .dreapta[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.hover_dreapta[_ngcontent-%COMP%]   .stanga[_ngcontent-%COMP%] {\n  width: 30%;\n}\n@media only screen and (min-device-width: 1201px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 9%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 2em;\n    width: 24rem;\n    padding: 1rem;\n    margin: 1.2em 0;\n    color: white;\n    font-size: 0.9em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-top: 0.4em;\n  }\n}\n@media only screen and (min-device-width: 992px) and (max-device-width: 1200px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 5px 0;\n    position: relative;\n    margin-top: 8%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 1.2rem;\n    width: 13rem;\n    padding: 0.9rem;\n    margin-top: 1.3em;\n    color: white;\n    font-size: 0.8em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.7em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n@media only screen and (min-device-width: 668px) and (max-device-width: 991px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 5px 0;\n    position: relative;\n    margin-top: 13%;\n    top: 2%;\n    transform: translateY(-2%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 20%;\n    transform: translateY(-20%);\n    transform: translateX(-50%);\n    font-size: 1.2rem;\n    width: 13rem;\n    padding: 0.9rem;\n    margin-top: 1.3em;\n    color: white;\n    font-size: 0.8em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n@media only screen and (min-device-width: 482px) and (max-device-width: 667px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1.3rem;\n    width: 13rem;\n    padding: 0.6rem;\n    margin-top: 2em;\n    color: white;\n    font-size: 0.8em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1.2em;\n  }\n}\n@media only screen and (min-device-width: 301px) and (max-device-width: 481px) and (orientation: portrait) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1.1rem;\n    width: 12rem;\n    padding: 0.5rem;\n    margin-top: 2em;\n    color: white;\n    font-size: 0.7em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.3em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 1em;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media only screen and (max-width: 300px) {\n  .site[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    position: relative;\n    margin-top: 15%;\n    top: 20%;\n    transform: translateY(-20%);\n  }\n  .site[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 50%;\n    top: 10%;\n    transform: translateY(-10%);\n    transform: translateX(-50%);\n    font-size: 1rem;\n    width: 7rem;\n    padding: 0.5rem;\n    margin-top: 2em;\n    color: white;\n    font-size: 0.6em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    color: white;\n    position: absolute;\n    left: 50%;\n    top: 10%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    margin-bottom: 0.4em;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcVmlzaW9vblxcc2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxzREFBQTtBQ0NKO0FERUE7RUFDSSxvQkFBQTtFQUNBLHNEQUFBO0FDQUo7QURJQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNGSjtBRFVBO0VBQ0ksbURBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDUEo7QURVQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxjQUFBO0FDUEo7QURVQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNQSjtBRFVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7QUNSUjtBRFdJO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtBQ1RSO0FEaUJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0FDZEo7QURpQkE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtBQ2RKO0FEa0JBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDZko7QURxQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNsQko7QURxQkE7RUFDSSxPQUFBO0VBSUEseUNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ3JCSjtBRHdCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBbkhTO0FDOEZiO0FEd0JBO0VBQ0ksUUFBQTtFQUNBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQU1BLFlBQUE7QUMxQko7QUQ2QkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQXZJVTtBQzZHZDtBRDZCQTs7OztFQUlJLGtDQUFBO0FDMUJKO0FENkJBO0VBQ0ksVUFqSlc7QUN1SGY7QUQ4QkE7RUFFSSxVQXRKWTtBQzBIaEI7QUQrQkE7RUFFSSxVQTVKVztBQytIZjtBRGdDQTtFQUVJLFVBaEtZO0FDa0loQjtBRGlDQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLE9BQUE7SUFDQSwwQkFBQTtFQzlCTjtFRGlDTTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxjQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VDL0JWOztFRHNDRTtJQUNJLGNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ25DTjtBQUNGO0FEd0NBO0VBQ0k7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsT0FBQTtJQUNBLDBCQUFBO0VDdENOO0VEeUNNO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ3ZDVjs7RUQ4Q0U7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDM0NOO0FBQ0Y7QUQrQ0E7RUFDSTtJQUNJLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxPQUFBO0lBQ0EsMEJBQUE7RUM3Q047RURnRE07SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VDOUNWOztFRHVERTtJQUNJLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7RUNwRE47QUFDRjtBRHdEQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQ3RETjtFRHlETTtJQUNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ3ZEVjs7RUQrREU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDNUROO0FBQ0Y7QURnRUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUM5RE47RURpRU07SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUMvRFY7O0VEc0VFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtJQUNBLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ25FTjs7RURzRUU7SUFDSSxjQUFBO0VDbkVOO0FBQ0Y7QUR1RUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7RUNyRU47RUR3RU07SUFDSSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtFQ3RFVjs7RUQ4RUU7SUFDSSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VDM0VOOztFRDhFRTtJQUNJLGNBQUE7RUMzRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvZm9udDkub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDInO1xyXG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvZm9udDMub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuJGNvbG9yX2xlZnQ6IHJnYigzNCwgMzQsIDM0LCAuNSk7XHJcbiRjb2xvcl9yaWdodDogcmdiKDM0LCAzNCwgMzQsIC41KTtcclxuJGhvdmVyX3N0YW5nYTogNzAlO1xyXG4kaG92ZXJfZHJlYXB0YTogMzAlO1xyXG5cclxuLnNlYyB7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4uc2l0ZSB7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuXHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBib3R0b206IC05MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAxLjByZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xKTtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXJnaW46IDAgMSU7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbn1cclxuXHJcblxyXG4uY29udCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi5zcGxpdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNwbGl0LnN0YW5nYSB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxN2RlZywgcmdiYSgyNTUsMCwwLC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSksXHJcbiAgICAvLyBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCByZ2JhKDE3NywgMjksIDI5LCAwLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxuICAgIC8vIGxpbmVhci1ncmFkaWVudCgzMzZkZWcsIHJnYmEoMjIsIDMsIDMsIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpOztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvc3RhbmdhLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zcGxpdC5zdGFuZ2E6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2xlZnQ7XHJcbn1cclxuXHJcbi5zcGxpdC5kcmVhcHRhIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9kcmVhcHRhLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjE3ZGVnLCByZ2JhKDI1NSwwLDAsLjgpLCByZ2JhKDI1NSwgMCwgMCwgMCkgNzAuNzElKSxcclxuICAgIC8vIGxpbmVhci1ncmFkaWVudCgxMjdkZWcsIHJnYmEoMTc3LCAyOSwgMjksIDAuOCksIHJnYmEoMjU1LCAwLCAwLCAwKSA3MC43MSUpLFxyXG4gICAgLy8gbGluZWFyLWdyYWRpZW50KDMzNmRlZywgcmdiYSgyMiwgMywgMywgMC44KSwgcmdiYSgyNTUsIDAsIDAsIDApIDcwLjcxJSk7XHJcblxyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3JpZ2h0O1xyXG59XHJcblxyXG4uc3BsaXQuc3RhbmdhLFxyXG4uc3BsaXQuZHJlYXB0YSxcclxuLnNwbGl0LnN0YW5nYTo6YmVmb3JlLFxyXG4uc3BsaXQuZHJlYXB0YTo6YmVmb3JlIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5ob3Zlcl9zdGFuZ2EgLnN0YW5nYSB7XHJcbiAgICB3aWR0aDogJGhvdmVyX3N0YW5nYTtcclxuXHJcbn1cclxuXHJcbi5ob3Zlcl9zdGFuZ2EgLmRyZWFwdGEge1xyXG5cclxuICAgIHdpZHRoOiAkaG92ZXJfZHJlYXB0YTtcclxufVxyXG5cclxuLmhvdmVyX2RyZWFwdGEgLmRyZWFwdGEge1xyXG5cclxuICAgIHdpZHRoOiAkaG92ZXJfc3RhbmdhO1xyXG59XHJcblxyXG4uaG92ZXJfZHJlYXB0YSAuc3RhbmdhIHtcclxuXHJcbiAgICB3aWR0aDogJGhvdmVyX2RyZWFwdGE7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDFweCkge1xyXG4gICAgLnNpdGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOSU7XHJcbiAgICAgICAgdG9wOiAyJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcclxuXHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEuMmVtIDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAuNGVtO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDk5MnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnNpdGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgICAgICB0b3A6IDIlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xyXG5cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDIwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuOXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4zZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogOTkxcHgpIHtcclxuICAgIC5zaXRlIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTMlO1xyXG4gICAgICAgIHRvcDogMiU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XHJcblxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC45cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjNlbTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDY2N3B4KSB7XHJcbiAgICAuc2l0ZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG5cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMDFweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODFweCkgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkge1xyXG4gICAgLnNpdGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuXHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICAuc2l0ZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG5cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDdyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNmVtO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiAxMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmb250MVwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZm9udDkub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9mb250My5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2VjIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDA7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5zaXRlIHtcbiAgcGFkZGluZzogMThweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLnNpdGUgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IC05MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuLnNpdGUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDMwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDAgMSU7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cblxuLmNvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbi5zcGxpdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3BsaXQuc3RhbmdhIHtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvc3RhbmdhLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3BsaXQuc3RhbmdhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC41KTtcbn1cblxuLnNwbGl0LmRyZWFwdGEge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvZHJlYXB0YS5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwbGl0LmRyZWFwdGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwLjUpO1xufVxuXG4uc3BsaXQuc3RhbmdhLFxuLnNwbGl0LmRyZWFwdGEsXG4uc3BsaXQuc3RhbmdhOjpiZWZvcmUsXG4uc3BsaXQuZHJlYXB0YTo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmhvdmVyX3N0YW5nYSAuc3RhbmdhIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmhvdmVyX3N0YW5nYSAuZHJlYXB0YSB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5ob3Zlcl9kcmVhcHRhIC5kcmVhcHRhIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmhvdmVyX2RyZWFwdGEgLnN0YW5nYSB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDFweCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiA5JTtcbiAgICB0b3A6IDIlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMiUpO1xuICB9XG4gIC5zaXRlIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB3aWR0aDogMjRyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IDEuMmVtIDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLXRvcDogMC40ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDk5MnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDglO1xuICAgIHRvcDogMiU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yJSk7XG4gIH1cbiAgLnNpdGUgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdpZHRoOiAxM3JlbTtcbiAgICBwYWRkaW5nOiAwLjlyZW07XG4gICAgbWFyZ2luLXRvcDogMS4zZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNjY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogOTkxcHgpIHtcbiAgLnNpdGUge1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxMyU7XG4gICAgdG9wOiAyJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIlKTtcbiAgfVxuICAuc2l0ZSBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgd2lkdGg6IDEzcmVtO1xuICAgIHBhZGRpbmc6IDAuOXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODJweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkge1xuICAuc2l0ZSB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gICAgdG9wOiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICB9XG4gIC5zaXRlIGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB3aWR0aDogMTNyZW07XG4gICAgcGFkZGluZzogMC42cmVtO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMDFweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODFweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnNpdGUge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIHRvcDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgfVxuICAuc2l0ZSBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5zaXRlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICB0b3A6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cbiAgLnNpdGUgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuNmVtO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAxMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40ZW07XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG59Il19 */"]
      });
      return ProductsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/products/web/aplicatii/aplicatii.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/products/web/aplicatii/aplicatii.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AplicatiiComponent */

  /***/
  function srcAppComponentsProductsWebAplicatiiAplicatiiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AplicatiiComponent", function () {
      return AplicatiiComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AplicatiiComponent = /*@__PURE__*/function () {
      var AplicatiiComponent = /*#__PURE__*/function () {
        function AplicatiiComponent() {
          _classCallCheck(this, AplicatiiComponent);
        }

        _createClass(AplicatiiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AplicatiiComponent;
      }();

      AplicatiiComponent.ɵfac = function AplicatiiComponent_Factory(t) {
        return new (t || AplicatiiComponent)();
      };

      AplicatiiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AplicatiiComponent,
        selectors: [["app-aplicatii"]],
        decls: 21,
        vars: 0,
        consts: [[1, "container1"], [1, "card"], [1, "card__image-container"], ["src", "/assets/img/aplicatie_web.jpg", "alt", "background", 1, "card__image"], ["viewBox", "0 0 800 500", 1, "card__svg"], ["d", "M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500", "stroke", "transparent", "fill", "#333"], ["d", "M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400", "stroke", "pink", "stroke-width", "3", "fill", "transparent", 1, "card__line"], [1, "card__content"], [1, "card__title", "text-center"], [1, "text-center"], ["routerLink", "/contact"], [2, "color", "red"]],
        template: function AplicatiiComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Magazin online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Aplica\u021Bii management");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Alte aplica\u021Bii");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pre\u021B:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cere Ofert\u0103");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.5;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%) translateY(-10%);\n}\nbutton[_ngcontent-%COMP%] {\n  background: #333;\n  color: #ccc;\n  width: 200px;\n  height: 60px;\n  border: 0;\n  font-size: 18px;\n  border-radius: 4px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  transition: 0.6s;\n  overflow: hidden;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\nbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.5);\n  width: 60px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0.5;\n  filter: blur(30px);\n  transform: translateX(-100px) skewX(-15deg);\n}\nbutton[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  width: 30px;\n  height: 100%;\n  left: 30px;\n  top: 0;\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(-100px) skewX(-15deg);\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #e71616;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 0.6;\n  transition: 0.7s;\n}\nbutton[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 1;\n  transition: 0.7s;\n}\na[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  letter-spacing: 2px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%] {\n  min-width: 100vw;\n  max-width: 100%;\n  min-height: 40vh;\n}\n.container1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-width: 100vw;\n  background: #444;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #333;\n  min-width: 100vw;\n  min-height: 100vh;\n  border-radius: 6px;\n  padding: 2rem;\n  color: #aaa;\n  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.card__image-container[_ngcontent-%COMP%] {\n  margin: -2rem -2rem 1rem -2rem;\n}\n.card__line[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: LineFadeIn 0.8s 0.8s forwards ease-in;\n          animation: LineFadeIn 0.8s 0.8s forwards ease-in;\n}\n.card__image[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: ImageFadeIn 0.8s 1.4s forwards;\n          animation: ImageFadeIn 0.8s 1.4s forwards;\n}\n.card__title[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 10%;\n  font-weight: 800;\n  letter-spacing: 0.01em;\n  font-size: 3em;\n  color: red;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n}\n.card__content[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  opacity: 0;\n  -webkit-animation: ContentFadeIn 0.8s 1.6s forwards;\n          animation: ContentFadeIn 0.8s 1.6s forwards;\n}\n.card__svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 215px;\n}\np[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: white;\n}\n@-webkit-keyframes LineFadeIn {\n  0% {\n    opacity: 0;\n    d: path(\"M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 \");\n    stroke: #fff;\n  }\n  50% {\n    opacity: 1;\n    d: path(\"M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300\");\n    stroke: #ff2323;\n  }\n  100% {\n    opacity: 1;\n    d: path(\"M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400\");\n    stroke: #ff0000;\n  }\n}\n@keyframes LineFadeIn {\n  0% {\n    opacity: 0;\n    d: path(\"M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 \");\n    stroke: #fff;\n  }\n  50% {\n    opacity: 1;\n    d: path(\"M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300\");\n    stroke: #ff2323;\n  }\n  100% {\n    opacity: 1;\n    d: path(\"M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400\");\n    stroke: #ff0000;\n  }\n}\n@-webkit-keyframes ContentFadeIn {\n  0% {\n    transform: translateY(-1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes ContentFadeIn {\n  0% {\n    transform: translateY(-1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes ImageFadeIn {\n  0% {\n    transform: translate(-0.5rem, -0.5rem) scale(1.05);\n    opacity: 0;\n    filter: blur(2px);\n  }\n  50% {\n    opacity: 1;\n    filter: blur(2px);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    filter: blur(0);\n  }\n}\n@keyframes ImageFadeIn {\n  0% {\n    transform: translate(-0.5rem, -0.5rem) scale(1.05);\n    opacity: 0;\n    filter: blur(2px);\n  }\n  50% {\n    opacity: 1;\n    filter: blur(2px);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    filter: blur(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvYXBsaWNhdGlpL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxWaXNpb29uXFxzaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xcd2ViXFxhcGxpY2F0aWlcXGFwbGljYXRpaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvYXBsaWNhdGlpL2FwbGljYXRpaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0RBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7RUFDQSxzREFBQTtBQ0FGO0FER0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7QUNERjtBRGlCQTtFQVBJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw0Q0FBQTtBQ05KO0FEZUE7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNiRjtBRGVFO0VBQ0UsVUFBQTtBQ2JKO0FEZ0JFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDZEo7QURpQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUNmSjtBRGtCRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ2hCSjtBRGtCSTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDaEJOO0FEbUJJO0VBQ0UsMENBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNqQk47QURzQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNuQkY7QUR1QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BCRjtBRHdCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkVBQUE7RUFFQSxnQkFBQTtBQ3RCRjtBRHdCRTtFQUNFLDhCQUFBO0FDdEJKO0FEeUJFO0VBQ0UsVUFBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7QUN2Qko7QUQwQkU7RUFDRSxVQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQ3hCSjtBRDJCRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbURBQUE7QUN6Qko7QUQ0QkU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDMUJKO0FEOEJFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQzVCSjtBRGdDQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDN0JGO0FEa0NBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsaUZBQUE7SUFDQSxZQUFBO0VDL0JGO0VEa0NBO0lBQ0UsVUFBQTtJQUNBLGlHQUFBO0lBQ0EsZUFBQTtFQ2hDRjtFRG1DQTtJQUNFLFVBQUE7SUFDQSxrR0FBQTtJQUNBLGVBQUE7RUNqQ0Y7QUFDRjtBRGdCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGlGQUFBO0lBQ0EsWUFBQTtFQy9CRjtFRGtDQTtJQUNFLFVBQUE7SUFDQSxpR0FBQTtJQUNBLGVBQUE7RUNoQ0Y7RURtQ0E7SUFDRSxVQUFBO0lBQ0Esa0dBQUE7SUFDQSxlQUFBO0VDakNGO0FBQ0Y7QURvQ0E7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQ2xDRjtFRHFDQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQ25DRjtBQUNGO0FEMEJBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUNsQ0Y7RURxQ0E7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUNuQ0Y7QUFDRjtBRHNDQTtFQUNFO0lBQ0Usa0RBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUNwQ0Y7RUR1Q0E7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUNyQ0Y7RUR3Q0E7SUFDRSxpQ0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VDdENGO0FBQ0Y7QURzQkE7RUFDRTtJQUNFLGtEQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VDcENGO0VEdUNBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VDckNGO0VEd0NBO0lBQ0UsaUNBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQ3RDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvYXBsaWNhdGlpL2FwbGljYXRpaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDEnO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250Mic7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvZm9udDMub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyKCRleHRlbmQ6IHRydWUpIHtcclxuICBAaWYgJGV4dGVuZCB7XHJcbiAgICBAZXh0ZW5kICVjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAZWxzZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xyXG4gIH1cclxufVxyXG5cclxuJWNlbnRlciB7XHJcbiAgQGluY2x1ZGUgY2VudGVyKCRleHRlbmQ6IGZhbHNlKTtcclxufVxyXG5cclxuXHJcbmJ1dHRvbiB7XHJcbiAgQGluY2x1ZGUgY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgdHJhbnNpdGlvbjogLjZzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpIHNrZXdYKC0xNWRlZyk7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTcxNjE2O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIHRyYW5zaXRpb246IC43cztcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuN3M7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNDB2aDtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBjb2xvcjogI2FhYTtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICZfX2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IC0ycmVtIC0ycmVtIDFyZW0gLTJyZW07XHJcbiAgfVxyXG5cclxuICAmX19saW5lIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IExpbmVGYWRlSW4gLjhzIC44cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gIH1cclxuXHJcbiAgJl9faW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogSW1hZ2VGYWRlSW4gLjhzIDEuNHMgZm9yd2FyZHM7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IENvbnRlbnRGYWRlSW4gLjhzIDEuNnMgZm9yd2FyZHM7XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDIxNXB4O1xyXG4gIH1cclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgTGluZUZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGQ6IHBhdGgoXCJNIDAgMzAwIFEgMCAzMDAgMCAzMDAgUSAwIDMwMCAwIDMwMCBDIDAgMzAwIDAgMzAwIDAgMzAwIFEgMCAzMDAgMCAzMDAgXCIpO1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkOiBwYXRoKFwiTSAwIDMwMCBRIDUwIDMwMCAxMDAgMzAwIFEgMjUwIDMwMCAzNTAgMzAwIEMgMzUwIDMwMCA1MDAgMzAwIDY1MCAzMDAgUSA3NTAgMzAwIDgwMCAzMDBcIik7XHJcbiAgICBzdHJva2U6ICNmZjIzMjM7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkOiBwYXRoKFwiTSAtMiAxMDAgUSA1MCAyMDAgMTAwIDI1MCBRIDI1MCA0MDAgMzUwIDMwMCBDIDQwMCAyNTAgNTUwIDE1MCA2NTAgMzAwIFEgNzUwIDQ1MCA4MDIgNDAwXCIpO1xyXG4gICAgc3Ryb2tlOiAjZmYwMDAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBDb250ZW50RmFkZUluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFyZW0pO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgSW1hZ2VGYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0uNXJlbSwgLS41cmVtKSBzY2FsZSgxLjA1KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxLjApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYmx1cigwKTtcclxuICB9XHJcbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmb250MlwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZm9udDMub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cblxuYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMzBweDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNzE2MTY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbmJ1dHRvbjpob3ZlcjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuYSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmltZyB7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDB2aDtcbn1cblxuLmNvbnRhaW5lcjEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6ICM0NDQ7XG59XG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAycmVtO1xuICBjb2xvcjogI2FhYTtcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgMXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2FyZF9faW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAtMnJlbSAtMnJlbSAxcmVtIC0ycmVtO1xufVxuLmNhcmRfX2xpbmUge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IExpbmVGYWRlSW4gMC44cyAwLjhzIGZvcndhcmRzIGVhc2UtaW47XG59XG4uY2FyZF9faW1hZ2Uge1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IEltYWdlRmFkZUluIDAuOHMgMS40cyBmb3J3YXJkcztcbn1cbi5jYXJkX190aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBmb250LXNpemU6IDNlbTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuLmNhcmRfX2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IENvbnRlbnRGYWRlSW4gMC44cyAxLjZzIGZvcndhcmRzO1xufVxuLmNhcmRfX3N2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAyMTVweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBrZXlmcmFtZXMgTGluZUZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGQ6IHBhdGgoXCJNIDAgMzAwIFEgMCAzMDAgMCAzMDAgUSAwIDMwMCAwIDMwMCBDIDAgMzAwIDAgMzAwIDAgMzAwIFEgMCAzMDAgMCAzMDAgXCIpO1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZDogcGF0aChcIk0gMCAzMDAgUSA1MCAzMDAgMTAwIDMwMCBRIDI1MCAzMDAgMzUwIDMwMCBDIDM1MCAzMDAgNTAwIDMwMCA2NTAgMzAwIFEgNzUwIDMwMCA4MDAgMzAwXCIpO1xuICAgIHN0cm9rZTogI2ZmMjMyMztcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGQ6IHBhdGgoXCJNIC0yIDEwMCBRIDUwIDIwMCAxMDAgMjUwIFEgMjUwIDQwMCAzNTAgMzAwIEMgNDAwIDI1MCA1NTAgMTUwIDY1MCAzMDAgUSA3NTAgNDUwIDgwMiA0MDBcIik7XG4gICAgc3Ryb2tlOiAjZmYwMDAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIENvbnRlbnRGYWRlSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIEltYWdlRmFkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjVyZW0sIC0wLjVyZW0pIHNjYWxlKDEuMDUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYmx1cigycHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufSJdfQ== */"]
      });
      return AplicatiiComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/products/web/portofoliu/portofoliu.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/products/web/portofoliu/portofoliu.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PortofoliuComponent */

  /***/
  function srcAppComponentsProductsWebPortofoliuPortofoliuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortofoliuComponent", function () {
      return PortofoliuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PortofoliuComponent = /*@__PURE__*/function () {
      var PortofoliuComponent = /*#__PURE__*/function () {
        function PortofoliuComponent() {
          _classCallCheck(this, PortofoliuComponent);
        }

        _createClass(PortofoliuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortofoliuComponent;
      }();

      PortofoliuComponent.ɵfac = function PortofoliuComponent_Factory(t) {
        return new (t || PortofoliuComponent)();
      };

      PortofoliuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortofoliuComponent,
        selectors: [["app-portofoliu"]],
        decls: 51,
        vars: 0,
        consts: [[1, "container1"], [1, "card"], [1, "card__image-container"], ["src", "/assets/img/portofoliuStandard.jpg", "alt", "background", 1, "card__image"], ["viewBox", "0 0 800 500", 1, "card__svg"], ["d", "M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500", "stroke", "transparent", "fill", "#333"], ["d", "M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400", "stroke", "pink", "stroke-width", "3", "fill", "transparent", 1, "card__line"], [1, "card__content"], [1, "card__title", "text-center"], [1, "text-center"], [1, "text-center", 2, "color", "red", "font-weight", "800"], ["target", "_blank", "href", "https://filtrarepoze.netlify.app/", 1, "btn_a"], ["src", "/assets/img/portofoliuPremium.jpg", "alt", "background", 1, "card__image"], ["routerLink", "/contact"], [1, "pret_span"], ["target", "_blank", "href", "https://nervous-kirch-75366d.netlify.app/", 1, "btn_a"]],
        template: function PortofoliuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Portofoliu Standard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1-5 pagini");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Landing Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Single Page Aplication");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pre\u021B: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "del");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "la 300 de Euro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "On Sale -50% : De la 150 de Euro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Portofoliu Custom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1-10 pagini");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Design preferen\u021Bial");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Func\u021Bionalit\u0103\u021Bi extra");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "On Sale -50% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Pre\u021B:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Cere Ofert\u0103 !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  overflow: hidden;\n}\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%) translateY(-10%);\n}\nbutton[_ngcontent-%COMP%] {\n  background: #333;\n  color: #ccc;\n  width: 200px;\n  height: 60px;\n  border: 0;\n  font-size: 18px;\n  border-radius: 4px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  transition: 0.6s;\n  overflow: hidden;\n  margin-bottom: 5%;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\nbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.5);\n  width: 60px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0.5;\n  filter: blur(30px);\n  transform: translateX(-100px) skewX(-15deg);\n}\nbutton[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  width: 30px;\n  height: 100%;\n  left: 30px;\n  top: 0;\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(-100px) skewX(-15deg);\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #e71616;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 0.6;\n  transition: 0.7s;\n}\nbutton[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 1;\n  transition: 0.7s;\n}\n.btn_a[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  letter-spacing: 2px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\n.pret_span[_ngcontent-%COMP%] {\n  color: red;\n  padding-left: 1%;\n}\nimg[_ngcontent-%COMP%] {\n  min-width: 100vw;\n  max-width: 100%;\n  min-height: 40vh;\n}\n.container1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-width: 100vw;\n  background: #444;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #333;\n  min-width: 100vw;\n  min-height: 100vh;\n  border-radius: 6px;\n  padding: 2rem;\n  color: #aaa;\n  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.card__image-container[_ngcontent-%COMP%] {\n  margin: -2rem -2rem 1rem -2rem;\n}\n.card__line[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: LineFadeIn 0.8s 0.8s forwards ease-in;\n          animation: LineFadeIn 0.8s 0.8s forwards ease-in;\n}\n.card__image[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: ImageFadeIn 0.8s 1.4s forwards;\n          animation: ImageFadeIn 0.8s 1.4s forwards;\n}\n.card__title[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 0;\n  margin-bottom: 5%;\n  font-weight: 800;\n  letter-spacing: 0.01em;\n  font-size: 2em;\n  color: red;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n}\n.card__content[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  opacity: 0;\n  -webkit-animation: ContentFadeIn 0.8s 1.6s forwards;\n          animation: ContentFadeIn 0.8s 1.6s forwards;\n}\n.card__svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 215px;\n}\np[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: white;\n}\n@-webkit-keyframes LineFadeIn {\n  0% {\n    opacity: 0;\n    d: path(\"M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 \");\n    stroke: #fff;\n  }\n  50% {\n    opacity: 1;\n    d: path(\"M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300\");\n    stroke: #ff2323;\n  }\n  100% {\n    opacity: 1;\n    d: path(\"M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400\");\n    stroke: #ff0000;\n  }\n}\n@keyframes LineFadeIn {\n  0% {\n    opacity: 0;\n    d: path(\"M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 \");\n    stroke: #fff;\n  }\n  50% {\n    opacity: 1;\n    d: path(\"M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300\");\n    stroke: #ff2323;\n  }\n  100% {\n    opacity: 1;\n    d: path(\"M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400\");\n    stroke: #ff0000;\n  }\n}\n@-webkit-keyframes ContentFadeIn {\n  0% {\n    transform: translateY(-1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes ContentFadeIn {\n  0% {\n    transform: translateY(-1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes ImageFadeIn {\n  0% {\n    transform: translate(-0.5rem, -0.5rem) scale(1.05);\n    opacity: 0;\n    filter: blur(2px);\n  }\n  50% {\n    opacity: 1;\n    filter: blur(2px);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    filter: blur(0);\n  }\n}\n@keyframes ImageFadeIn {\n  0% {\n    transform: translate(-0.5rem, -0.5rem) scale(1.05);\n    opacity: 0;\n    filter: blur(2px);\n  }\n  50% {\n    opacity: 1;\n    filter: blur(2px);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    filter: blur(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvcG9ydG9mb2xpdS9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcVmlzaW9vblxcc2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXHdlYlxccG9ydG9mb2xpdVxccG9ydG9mb2xpdS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvcG9ydG9mb2xpdS9wb3J0b2ZvbGl1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFDQSxzREFBQTtBQ0NGO0FERUE7RUFDRSxvQkFBQTtFQUNBLHNEQUFBO0FDQUY7QURHQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0VBQ0EsZ0JBQUE7QUNERjtBRGtCQTtFQVBJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSw0Q0FBQTtBQ1BKO0FEZ0JBO0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNkRjtBRGdCRTtFQUNFLFVBQUE7QUNkSjtBRGlCRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ2ZKO0FEa0JFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0FDaEJKO0FEbUJFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDakJKO0FEbUJJO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNqQk47QURvQkk7RUFDRSwwQ0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2xCTjtBRHVCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ3BCRjtBRHdCQTtFQUVFLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUN0QkY7QUQwQkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7QUQwQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3ZCRjtBRDJCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDeEJGO0FEMkJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkVBQUE7RUFFQSxnQkFBQTtBQ3pCRjtBRDJCRTtFQUNFLDhCQUFBO0FDekJKO0FENEJFO0VBQ0UsVUFBQTtFQUNBLHdEQUFBO1VBQUEsZ0RBQUE7QUMxQko7QUQ2QkU7RUFDRSxVQUFBO0VBQ0EsaURBQUE7VUFBQSx5Q0FBQTtBQzNCSjtBRDhCRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtBQzVCSjtBRCtCRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUM3Qko7QURpQ0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FDL0JKO0FEbUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNoQ0Y7QURtQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxpRkFBQTtJQUNBLFlBQUE7RUNoQ0Y7RURtQ0E7SUFDRSxVQUFBO0lBQ0EsaUdBQUE7SUFDQSxlQUFBO0VDakNGO0VEb0NBO0lBQ0UsVUFBQTtJQUNBLGtHQUFBO0lBQ0EsZUFBQTtFQ2xDRjtBQUNGO0FEaUJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsaUZBQUE7SUFDQSxZQUFBO0VDaENGO0VEbUNBO0lBQ0UsVUFBQTtJQUNBLGlHQUFBO0lBQ0EsZUFBQTtFQ2pDRjtFRG9DQTtJQUNFLFVBQUE7SUFDQSxrR0FBQTtJQUNBLGVBQUE7RUNsQ0Y7QUFDRjtBRHFDQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VDbkNGO0VEc0NBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VDcENGO0FBQ0Y7QUQyQkE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQ25DRjtFRHNDQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQ3BDRjtBQUNGO0FEdUNBO0VBQ0U7SUFDRSxrREFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtFQ3JDRjtFRHdDQTtJQUNFLFVBQUE7SUFDQSxpQkFBQTtFQ3RDRjtFRHlDQTtJQUNFLGlDQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUN2Q0Y7QUFDRjtBRHVCQTtFQUNFO0lBQ0Usa0RBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUNyQ0Y7RUR3Q0E7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUN0Q0Y7RUR5Q0E7SUFDRSxpQ0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VDdkNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3RzL3dlYi9wb3J0b2ZvbGl1L3BvcnRvZm9saXUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ2ZvbnQxJztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9mb250OS5vdGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDInO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXIoJGV4dGVuZDogdHJ1ZSkge1xyXG4gIEBpZiAkZXh0ZW5kIHtcclxuICAgIEBleHRlbmQgJWNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBlbHNlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTEwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4lY2VudGVyIHtcclxuICBAaW5jbHVkZSBjZW50ZXIoJGV4dGVuZDogZmFsc2UpO1xyXG59XHJcblxyXG5cclxuYnV0dG9uIHtcclxuICBAaW5jbHVkZSBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb2xvcjogI2NjYztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICB0cmFuc2l0aW9uOiAuNnM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgZmlsdGVyOiBibHVyKDMwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpIHNrZXdYKC0xNWRlZyk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNzE2MTY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgdHJhbnNpdGlvbjogLjdzO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IC43cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG5fYSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG5hIHtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LWZhbWlseTogJ2ZvbnQyJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG5cclxuLnByZXRfc3BhbiB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBwYWRkaW5nLWxlZnQ6IDElO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQwdmg7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgYmFja2dyb3VuZDogIzQ0NDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIDAgMCAxcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmX19pbWFnZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAtMnJlbSAtMnJlbSAxcmVtIC0ycmVtO1xyXG4gIH1cclxuXHJcbiAgJl9fbGluZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYW5pbWF0aW9uOiBMaW5lRmFkZUluIC44cyAuOHMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICB9XHJcblxyXG4gICZfX2ltYWdlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IEltYWdlRmFkZUluIC44cyAxLjRzIGZvcndhcmRzO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQxJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYW5pbWF0aW9uOiBDb250ZW50RmFkZUluIC44cyAxLjZzIGZvcndhcmRzO1xyXG5cclxuICB9XHJcblxyXG4gICZfX3N2ZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAyMTVweDtcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBMaW5lRmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZDogcGF0aChcIk0gMCAzMDAgUSAwIDMwMCAwIDMwMCBRIDAgMzAwIDAgMzAwIEMgMCAzMDAgMCAzMDAgMCAzMDAgUSAwIDMwMCAwIDMwMCBcIik7XHJcbiAgICBzdHJva2U6ICNmZmY7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGQ6IHBhdGgoXCJNIDAgMzAwIFEgNTAgMzAwIDEwMCAzMDAgUSAyNTAgMzAwIDM1MCAzMDAgQyAzNTAgMzAwIDUwMCAzMDAgNjUwIDMwMCBRIDc1MCAzMDAgODAwIDMwMFwiKTtcclxuICAgIHN0cm9rZTogI2ZmMjMyMztcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGQ6IHBhdGgoXCJNIC0yIDEwMCBRIDUwIDIwMCAxMDAgMjUwIFEgMjUwIDQwMCAzNTAgMzAwIEMgNDAwIDI1MCA1NTAgMTUwIDY1MCAzMDAgUSA3NTAgNDUwIDgwMiA0MDBcIik7XHJcbiAgICBzdHJva2U6ICNmZjAwMDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIENvbnRlbnRGYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBJbWFnZUZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLS41cmVtLCAtLjVyZW0pIHNjYWxlKDEuMDUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYmx1cigycHgpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEuMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmlsdGVyOiBibHVyKDApO1xyXG4gIH1cclxufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJmb250MVwiO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvZm9udDkub3RmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9mb250My5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTAlKTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbmJ1dHRvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMC41O1xuICBmaWx0ZXI6IGJsdXIoMzBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpIHNrZXdYKC0xNWRlZyk7XG59XG5idXR0b246YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDMwcHg7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpIHNrZXdYKC0xNWRlZyk7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTcxNjE2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b246aG92ZXI6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KSBza2V3WCgtMTVkZWcpO1xuICBvcGFjaXR5OiAwLjY7XG4gIHRyYW5zaXRpb246IDAuN3M7XG59XG5idXR0b246aG92ZXI6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IDAuN3M7XG59XG5cbi5idG5fYSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmEge1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LWZhbWlseTogXCJmb250MlwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmLCBcImFyaWFsXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucHJldF9zcGFuIHtcbiAgY29sb3I6IHJlZDtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbn1cblxuaW1nIHtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MHZoO1xufVxuXG4uY29udGFpbmVyMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogIzQ0NDtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGNvbG9yOiAjYWFhO1xuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAxcmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkX19pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW46IC0ycmVtIC0ycmVtIDFyZW0gLTJyZW07XG59XG4uY2FyZF9fbGluZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogTGluZUZhZGVJbiAwLjhzIDAuOHMgZm9yd2FyZHMgZWFzZS1pbjtcbn1cbi5jYXJkX19pbWFnZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogSW1hZ2VGYWRlSW4gMC44cyAxLjRzIGZvcndhcmRzO1xufVxuLmNhcmRfX3RpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cbi5jYXJkX19jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBDb250ZW50RmFkZUluIDAuOHMgMS42cyBmb3J3YXJkcztcbn1cbi5jYXJkX19zdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMjE1cHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIExpbmVGYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkOiBwYXRoKFwiTSAwIDMwMCBRIDAgMzAwIDAgMzAwIFEgMCAzMDAgMCAzMDAgQyAwIDMwMCAwIDMwMCAwIDMwMCBRIDAgMzAwIDAgMzAwIFwiKTtcbiAgICBzdHJva2U6ICNmZmY7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGQ6IHBhdGgoXCJNIDAgMzAwIFEgNTAgMzAwIDEwMCAzMDAgUSAyNTAgMzAwIDM1MCAzMDAgQyAzNTAgMzAwIDUwMCAzMDAgNjUwIDMwMCBRIDc1MCAzMDAgODAwIDMwMFwiKTtcbiAgICBzdHJva2U6ICNmZjIzMjM7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkOiBwYXRoKFwiTSAtMiAxMDAgUSA1MCAyMDAgMTAwIDI1MCBRIDI1MCA0MDAgMzUwIDMwMCBDIDQwMCAyNTAgNTUwIDE1MCA2NTAgMzAwIFEgNzUwIDQ1MCA4MDIgNDAwXCIpO1xuICAgIHN0cm9rZTogI2ZmMDAwMDtcbiAgfVxufVxuQGtleWZyYW1lcyBDb250ZW50RmFkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBJbWFnZUZhZGVJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMC41cmVtLCAtMC41cmVtKSBzY2FsZSgxLjA1KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGZpbHRlcjogYmx1cigycHgpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gIH1cbn0iXX0= */"]
      });
      return PortofoliuComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/products/web/site-de-prezentare/site-de-prezentare.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: SiteDePrezentareComponent */

  /***/
  function srcAppComponentsProductsWebSiteDePrezentareSiteDePrezentareComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SiteDePrezentareComponent", function () {
      return SiteDePrezentareComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SiteDePrezentareComponent = /*@__PURE__*/function () {
      var SiteDePrezentareComponent = /*#__PURE__*/function () {
        function SiteDePrezentareComponent() {
          _classCallCheck(this, SiteDePrezentareComponent);
        }

        _createClass(SiteDePrezentareComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SiteDePrezentareComponent;
      }();

      SiteDePrezentareComponent.ɵfac = function SiteDePrezentareComponent_Factory(t) {
        return new (t || SiteDePrezentareComponent)();
      };

      SiteDePrezentareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SiteDePrezentareComponent,
        selectors: [["app-site-de-prezentare"]],
        decls: 49,
        vars: 0,
        consts: [[1, "container1"], [1, "card"], [1, "card__image-container"], ["src", "/assets/img/site-uri-responsive1.jpg", "alt", "background", 1, "card__image"], ["viewBox", "0 0 800 500", 1, "card__svg"], ["d", "M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500", "stroke", "transparent", "fill", "#333"], ["d", "M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400", "stroke", "pink", "stroke-width", "3", "fill", "transparent", 1, "card__line"], [1, "card__content"], [1, "card__title", "text-center"], [1, "text-center"], [1, "text-center", 2, "color", "red", "font-weight", "800"], ["target", "_blank", "href", "https://sitedeprezentarestandard.netlify.app/", 1, "btn_a"], ["src", "/assets/img/site-uri-responsive.jpg", "alt", "background", 1, "card__image"], ["routerLink", "/contact"], [1, "pret_span"], ["target", "_blank", "href", "https://www.pepinieravolintir.com/", 1, "btn_a"]],
        template: function SiteDePrezentareComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Site de prezentare Standard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "1-10 pagini");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Responsive");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Maxim 100 de produse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pre\u021B: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "del");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "400 de Euro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "On Sale -50% : De la 200 de Euro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "svg", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Site de prezentare custom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1-50 pagini");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Maxim 500 de produse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "On Sale -50% ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Pre\u021B:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cere Ofert\u0103 !");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  overflow: hidden;\n}\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  left: 50%;\n  top: 10%;\n  transform: translateX(-50%) translateY(-10%);\n}\nbutton[_ngcontent-%COMP%] {\n  background: #333;\n  color: #ccc;\n  width: 200px;\n  height: 60px;\n  border: 0;\n  font-size: 18px;\n  border-radius: 4px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  transition: 0.6s;\n  overflow: hidden;\n  margin-bottom: 5%;\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\nbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.5);\n  width: 60px;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0.5;\n  filter: blur(30px);\n  transform: translateX(-100px) skewX(-15deg);\n}\nbutton[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.2);\n  width: 30px;\n  height: 100%;\n  left: 30px;\n  top: 0;\n  opacity: 0;\n  filter: blur(5px);\n  transform: translateX(-100px) skewX(-15deg);\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background: #e71616;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:hover:before {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 0.6;\n  transition: 0.7s;\n}\nbutton[_ngcontent-%COMP%]:hover:after {\n  transform: translateX(300px) skewX(-15deg);\n  opacity: 1;\n  transition: 0.7s;\n}\n.btn_a[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  letter-spacing: 2px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  font-weight: 400;\n  padding: 30px;\n  color: white;\n  text-decoration: none;\n}\n.pret_span[_ngcontent-%COMP%] {\n  color: red;\n  padding-left: 1%;\n}\nimg[_ngcontent-%COMP%] {\n  min-width: 100vw;\n  max-width: 100%;\n  min-height: 40vh;\n}\n.container1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  min-width: 100vw;\n  background: #444;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  background: #333;\n  min-width: 100vw;\n  min-height: 100vh;\n  border-radius: 6px;\n  padding: 2rem;\n  color: #aaa;\n  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2), 0 0 1rem rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\n.card__image-container[_ngcontent-%COMP%] {\n  margin: -2rem -2rem 1rem -2rem;\n}\n.card__line[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: LineFadeIn 0.8s 0.8s forwards ease-in;\n          animation: LineFadeIn 0.8s 0.8s forwards ease-in;\n}\n.card__image[_ngcontent-%COMP%] {\n  opacity: 0;\n  -webkit-animation: ImageFadeIn 0.8s 1.4s forwards;\n          animation: ImageFadeIn 0.8s 1.4s forwards;\n}\n.card__title[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 0;\n  margin-bottom: 5%;\n  font-weight: 800;\n  letter-spacing: 0.01em;\n  font-size: 2em;\n  color: red;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n}\n.card__content[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  opacity: 0;\n  -webkit-animation: ContentFadeIn 0.8s 1.6s forwards;\n          animation: ContentFadeIn 0.8s 1.6s forwards;\n}\n.card__svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 215px;\n}\np[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: white;\n}\n@-webkit-keyframes LineFadeIn {\n  0% {\n    opacity: 0;\n    d: path(\"M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 \");\n    stroke: #fff;\n  }\n  50% {\n    opacity: 1;\n    d: path(\"M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300\");\n    stroke: #ff2323;\n  }\n  100% {\n    opacity: 1;\n    d: path(\"M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400\");\n    stroke: #ff0000;\n  }\n}\n@keyframes LineFadeIn {\n  0% {\n    opacity: 0;\n    d: path(\"M 0 300 Q 0 300 0 300 Q 0 300 0 300 C 0 300 0 300 0 300 Q 0 300 0 300 \");\n    stroke: #fff;\n  }\n  50% {\n    opacity: 1;\n    d: path(\"M 0 300 Q 50 300 100 300 Q 250 300 350 300 C 350 300 500 300 650 300 Q 750 300 800 300\");\n    stroke: #ff2323;\n  }\n  100% {\n    opacity: 1;\n    d: path(\"M -2 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 802 400\");\n    stroke: #ff0000;\n  }\n}\n@-webkit-keyframes ContentFadeIn {\n  0% {\n    transform: translateY(-1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes ContentFadeIn {\n  0% {\n    transform: translateY(-1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes ImageFadeIn {\n  0% {\n    transform: translate(-0.5rem, -0.5rem) scale(1.05);\n    opacity: 0;\n    filter: blur(2px);\n  }\n  50% {\n    opacity: 1;\n    filter: blur(2px);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    filter: blur(0);\n  }\n}\n@keyframes ImageFadeIn {\n  0% {\n    transform: translate(-0.5rem, -0.5rem) scale(1.05);\n    opacity: 0;\n    filter: blur(2px);\n  }\n  50% {\n    opacity: 1;\n    filter: blur(2px);\n  }\n  100% {\n    transform: translateY(0) scale(1);\n    opacity: 1;\n    filter: blur(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvc2l0ZS1kZS1wcmV6ZW50YXJlL0M6XFxVc2Vyc1xcYW5kcmVcXERlc2t0b3BcXFBvcnRvZm9saXVBbmd1bGFyXFxWaXNpb29uXFxzaXRlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0c1xcd2ViXFxzaXRlLWRlLXByZXplbnRhcmVcXHNpdGUtZGUtcHJlemVudGFyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvc2l0ZS1kZS1wcmV6ZW50YXJlL3NpdGUtZGUtcHJlemVudGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esc0RBQUE7QUNDRjtBREVBO0VBQ0Usb0JBQUE7RUFDQSxzREFBQTtBQ0FGO0FER0E7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0FDREY7QURrQkE7RUFQSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsNENBQUE7QUNQSjtBRGdCQTtFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZEY7QURnQkU7RUFDRSxVQUFBO0FDZEo7QURpQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNmSjtBRGtCRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQ0FBQTtBQ2hCSjtBRG1CRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ2pCSjtBRG1CSTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDakJOO0FEb0JJO0VBQ0UsMENBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNsQk47QUR1QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNwQkY7QUR3QkE7RUFFRSxtQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDdEJGO0FEMEJBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FDdkJGO0FEMEJBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7QUQyQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3hCRjtBRDJCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZFQUFBO0VBRUEsZ0JBQUE7QUN6QkY7QUQyQkU7RUFDRSw4QkFBQTtBQ3pCSjtBRDRCRTtFQUNFLFVBQUE7RUFDQSx3REFBQTtVQUFBLGdEQUFBO0FDMUJKO0FENkJFO0VBQ0UsVUFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUMzQko7QUQ4QkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbURBQUE7QUM1Qko7QUQrQkU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtVQUFBLDJDQUFBO0FDN0JKO0FEaUNFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQy9CSjtBRG1DQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDaENGO0FEbUNBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsaUZBQUE7SUFDQSxZQUFBO0VDaENGO0VEbUNBO0lBQ0UsVUFBQTtJQUNBLGlHQUFBO0lBQ0EsZUFBQTtFQ2pDRjtFRG9DQTtJQUNFLFVBQUE7SUFDQSxrR0FBQTtJQUNBLGVBQUE7RUNsQ0Y7QUFDRjtBRGlCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGlGQUFBO0lBQ0EsWUFBQTtFQ2hDRjtFRG1DQTtJQUNFLFVBQUE7SUFDQSxpR0FBQTtJQUNBLGVBQUE7RUNqQ0Y7RURvQ0E7SUFDRSxVQUFBO0lBQ0Esa0dBQUE7SUFDQSxlQUFBO0VDbENGO0FBQ0Y7QURxQ0E7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQ25DRjtFRHNDQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQ3BDRjtBQUNGO0FEMkJBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUNuQ0Y7RURzQ0E7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUNwQ0Y7QUFDRjtBRHVDQTtFQUNFO0lBQ0Usa0RBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUNyQ0Y7RUR3Q0E7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUN0Q0Y7RUR5Q0E7SUFDRSxpQ0FBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0VDdkNGO0FBQ0Y7QUR1QkE7RUFDRTtJQUNFLGtEQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VDckNGO0VEd0NBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VDdENGO0VEeUNBO0lBQ0UsaUNBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQ3ZDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvc2l0ZS1kZS1wcmV6ZW50YXJlL3NpdGUtZGUtcHJlemVudGFyZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDEnO1xyXG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250Mic7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvZm9udDMub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuQG1peGluIGNlbnRlcigkZXh0ZW5kOiB0cnVlKSB7XHJcbiAgQGlmICRleHRlbmQge1xyXG4gICAgQGV4dGVuZCAlY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGVsc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTAlKTtcclxuICB9XHJcbn1cclxuXHJcbiVjZW50ZXIge1xyXG4gIEBpbmNsdWRlIGNlbnRlcigkZXh0ZW5kOiBmYWxzZSk7XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gIEBpbmNsdWRlIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gIHRyYW5zaXRpb246IC42cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMzBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KSBza2V3WCgtMTVkZWcpO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U3MTYxNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICB0cmFuc2l0aW9uOiAuN3M7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogLjdzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJ0bl9hIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcbmEge1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4ucHJldF9zcGFuIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmctbGVmdDogMSU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNDB2aDtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBjb2xvcjogI2FhYTtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICZfX2ltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IC0ycmVtIC0ycmVtIDFyZW0gLTJyZW07XHJcbiAgfVxyXG5cclxuICAmX19saW5lIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IExpbmVGYWRlSW4gLjhzIC44cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gIH1cclxuXHJcbiAgJl9faW1hZ2Uge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogSW1hZ2VGYWRlSW4gLjhzIDEuNHMgZm9yd2FyZHM7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZm9udDEnLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IENvbnRlbnRGYWRlSW4gLjhzIDEuNnMgZm9yd2FyZHM7XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDIxNXB4O1xyXG4gIH1cclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIExpbmVGYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBkOiBwYXRoKFwiTSAwIDMwMCBRIDAgMzAwIDAgMzAwIFEgMCAzMDAgMCAzMDAgQyAwIDMwMCAwIDMwMCAwIDMwMCBRIDAgMzAwIDAgMzAwIFwiKTtcclxuICAgIHN0cm9rZTogI2ZmZjtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZDogcGF0aChcIk0gMCAzMDAgUSA1MCAzMDAgMTAwIDMwMCBRIDI1MCAzMDAgMzUwIDMwMCBDIDM1MCAzMDAgNTAwIDMwMCA2NTAgMzAwIFEgNzUwIDMwMCA4MDAgMzAwXCIpO1xyXG4gICAgc3Ryb2tlOiAjZmYyMzIzO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZDogcGF0aChcIk0gLTIgMTAwIFEgNTAgMjAwIDEwMCAyNTAgUSAyNTAgNDAwIDM1MCAzMDAgQyA0MDAgMjUwIDU1MCAxNTAgNjUwIDMwMCBRIDc1MCA0NTAgODAyIDQwMFwiKTtcclxuICAgIHN0cm9rZTogI2ZmMDAwMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgQ29udGVudEZhZGVJbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIEltYWdlRmFkZUluIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtLjVyZW0sIC0uNXJlbSkgc2NhbGUoMS4wNSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYmx1cigycHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMS4wKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XHJcbiAgfVxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9mb250OS5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogI2NjYztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuYnV0dG9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMzBweDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCkgc2tld1goLTE1ZGVnKTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNzE2MTY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzAwcHgpIHNrZXdYKC0xNWRlZyk7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbmJ1dHRvbjpob3ZlcjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCkgc2tld1goLTE1ZGVnKTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuLmJ0bl9hIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYSB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcmV0X3NwYW4ge1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLWxlZnQ6IDElO1xufVxuXG5pbWcge1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwdmg7XG59XG5cbi5jb250YWluZXIxIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiAjNDQ0O1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgY29sb3I6ICNhYWE7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmRfX2ltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogLTJyZW0gLTJyZW0gMXJlbSAtMnJlbTtcbn1cbi5jYXJkX19saW5lIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBMaW5lRmFkZUluIDAuOHMgMC44cyBmb3J3YXJkcyBlYXNlLWluO1xufVxuLmNhcmRfX2ltYWdlIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBJbWFnZUZhZGVJbiAwLjhzIDEuNHMgZm9yd2FyZHM7XG59XG4uY2FyZF9fdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuLmNhcmRfX2NvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IENvbnRlbnRGYWRlSW4gMC44cyAxLjZzIGZvcndhcmRzO1xufVxuLmNhcmRfX3N2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAyMTVweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBrZXlmcmFtZXMgTGluZUZhZGVJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGQ6IHBhdGgoXCJNIDAgMzAwIFEgMCAzMDAgMCAzMDAgUSAwIDMwMCAwIDMwMCBDIDAgMzAwIDAgMzAwIDAgMzAwIFEgMCAzMDAgMCAzMDAgXCIpO1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZDogcGF0aChcIk0gMCAzMDAgUSA1MCAzMDAgMTAwIDMwMCBRIDI1MCAzMDAgMzUwIDMwMCBDIDM1MCAzMDAgNTAwIDMwMCA2NTAgMzAwIFEgNzUwIDMwMCA4MDAgMzAwXCIpO1xuICAgIHN0cm9rZTogI2ZmMjMyMztcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGQ6IHBhdGgoXCJNIC0yIDEwMCBRIDUwIDIwMCAxMDAgMjUwIFEgMjUwIDQwMCAzNTAgMzAwIEMgNDAwIDI1MCA1NTAgMTUwIDY1MCAzMDAgUSA3NTAgNDUwIDgwMiA0MDBcIik7XG4gICAgc3Ryb2tlOiAjZmYwMDAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIENvbnRlbnRGYWRlSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIEltYWdlRmFkZUluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjVyZW0sIC0wLjVyZW0pIHNjYWxlKDEuMDUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZmlsdGVyOiBibHVyKDJweCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYmx1cigycHgpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufSJdfQ== */"]
      });
      return SiteDePrezentareComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/products/web/tip2/tip2.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/products/web/tip2/tip2.component.ts ***!
    \****************************************************************/

  /*! exports provided: Tip2Component */

  /***/
  function srcAppComponentsProductsWebTip2Tip2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tip2Component", function () {
      return Tip2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Tip2Component = /*@__PURE__*/function () {
      var Tip2Component = /*#__PURE__*/function () {
        function Tip2Component() {
          _classCallCheck(this, Tip2Component);
        }

        _createClass(Tip2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Tip2Component;
      }();

      Tip2Component.ɵfac = function Tip2Component_Factory(t) {
        return new (t || Tip2Component)();
      };

      Tip2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Tip2Component,
        selectors: [["app-tip2"]],
        decls: 23,
        vars: 0,
        consts: [[1, "body"], [1, "row"], [1, "col-md-6", "col-xl-12", "text"], [1, "text-center"], [1, "col-md-6", "col-xl-12", "backButton"], ["routerLink", "/products", 1, "text-center"], [1, "produse"], ["href", "https://digitalcardvisioonwebsite.netlify.app/", 1, "text-center"], [1, "col-md-6"], ["src", "/assets/img/tip2/principal.png", "alt", "CarteTip2", 1, "img-fluid"], ["src", "/assets/img/tip2/secundar.png", "alt", "CarteTip2", 1, "img-fluid"]],
        template: function Tip2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "C\u0103r\u021Bi de vizit\u0103 Tip II");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xCEn cazul \xEEn care r\u0103m\xE2ne\u021Bi f\u0103r\u0103 c\u0103r\u021Bi de vizit\u0103 fizice.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " V\u0103 punem la dispozi\u021Bie c\u0103r\u021Bile de vizit\u0103 Tip II digitale. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pret: 15 euro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \xCEnapoi la produse");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Link direct");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["@font-face {\n  font-family: \"font1\";\n  src: url(\"/assets/fonts/font9.otf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"font2\";\n  src: url(\"/assets/fonts/font3.otf\") format(\"truetype\");\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.body[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  max-height: 100vh;\n  min-width: 100vw;\n  max-width: 100vw;\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n}\n.text[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 40%;\n  left: 50%;\n  top: 50%;\n  border-radius: 20px;\n  transform: translate(-50%, -50%);\n}\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 4em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 10px 0;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n}\n.text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2.3em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 20px;\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n}\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 0.8em;\n}\n.backButton[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: red;\n  height: 10%;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  transform: translate(0, -50%);\n  overflow: hidden;\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding: 10px;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-family: \"font2\", \"Roboto\", sans-serif, \"arial\";\n  text-decoration: none;\n}\n.backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #333;\n  letter-spacing: 4px;\n  font-weight: 800;\n}\n.produse[_ngcontent-%COMP%] {\n  background: radial-gradient(circle, #3e3e3e 0%, black 100%);\n  min-width: 100vw;\n  max-width: 100vw;\n  overflow: hidden;\n}\nimg[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  position: relative;\n  left: 50%;\n  transform: translate(-50%);\n}\na[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 2em;\n  font-weight: 500;\n  letter-spacing: 4px;\n  padding: 10px 0;\n  font-family: \"font1\", \"Roboto\", sans-serif, \"arial\";\n}\n@media screen and (min-width: 150px) and (max-width: 430px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 40%;\n    left: 40%;\n    top: 40%;\n    border-radius: 20px;\n    transform: translate(-40%, -40%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 40%;\n    height: 10%;\n    position: absolute;\n    right: 0;\n    top: 10%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -10%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 430px) and (max-width: 902px) {\n  .text[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 70%;\n    height: 80%;\n    left: 50%;\n    top: 50%;\n    border-radius: 20px;\n    transform: translate(-50%, -50%);\n  }\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: red;\n    font-size: 2.5em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 10px 0;\n    line-height: 1em;\n  }\n  .text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 2em;\n    font-weight: 500;\n    letter-spacing: 4px;\n    padding: 20px;\n    line-height: 1.5em;\n  }\n  .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 0.8em;\n  }\n\n  .backButton[_ngcontent-%COMP%] {\n    width: 20%;\n    background-color: red;\n    height: 13%;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 1em;\n    font-weight: 500;\n    letter-spacing: 2px;\n    padding: 10px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n  .backButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #333;\n    letter-spacing: 4px;\n    font-weight: 800;\n  }\n}\n@media screen and (min-width: 903px) {\n  .backButton[_ngcontent-%COMP%] {\n    width: 25%;\n    height: 15%;\n  }\n\n  .text[_ngcontent-%COMP%] {\n    height: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvdGlwMi9DOlxcVXNlcnNcXGFuZHJlXFxEZXNrdG9wXFxQb3J0b2ZvbGl1QW5ndWxhclxcVmlzaW9vblxcc2l0ZS9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdHNcXHdlYlxcdGlwMlxcdGlwMi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvdGlwMi90aXAyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxzREFBQTtBQ0NKO0FERUE7RUFDSSxvQkFBQTtFQUNBLHNEQUFBO0FDQUo7QURJQTtFQUdJLHNCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRFVBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBQ1BKO0FEWUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDVEo7QURhSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtREFBQTtBQ1hSO0FEZUk7O0VBRUksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtBQ2JSO0FEa0JJO0VBQ0ksa0JBQUE7QUNoQlI7QURvQkE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDakJKO0FEbUJJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLG1EQUFBO0VBQ0EscUJBQUE7QUNqQlI7QURvQkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2xCUjtBRHdCQTtFQUVJLDJEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDdEJKO0FEMEJBOztFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FDdkJKO0FEMEJBO0VBRUksVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1EQUFBO0FDeEJKO0FEZ0NBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0VDN0JOO0VEZ0NNO0lBRUksY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUMvQlY7RURtQ007O0lBR0ksY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUNsQ1Y7RUR1Q007SUFDSSxrQkFBQTtFQ3JDVjs7RUR5Q0U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUN0Q047RUR3Q007SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDdENWO0VEMENNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUN4Q1Y7QUFDRjtBRDZDQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQ0FBQTtFQzNDTjtFRDhDTTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUM1Q1Y7RURnRE07O0lBRUksWUFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDOUNWO0VEbURNO0lBQ0ksa0JBQUE7RUNqRFY7O0VEcURFO0lBQ0ksVUFBQTtJQUNBLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFDQSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsNkJBQUE7RUNsRE47RURvRE07SUFDSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsUUFBQTtJQUNBLDZCQUFBO0VDbERWO0VEc0RNO0lBQ0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNwRFY7QUFDRjtBRHdEQTtFQUNJO0lBQ0ksVUFBQTtJQUVBLFdBQUE7RUN2RE47O0VEMERFO0lBRUksV0FBQTtFQ3hETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy93ZWIvdGlwMi90aXAyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQxJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQ5Lm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ2ZvbnQyJztcclxuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuXHJcbioge1xyXG4gICAgLy8gcGFkZGluZzogMDtcclxuICAgIC8vIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4kYWNjZW50LWNvbG9yOiByZ2JhKDE5MiwgNCwgNCwgKTtcclxuJGdyaWQtZ3V0dGVyLXdpZHRoOiAxMHB4ICFkZWZhdWx0O1xyXG5cclxuLmJvZHkge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiYSg2MiwgNjIsIDYyLCAxKSAwJSwgcmdiYSgwLCAwLCAwLCAxKSAxMDAlKTtcclxuXHJcblxyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcblxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ2ZvbnQxJywgJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGgyLFxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4zZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdmb250MicsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuOGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFja0J1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnZm9udDInLCAnUm9ib3RvJywgc2Fucy1zZXJpZiwgJ2FyaWFsJztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5wcm9kdXNlIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDYyLCA2MiwgNjIsIDEpIDAlLCByZ2JhKDAsIDAsIDAsIDEpIDEwMCUpO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5cclxuaW1nLFxyXG5hIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG59XHJcblxyXG5hIHtcclxuXHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdmb250MScsICdSb2JvdG8nLCBzYW5zLXNlcmlmLCAnYXJpYWwnO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMzNweCkgYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7fVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgLnRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgIGxlZnQ6IDQwJTtcclxuICAgICAgICB0b3A6IDQwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsIC00MCUpO1xyXG5cclxuXHJcbiAgICAgICAgaDEge1xyXG5cclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBoMixcclxuICAgICAgICBwIHtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYWNrQnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogOTAycHgpIHtcclxuICAgIC50ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaDIsXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tCdXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIGhlaWdodDogMTMlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAzcHgpIHtcclxuICAgIC5iYWNrQnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dCB7XHJcblxyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgfVxyXG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCI7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9mb250OS5vdGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2ZvbnQzLm90ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgIzNlM2UzZSAwJSwgYmxhY2sgMTAwJSk7XG59XG5cbi50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udGV4dCBoMSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQxXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbn1cbi50ZXh0IGgyLFxuLnRleHQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDJcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuLnRleHQgcCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbn1cblxuLmJhY2tCdXR0b24ge1xuICB3aWR0aDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYmFja0J1dHRvbiBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnQyXCIsIFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYsIFwiYXJpYWxcIjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJhY2tCdXR0b24gYTpob3ZlciB7XG4gIGNvbG9yOiAjMzMzO1xuICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ucHJvZHVzZSB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMzZTNlM2UgMCUsIGJsYWNrIDEwMCUpO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pbWcsXG5hIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xufVxuXG5hIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1mYW1pbHk6IFwiZm9udDFcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiwgXCJhcmlhbFwiO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6IDQzMHB4KSB7XG4gIC50ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgdG9wOiA0MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLCAtNDAlKTtcbiAgfVxuICAudGV4dCBoMSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLFxuLnRleHQgcCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB9XG4gIC50ZXh0IHAge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjhlbTtcbiAgfVxuXG4gIC5iYWNrQnV0dG9uIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDEwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwJSk7XG4gIH1cbiAgLmJhY2tCdXR0b24gYSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogOTAycHgpIHtcbiAgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC50ZXh0IGgxIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICB9XG4gIC50ZXh0IGgyLFxuLnRleHQgcCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgfVxuICAudGV4dCBwIHtcbiAgICBsaW5lLWhlaWdodDogMC44ZW07XG4gIH1cblxuICAuYmFja0J1dHRvbiB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgaGVpZ2h0OiAxMyU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbiAgfVxuICAuYmFja0J1dHRvbiBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB9XG4gIC5iYWNrQnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAzcHgpIHtcbiAgLmJhY2tCdXR0b24ge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAxNSU7XG4gIH1cblxuICAudGV4dCB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gIH1cbn0iXX0= */"]
      });
      return Tip2Component;
    }();
    /***/

  },

  /***/
  "./src/app/components/proiecte/in-curs/in-curs.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/proiecte/in-curs/in-curs.component.ts ***!
    \******************************************************************/

  /*! exports provided: InCursComponent */

  /***/
  function srcAppComponentsProiecteInCursInCursComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InCursComponent", function () {
      return InCursComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InCursComponent = /*@__PURE__*/function () {
      var InCursComponent = /*#__PURE__*/function () {
        function InCursComponent() {
          _classCallCheck(this, InCursComponent);
        }

        _createClass(InCursComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InCursComponent;
      }();

      InCursComponent.ɵfac = function InCursComponent_Factory(t) {
        return new (t || InCursComponent)();
      };

      InCursComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InCursComponent,
        selectors: [["app-in-curs"]],
        decls: 2,
        vars: 0,
        template: function InCursComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "in-curs works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvaWVjdGUvaW4tY3Vycy9pbi1jdXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      return InCursComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/proiecte/terminate/terminate.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/proiecte/terminate/terminate.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TerminateComponent */

  /***/
  function srcAppComponentsProiecteTerminateTerminateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TerminateComponent", function () {
      return TerminateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TerminateComponent = /*@__PURE__*/function () {
      var TerminateComponent = /*#__PURE__*/function () {
        function TerminateComponent() {
          _classCallCheck(this, TerminateComponent);
        }

        _createClass(TerminateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TerminateComponent;
      }();

      TerminateComponent.ɵfac = function TerminateComponent_Factory(t) {
        return new (t || TerminateComponent)();
      };

      TerminateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TerminateComponent,
        selectors: [["app-terminate"]],
        decls: 2,
        vars: 0,
        template: function TerminateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "terminate works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvaWVjdGUvdGVybWluYXRlL3Rlcm1pbmF0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      return TerminateComponent;
    }();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\Users\andre\Desktop\PortofoliuAngular\Visioon\site\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map