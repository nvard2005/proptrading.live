import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';



const routes: Routes = [
  { path: '', component:HeroComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'login',
    loadComponent: () =>
      import('./components/auth/login/login.component').then((m) => {
  
        return m.LoginComponent;
      }),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
