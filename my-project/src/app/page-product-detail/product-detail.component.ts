import { Component, OnInit } from '@angular/core';
import { ProductAPIService } from '../Service/product-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product:any;
  errMessage:string='';
  userId = localStorage.getItem("_id");
  constructor(private _service: ProductAPIService, private router: Router, private activateRoute: ActivatedRoute, private _cart: CartService, private auth: AuthService){
  }
  ngOnInit(): void {
    this.getRoute(this.activateRoute.snapshot.params['_id']);
  }
  getRoute(id:any){
    this._service.getProduct(id).subscribe((res:any)=>{
      this.product = res;
    });    
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
        this.getRoute(id);
        alert("Đã thêm vào giỏ")
      });
    }
  }
}
