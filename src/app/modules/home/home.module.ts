import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { SubmenuComponent } from './components/submenu/submenu.component';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
