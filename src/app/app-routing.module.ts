import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponentComponent } from './components/user-list-component/user-list-component.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // Default route
  { path: 'UserList', component: UserListComponentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
