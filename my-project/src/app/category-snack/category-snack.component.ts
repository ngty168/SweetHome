import { Component } from '@angular/core';
import { ProductAPIService } from '../Service/product-api.service';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-category-snack',
  templateUrl: './category-snack.component.html',
  styleUrls: ['./category-snack.component.css']
})
export class CategorySnackComponent {
  snack:any;
  errMessage:string='';
  userId = localStorage.getItem("_id");
  constructor(private _service: ProductAPIService, private router: Router, private _cart: CartService, private auth: AuthService){
    this.getAllSnack()
  }
  getAllSnack(){
    this._service.getSnack().subscribe({
      next:(data)=>{this.snack=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getOishi(){
    this._service.getOishi().subscribe({
      next:(data)=>{this.snack=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getPoca(){
    this._service.getPoca().subscribe({
      next:(data)=>{this.snack=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getLay(){
    this._service.getLay().subscribe({
      next:(data)=>{this.snack=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getOstar(){
    this._service.getOstar().subscribe({
      next:(data)=>{this.snack=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  getSlide(){
    this._service.getSlide().subscribe({
      next:(data)=>{this.snack=data},
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
        this.getAllSnack();
        alert("Đã thêm vào giỏ")
      });
    }

  }
}
