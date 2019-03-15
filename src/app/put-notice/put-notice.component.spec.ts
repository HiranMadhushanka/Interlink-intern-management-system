import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutNoticeComponent } from './put-notice.component';

describe('PutNoticeComponent', () => {
  let component: PutNoticeComponent;
  let fixture: ComponentFixture<PutNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
