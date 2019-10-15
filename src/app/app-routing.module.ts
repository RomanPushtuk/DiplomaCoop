import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutComponent } from './pages/about/about.component';
import { LecturesComponent } from './pages/lectures/lectures.component';
import { LecturesModule } from './modules/lectures/lectures.module';


const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'basic-electronics', component: LecturesComponent
  },
  {
    path: 'digital-electronics', component: LecturesComponent
  },
  {
    path: 'microcontroller-programming', component: LecturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
