import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.css']
})
export class SolarComponent implements OnInit {
  solarProducts: any = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSolarProducts();
  }

  getSolarProducts() {
    let observable = this._httpService.getSolarProductsFromService();
    observable.subscribe((solarProducts) => {
      console.log(solarProducts)
      this.solarProducts = solarProducts;
    });
  }

}
