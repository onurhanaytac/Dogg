import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "workfile-details",
  templateUrl: "./pages/workfile/workfile-details/workfile-details.html",
  styleUrls: [ "./pages/workfile/workfile-details/workfile-details.css" ]
})


export class WorkfileDetailsComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
