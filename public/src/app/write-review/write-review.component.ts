import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit {
  id: any;
  review: any;
  
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
    });
    this.review = {name: '', rating: 1, review: ''}
  }

  addReview() {
    let observable = this._httpService.addReviewFromService(this.review, this.id);
    observable.subscribe(data => {
      console.log(data)
    });
  }

}
