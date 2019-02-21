import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  input: any;
  searched: any = [];
  constructor(private _httpService: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.search = this.input;
    console.log(this.route.snapshot.fragment); // only update on component creation
    this.route.fragment.subscribe(
      (fragments) => console.log(fragments),
    ); // update on all changes
    this.input = this.route.snapshot.fragment;
    console.log("This is the search:",this.input)
    this.search(this.input);
  }

  search(input) {
    let observable = this._httpService.getSearchFromService(input);
    observable.subscribe(search => {
      console.log("Search return: ", search)
      this.searched = search;
    });
  }

}
