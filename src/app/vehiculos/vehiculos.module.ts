import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListarVehiculosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListarVehiculosComponent
  ]
})
export class VehiculosModule { }
