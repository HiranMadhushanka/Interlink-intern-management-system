import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqAppointmentComponent } from './req-appointment.component';

describe('ReqAppointmentComponent', () => {
  let component: ReqAppointmentComponent;
  let fixture: ComponentFixture<ReqAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
