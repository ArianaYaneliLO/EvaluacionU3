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
    if(JSON.parse(localStorage.getItem('datos'))){
      this.mostrar();
    }
  }
  
  mostrar(){
    this.datos = JSON.parse(localStorage.getItem('datos'));
  }

  enviar(values){
    this.fecha= new Date;
    this.datos.push(values);
    this.notFrml.reset();
    localStorage.setItem('datos', JSON.stringify(this.datos));
  }

  Eliminar(){
    this.datos=[];
    localStorage.removeItem('datos');
  }

}
