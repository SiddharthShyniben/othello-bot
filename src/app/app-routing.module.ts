import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './components/play/play.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'play', component: PlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
