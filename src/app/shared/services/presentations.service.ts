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
      .get(`${env.api.url}/${env.api.version}/presentations?latest`)
      .map(response => {
        return response['presentations'];
      });
  }

  latest(): Observable<object[]> {
    return this.get()
      .map(presentations => {
        return presentations.slice(-2);
      });
  }
}


