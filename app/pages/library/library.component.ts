import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "library",
  templateUrl: "./pages/library/library.html",
  styleUrls: [ "./pages/library/library.css" ]
})


export class LibraryComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
