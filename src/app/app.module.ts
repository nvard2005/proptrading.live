import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; 
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';


@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    SignupComponent,

  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HeaderComponent,
    ChallengeComponent,   
    LoginComponent,
    HeroComponent,
    FormsModule,
    CommonModule,
    SelectPlanComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
