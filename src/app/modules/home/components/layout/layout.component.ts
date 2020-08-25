import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  currentItem: string;
  constructor() { }

  getCurrentMenu(element) {
    this.currentItem = element;
  }

}
