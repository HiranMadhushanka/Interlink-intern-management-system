import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesettingsComponent } from './homesettings.component';

describe('HomesettingsComponent', () => {
  let component: HomesettingsComponent;
  let fixture: ComponentFixture<HomesettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomesettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
