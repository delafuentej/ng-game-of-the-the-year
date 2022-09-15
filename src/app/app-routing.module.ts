import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VoteComponent } from './pages/vote/vote.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'vote', component:VoteComponent},
  { path:'**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }