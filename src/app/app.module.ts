import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';



const ROUTES: Routes = [
  {path: 'signup', component: SignUpComponent},
  {path: 'user', component: UserProfileComponent},
  {path:'', redirectTo: '/user', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
