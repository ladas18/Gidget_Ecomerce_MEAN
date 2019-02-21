import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.allProducts();
  }

  allProducts() {
    let observable = this._httpService.allProductsFromService();
    observable.subscribe((products) => {
      console.log(products)
      this.products = products;
    });
  }

}
