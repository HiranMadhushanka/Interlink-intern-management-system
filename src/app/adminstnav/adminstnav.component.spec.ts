import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstnavComponent } from './adminstnav.component';

describe('AdminstnavComponent', () => {
  let component: AdminstnavComponent;
  let fixture: ComponentFixture<AdminstnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminstnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
