import { Component } from '@angular/core';
import { ProductAPIService } from '../Service/product-api.service';
import { CartService } from '../Service/cart.service';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-section-similar-product]',
  templateUrl: './section-similar-product.component.html',
  styleUrls: ['./section-similar-product.component.css']
})
export class SectionSimilarProductComponent {
  similarProduct:any;
  errMessage:string='';
  userId = localStorage.getItem("_id");
  constructor(private _service: ProductAPIService, private _cart: CartService, private auth: AuthService, private router: Router){
    this.getSimilarProduct()
  }
  getSimilarProduct(){
    this._service.getSimilarProduct().subscribe({
      next:(data)=>{this.similarProduct=data},
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
        this.getSimilarProduct();
        alert("Đã thêm vào giỏ")
      });
    }

  }
}
