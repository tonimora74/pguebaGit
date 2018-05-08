(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('rxjs/operators'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('isban', ['exports', '@angular/core', 'rxjs/Subject', 'rxjs/operators', '@angular/common'], factory) :
	(factory((global.isban = {}),global.ng.core,global.Rx,global.Rx.Observable.prototype,global.ng.common));
}(this, (function (exports,core,Subject,operators,common) { 'use strict';

var ControlClickDirective = /** @class */ (function () {
    function ControlClickDirective() {
        this.delayNextClick = 500;
        this.outputClick = new core.EventEmitter();
        this.clicks = new Subject.Subject();
    }
    ControlClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.clicks.pipe(operators.throttleTime(this.delayNextClick)).subscribe(function (e) {
            _this.outputClick.emit(e);
        });
    };
    ControlClickDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ControlClickDirective.prototype.clickEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    };
    return ControlClickDirective;
}());
ControlClickDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[appControlClick]'
            },] },
];
ControlClickDirective.ctorParameters = function () { return []; };
ControlClickDirective.propDecorators = {
    "delayNextClick": [{ type: core.Input },],
    "outputClick": [{ type: core.Output },],
    "clickEvent": [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
var ControlClickDirectiveModule = /** @class */ (function () {
    function ControlClickDirectiveModule() {
    }
    return ControlClickDirectiveModule;
}());
ControlClickDirectiveModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                exports: [ControlClickDirective],
                declarations: [ControlClickDirective]
            },] },
];
ControlClickDirectiveModule.ctorParameters = function () { return []; };
var FilterByStringPipe = /** @class */ (function () {
    function FilterByStringPipe() {
    }
    FilterByStringPipe.prototype.transform = function (values, filter) {
        if (!values || !values.length) {
            return [];
        }
        if (!filter) {
            return values;
        }
        return values.filter(function (v) { return v.indexOf(filter) >= 0; });
    };
    return FilterByStringPipe;
}());
FilterByStringPipe.decorators = [
    { type: core.Pipe, args: [{ name: 'filterByString' },] },
];
FilterByStringPipe.ctorParameters = function () { return []; };
var FilterByStringPipeModule = /** @class */ (function () {
    function FilterByStringPipeModule() {
    }
    return FilterByStringPipeModule;
}());
FilterByStringPipeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                exports: [FilterByStringPipe],
                declarations: [FilterByStringPipe]
            },] },
];
FilterByStringPipeModule.ctorParameters = function () { return []; };
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-footer',
                template: "<h3>Soy el footer</h3>",
                styles: ["h3{color:red}"]
            },] },
];
FooterComponent.ctorParameters = function () { return []; };
var FooterComponentModule = /** @class */ (function () {
    function FooterComponentModule() {
    }
    return FooterComponentModule;
}());
FooterComponentModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                exports: [FooterComponent],
                declarations: [FooterComponent]
            },] },
];
FooterComponentModule.ctorParameters = function () { return []; };

exports.ControlClickDirectiveModule = ControlClickDirectiveModule;
exports.FilterByStringPipeModule = FilterByStringPipeModule;
exports.FooterComponentModule = FooterComponentModule;
exports.ɵc = FooterComponent;
exports.ɵa = ControlClickDirective;
exports.ɵb = FilterByStringPipe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=isban.umd.js.map
