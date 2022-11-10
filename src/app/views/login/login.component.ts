import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }
    userModel = new User ();
    receberDados() {this.loginService.login (this.userModel).subscribe((response) => {
      console.log(response) 
      })

    }
}


// console.log(this.userModel)

