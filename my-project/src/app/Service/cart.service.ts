import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { Cart } from '../interfaces/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http: HttpClient) { }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
  addToCart(aProduct:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type", "application/json; charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.post<any>("/cart", JSON.stringify(aProduct), requestOptions).pipe(map(res=>JSON.parse(res) as Cart), retry(3), catchError(this.handleError))
  }
 
  getCartItems():Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")  
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/cart",requestOptions).pipe(map(res=>JSON.parse(res) as Array<Cart>),retry(3),catchError(this.handleError))
  }
  getCartLine(productId:string):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/cart/"+productId,requestOptions).pipe(map(res=>JSON.parse(res) as Array<Cart>),retry(3),catchError(this.handleError))
  }
  changeQty(aProduct:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type", "application/json; charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.put<any>("/cart", JSON.stringify(aProduct), requestOptions).pipe(map(res=>JSON.parse(res) as Array<Cart>), retry(3), catchError(this.handleError))
  }
  emptyCart(productId:string):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","application/json;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.delete<any>("/cart/"+productId,requestOptions).pipe(map(res=>JSON.parse(res) as Array<Cart>),retry(3),catchError(this.handleError))
  }
}
