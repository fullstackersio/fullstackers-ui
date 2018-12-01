import { Component, OnInit, Input } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'fsio-presentation-preview',
  templateUrl: './presentation-preview.component.html',
  styleUrls: ['./presentation-preview.component.scss']
})
export class PresentationPreviewComponent implements OnInit {

  // TODO: Create a Presentation interface or model
  @Input() presentation: any;

  url: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    console.log(this.presentation);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.presentation.url}`);
  }
}
