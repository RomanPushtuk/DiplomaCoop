import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturesRoutingModule } from './lectures-routing.module';
import { LecturesComponent } from '../../pages/lectures/lectures.component';
import { AccordionMenuComponent } from 'src/app/components/accordion-menu/accordion-menu.component';
import { LecturesListComponent } from '../../components/lectures-list/lectures-list.component';


@NgModule({
  declarations: [
    LecturesComponent,
    AccordionMenuComponent,
    LecturesListComponent
  ],
  imports: [
    CommonModule,
    LecturesRoutingModule
  ]
})
export class LecturesModule { }
