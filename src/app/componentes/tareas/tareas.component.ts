import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareasArr : Array<string>=[];

  constructor(private _builder: FormBuilder) { 
    this.tarFrml=this._builder.group({
      tarea: ['', Validators.required],   
    })
  }

  tarFrml: FormGroup
  ngOnInit(): void {
  }

  enviar(values){
    this.tareasArr.push(values);
    this.tarFrml.reset();
  }

  Eliminar(){
    this.tareasArr=[];
  }

}
