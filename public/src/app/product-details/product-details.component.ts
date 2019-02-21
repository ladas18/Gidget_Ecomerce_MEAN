import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  product: any;
  quanity: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
    });
    this.getProduct(this.id)
    this.product = {quanity: 0}
    this.quanity = {}
  }

  getProduct(id) {
    let observable = this._httpService.findProductFromService(id);
    observable.subscribe(data => {
      this.product = data;
      console.log(this.product)
    })
  }

  addToCart() {
    let observable = this._httpService.addToCartFromService(this.id, this.product, this.quanity);
    observable.subscribe(data => {
      console.log(data)
    })
  }

  createACart() {
    let observable = this._httpService.createACartFromService();
    observable.subscribe(data => {
      console.log(data)
    })
  }

}
