import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  /* miFormulario: FormGroup = new FormGroup({
    nombre      : new FormControl('RTX 3090TI'),
    precio      : new FormControl(1500),
    existencias : new FormControl(5),
  }); */

  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4080TI'],
    precio: [0],
    existencias: [0],
  })

  constructor(private fb: FormBuilder) { }

}
