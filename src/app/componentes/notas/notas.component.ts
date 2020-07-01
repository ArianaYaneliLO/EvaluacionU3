import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
 
  datos: Array<string> = [];
  fecha: Date;
  constructor(private _builder: FormBuilder) { 
    this.notFrml=this._builder.group({
      titulo: ['', Validators.required],
      descripcion:['', Validators.required],
    
    })
  }

  notFrml: FormGroup

  ngOnInit(): void {
  }
   
  enviar(values){
    this.fecha= new Date;
    this.datos.push(values);
    this.notFrml.reset();
    console.log(this.datos);
  }
  

}
