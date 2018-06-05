import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "work-amendments",
  templateUrl: "./pages/workfile/work-amendments/work-amendments.html",
  styleUrls: [ "./pages/workfile/work-amendments/work-amendments.css" ]
})


export class WorkAmendmentsComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
