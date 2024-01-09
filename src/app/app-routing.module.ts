import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstParentComponent } from './first-parent/first-parent.component';

const routes: Routes = [
  {
    path: 'lifecycle',
    component: FirstParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
