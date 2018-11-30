import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment'

@Injectable()
export class PresentationsService {

  constructor (
    private http: HttpClient
  ) {}

  get() {
    return this.http.get(`${env.api.url}/${env.api.version}/presentations`);
  }
}
