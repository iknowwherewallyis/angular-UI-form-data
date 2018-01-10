import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PersonalComponent }    from './personal/personal.component';
import { SuccessComponent }     from './success/success.component';


export const appRoutes: Routes = [
    // 1st Route
    { path: 'personal',  component: PersonalComponent },
    // 2nd Route
    { path: 'success',  component: SuccessComponent },
    // 5th Route
    { path: '',   redirectTo: '/personal', pathMatch: 'full' },
    // 6th Route
    { path: '**', component: PersonalComponent }
    // 6th Route
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true } )
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
