import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  datos: Array<string> = [];
  fecha: Date;

  constructor(private _builder: FormBuilder) { 
    this.logFrml=this._builder.group({
      titulo: ['', Validators.required],
      descripcion:['', Validators.required],
    
    })
  }
  logFrml: FormGroup

  enviar(values){
    this.fecha= new Date;
    this.datos.push(values);
    this.logFrml.reset();
    console.log(this.datos);
  }

  ngOnInit(): void {
  }

}
