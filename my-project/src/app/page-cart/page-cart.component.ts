import { Product } from './../interfaces/Product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Cart } from '../interfaces/Cart';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit{
  carts:any;
  cart=new Cart();
  errMessage:string='';
  _userId = localStorage.getItem("_id");
  constructor( private _cart:CartService){this._getCart();}
  _getCart():void{
    this._cart.getCartItems().subscribe({
      next:(data)=>{this.carts=data},
      error:(err)=>{this.errMessage=err}
    })
  }
 
  // _getCartLine(id:string)
  // {
  //   this._cart.getCartLine(id).subscribe({
  //     next:(data)=>{this.carts=data},
  //     error:(err)=>{this.errMessage=err}
  //   })
  // }
  // _increamentQty(id: any, quantity: any):void{
  //   const payload={
  //     productId: id,
  //     quantity,
  //   }
  //   this._cart.increaseQty(payload).subscribe(()=>{
  //     this._getCart();
  //     alert("Đã thêm sản phẩm")
  //   });
  // }
  _changeQty(userId: any, id: any, quantity: any)
  {
    let payload= {
      cuserId: userId,
      productId: id,
      quantity: quantity,
    };
    this._cart.changeQty(payload).subscribe(()=>{
      this._getCart();
    });
  }
  // _changeQty()
  // {
  //   this._cart.changeQty(this.cart).subscribe({
  //     next:(data)=>{this.carts=data},
  //     error:(err)=>{this.errMessage=err}
  //   })
  // }
  _emptyCart(productId: any): void
  {
    this._cart.emptyCart(productId).subscribe({
      next:(data)=>{this.carts=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  ngOnInit(): void {
  }
  getTotal(){
    let total=0;
    for(var i=0; i<this.carts.length;i++){
      if(this.carts[i].userId===this._userId){
        total+=this.carts[i].price*this.carts[i].quantity;
      }
    }
    return total;
  }
}
