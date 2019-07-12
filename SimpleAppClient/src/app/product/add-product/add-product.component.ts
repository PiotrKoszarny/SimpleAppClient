import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductFG: FormGroup;
  //  = new ({
  //   ProductId:
  //   ProductName: string;
  //   UnitPrice: number;
  //   UnitsInStock: number;
  // })
  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.addProductFG = fb.group({
      ProductName: fb.control('', Validators.required),
      UnitPrice: fb.control('', Validators.required),
      UnitsInStock: fb.control('', Validators.required)
    });
  }

  ngOnInit() {
  }

  addProduct() {
    const product: Product = {
      ProductName: this.addProductFG.value.ProductName,
      UnitPrice: this.addProductFG.value.UnitPrice,
      UnitsInStock: this.addProductFG.value.UnitsInStock,
    };
    this.productService.addProduct(product).subscribe(x => { console.log(x); });
  }

}
