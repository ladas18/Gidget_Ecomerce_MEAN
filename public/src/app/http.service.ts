import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  addProductService(product) {
    console.log("In Service")
    return this._http.post('/create', product);
  }

  allProductsFromService() {
    return this._http.get('/gidget');
  }

  getToolProductsFromService() {
    return this._http.get('/tools');
  }

  getBestsellProductsFromService() {
    return this._http.get('/bestsellers');
  }

  getU20ProductsFromService() {
    return this._http.get('/u20s');
  }
  getSolarProductsFromService() {
    return this._http.get('/solars');
  }
  getWindUpProductsFromService() {
    return this._http.get('/windups');
  }
  getNewProductsFromService() {
    return this._http.get('/new');
  }

  addToCartFromService(id, product, quanity) {
    console.log("In Service",quanity)
    return this._http.post('/addToCart/' + id, product, quanity);
    //return this._http.get('/createCart')
  }

  getCartFromService() {
    return this._http.get('/getCart');
  }
  
  getSearchFromService(input) {
    console.log("Service search: ", input)
    return this._http.post('/searchQuery', {input});
  }

  findProductFromService(id) {
    return this._http.get('/gidget/' + id);
  }

  addReviewFromService(review, id) {
    console.log("Servive Review:",review)
    return this._http.post('/addreview/' + id, review)
  }

  submitOrderFromService() {
    return this._http.get('/submitOrder');
  }

  deleteCartFromService(item) {
    console.log("ID in service:",item._id)
    return this._http.post('/deleteitem/' + item._id, item)
  }

  // temporary
  createACartFromService() {
    return this._http.get('/createCart');
  }
}
