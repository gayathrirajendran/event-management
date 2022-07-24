import { Action } from '@ngrx/store';
import { EventItem } from '../models/event-item.model';


export enum EventActionType {
  EDIT_ITEM = '[EVENT] Edit event',
}

export class EditItemAction implements Action {
  readonly type = 'EDIT_ITEM';

  //add an optional payload

  constructor(public payload?: EventItem) {}
}

export type EventAction = EditItemAction;
