import { Component, Host, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { SearchBar } from "ui/search-bar";
import { Data } from "../../../shared/data";
import { LibraryFormData } from "../../../shared/library/library-form-data";
import { LibraryFormDataService } from "../../../shared/library/library-form-data.service";
import { LibraryWorkItemService } from "../../../shared/library/library-workitem.service";
import { LibraryComponent } from "../library.component";
import { _ } from "lodash";
import { DismissSoftKeybaord } from "../../../shared/DismissSoftKeybaord";

const LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;

@Component({
	selector: "search",
	templateUrl: "./pages/library/search/search.html",
	styleUrls: [ "./pages/library/search/search.css" ]
})


export class SearchComponent {
	public _libraryWorkItems: any;
	public _data: any;
	public _properties: any;
	public libraryFormData: LibraryFormData;
	private _libraryComponent: LibraryComponent;
	private _libraryWorkItemsPage2: any;
	private loader;
	private loaderoptions;

	constructor(@Host() libraryComponent: LibraryComponent, private page: Page, public lfdService: LibraryFormDataService, public lwiService: LibraryWorkItemService, public _router: Router) {
		page.actionBarHidden = true;
		this._libraryComponent = libraryComponent;
		this.libraryFormData = lfdService.libraryFormData;

		this._data = new Data().libraryBookAndFascicles;
		this._properties = {
			id: "LibraryFascicleId",
			name: "Name",
			children: "LibraryFascicles"
		}

	}

	onSubmit(e) {
		this._libraryComponent.enginStart(e);
	}

	onClear(e) {

		DismissSoftKeybaord.dismiss();
	}


	public onLoadMoreItemsRequested(args) {
		var listView: any = args.object;
		var self = this;
		let cloneItems = _.clone(this.lwiService._libraryWorkItems);

		this.lfdService.libraryFormData.page = this.lfdService.libraryFormData.page + 1;

		this.lwiService.libraryWorkItems.subscribe(data => {
			if (!(data as any).length || (data as any).length === 0) {
				return listView.notifyLoadOnDemandFinished();
			}

			this.lwiService._libraryWorkItems = _.union(cloneItems, self.prepareUnitPrices(data));
			listView.scrollToIndex(cloneItems.length - 1);
			listView.notifyLoadOnDemandFinished();
		}, err => {
		});

	}

	prepareUnitPrices(data) {
		_.each(data, item => {
			_.each(item.LibraryWorkItemPrices, price => {
				if (!item["_libraryWorkItemUnitPrices"]) {
					item["_libraryWorkItemUnitPrices"] = {}
				}

				item["_libraryWorkItemUnitPrices"][price.Year] = price.UnitPrice;
			});
		});

		return data
	}

	onTapCard(evt, item) {
		if (item.IsHeader) {
			return;
		}
		this._router.navigate(["workitem-detail", item.LibraryWorkItemId]);
	}

	onSearchLayoutLoaded(event) {
		if (event.object.android) {
			event.object.android.setFocusableInTouchMode(true);
		}
	}

	onSearchBarLoaded(event) {
		if (event.object.android) {
			event.object.android.clearFocus();
		}
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
		this.createLoader();
		this.loader.show(this.loaderoptions);
		this.lwiService.libraryWorkItems.subscribe(data => {
			this.loader.hide();
			this.lwiService._libraryWorkItems = _.union(this.lwiService._libraryWorkItems, this.prepareUnitPrices(data));
		}, err => {
		});
	}
}
