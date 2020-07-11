import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Pendientes} from '../../modificar/tareas'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareasArr : Array<string>=[];
  cadena : Array<Pendientes>=[];


  constructor(private _builder: FormBuilder) { 
    this.tarFrml=this._builder.group({
      tarea: ['', Validators.required],  
      check :[] 
    })
  }

  tarFrml: FormGroup
  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('arrTareas'))){
      this.mostrar();
    }
  }

 
  mostrar(){
    this.cadena= JSON.parse(localStorage.getItem( 'arrTareas'));
  }

  enviar(values){
    this.cadena.push(values);  
    localStorage.setItem('arrTareas', JSON.stringify(this.cadena));
    this.tarFrml.reset();
    console.log(this.cadena);
  }

  Eliminar(){
    this.cadena=[];
    localStorage.removeItem('arrTareas');
  }

  
  Inhabilitar(numero){
    for(let index = 0; index < this.cadena.length; index++){
      let pend = index;
      if(pend == numero){
        this.cadena[pend].check = true;
        localStorage.setItem('arrTareas', JSON.stringify(this.cadena));
      }
    }
  }

}
