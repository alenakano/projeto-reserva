import { 
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'base-input',
    templateUrl: './base-input.component.html'
})
export class BaseInputComponent{
    
    @Input() inputType: string = "text";

    @Input() value: string = null;

    @Output() listenInput: EventEmitter<string> = new EventEmitter<string>();

    constructor(){
    }

    public onInput(valor): void {
        this.listenInput.emit(valor);
    }

}