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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n  <app-map></app-map>\n</div> -->\n\n\n<div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill>\n  <div fxFlex=\"90\" class=\"map-div\">\n    <app-map></app-map>\n  </div>\n  <div fxFlex=\"10\" class=\"info-div\" >\n    <app-info></app-info>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/info/info.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/info/info.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex=\"100\" fxLayout=\"column\"  fxLayout.xs=\"row\" class=\"info-comp\"\n  ngClass.xs=\"info-comp-xs\" fxFlex.xs=\"100\" >\n\n  <div fxFlex=\"35\" fxLayoutAlign=\"center center\" fxLayout=\"column\" class=\"info-box\">\n    <div fxFLex=\"50\" class=\"info-title\"> Total cases</div>\n    <div fxFLex=\"50\" class=\"info-value\"> {{store.dataset.totalCases}} </div>\n  </div>\n  <div fxFlex=\"35\" fxLayoutAlign=\"center center\" fxLayout=\"column\" class=\"info-box\">\n    <div fxFLex=\"50\" class=\"info-title\"> Total deaths</div>\n    <div fxFLex=\"50\" class=\"info-value\"> {{store.dataset.totalDeaths}} </div>\n  </div>\n  <div fxFlex=\"30\" fxLayoutAlign=\"center center\" fxLayout=\"column\" class=\"info-box\">\n    <div fxFLex=\"50\" class=\"info-title\"> Fatality rate </div>\n    <div fxFLex=\"50\" class=\"info-value\"> {{store.dataset.fatalityRate}} </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/map/map.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/map/map.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"isLoading\"></mat-progress-bar>\n<div id=\"map\"></div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-div {\n  background: green;\n}\n\n.content {\n  min-width: 300px;\n  /*height: 400px;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYWl0YWh0bWFuL0J1cmVhdS9QRVJTTy9jb3JvbmF2aXJ1cy9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0FDQUY7O0FEU0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pbmZvLWRpdiB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICAvLyBjb2xvcjp3aGl0ZTtcblxufVxuXG4ubWFwLWRpdiB7XG5cbn1cblxuLmNvbnRlbnQge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICAvKmhlaWdodDogNDAwcHg7Ki9cbn1cbiIsIi5pbmZvLWRpdiB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uY29udGVudCB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIC8qaGVpZ2h0OiA0MDBweDsqL1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/info/info.component */ "./src/app/components/info/info.component.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
                _components_info_info_component__WEBPACK_IMPORTED_MODULE_9__["InfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/info/info.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/info/info.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info-comp {\n  background-color: #191a1a;\n  color: white;\n  min-height: 100vh;\n}\n\n.info-comp-xs {\n  background-color: #191a1a;\n  min-height: 10vh;\n}\n\n.info-title {\n  font-weight: bolder;\n  font-size: large;\n}\n\n.info-value {\n  font-size: larger;\n  font-weight: bold;\n  color: red;\n}\n\n.info-box {\n  border-color: gray;\n  border-style: dotted;\n  border-width: 0.1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYWl0YWh0bWFuL0J1cmVhdS9QRVJTTy9jb3JvbmF2aXJ1cy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL2luZm8vaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFFQSxnQkFBQTtBQ0FGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmZvL2luZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1jb21wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MWExYTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmluZm8tY29tcC14cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTFhMWE7XG4gIC8vIGNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMTB2aDtcbn1cblxuXG4uaW5mby10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5pbmZvLXZhbHVlIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5mby1ib3gge1xuICBib3JkZXItY29sb3I6IGdyYXk7XG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xuICBib3JkZXItd2lkdGg6IDAuMXB4O1xufVxuIiwiLmluZm8tY29tcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTFhMWE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5pbmZvLWNvbXAteHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxYTFhO1xuICBtaW4taGVpZ2h0OiAxMHZoO1xufVxuXG4uaW5mby10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5pbmZvLXZhbHVlIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogcmVkO1xufVxuXG4uaW5mby1ib3gge1xuICBib3JkZXItY29sb3I6IGdyYXk7XG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xuICBib3JkZXItd2lkdGg6IDAuMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/info/info.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");



var InfoComponent = /** @class */ (function () {
    function InfoComponent(store) {
        this.store = store;
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
    ]; };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.scss */ "./src/app/components/info/info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 100%;\n}\n\nmat-progress-bar {\n  position: absolute;\n  z-index: 1;\n}\n\n::ng-deep .mat-progress-bar-fill::after {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NlYWl0YWh0bWFuL0J1cmVhdS9QRVJTTy9jb3JvbmF2aXJ1cy9hcHAvc3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTtFQUNFLHFCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cblxubWF0LXByb2dyZXNzLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuIiwiI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1wcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_carto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/carto.service */ "./src/app/services/carto.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");





var MapComponent = /** @class */ (function () {
    function MapComponent(carto, data, store) {
        this.carto = carto;
        this.data = data;
        this.store = store;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.data.getData();
        // this.data.readCSV()
        this.data.evtDataIsReady.subscribe(function (data) {
            _this.carto.buildMap();
            _this.store.ready.data = true;
        });
        this.carto.evtMapIsReady.subscribe(function (b) {
            if (_this.store.ready.data) {
                _this.carto.addGeoJsonSource('coronavirus', _this.store.dataset.formatedData);
                _this.carto.resizeMap();
                _this.isLoading = false;
                _this.store.ready.map = true;
            }
        });
    };
    MapComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.data.evtDataIsReady.unsubscribe();
        this.carto.evtMapIsReady.unsubscribe();
    };
    MapComponent.ctorParameters = function () { return [
        { type: _services_carto_service__WEBPACK_IMPORTED_MODULE_2__["CartoService"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }
    ]; };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/components/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_carto_service__WEBPACK_IMPORTED_MODULE_2__["CartoService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/services/carto.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/carto.service.ts ***!
  \*******************************************/
/*! exports provided: CartoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartoService", function() { return CartoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.service */ "./src/app/services/store.service.ts");





var CartoService = /** @class */ (function () {
    function CartoService(store) {
        this.store = store;
        this.evtMapIsReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        mapbox_gl__WEBPACK_IMPORTED_MODULE_3__["accessToken"] = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mapbox.accessToken;
    }
    CartoService.prototype.buildMap = function () {
        var that = this;
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__["Map"]({
            container: 'map',
            style: 'mapbox://styles/aitahtman/ck6975yua1zb81imow9xarbld',
            zoom: 2
        });
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__["NavigationControl"]());
        // map is ready
        this.map.on('load', function () {
            console.log('Map is ready');
            that.evtMapIsReady.emit(true);
        });
        // toggle cursor on coronavirus source
        this.map.on('mouseenter', 'coronavirus', function () {
            that.map.getCanvas().style.cursor = 'pointer';
        });
        this.map.on('mouseleave', 'coronavirus', function () {
            that.map.getCanvas().style.cursor = '';
        });
        // click evt
        this.map.on('click', 'coronavirus', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var props = e.features[0].properties;
            // console.log(e.features[0].properties)
            var title = props.province ? "<h4> " + props.country + " | " + props.province + " </h4>" : "<h4> " + props.country + " </h4>";
            var description = "\n      " + title + "\n      <p class=\"confirmed-text\"> <b> Confirmed cases </b> : " + props.Confirmed + " </p>\n      <p class=\"deaths-text\"> <b> Reported deaths </b> : " + props.Deaths + " </p>\n      <p class=\"recovered-text\"> <b>  Recovered </b> : " + props.Recovered + " </p>\n      ";
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
            new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__["Popup"]()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(that.map);
        });
    };
    CartoService.prototype.addGeoJsonSource = function (sourceName, geojson) {
        // console.log(geojson)
        this.map.addSource(sourceName, geojson);
        this.map.addLayer({
            id: sourceName,
            type: 'circle',
            source: sourceName,
            paint: {
                "circle-radius": ["case",
                    ["<=", ["to-number", ["get", "Confirmed"]], 10], 5,
                    ["<=", ["to-number", ["get", "Confirmed"]], 100], 8,
                    [">=", ["to-number", ["get", "Confirmed"]], 1000], 30,
                    [">=", ["to-number", ["get", "Confirmed"]], 100], 20,
                    ["<=", ["to-number", ["get", "Confirmed"]], 500], 25,
                    0.2
                ],
                "circle-opacity": ["case",
                    ["<=", ["to-number", ["get", "Deaths"]], 10], 0.4,
                    [">=", ["to-number", ["get", "Deaths"]], 2500], 1,
                    [">=", ["to-number", ["get", "Deaths"]], 1000], 0.9,
                    [">=", ["to-number", ["get", "Deaths"]], 100], 0.7,
                    ["<=", ["to-number", ["get", "Deaths"]], 100], 0.5,
                    0.2
                ],
                "circle-color": "#E8231D",
                "circle-stroke-width": 0.1,
                "circle-stroke-color": 'black'
            }
        });
    };
    CartoService.prototype.resizeMap = function () {
        this.map.resize();
    };
    CartoService.ctorParameters = function () { return [
        { type: _store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }
    ]; };
    CartoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]])
    ], CartoService);
    return CartoService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.service */ "./src/app/services/store.service.ts");





var DataService = /** @class */ (function () {
    function DataService(http, store) {
        this.http = http;
        this.store = store;
        this.csvData = [];
        this.formatedData = {};
        this.evtDataIsReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DataService.prototype.readCSV = function () {
        var _this = this;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].dataUrl)
            .subscribe(function (data) { return _this.extractData(data); }, function (err) {
            console.log(err);
        });
    };
    // create feature from json object  [needs long lat fields]
    DataService.prototype.makeFeature = function (json) {
        return {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [json.long, json.lat]
            },
            'properties': tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, json)
        };
    };
    // makes geojson format from json array
    DataService.prototype.makeGeojson = function (json) {
        var _this = this;
        return {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': json.map(function (o) { return _this.makeFeature(o); })
            }
        };
    };
    DataService.prototype.extractData = function (res) {
        // looping over res to generate the geojson
        if (res) {
            // console.log(res.current)
            var geojson = this.makeGeojson(res.current);
            this.store.dataset.formatedData = geojson;
            this.store.dataset.totalCases = res.current.map(function (o) { return parseInt(o.Confirmed); }).reduce(function (acc, curr) { return acc + curr; });
            this.store.dataset.totalDeaths = res.current.map(function (o) { return parseInt(o.Deaths); }).reduce(function (acc, curr) { return acc + curr; });
            this.store.dataset.fatalityRate =
                Math.round(((this.store.dataset.totalDeaths / this.store.dataset.totalCases * 100) + Number.EPSILON) * 100) / 100;
            this.evtDataIsReady.emit(true);
        }
        // console.log(this.store.dataset.formatedData)
    };
    DataService.prototype.getData = function () {
        var _this = this;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].dataUrl + "getData").subscribe(function (data) { return _this.extractData(data); }, function (err) {
            console.log(err);
            _this.evtDataIsReady.emit(false);
        });
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DataService.prototype, "evtDataIsReady", void 0);
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoreService = /** @class */ (function () {
    function StoreService() {
        this.dataset = {
            'countryData': [],
            'data': {},
            'formatedData': [],
            'totalCases': undefined,
            'totalDeaths': undefined,
            'fatalityRate': undefined
        };
        this.ready = {
            'data': undefined,
            'map': undefined
        };
    }
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StoreService);
    return StoreService;
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
    production: false,
    mapbox: {
        accessToken: 'pk.eyJ1IjoiYWl0YWh0bWFuIiwiYSI6ImNqNG50emUwaTF2dWsyd283M2VhY2FpaTcifQ.eOs9cdOfs_YlXpO1gu2uWA'
    },
    dataUrl: "https://coronavirus-api.herokuapp.com/"
};
/* https://coronavirus-api.herokuapp.com/
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/seaitahtman/Bureau/PERSO/coronavirus/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map