import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturesComponent } from 'src/app/pages/lectures/lectures.component';


const routes: Routes = [
  {path: 'lectures', component: LecturesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturesRoutingModule { }
