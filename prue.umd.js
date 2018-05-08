import { Directive, Input, Output, EventEmitter, HostListener, NgModule, Pipe, Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { throttleTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

var ControlClickDirective = /** @class */ (function () {
    function ControlClickDirective() {
        this.delayNextClick = 500;
        this.outputClick = new EventEmitter();
        this.clicks = new Subject();
    }
    ControlClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.clicks.pipe(throttleTime(this.delayNextClick)).subscribe(function (e) {
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
    { type: Directive, args: [{
                selector: '[appControlClick]'
            },] },
];
ControlClickDirective.ctorParameters = function () { return []; };
ControlClickDirective.propDecorators = {
    "delayNextClick": [{ type: Input },],
    "outputClick": [{ type: Output },],
    "clickEvent": [{ type: HostListener, args: ['click', ['$event'],] },],
};
var ControlClickDirectiveModule = /** @class */ (function () {
    function ControlClickDirectiveModule() {
    }
    return ControlClickDirectiveModule;
}());
ControlClickDirectiveModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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
    { type: Pipe, args: [{ name: 'filterByString' },] },
];
FilterByStringPipe.ctorParameters = function () { return []; };
var FilterByStringPipeModule = /** @class */ (function () {
    function FilterByStringPipeModule() {
    }
    return FilterByStringPipeModule;
}());
FilterByStringPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [FooterComponent],
                declarations: [FooterComponent]
            },] },
];
FooterComponentModule.ctorParameters = function () { return []; };

export { ControlClickDirectiveModule, FilterByStringPipeModule, FooterComponentModule, FooterComponent as ɵc, ControlClickDirective as ɵa, FilterByStringPipe as ɵb };
