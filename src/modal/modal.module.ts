import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
