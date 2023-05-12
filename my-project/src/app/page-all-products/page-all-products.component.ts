import { Component } from '@angular/core';
import { ProductAPIService } from '../Service/product-api.service';
import { CartService } from '../Service/cart.service';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-page-all-products',
  templateUrl: './page-all-products.component.html',
  styleUrls: ['./page-all-products.component.css']
})
export class PageAllProductsComponent {
  products:any;
  errMessage:string='';
  userId = localStorage.getItem("_id");
  constructor(public _service: ProductAPIService, private _cart: CartService, private router: Router, private auth: AuthService){
    this.getProducts()
  }
  getProducts(){
    this._service.getProducts().subscribe({
      next:(data)=>{this.products=data},
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
        this.getProducts();
        alert("Đã thêm vào giỏ")
      });
    }

  }
}
