import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[CustomMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {  

    @Input() minimo!: number;

    constructor(){}

    validate(control: FormControl){

        const inputValue = control.value;

        console.log(inputValue);

        return (inputValue < this.minimo) ? { 'CustomMin': true } : null;
    }
}