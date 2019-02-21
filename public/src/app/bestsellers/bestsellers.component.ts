import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {
  bestsellProducts: any = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBestsellProducts();
  }

  getBestsellProducts() {
    let observable = this._httpService.getBestsellProductsFromService();
    observable.subscribe(bestsellProducts => {
      console.log(bestsellProducts)
      this.bestsellProducts = bestsellProducts;
    });
  }

}
