import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeactivitylogComponent } from './homeactivitylog.component';

describe('HomeactivitylogComponent', () => {
  let component: HomeactivitylogComponent;
  let fixture: ComponentFixture<HomeactivitylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeactivitylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeactivitylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
