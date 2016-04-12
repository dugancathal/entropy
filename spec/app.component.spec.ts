import {AppComponent} from "../app/app.component";
import {componentSuite, ComponentTestFunction} from "./support/controller-test";
import {describe, it} from "angular2/testing";

componentSuite((componentTest:ComponentTestFunction) => {
    describe("AppComponent", () => {
        it("presents the title based on the underlying attribute", componentTest(AppComponent, (component, domEl, fixture) => {
            expect(domEl.innerText).toContain("Hello, Entropy");

            component.title = "Hello, World!";
            fixture.detectChanges();

            expect(domEl.innerText).toContain("Hello, World");
        }));
    });
});