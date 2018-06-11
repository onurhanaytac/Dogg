import { Component} from "@angular/core";
import { Location } from "@angular/common";
import { Page } from "ui/page";
import { Data } from "../../../shared/data";
import { _ } from "lodash";

@Component({
	selector: "workitem-detail",
	templateUrl: "./pages/library/workitem-detail/workitem-detail.html",
	styleUrls: [ "./pages/library/workitem-detail/workitem-detail.css" ]
})


export class WorkItemDetailComponent {
	public _libraryWorkItemDetail: any;

	constructor(public _location: Location, public _page: Page) {
		this._libraryWorkItemDetail = new Data().libraryWorkItemDetail;
		_page.actionBarHidden = false;
	}

	onTapNavBtn() {
		this._location.back();
		console.log("back")
	}



	ngOnInit() {

	}
}
}
