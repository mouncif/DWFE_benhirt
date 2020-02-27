import { Component, OnInit } from '@angular/core';

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
        this.dialog.open(MessageComponent,{ data: {
        message:  'Error!!!'
        }});
    }
}

}
