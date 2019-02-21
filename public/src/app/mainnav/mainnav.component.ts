import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent implements OnInit {
  searched: any = [];
  input: any;

  constructor(private _httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
    this.input = {query: ''};
  }

  search() {
    // let observable = this._httpService.getSearchFromService(this.input);
    // observable.subscribe((search) => {
    //   console.log("Search return: ", search)
    //   this.searched = search;
      //this.router.navigate(['./search']);
    // });
  }

}
