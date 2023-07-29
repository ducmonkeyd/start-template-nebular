import { HttpClient } from '@angular/common/http';
import { CategoriesModel } from '../model/categories.model';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
   })
export class CategoriesService {
    constructor(
        private httpClient: HttpClient
    ){

    }

    getCategories(){
        return this.httpClient.get<Array<CategoriesModel>>('http://localhost:3000/api/categories');
    }
}