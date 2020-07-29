import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsComponent } from './components/snippets/snippets.component';

const routes: Routes = [
  { path: 'snippets', component: SnippetsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
