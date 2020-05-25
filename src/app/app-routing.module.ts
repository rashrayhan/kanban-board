import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { KanbanComponent } from './pages/kanban/kanban.component';

const routes: Routes = [
  {path: '', redirectTo: 'kanban', pathMatch: 'full'},
  {path: 'kanban', component: KanbanComponent},
  { path: '**', component: KanbanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
