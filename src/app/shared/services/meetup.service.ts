import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MeetupService {

  constructor(
    private http: HttpClient
  ) {}

  upcomingEvents(groupUrl: string): Observable<any> {
    const url = `https://api.fullstackers.io/v0/meetup/${groupUrl}`;

    return this.http
      .get(url)
      .map(response => {
        return response;
      });
  }

  upcomingEventsByGroupId(groupId?: number | number[]): Observable<any> {
    let url = 'https://api.fullstackers.io/v0/meetup-events-by-id';

    if (groupId !== undefined) {
      if (Array.isArray(groupId)) {
        const idString = groupId.join(',');
        url += `${idString}`;
      } else {
        url += groupId;
      }
    }

    return this.http
      .get(url)
      .map(response => {
        // console.log(response['results']);
        return response['results'];
      });
  }
}
