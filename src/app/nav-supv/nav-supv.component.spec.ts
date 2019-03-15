import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSupvComponent } from './nav-supv.component';

describe('NavSupvComponent', () => {
  let component: NavSupvComponent;
  let fixture: ComponentFixture<NavSupvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSupvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSupvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
