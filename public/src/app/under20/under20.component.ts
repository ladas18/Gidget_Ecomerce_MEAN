import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-under20',
  templateUrl: './under20.component.html',
  styleUrls: ['./under20.component.css']
})
export class Under20Component implements OnInit {
  u20Products: any = []

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getU20Products();
  }

  getU20Products() {
    let observable = this._httpService.getU20ProductsFromService();
    observable.subscribe((u20Products) => {
      console.log(u20Products)
      this.u20Products = u20Products;
    });
  }

}
