import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./core/pages/page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "not-found",
    component: PageNotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "not-found",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
