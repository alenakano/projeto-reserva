import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseListaHorariosComponent } from './base-lista-horarios.component';
import { BaseListaHorariosService } from './base-lista-horarios.service';
import { BaseInputComponent } from './base-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BaseListaHorariosComponent,
    BaseInputComponent,    
  ],
  exports: [
    BaseInputComponent,
    BaseListaHorariosComponent
  ],
  providers: [
    BaseListaHorariosService
  ],
})
export class BaseModule { }
