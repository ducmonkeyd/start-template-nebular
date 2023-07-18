import { Component } from '@angular/core';
import { Menu } from './menu';
import { CategoriesService } from 'src/app/shared/service/categories.service';
import { CategoriesModel } from 'src/app/shared/model/categories.model';
import { SidebarMenuModel } from 'src/app/shared/model/sidebarMenu.model';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menu: SidebarMenuModel[] = [];
  date: Date = new Date();
  categories: CategoriesModel[] = [];
  constructor(
    private _categoriesService: CategoriesService
  ) { }
  ngOnInit() {
    this._categoriesService.getCategories().subscribe(
      res => {
        let menu: SidebarMenuModel[] = [];
        this.categories = res;
        menu = this.categories.filter(item => 
           item.parentId == null

        ).map(el => {
          return {
            icon: null,
            name: el.name,
            id: el.id,
            menuChild: []
          }
        });
        menu.forEach(item => {
          item.menuChild = this.categories.filter(el => {
            return item.id == el.parentId;
          }).map(el => {
            return {
              icon: null,
              name: el.name,
              id: el.id,
              menuChild: [],
            }
          })
        });
        this.menu = menu;
        console.log(this.menu);
      }

    )

  }
}
