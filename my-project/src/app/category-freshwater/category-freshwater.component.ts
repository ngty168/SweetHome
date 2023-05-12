import { Component } from '@angular/core';
import { ProductAPIService } from '../Service/product-api.service';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-category-freshwater',
  templateUrl: './category-freshwater.component.html',
  styleUrls: ['./category-freshwater.component.css']
})
export class CategoryFreshwaterComponent {
  freshwater:any;
  errMessage:string='';
  userId = localStorage.getItem("_id");
  constructor(private _service: ProductAPIService, private router: Router, private _cart: CartService, private auth: AuthService){
    this.getAllFreshWater()
  }
  getAllFreshWater(){
    this._service.getFreshwater().subscribe({
      next:(data)=>{this.freshwater=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getTH(){
    this._service.getTH().subscribe({
      next:(data)=>{this.freshwater=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getPepsi(){
    this._service.getPepsi().subscribe({
      next:(data)=>{this.freshwater=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getSting(){
    this._service.getSting().subscribe({
      next:(data)=>{this.freshwater=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getFanta(){
    this._service.getFanta().subscribe({
      next:(data)=>{this.freshwater=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getMirinda(){
    this._service.getMirinda().subscribe({
      next:(data)=>{this.freshwater=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getCocaCola(){
    this._service.getCocaCola().subscribe({
      next:(data)=>{this.freshwater=data},
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
        this.getAllFreshWater();
        alert("Đã thêm vào giỏ")
      });
    }

  }
}
