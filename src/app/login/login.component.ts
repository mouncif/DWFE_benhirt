import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dialog: any;
  email: any;
  password: any;

  constructor() { }
  login(){
    if(this.email  ===  'email@email.com'  &&  this.password  === 'p@ssw0rd')
    {
        console.log("Success");
    }
    else
    {
        this.dialog.open(Message,{ data: {
        message:  'Error!!!'
        }});
    }
}

}
