import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    let observable = this._httpService.getCartFromService();
    observable.subscribe(cart => {
      console.log(cart);
      this.cart = cart;
    });
  }

  deleteCart(item) {
    let observable = this._httpService.deleteCartFromService(item);
    observable.subscribe(deleted => {
      console.log(deleted);
    });
  }

}
