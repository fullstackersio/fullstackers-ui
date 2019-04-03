import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'fsio-upcoming-meeting',
  templateUrl: './upcoming-meeting.component.html',
  styleUrls: ['./upcoming-meeting.component.scss']
})
export class UpcomingMeetingComponent implements OnInit {

  @Input() upcomingEvent: any;

  constructor() {}

  ngOnInit() {}

  formatTime() {
    return moment.unix(this.upcomingEvent.time).format('YYYY');
  }

}
