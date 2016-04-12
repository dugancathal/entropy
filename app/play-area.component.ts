import {Component} from 'angular2/core';
import {EntropyCardComponent} from "./cards/entropy-card.component.ts";

@Component({
    selector: 'play-area',
    directives: [EntropyCardComponent],
    templateUrl: 'app/play-area.component.html'
})

export class PlayAreaComponent {
}