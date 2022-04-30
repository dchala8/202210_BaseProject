import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VehiculosModule } from '../app/vehiculos/vehiculos.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    VehiculosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
