import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  err = null;

  ngOnInit(): void {}
  onSubmit(formulaire: NgForm) {
    console.log(formulaire.value);
    this.loginService.login(formulaire.value).subscribe(
      (res) => {
        console.log(res);
        //store object in local storage
        localStorage.setItem('user', JSON.stringify(res.user));
        this.err = null;
        window.location.replace('');
      },
      (error) => {
        //Error callback
        console.log(error);
        this.err = error.error.message;
        //throw error;   //You can also throw the error to a global error handler
      }
    );
  }
}
