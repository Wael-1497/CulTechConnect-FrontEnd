import { Injectable } from '@angular/core';
import {AuthenticationClient} from './authentication.client';
import {Router} from '@angular/router';
import {User} from "../_models/user";
import {envi} from "../../../environments/envi";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private authenticationClient: AuthenticationClient,
              private router: Router) { }

  public login(user: User): void {
    this.authenticationClient.login(user).subscribe((token) => {
      localStorage.setItem(envi.tokenKey, token.value);
      localStorage.setItem(envi.userKey, user.nickName);
      this.router.navigate(['/']);
    });
  }

  public register(user: User): void {
    this.authenticationClient
      .register(user)
      .subscribe(response => this.router.navigate(['/login']));
  }

  public logout() {
    localStorage.removeItem(envi.userKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(envi.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(envi.tokenKey) : null;
  }
}
