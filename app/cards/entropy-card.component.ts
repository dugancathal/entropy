import {Component, Input, OnInit, ChangeDetectionStrategy} from 'angular2/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'entropy-card',
    templateUrl: 'app/cards/entropy-card.component.html'
})
export class EntropyCardComponent implements OnInit {
    @Input('front') private front:string;
    @Input('type') private type:string;
    @Input('back') private back:string;

    ngOnInit() {
        this.back = this.back || 'back';
    }
}