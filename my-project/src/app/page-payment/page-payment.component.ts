import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-page-payment',
  templateUrl: './page-payment.component.html',
  styleUrls: ['./page-payment.component.css']
})
export class PagePaymentComponent {
  carts:any;
  errMessage:string='';
  _userId = localStorage.getItem("_id");
  address = localStorage.getItem("add");
  constructor( private _cart:CartService){this._getCart();}
  _getCart():void{
    this._cart.getCartItems().subscribe({
      next:(data)=>{this.carts=data},
      error:(err)=>{this.errMessage=err}
    })
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
