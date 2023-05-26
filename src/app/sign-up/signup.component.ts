import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  User : UserComponent = new UserComponent();
   constructor() { }

   onSubmit() {
     // form submitted
     console.log(this.User);

   }

}
