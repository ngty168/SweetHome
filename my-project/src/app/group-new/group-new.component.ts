import { Component } from '@angular/core';
import { ProductAPIService } from '../Service/product-api.service';
import { CartService } from '../Service/cart.service';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-new',
  templateUrl: './group-new.component.html',
  styleUrls: ['./group-new.component.css']
})
export class GroupNewComponent {
  newProduct:any;
  errMessage:string='';
  userId = localStorage.getItem("_id");
  constructor(private _service: ProductAPIService, private _cart: CartService, private auth: AuthService, private router: Router){
    this.getNewProduct()
  }
  getNewProduct(){
    this._service.getNewProduct().subscribe({
      next:(data)=>{this.newProduct=data},
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
        this.getNewProduct();
        alert("Đã thêm vào giỏ")
      });
    }

  }
}
