import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsHomeComponent } from './events-home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchModule } from '../search/search.module';
import { EventListModule } from '../event-list/event-list.module';



@NgModule({
  declarations: [
    EventsHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: EventsHomeComponent
    }]),
    FormsModule,
    EventListModule,
    SearchModule
  ],
  exports: [
    EventsHomeComponent
  ]
})
export class EventsHomeModule { }
