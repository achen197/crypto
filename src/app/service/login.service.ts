import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private username;

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }
  constructor() { }
}
