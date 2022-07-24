import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/models/app-state.model';
import { EventItem } from '../../app/store/models/event-item.model';
import { EditItemAction } from '../../app/store/actions/event.action';



@Injectable({
  providedIn: 'root'
})
export class EventListingService {

  constructor(
    private store: Store<AppState>,
    private http: HttpClient
  ) {
    console.log('event listing');
  }

  getData(): Observable<EventItem[]> {
    return this.store.select((store) => store.eventItems);
    // return this.http.get('./assets/event-listing-mock.json');
  }

  getEventDataById(id: string): Observable<EventItem | undefined> {
    return this.store.select((store) => {
      const target = store.eventItems.find((item) => item.id === id);
      return target;
    });
  }

  updateData(item: EventItem, count: number): void {
    const newItem: EventItem = {
      id: item.id,
      availableticketsCount: item.availableticketsCount - count,
      date: item.date,
      title: item.title
    };
    console.log(newItem);
    this.store.dispatch(new EditItemAction(newItem));
  }

  searchData(searchStr: string): Observable<EventItem[]> {
    return this.store.select((store) =>  store.eventItems.filter((item: EventItem) => (item.title.toLowerCase()).includes(searchStr.toLowerCase())));
  }

}
