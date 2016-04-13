import {Component} from "angular2/core";
import {PlayAreaComponent} from "./table/play-area.component";

@Component({
    selector: 'my-app',
    directives: [PlayAreaComponent],
    template: `
        <h1>{{title}}</h1>
        <play-area></play-area>
    `
})
export class AppComponent {
    public title:string = 'Hello, Entropy'
}