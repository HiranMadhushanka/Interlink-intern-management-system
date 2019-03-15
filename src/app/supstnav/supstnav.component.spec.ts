import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupstnavComponent } from './supstnav.component';

describe('SupstnavComponent', () => {
  let component: SupstnavComponent;
  let fixture: ComponentFixture<SupstnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupstnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupstnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
