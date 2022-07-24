import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EventListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EventListComponent
  ]
})
export class EventListModule { }
