import { AuthService } from './Service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  _id = localStorage.getItem("_id");
  avatar = localStorage.getItem("avt");
  constructor(private router:Router, private auth: AuthService)
  {console.log(this.avatar)}

  logout(){
    this.auth.logout();
    this.router.navigate(['/'])
  }
  daDangNhap() { 
    this._id = localStorage.getItem("_id");
    this.avatar = localStorage.getItem("avt");
    return this.auth.daDangNhap()
  }
}
