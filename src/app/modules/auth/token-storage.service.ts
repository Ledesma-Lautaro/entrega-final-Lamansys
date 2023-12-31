import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {
  token_key:string = 'auth-token';
  user_key:string = 'auth-user';
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(this.token_key);
    window.sessionStorage.setItem(this.token_key, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.token_key);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(this.user_key);
    window.sessionStorage.setItem(this.user_key, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.user_key);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  isLoggedIn(){
    let user = this.getUser();
    let token =  this.getToken();
    if (user && token){
      return true;
    }
    return false;
  }
}
