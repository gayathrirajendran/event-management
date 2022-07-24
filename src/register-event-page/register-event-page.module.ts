import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEventPageComponent } from './register-event-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EventDetailResolver } from '../event-services';
import { ErrorPipe } from './error/error.pipe';
import { ModalModule } from '../modal/modal.module';
import { RegisterActionButtonsModule } from '../register-action-buttons/register-action-buttons.module';



@NgModule({
  declarations: [
    RegisterEventPageComponent,
    ErrorPipe
  ],
  imports: [
    CommonModule,
    ModalModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegisterEventPageComponent,
        resolve: {
          eventData: EventDetailResolver
        }
      }
    ]),
    ReactiveFormsModule,
    RegisterActionButtonsModule
  ],
  providers: [EventDetailResolver],
  exports: [
    RegisterEventPageComponent
  ]
})
export class RegisterEventPageModule { }
