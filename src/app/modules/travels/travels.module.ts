import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './components/maps/maps.component';
import { TravelsRoutingModule } from './travels-routing.module';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MapsComponent],
  imports: [
    TravelsRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXIW5Xio12dd6GA-izRqKk9QcY2-wCXFo'
    }),
    AgmDirectionModule
  ],
  providers:[GoogleMapsAPIWrapper]
})
export class TravelsModule { }
