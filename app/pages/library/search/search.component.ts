import { Component, Host } from "@angular/core";
import { Page } from "ui/page";
import { SearchBar } from "ui/search-bar";
import { Data } from "../../../shared/data";
import { LibraryFormData } from "../../../shared/library/library-form-data";
import { LibraryFormDataService } from "../../../shared/library/library-form-data.service";
import { LibraryComponent } from "../library.component"

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

	constructor(@Host() libraryComponent: LibraryComponent, private page: Page, lfdService: LibraryFormDataService) {
		this._libraryComponent = libraryComponent;
		this.libraryFormData = lfdService.libraryFormData;
		this._libraryWorkItems = new Data().workFileSummary;
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

	public onLoadMoreItemsRequested(args) {
		var listView: any = args.object;

		/* Call after loading finished */
		listView.notifyLoadOnDemandFinished();
	}

	ngOnInit() {

	}
}
