import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstatComponent } from './adminstat.component';

describe('AdminstatComponent', () => {
  let component: AdminstatComponent;
  let fixture: ComponentFixture<AdminstatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
