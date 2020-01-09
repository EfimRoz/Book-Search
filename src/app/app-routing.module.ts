import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { WishListComponent } from './wish-list/wish-list.component';



const routes: Routes = [
  { path: '',   component: WelcomeComponent, pathMatch: 'full' },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard]  },
  { path: 'wishlist', component: WishListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
