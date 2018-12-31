import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

import { AUTH_TOKEN, USER_ID } from '../contants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: boolean;
  email: string;
  password: string;
  name: string;

  constructor() { }

  ngOnInit() {
    this.login = false;
  }

  confirm(): void {
    // TODO
  }

  // saveUserData(id: string, token: string): void {
  //   localStorage.setItem(USER_ID, id);
  //   localStorage.setItem(AUTH_TOKEN, token);
  // }
}
