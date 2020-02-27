import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }
  login(){
    if(this.email  ===  'email@email.com'  &&  this.password  === 'p@ssw0rd')
    {
        this.router.navigate(['success']);
    }
    else
    {
        this.dialog.open(Message,{ data: {
        message:  'Error!!!'
        }});
    }
}

}
