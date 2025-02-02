import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
<<<<<<< HEAD
import { RouterModule } from "@angular/router";
import { LogoutComponent } from "./components/logout/logout.component";
import { LoginComponent } from "./components/login/login.component";
import { UserComponent } from "./components/user/user.component";

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    UserComponent
  ],
=======

@NgModule({
  declarations: [],
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
<<<<<<< HEAD
    RouterModule
  ],
  exports: [
    LogoutComponent
=======
  ],
  exports: [
    
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47
  ]
})
export class AuthModule {}
