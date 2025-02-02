import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
<<<<<<< HEAD
import { LoginComponent } from "./components/login/login.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "add-user", component: UserComponent },
];
=======

const routes: Routes = [];
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class AuthRoutingModule { }
=======
export class AuthRoutingModule {}
>>>>>>> 472ea3f966ce8cbb39c29b3c80973466b6162d47
