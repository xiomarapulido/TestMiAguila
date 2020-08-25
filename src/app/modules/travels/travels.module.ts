import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './components/maps/maps.component';
import { TravelsRoutingModule } from './travels-routing.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [MapsComponent],
  imports: [
    TravelsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXIW5Xio12dd6GA-izRqKk9QcY2-wCXFo',
      libraries: ['places']
    })
  ]
})
export class TravelsModule { }
