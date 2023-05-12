import { Component } from '@angular/core';
import { ProductAPIService } from '../Service/product-api.service';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-category-candy',
  templateUrl: './category-candy.component.html',
  styleUrls: ['./category-candy.component.css']
})
export class CategoryCandyComponent {
  candy:any;
  errMessage:string='';
  userId = localStorage.getItem("_id");
  constructor(private _service: ProductAPIService, private router: Router, private _cart: CartService, private auth: AuthService){
    this.getAllCandy()
  }
  getAllCandy(){
    this._service.getCandy().subscribe({
      next:(data)=>{this.candy=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getPlayMore(){
    this._service.getPlayMore().subscribe({
      next:(data)=>{this.candy=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getFerrero(){
    this._service.getFerrero().subscribe({
      next:(data)=>{this.candy=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getXylitol(){
    this._service.getXylitol().subscribe({
      next:(data)=>{this.candy=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getHershey(){
    this._service.getHershey().subscribe({
      next:(data)=>{this.candy=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getBernique(){
    this._service.getBernique().subscribe({
      next:(data)=>{this.candy=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getMeiji(){
    this._service.getMeiji().subscribe({
      next:(data)=>{this.candy=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getCadbury(){
    this._service.getCadbury().subscribe({
      next:(data)=>{this.candy=data},
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
        this.getAllCandy();
        alert("Đã thêm vào giỏ")
      });
    }

  }
}
