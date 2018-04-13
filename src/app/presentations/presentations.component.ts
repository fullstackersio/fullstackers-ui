import { Component, OnInit } from "@angular/core"

@Component({
  selector: "fsio-presentations",
  templateUrl: "./presentations.component.html",
  styleUrls: ["./presentations.component.scss"]
})
export class PresentationsComponent implements OnInit {
  presentations = [
    {
      title: "Test 1",
      subtitle: "Testing the stuffs"
    },
    {
      title: "Test 2",
      subtitle: "Testing the stuffs again"
    }
  ]

  constructor() {}

  ngOnInit() {}
}
