import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AUTH_TOKEN, USER_ID } from '../contants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userID: string = null;
  private _isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  saveUserData(id: string, token: string): void {
    localStorage.setItem(USER_ID, id);
    localStorage.setItem(AUTH_TOKEN, token);
    this.setUserID(id);
  }

  setUserID(id: string): void {
    this._userID = id;
    this._isAuthenticated.next(true);
  }

  logout(): void {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(AUTH_TOKEN);

    this._userID = null;
    this._isAuthenticated.next(false);
  }

  autoLogin() {
    const id = localStorage.getItem(USER_ID);

    if (id) {
      this.setUserID(id);
    }
  }
}
