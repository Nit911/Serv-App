import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path : "", component : LoginComponent },
  { path : "Login", component : LoginComponent },
  { path : "Register", component : RegisterComponent },
  { path : "Dashboard", component : DashboardComponent, canActivate : [AuthGuard] },
  { path : "Events", component : EventComponent },
  { path : "**", component : LoginComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, RegisterComponent, DashboardComponent, EventComponent ]
