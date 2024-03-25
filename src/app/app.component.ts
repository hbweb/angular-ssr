import { Component, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.addTags([
      { name: "description", content: "Portal UI Meta Description" },
      { name: "author", content: "Hung Bui" },
      { name: "keywords", content: "hung bui, keyword" },
    ]);
  }
}
