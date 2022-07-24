import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterActionButtonsComponent } from './register-action-buttons.component';

describe('RegisterActionButtonsComponent', () => {
  let component: RegisterActionButtonsComponent;
  let fixture: ComponentFixture<RegisterActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterActionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
