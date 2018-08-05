import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BaseInputComponent } from './base-input.component';
import { BaseListaHorariosComponent } from './base-lista-horarios.component';
import { BaseLoadingComponent } from './base-loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    BaseInputComponent,    
    BaseListaHorariosComponent,
    BaseLoadingComponent,
  ],
  exports: [
    BaseInputComponent,
    BaseListaHorariosComponent,
    BaseLoadingComponent,
  ],
  providers: [
  ],
})
export class BaseModule { }
