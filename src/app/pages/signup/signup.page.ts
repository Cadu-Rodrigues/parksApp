import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user = {
    email: "",
    password:"",
  }
  constructor(private authService: FirebaseService) { }

  ngOnInit() {
  }
  signIn(){
    this.authService.signUp(this.user.email,this.user.password);
  }

}
