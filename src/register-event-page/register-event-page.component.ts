import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventListingService } from '../event-services';
import { EventItem } from '../app/store/models/event-item.model';
import { ResponsiveService } from '../responsive/responsive.service';


@Component({
  selector: 'app-register-event-page',
  templateUrl: './register-event-page.component.html',
  styleUrls: ['./register-event-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterEventPageComponent implements OnInit, OnChanges {

  @Input() eventItem: EventItem | undefined;
  @Input() maxAttendeesPerBooking: number = 6;
  public maxAttendeesArr: number[] = [1];
  public isLoading = false;
  public isModalOpen = false;

  public eventRegistrationForm = new FormGroup({
    fullName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    mobile: new FormControl(null, [Validators.required]),
    noOfAttendees: new FormControl(1, Validators.required),
    attendees: new FormArray([])
  });

  constructor(
    private eventService: EventListingService,
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private responsiveService: ResponsiveService
  ) { }

  ngOnInit(): void {
    this.eventItem = this.route.snapshot.data['eventData'];
    this.maxAttendeesPerBooking = this.eventItem!.availableticketsCount;
    console.log(this.route.snapshot, this.eventItem);
    this.getMaxAttendees();
    this.setValidation();
    this.listenToAttendeesCountUpdate();
  }

  private setValidation(): void {
    this.eventRegistrationForm.get('noOfAttendees')?.addValidators(Validators.max(this.maxAttendeesPerBooking));
  }

  private listenToAttendeesCountUpdate(): void {
    this.eventRegistrationForm.get('noOfAttendees')?.valueChanges.subscribe({
      next: (count: number) => {
        this.addAttendees(count - 1);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes && changes.hasOwnProperty('maxAttendeesPerBooking') && this.maxAttendeesPerBooking) {
      this.getMaxAttendees();
    }

  }

  private getMaxAttendees(): void {
    this.maxAttendeesArr = new Array(6);
  }

  private addAttendees(totalCount: number): void {
    const existing = this.attendees?.controls?.length;
    console.log(totalCount, this.maxAttendeesPerBooking);
    this.attendees.addValidators(Validators.maxLength(this.maxAttendeesPerBooking));
    let i = 0;
    while (i < totalCount - existing) {
      this.attendees.push(new FormControl(null, [Validators.required]))
      i++;
    }
    this.attendees.markAsTouched();
    this.attendees.markAsDirty();
    this.cdRef.markForCheck();
  }

  public addAttendee(): void {
    this.attendees.push(new FormControl(null, [Validators.required]));
  }

  public deleteItem(index: number): void {
    this.attendees.removeAt(index);
  }

  submitBooking(): void {
    console.log('submit', this.eventItem);
    if (this.eventRegistrationForm.valid) {
      this.isLoading = true;
      this.eventService.updateData(this.eventItem!, parseInt(this.eventRegistrationForm.value.noOfAttendees));
      this.isModalOpen = true;
      this.isLoading = false;
    }
    this.eventRegistrationForm.markAllAsTouched();
    this.eventRegistrationForm.markAsDirty();
  }

  get attendees(): FormArray {
    return this.eventRegistrationForm.get('attendees') as FormArray;
  }

  redirect(): void {
    this.router.navigate(['/events']);
  }

}
