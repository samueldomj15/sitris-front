import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrls: ['./alta-paciente.component.css']
})
export class AltaPacienteComponent {

  forma:FormGroup;

  usuario:Object = {
    "name": null,
    "secondName": null,
    "lastName": null,
    "secondLastName": null,
    "birth": null,
    "gender": "",
    "phone": null,
    "email": null,
    "blood": null,
    "address": {
      "zipcode": "62776",
      "colony": "Amador Salazar",
      "state": "Morelos",
      "township": "Tlaltizapan",
      "street": "Aldama",
      "indoor": "",
      "outdoor": "5"
    }
  }
  
  // Sexo
  genders:string[] = ["Hombre", "Mujer"];

  // Tipo de sangre
  bloodTypes:string[] = ["Desconocido","O Positivo","O Negativo","A Negativo","A Positivo","B Negativo","B Positivo","AB Negativo","AB Positivo"]

  constructor() { 

    console.log(this.usuario);

    this.forma = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'secondName': new FormControl(''),
      'lastName': new FormControl('', Validators.required),
      'secondLastName': new FormControl(''),
      'birth': new FormControl('', Validators.required),
      'gender': new FormControl(''),
      'phone': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'email': new FormControl(''),
      'blood': new FormControl(''),
      'rfc': new FormControl(''),
      'curp': new FormControl(''),
      'age': new FormControl('', Validators.required),
      'nacionalidad': new FormControl(''),

      'address': new FormGroup({
        'zipcode': new FormControl('', Validators.required),
        'colony': new FormControl('', Validators.required),
        'state': new FormControl('', Validators.required),
        'township': new FormControl('', Validators.required),
        'street': new FormControl('', Validators.required),
        'indoor': new FormControl(''),
        'outdoor': new FormControl('', Validators.required)
      })
    });
  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
  }

}
