import { 
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'base-input',
    templateUrl: './base-input.component.html'
})
export class BaseInputComponent{
    @Input() inputType: string = "text";

}