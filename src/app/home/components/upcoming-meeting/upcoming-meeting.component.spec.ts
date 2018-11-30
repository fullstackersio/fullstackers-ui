import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMeetingComponent } from './upcoming-meeting.component';

describe('UpcomingMeetingComponent', () => {
  let component: UpcomingMeetingComponent;
  let fixture: ComponentFixture<UpcomingMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
