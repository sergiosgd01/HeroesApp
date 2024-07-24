import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.auth';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [ PublicGuard ],
    canMatch: [ PublicGuard ]
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canActivate: [ AuthGuard ],
    canMatch: [ AuthGuard ]
  },
  {
    path: '404',
    loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
