import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  datos: Array<string> = [];

  constructor(private _builder: FormBuilder) { 
    this.logFrml=this._builder.group({
      titulo: ['', Validators.required],
      descripcion:['', Validators.required],
    
    })
  }

  logFrml: FormGroup

  ngOnInit(): void {
  }

  enviar(values){
    this.datos.push(values);
    this.logFrml.reset();
    console.log(this.datos);
  }

}
