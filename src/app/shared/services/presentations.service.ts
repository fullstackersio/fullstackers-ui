import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment as env } from '../../../environments/environment'

import 'rxjs/add/operator/map';

@Injectable()
export class PresentationsService {

  constructor (
    private http: HttpClient
  ) {}

  get(): Observable<object[]> {
    return this.http
      .get(`${env.api.url}/v0/presentations?latest`)
      .map(response => {
        return response['presentations'];
      });
  }

  latest(): Observable<object[]> {
    return this.get()
      .map(presentations => {
        const groups = {};

        for (const presentation of presentations) {
          const groupId = presentation['group']['groupid'];
          if (groups.hasOwnProperty(groupId) && Array.isArray(groups[groupId])) {
            groups[groupId].push(presentation);
          } else {
            groups[groupId] = [presentation];
          }
        }

        for (const group in groups) {
          if (group) {
            const groupValue = groups[group];
            if (Array.isArray(groupValue)) {
              groupValue.sort(function (a, b) {
                const aCreated = new Date(a['date_created']).valueOf();
                const bCreated = new Date(b['date_created']).valueOf();
                // console.log(aCreated, bCreated, aCreated > bCreated);
                return aCreated > bCreated ? 1 : 0;
              });
            }
          }
        }

        console.log(presentations);
        return presentations.slice(-2);
      });
  }
}


