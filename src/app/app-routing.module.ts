import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'events',
  children: [
    {
      path: 'home',
      loadChildren: () => import('./../events-home/events-home.module').then((m) => m.EventsHomeModule)
    },
    {
      path: ':id/book',
      loadChildren: () => import('./../register-event-page/register-event-page.module').then((m) => m.RegisterEventPageModule)
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }
  ]},
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'events/home'
  }, {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
