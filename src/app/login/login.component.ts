import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  Loginmodel = new User('','');

  constructor(private _auth:AuthService,
    private _route: Router) { }

  ngOnInit(): void {
  }

  LoginUser(){
    this._auth.loginUser(this.Loginmodel).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        console.log(res)
        this._route.navigate(['/events'])
      },
      err => console.log(err)
    )
    console.log(this.Loginmodel)
  }
}
