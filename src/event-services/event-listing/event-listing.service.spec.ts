import { TestBed } from '@angular/core/testing';

import { EventListingService } from './event-listing.service';

describe('EventListingService', () => {
  let service: EventListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
