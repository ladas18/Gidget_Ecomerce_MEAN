import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-windup',
  templateUrl: './windup.component.html',
  styleUrls: ['./windup.component.css']
})
export class WindupComponent implements OnInit {
  windupProducts: any = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getWindUpProducts();
  }

  getWindUpProducts() {
    let observable = this._httpService.getWindUpProductsFromService();
    observable.subscribe((windupProducts) => {
      console.log(windupProducts)
      this.windupProducts = windupProducts;
    });
  }

}
