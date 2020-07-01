import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotasComponent } from './componentes/notas/notas.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EnlistarTareasComponent } from './componentes/enlistar-tareas/enlistar-tareas.component';
import { CardsComponent } from './componentes/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    NotasComponent,
    NavbarComponent,
    EnlistarTareasComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
