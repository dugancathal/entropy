import {TestComponentBuilder, inject, beforeEach, AnyTestFn} from "angular2/testing";
import {Type} from 'angular2/src/facade/lang';

export type ComponentTestIt = (ComponentRef, ElementRef, ComponentFixture) => void;
export type ComponentTestFunction = (ComponentRef, ComponentTestIt) => AnyTestFn;
type Suite = (ComponentTestFunction) => void;

export const componentTest:ComponentTestFunction = (componentClass: Type, testCallback: ComponentTestIt) => {
    let tcb;
    beforeEach(inject([TestComponentBuilder], (_tcb) => {
        tcb = _tcb
    }));

    let compileDirectiveAndRunTest:AnyTestFn = (done) => {
        tcb.createAsync(componentClass).then((fixture) => {
            let component = fixture.componentInstance,
                element = fixture.nativeElement;

            fixture.detectChanges();
            testCallback(component, element, fixture);
            done();
        }).catch(e => done.fail(e));
    };

    return compileDirectiveAndRunTest;
};

export const componentSuite = (suite: Suite) => {
    suite(componentTest);
};