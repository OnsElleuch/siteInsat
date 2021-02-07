import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('user');
    return token != null;
  }
}
