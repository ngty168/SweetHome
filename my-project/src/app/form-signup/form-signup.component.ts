import { User } from './../interfaces/User';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { passwordValidator } from '../check.validator';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.css']
})
export class FormSignupComponent {
  user=new User();
  errMessage:string=''
  constructor(
    private auth: AuthService, 
    private router: Router,
    private _formBuilder: FormBuilder
  ){}
  ngOnInit(): void { }
  public setUser(u:User){
    this.user=u
  }
  // onFileSelected(event:any, user: User){
  //   let me = this;
  //   let file = event.target.files[0];

  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload=function(){
  //     user.avatar=reader.result!.toString()
  //   };
  //   reader.onerror=function(error){
  //     console.log('Error: ', error);
  //   };
  // }
  public regForm=this._formBuilder.group({
    Validators: [passwordValidator]
  })
  postUser(){
    this.auth.postUser(this.user).subscribe({
      next:(data)=>{this.user=data},
      error:(err)=>{this.errMessage=err}
    })
    this.router.navigateByUrl('/login');
  }
}

