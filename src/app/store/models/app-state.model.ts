import { EventItem } from './event-item.model';

export interface AppState {
  readonly eventItems: Array<EventItem>;
}
