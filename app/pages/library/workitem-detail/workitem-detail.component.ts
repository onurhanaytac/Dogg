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
		this._libraryWorkItemDetail.LibraryWorkItemPrices = _.orderBy(this._libraryWorkItemDetail.LibraryWorkItemPrices, ["Year"], ["desc"]);
		_page.actionBarHidden = false;
		debugger;
	}

	onTapNavBtn() {
		this._location.back();
		console.log("back")
	}

	getBarChartData() {
		return this._libraryWorkItemDetail.LibraryWorkItemPrices;
	}

	expand(evt, unitPrices) {
		unitPrices.height = unitPrices.height === 300 ? "100%" : 300
		evt.object.icon = evt.object.icon === "~/content/images/angle-down.png" ? "~/content/images/angle-up.png" : "~/content/images/angle-down.png";
	}

	ngOnInit() {

	}
}
