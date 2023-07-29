import { HttpClient } from '@angular/common/http';
import { CategoriesModel } from '../model/categories.model';
import { Injectable } from '@angular/core';
import { BannersModel } from '../model/banners.model';
@Injectable({
    providedIn: 'root',
   })
export class BannersService {
    constructor(
        private httpClient: HttpClient
    ){

    }

    getBanners(){
        return this.httpClient.get<Array<BannersModel>>('http://localhost:3000/api/banners');
    }
}