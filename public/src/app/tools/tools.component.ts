import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  toolProducts: any = []

  constructor(private _httpService: HttpService,
    private router: Router) { }

  ngOnInit() {
    this.getToolProducts();
  }

  getToolProducts() {
    let observable = this._httpService.getToolProductsFromService();
    observable.subscribe((toolProducts) => {
      console.log(toolProducts)
      this.toolProducts = toolProducts;
    });
  }
}
