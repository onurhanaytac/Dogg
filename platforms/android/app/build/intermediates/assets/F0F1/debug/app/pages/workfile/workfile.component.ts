import { Component } from "@angular/core";
import { Page } from "ui/page";
import { Data } from "../../shared/data";

@Component({
  selector: "workfile",
  templateUrl: "./pages/workfile/workfile.html",
  styleUrls: [ "./pages/workfile/workfile.css" ]
})


export class WorkfileComponent {
	_workFileSummary: any;

	constructor(private page: Page) {
		this._workFileSummary = new Data().workFileSummary;
		page.actionBarHidden = true;

	}

	ngOnInit() {
		console.dir(this._workFileSummary);
	}
}
