import { Component, ViewChild, ElementRef } from "@angular/core";
import { Location } from "@angular/common";
import { Page } from "ui/page";
import { Data } from "../../../shared/data";
import { Router, ActivatedRoute } from "@angular/router";
import { _ } from "lodash";
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from "@angular/common/http";
import { Config } from "../../../shared/config";

const LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;

@Component({
	selector: "workitem-detail",
	templateUrl: "./pages/library/workitem-detail/workitem-detail.html",
	styleUrls: [ "./pages/library/workitem-detail/workitem-detail.css" ]
})

export class WorkItemDetailComponent {
	public _libraryWorkItemDetail: any = {
		Number: null,
		Unit: null,
		LibraryBookName: null,
		LibraryFascicleName: null,
		Description: null,
		LibraryWorkItemPrices: null,
		TermsOfProduction: null,
		LibraryWorkItemAnalysis: null
	};
	public libraryWorkItemId;
	private loader;
	private loaderoptions;

	constructor(public _location: Location, public _page: Page, public route: ActivatedRoute, public http: HttpClient, public _router: Router) {
		_page.actionBarHidden = false;
	}

	@ViewChild("scroller") scroller: ElementRef;

	private workItemDetailHistory: Object[] = [];

	onTapNavBtn() {
		if (this.workItemDetailHistory && this.workItemDetailHistory.length) {
			this._libraryWorkItemDetail = this.workItemDetailHistory.pop();
			this.scroller.nativeElement.scrollToVerticalOffset(0, true);
			return;
		}
		this._location.back();
	}

	getBarChartData() {
		return this._libraryWorkItemDetail.LibraryWorkItemPrices;
	}

	expand(evt, unitPrices) {
		unitPrices.height = unitPrices.height === 300 ? "100%" : 300
		evt.object.icon = evt.object.icon === "~/content/images/angle-down.png" ? "~/content/images/angle-up.png" : "~/content/images/angle-down.png";
	}

	onTapAnalysis(evt, item) {
		if (!item.Number || !item.LibraryWorkItemId) {
			return;
		}

		this.workItemDetailHistory.push(_.clone(this._libraryWorkItemDetail));

		this.loadPageData(item.LibraryWorkItemId, (err, done) => {
			if (!err) {
				this.scroller.nativeElement.scrollToVerticalOffset(0, true);
			}
		});
	}

	loadPageData(libraryWorkItemId, callback) {
		let self = this;
		this.loader.show(this.loaderoptions);
		this.http.get(Config.apiUrl + "/oskaapi/Library?libraryWorkItemId=" + libraryWorkItemId).subscribe(data => {
			self._libraryWorkItemDetail = data;
			self._libraryWorkItemDetail.LibraryWorkItemPrices = _.orderBy(self._libraryWorkItemDetail.LibraryWorkItemPrices, ["Year"], ["desc"]);
			this.loader.hide();
			callback(null, true);
		}, error => {
			this.loader.hide();
			callback(error);
		});
	}

	createLoader() {
		this.loader = new LoadingIndicator();

		// optional options
		// android and ios have some platform specific options
		this.loaderoptions = {
		  message: 'Yükleniyor...',
		  progress: 0.65,
		  android: {
		    indeterminate: true,
		    cancelable: true,
		    cancelListener: function(dialog) { console.log("Loading cancelled") },
		    max: 100,
		    progressNumberFormat: "%1d/%2d",
		    progressPercentFormat: 0.53,
		    progressStyle: 1,
		    secondaryProgress: 1
		  },
		  ios: {
		    details: "Lütfen bekleyiniz.",
		    margin: 10,
		    dimBackground: true,
		    // color: "#4B9ED6", // color of indicator and labels
		    // background box around indicator
		    // hideBezel will override this if true
		    // backgroundColor: "yellow",
		    // userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
		    // hideBezel: true, // default false, can hide the surrounding bezel
		    // view: , // Target view to show on top of (Defaults to entire window)
		    // mode: // see iOS specific options below
		  }
		};
	}


	ngOnInit() {
		this.createLoader()
		this.libraryWorkItemId = this.route.snapshot.paramMap.get("libraryWorkItemId");
		this.loadPageData(this.libraryWorkItemId, () => {});
	}
}
