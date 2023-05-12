import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  constructor(private _http: HttpClient) { }
  getProducts():Observable<any>
  { 
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8") 
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/products",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
  getCakes():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/cakes",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getNabati():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/cakes/nabati",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getOreo():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/cakes/oreo",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getOneOne():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/cakes/oneone",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getCosy():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/cakes/cosy",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getAFC():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/cakes/afc",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getCandy():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/candy",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getPlayMore():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/candy/playmore",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getFerrero():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/candy/ferrero",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getXylitol():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/candy/xylitol",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getHershey():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/candy/hershey",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getBernique():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/candy/bernique",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getMeiji():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/candy/meiji",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getCadbury():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/candy/cadbury",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getSnack():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/snack",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getOishi():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/snack/oishi",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getPoca():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/snack/poca",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getLay():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/snack/lay",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getOstar():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/snack/ostar",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getSlide():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/snack/slide",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getFreshwater():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/freshwater",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getTH():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/freshwater/th",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getPepsi():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/freshwater/pepsi",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getSting():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/freshwater/sting",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getFanta():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/freshwater/fanta",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getMirinda():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/freshwater/mirinda",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getCocaCola():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/freshwater/cocacola",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getHotProduct():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/hot",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getNewProduct():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/new",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getSimilarProduct():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/similar",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
  getProduct(productId:string):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/products/"+productId,requestOptions).pipe(map(res=>JSON.parse(res) as Array<Product>),retry(3),catchError(this.handleError))
  }
}
