import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private storeService: StoreService, private router: Router) { }

  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

  private isAuthenticated(): boolean {
    const name = this.storeService.getName();
    return (name)? true : false;
  }

}
