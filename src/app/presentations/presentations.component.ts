import { Component, OnInit } from '@angular/core';
import { PresentationsService } from '../shared/services/presentations.service';

@Component({
  selector: 'fsio-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.scss'],
  providers: [
    PresentationsService
  ]
})
export class PresentationsComponent implements OnInit {
  // presentations = [
  //   {
  //     title: "Test 1",
  //     subtitle: "Testing the stuffs"
  //   },
  //   {
  //     title: "Test 2",
  //     subtitle: "Testing the stuffs again"
  //   }
  // ]

  presentations: any;

  constructor(
    private presentationService: PresentationsService
  ) {}

  ngOnInit() {
    this.presentationService
      .get()
      .subscribe(res => {
        this.presentations = res;
        console.log(this.presentations);
      });
  }
}
