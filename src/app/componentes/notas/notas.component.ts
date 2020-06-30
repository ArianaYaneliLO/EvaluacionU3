import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  constructor(private _builder: FormBuilder) { 
    this.logFrml=this._builder.group({
      titulo: ['', Validators.required],
      descripcion:['', Validators.required],
    
    })
  }

  logFrml: FormGroup

  ngOnInit(): void {
  }

}
