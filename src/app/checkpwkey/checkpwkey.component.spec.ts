import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpwkeyComponent } from './checkpwkey.component';

describe('CheckpwkeyComponent', () => {
  let component: CheckpwkeyComponent;
  let fixture: ComponentFixture<CheckpwkeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckpwkeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpwkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
