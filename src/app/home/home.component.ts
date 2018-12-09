import { Component, OnInit } from '@angular/core';
import { PresentationsService } from '../shared/services/presentations.service';
import { MeetupService } from '../shared/services/meetup.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'fsio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    PresentationsService,
    MeetupService
  ]
})
export class HomeComponent implements OnInit {

  presentations$: Observable<any>;
  events$: Observable<any>;

  constructor(
    private presentationsService: PresentationsService,
    private meetup: MeetupService
  ) {}

  ngOnInit() {
    this.presentations$ = this.presentationsService.latest();
    // Full Stackers: 18261924    jSTL: 22729531
    this.events$ = this.meetup.upcomingEventsByGroupId([18261924, 22729531]);
  }

}
