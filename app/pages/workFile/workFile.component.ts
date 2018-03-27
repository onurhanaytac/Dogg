import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "workfile",
  templateUrl: "./pages/workfile/workfile.html",
  styleUrls: [ "./pages/workfile/workfile.css" ]
})


export class WorkfileComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}