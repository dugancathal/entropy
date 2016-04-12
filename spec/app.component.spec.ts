import {AppComponent} from "../app/app.component";
import {componentSuite, componentTest} from "./support/controller-test";
import {describe, it} from "angular2/testing";

componentSuite(() => {
    describe("AppComponent", () => {
        it("presents the title based on the underlying attribute", componentTest(AppComponent, (component, domEl, fixture) => {
            expect(domEl.innerText).toContain("Hello, Entropy");

            component.title = "Hello, World!";
            fixture.detectChanges();

            expect(domEl.innerText).toContain("Hello, World");
        }));
    });
});