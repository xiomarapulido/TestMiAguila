import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './components/maps/maps.component';
import { TravelsRoutingModule } from './travels-routing.module';

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    TravelsRoutingModule
  ]
})
export class TravelsModule { }
