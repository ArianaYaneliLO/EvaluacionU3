import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enlistar-tareas',
  templateUrl: './enlistar-tareas.component.html',
  styleUrls: ['./enlistar-tareas.component.css']
})
export class EnlistarTareasComponent implements OnInit {

  @Input() listarTareas : string;

  TarDisabled : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  Inhabilitar(){
    this.TarDisabled=true;
  }

}
