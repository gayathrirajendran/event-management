import { AfterContentInit, Component, ContentChild, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() isVisible = false;
  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter();

  @ContentChild('messageBody') messageTemplate: TemplateRef<any> | undefined;
  @ContentChild('actionButtons') actionButtons: TemplateRef<any> | undefined;
  private destroy$ = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
