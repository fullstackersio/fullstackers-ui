import { Component, OnInit, Input } from "@angular/core"

@Component({
  selector: "fsio-presentation",
  templateUrl: "./presentation.component.html",
  styleUrls: ["./presentation.component.scss"]
})
export class PresentationComponent implements OnInit {
  @Input() presentation: object

  constructor() {}

  ngOnInit() {}
}
