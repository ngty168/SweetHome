import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-page-account',
  templateUrl: './page-account.component.html',
  styleUrls: ['./page-account.component.css']
})
export class PageAccountComponent {
  avatar = localStorage.getItem("avt");
  user= new User
  errMessage:string=''
  constructor(private router:Router, private auth: AuthService, private activateRoute: ActivatedRoute)
  {}
  ngOnInit(): void {
    this.getRoute(this.activateRoute.snapshot.params['_id']);
  }
  getRoute(_id:any){
    this.auth.getUser(_id).subscribe((res:any)=>{
      this.user = res;
    });    
  }
  logout(){
    this.auth.logout();
    this.router.navigate(['/'])
  }
  public setUser(u:User){
    this.user=u
  }
  // putUser(){
    
  //   this.auth.putUser(this.user).subscribe({
  //     next:(data)=>{
  //       console.log(data);
  //       this.user=data;
  //     },
  //     error:(err)=>{this.errMessage=err}
  //   })
  // }
  putUser(userId: any, name: any, birth: any, phone: any, address: any)
  {
    let payload= {
      userId:userId,
      name: name,
      birth: birth,
      phone: phone,
      address: address,
      // avt: avt
    };
    this.auth.putUser(payload).subscribe(()=>{
      this.getRoute(userId);
    });
  }
}
