import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment'
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { User, updateUser } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _http:HttpClient) { }
  login(email:string='', password:string=''){    
    const userInfo = { "em":email, "pw":password}
    const headers = new HttpHeaders().set('Content-Type', 'application/json') ;
    return this._http.post('http://localhost:4000/login'
    , JSON.stringify(userInfo) 
    , {headers:headers, responseType: 'text'}
  )}
  

  logout() {
    localStorage.clear()
  }
  public daDangNhap() {
    const str = localStorage.getItem("expires_at") || "";
    if (str=="") return false; //chưa dn    
    return true
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }

  getUser(id:string):Observable<any>
  {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.get<any>("/users/"+id,requestOptions).pipe(map(res=>JSON.parse(res) as Array<User>),retry(3),catchError(this.handleError))
  }
  postUser(aUser:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type", "application/json; charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.post<any>("/users", JSON.stringify(aUser), requestOptions).pipe(map(res=>JSON.parse(res) as User), retry(3), catchError(this.handleError))
  }
  putUser(aUser:any):Observable<any>{
    const headers=new HttpHeaders().set("Content-Type", "application/json; charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    }
    return this._http.put<any>("/users", JSON.stringify(aUser), requestOptions).pipe(map(res=>JSON.parse(res) as updateUser), retry(3), catchError(this.handleError))
  }
}
