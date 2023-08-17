import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { GenericCardComponent } from './generic-card/generic-card.component';
import { ProyectCardComponent } from './proyect-card/proyect-card.component';
import { TaskCardComponent } from './task-card/task-card.component';
import {MatCardModule} from '@angular/material/card';
import { DividerComponent } from './divider/divider.component';




@NgModule({
  declarations: [
    ButtonComponent,
    LabelComponent,
    GenericCardComponent,
    ProyectCardComponent,
    TaskCardComponent,
    DividerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    ButtonComponent,
    LabelComponent,
    GenericCardComponent,
    ProyectCardComponent,
    TaskCardComponent,
    DividerComponent
  ]
})
export class SharedModule { }
