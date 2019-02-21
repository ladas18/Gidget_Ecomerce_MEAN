import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: any;
  error: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.product = {
      name: "",
      desc: "",
      price: 0,
      quanity: 0,
      category: "",
      img1: "",
      search: ""
    }
    this.error = '';
  }

  addProduct(){
    
    let observable = this._httpService.addProductService(this.product);
    observable.subscribe(data => {
    console.log("Subscribe: ", data)
    if (data != undefined) {
      this.error = data
    } else {
      this.product = {name: "", desc: "", price: 0, image: "", category: ""} 
    }
  });
}

}
