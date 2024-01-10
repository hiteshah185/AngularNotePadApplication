import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstParentComponent } from './first-parent/first-parent.component';
import { PersonAComponent } from './person-a/person-a.component';
import { PersonBComponent } from './person-b/person-b.component';

const routes: Routes = [
  {
    path: 'lifecycle',
    component: FirstParentComponent
  }, {
    path: 'PersonA',
    component: PersonAComponent
  }, {
    path: 'PersonB',
    component: PersonBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
