import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { SnippetOfDayComponent } from './components/snippet-of-day/snippet-of-day.component';

const routes: Routes = [
  { path: 'snippets', component: SnippetsComponent },
  { path: 'snippet-of-day', component: SnippetOfDayComponent },
  { path: '', redirectTo: '/snippet-of-day', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
