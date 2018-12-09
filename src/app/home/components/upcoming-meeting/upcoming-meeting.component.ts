import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fsio-upcoming-meeting',
  templateUrl: './upcoming-meeting.component.html',
  styleUrls: ['./upcoming-meeting.component.scss']
})
export class UpcomingMeetingComponent implements OnInit {

  @Input() upcomingEvent: any;

  constructor() {}

  ngOnInit() {}

}
