import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  sendUser(username){
    this.loginService.setUsername(username);
  }
}
