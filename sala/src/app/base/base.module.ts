import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseInputComponent } from './base-input.component';
import { BaseListaHorariosComponent } from './base-lista-horarios.component';
import { BaseListaHorariosService } from './base-lista-horarios.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BaseInputComponent,    
    BaseListaHorariosComponent,
  ],
  exports: [
    BaseInputComponent,
    BaseListaHorariosComponent,
  ],
  providers: [
    BaseListaHorariosService
  ],
})
export class BaseModule { }
