import { Component } from '@angular/core';
import { BannersModel } from 'src/app/shared/model/banners.model';
import { BannersService } from 'src/app/shared/service/banners.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  listBanners: BannersModel[] = [];
constructor(
  private appService: BannersService
){}
ngOnInit(){
  this.appService.getBanners().subscribe(
    res => {
      this.listBanners = res
    }
  )
}
}
