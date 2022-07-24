import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ResponsiveService } from '../responsive/responsive.service';
import { EventItem } from '../app/store/models/event-item.model';
import { EventListingService } from '../event-services';
import { BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsHomeComponent implements OnInit, OnDestroy, AfterViewInit {

  public searchLocales = {
    searchPlaceholder: 'Search by event title'
  };

  public events: EventItem[] = [];
  public componentStatus: 'loading' | 'loaded' | 'no-records' | 'error' | 'initial' = 'initial';
  public destroy$ = new Subject();
  public isBelowSm: boolean = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private listingService: EventListingService,
    private responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {
    this.fetchEvents(this.listingService.getData());
  }

  ngAfterViewInit(): void {
    this.responsiveService.isBelowMd().pipe(takeUntil(this.destroy$)).subscribe((isBelowSm: BreakpointState) => {
      this.isBelowSm = isBelowSm.matches;
      this.cdRef.detectChanges();
    });
  }

  /**
   * Search records passing search string
   * @param searchStr the search string
   */
  public searchRecords(searchStr: string): void {
    this.componentStatus = 'loading';
    if (searchStr) {
      this.fetchEvents(this.listingService.searchData(searchStr));
    } else {
      this.fetchEvents(this.listingService.getData());
    }
  }

  private fetchEvents(triggerObservable: Observable<EventItem[]>): void {
    this.componentStatus = 'loading';
    triggerObservable.pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response: EventItem[]) => {
        if (response.length) {
          this.events = response;
          this.componentStatus = 'loaded'
        } else {
          this.componentStatus = 'no-records';
        }
        this.cdRef.markForCheck();
      },
      error: (err) => {
        this.componentStatus = 'error';
        console.error('Error has occurred while fetching data for event listing', err);
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
