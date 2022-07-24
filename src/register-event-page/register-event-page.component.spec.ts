import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEventPageComponent } from './register-event-page.component';

describe('RegisterEventPageComponent', () => {
  let component: RegisterEventPageComponent;
  let fixture: ComponentFixture<RegisterEventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterEventPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
