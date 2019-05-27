import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
    .form-check-input{
      margin-left: 0.1rem !important
    }
  `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }
 
  paises = [{
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "España"
    }];

    sexos: String[] = ["Mujer","Hombre","Trans"];

  constructor() { }

  guardar(forma: NgForm){
    
    console.log("NgForm", forma);
    console.log("value", forma.value);
    console.log('usuario',  this.usuario);
  }

}
