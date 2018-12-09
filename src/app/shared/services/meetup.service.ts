import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MeetupService {

  constructor(
    private http: HttpClient
  ) {}

  upcomingEvents(groupUrl?: string): Observable<any> {
    let url = 'https://api.meetup.com/2/events';

    if (groupUrl) {
      url += `?group_id=${groupUrl}`;
    }

    return this.http
      .get(url)
      .map(response => {
        return response;
      });
  }

  upcomingEventsByGroupId(groupId: number | number[]): Observable<any> {
    let url = 'https://api.meetup.com/2/events?group_id=';

    if (Array.isArray(groupId)) {
      const idString = groupId.join(',');
      url += `${idString}`;
    } else {
      url += groupId;
    }

    return this.http
      .get(url)
      .map(response => {
        return response;
      });
  }
}
