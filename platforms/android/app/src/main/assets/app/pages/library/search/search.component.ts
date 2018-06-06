import { Component } from "@angular/core";
import { Page } from "ui/page";
import { SearchBar } from "ui/search-bar";
import { Data } from "../../../shared/data";

@Component({
  selector: "search",
  templateUrl: "./pages/library/search/search.html",
  styleUrls: [ "./pages/library/search/search.css" ]
})


export class SearchComponent {
	public searchPhrase: string;
	public _workFileSummary: any;
	public _data: any;
	public _properties: any;

	constructor(private page: Page) {
		this._workFileSummary = new Data().workFileSummary;
		this._data = new Data().libraryBookAndFascicles;
		this._properties = {
			id: "LibraryFascicleId",
			name: "Name",
			children: "LibraryFascicles"
		}
	}

	onSubmit(e) {
		let searchBar = <SearchBar>e.object;
		console.log(searchBar.text)
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
