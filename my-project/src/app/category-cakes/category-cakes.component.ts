import { Cart } from './../interfaces/Cart';
import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../Service/product-api.service';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
import { AuthService } from '../Service/auth.service';
import { Product } from '../interfaces/Product';

@Component({
  selector: 'app-category-cakes',
  templateUrl: './category-cakes.component.html',
  styleUrls: ['./category-cakes.component.css']
})
export class CategoryCakesComponent implements OnInit {
  cakes:any;
  errMessage:string='';
  userId = localStorage.getItem("_id");

  constructor(private _service: ProductAPIService, private router: Router, private _cart: CartService, private auth: AuthService){}
  ngOnInit(): void {
    this.getAllCakes();
  }

  getAllCakes(){
    this._service.getCakes().subscribe({
      next:(data)=>{this.cakes=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getNabati(){
    this._service.getNabati().subscribe({
      next:(data)=>{this.cakes=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getOreo(){
    this._service.getOreo().subscribe({
      next:(data)=>{this.cakes=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getOneOne(){
    this._service.getOneOne().subscribe({
      next:(data)=>{this.cakes=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getCosy(){
    this._service.getCosy().subscribe({
      next:(data)=>{this.cakes=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getAFC(){
    this._service.getAFC().subscribe({
      next:(data)=>{this.cakes=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  _addItemToCart(userId:any, id: any, title: any, quantity: any, price:any, image: any):void{
 
    let payload= {
      userId: userId,
      productId: id,
      title: title,
      quantity,
      price: price,
      img: image
    };
    if (this.auth.daDangNhap()==false){
      this.router.navigate(['login'])
    }
    else{
      this._cart.addToCart(payload).subscribe(()=>{
        this.getAllCakes();
        alert("Đã thêm vào giỏ")
      });
    }

  }
}

