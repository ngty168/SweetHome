import { Login } from './../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: '[app-form-login]',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{
  user: Login
  constructor(
    private auth: AuthService, 
    private router: Router,

  ){this.user=new Login("", "")}
  ngOnInit(): void { }
  xulyDN(em:any, pw: any){    
    this.auth.login( em,pw).subscribe( 
      res =>{          
          var d = JSON.parse(res);
          
          console.log("Đăng nhập thành công ", res);          
          const expiresAt = moment().add(d.expiresIn,'second');
           localStorage.setItem('id_token', d.idToken);
           localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
           localStorage.setItem('_id', d._id);
           localStorage.setItem('add', d.add);
           localStorage.setItem('avt', d.avt);
           this.router.navigateByUrl('/');
      },
      error => {
        console.log('oops', error);
        this.router.navigateByUrl('/login');
      }
    )
   } 
 
}
