import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = environment.apiUrl + 'Product';
  constructor(
    private http: HttpClient
  ) { }

  addProduct(product: Product) {
    return this.http.post(this.productUrl, product);
  }
}
