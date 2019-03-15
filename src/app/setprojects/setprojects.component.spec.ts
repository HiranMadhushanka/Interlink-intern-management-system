import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetprojectsComponent } from './setprojects.component';

describe('SetprojectsComponent', () => {
  let component: SetprojectsComponent;
  let fixture: ComponentFixture<SetprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
