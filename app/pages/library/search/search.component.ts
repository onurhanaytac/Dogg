import { Component, Host } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { SearchBar } from "ui/search-bar";
import { Data } from "../../../shared/data";
import { LibraryFormData } from "../../../shared/library/library-form-data";
import { LibraryFormDataService } from "../../../shared/library/library-form-data.service";
import { LibraryComponent } from "../library.component";
import { _ } from "lodash";

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

	constructor(@Host() libraryComponent: LibraryComponent, private page: Page, lfdService: LibraryFormDataService, public _router: Router) {
		page.actionBarHidden = true;
		this._libraryComponent = libraryComponent;
		this.libraryFormData = lfdService.libraryFormData;
		this._libraryWorkItems = new Data().libraryWorkItems;
		this._libraryWorkItemsPage2 = new Data().libraryWorkItemsPage2;

		this.prepareUnitPrices();

		this._data = new Data().libraryBookAndFascicles;
		this._properties = {
			id: "LibraryFascicleId",
			name: "Name",
			children: "LibraryFascicles"
		}
	}

	onSubmit(e) {
		// let searchBar = <SearchBar>e.object;
		// console.log(searchBar.text)
		this._libraryComponent.enginStart(e);
	}

	onClear(e) {

	}

	prepareUnitPrices() {
		_.each(this._libraryWorkItems, item => {
			_.each(item.LibraryWorkItemPrices, price => {
				if (!item["_libraryWorkItemUnitPrices"]) {
					item["_libraryWorkItemUnitPrices"] = {}
				}

				item["_libraryWorkItemUnitPrices"][price.Year] = price.UnitPrice;
			});
		});
	}

	public onLoadMoreItemsRequested(args) {
		var listView: any = args.object;
		var that = this;
		let cloneItems = _.clone(this._libraryWorkItems);

    setTimeout(() => {
			this._libraryWorkItems = _.union(cloneItems, _.clone(this._libraryWorkItemsPage2));
			this.prepareUnitPrices();

	    listView.scrollToIndex(cloneItems.length - 1);
	    listView.notifyLoadOnDemandFinished();
    }, 2000);

	}

	onTapCard(evt, item) {
		this._router.navigate(["workitem-detail"])
		debugger
	}

	ngOnInit() {

	}
}
