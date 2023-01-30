import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged} from 'firebase/auth';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: "",
    password:"",
  }
  constructor(private authService: FirebaseService) { }

  ngOnInit() {
  }
  signIn(){
    this.authService.signIn(this.user.email,this.user.password);
  }
}
