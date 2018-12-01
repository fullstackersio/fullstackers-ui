import { Component, OnInit } from '@angular/core';
import { PresentationsService } from '../shared/services/presentations.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'fsio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    PresentationsService
  ]
})
export class HomeComponent implements OnInit {

  presentations$: Observable<any>;

  constructor(
    private presentationsService: PresentationsService
  ) {}

  ngOnInit() {
    this.presentations$ = this.presentationsService.latest();
  }

}
