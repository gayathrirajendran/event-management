import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, map, Observable, of, take, throwError } from 'rxjs';
import { EventItem } from '../../app/store/models/event-item.model';
import { EventListingService } from '../event-listing/event-listing.service';

@Injectable()
export class EventDetailResolver implements Resolve<EventItem | undefined> {
  constructor(private listService: EventListingService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EventItem | undefined> {
    const e = this.listService.getEventDataById(route.params['id'] || '');
    return e.pipe(take(1));
  //   return of({
  //     "id":"122",
  //     "date":"2022-07-20T10:36:25.387Z",
  //     "availableticketsCount":2,
  //     "title":"Understanding Color Theory: The Color Wheel and findings"
  //  });
  }
}
