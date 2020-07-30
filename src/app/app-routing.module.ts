import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { SnippetDetailComponent } from './components/snippet-detail/snippet-detail.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './service/auth.service';

const routes: Routes = [
  { path: 'snippets', component: SnippetsComponent },
  { path: 'snippets/:id', component: SnippetDetailComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'snippets' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
