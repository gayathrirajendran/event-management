import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EventItem } from '../app/store/models/event-item.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventListComponent implements OnInit {

  @Input() events: EventItem[] = [];
  @Input() isSmall: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
