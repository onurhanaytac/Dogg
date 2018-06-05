import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "progress-payments",
  templateUrl: "./pages/workfile/progress-payments/progress-payments.html",
  styleUrls: [ "./pages/workfile/progress-payments/progress-payments.css" ]
})


export class ProgressPaymentsComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
