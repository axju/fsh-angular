import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './service/auth.service';

const routes: Routes = [
  { path: 'snippets', component: SnippetsComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'snippets' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
