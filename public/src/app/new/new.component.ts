import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProducts: any = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNewProducts();
  }

  getNewProducts() {
    let observable = this._httpService.getNewProductsFromService();
    observable.subscribe((newProducts) => {
      console.log(newProducts)
      this.newProducts = newProducts;
    });
  }

}
