import { Component } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
menu = Menu;
ngOnInit(){
  console.log(this.menu)
}
}
