import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-revieworder',
  templateUrl: './revieworder.component.html',
  styleUrls: ['./revieworder.component.css']
})
export class RevieworderComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  submitOrder() {
    let observable = this._httpService.submitOrderFromService();
    observable.subscribe(data => {
      console.log(data)
  });
}

}
