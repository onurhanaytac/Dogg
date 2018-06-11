import { Component } from "@angular/core";
import { Page } from "ui/page";
import { Data } from "../../shared/data";
import { ObservableArray, ChangedData, ChangeType } from "tns-core-modules/data/observable-array";

@Component({
  selector: "workfile",
  templateUrl: "./pages/workfile/workfile.html",
  styleUrls: [ "./pages/workfile/workfile.css" ]
})


export class WorkfileComponent {
	_workFileSummary: any;

	constructor(private page: Page) {
		page.actionBarHidden = true;

	}

	ngOnInit() {
		console.dir(this._workFileSummary);
	}

	onPullToRefreshInitiated(e) {
		console.log("refresh");
		e.object.notifyPullToRefreshFinished();
	}
}
