import { Directive, Input, Output, EventEmitter, HostListener, NgModule, Pipe, Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { throttleTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ControlClickDirective {
    constructor() {
        this.delayNextClick = 500;
        this.outputClick = new EventEmitter();
        this.clicks = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscription = this.clicks.pipe(throttleTime(this.delayNextClick)).subscribe(e => {
            this.outputClick.emit(e);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}
ControlClickDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appControlClick]'
            },] },
];
/** @nocollapse */
ControlClickDirective.ctorParameters = () => [];
ControlClickDirective.propDecorators = {
    "delayNextClick": [{ type: Input },],
    "outputClick": [{ type: Output },],
    "clickEvent": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ControlClickDirectiveModule {
}
ControlClickDirectiveModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [ControlClickDirective],
                declarations: [ControlClickDirective]
            },] },
];
/** @nocollapse */
ControlClickDirectiveModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FilterByStringPipe {
    /**
     * @param {?} values
     * @param {?} filter
     * @return {?}
     */
    transform(values, filter) {
        if (!values || !values.length) {
            return [];
        }
        if (!filter) {
            return values;
        }
        return values.filter(v => v.indexOf(filter) >= 0);
    }
}
FilterByStringPipe.decorators = [
    { type: Pipe, args: [{ name: 'filterByString' },] },
];
/** @nocollapse */
FilterByStringPipe.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FilterByStringPipeModule {
}
FilterByStringPipeModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [FilterByStringPipe],
                declarations: [FilterByStringPipe]
            },] },
];
/** @nocollapse */
FilterByStringPipeModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooterComponent {
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-footer',
                template: `<h3>Soy el footer</h3>`,
                styles: [`h3{color:red}`]
            },] },
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FooterComponentModule {
}
FooterComponentModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [FooterComponent],
                declarations: [FooterComponent]
            },] },
];
/** @nocollapse */
FooterComponentModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { ControlClickDirectiveModule, FilterByStringPipeModule, FooterComponentModule, FooterComponent as ɵc, ControlClickDirective as ɵa, FilterByStringPipe as ɵb };
