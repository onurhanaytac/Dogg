import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "time-extension",
  templateUrl: "./pages/workfile/time-extension/time-extension.html",
  styleUrls: [ "./pages/workfile/time-extension/time-extension.css" ]
})


export class TimeExtensionComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
