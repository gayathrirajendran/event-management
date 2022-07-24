import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterActionButtonsComponent } from './register-action-buttons.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterActionButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    RegisterActionButtonsComponent
  ]
})
export class RegisterActionButtonsModule { }
