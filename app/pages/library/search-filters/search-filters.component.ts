import { Component, ViewChild, ElementRef } from "@angular/core";
import { Page } from "ui/page";
import { Data } from "../../../shared/data";
import { _ } from "lodash";

@Component({
	selector: "search-filters",
	templateUrl: "./pages/library/search-filters/search-filters.html",
	styleUrls: [ "./pages/library/search-filters/search-filters.css" ]
})


export class SearchFiltersComponent {
	public _data: any;
	public _properties: any;
	public _fromChild: any;

	constructor(private page: Page) {
		this._data = new Data().libraryBookAndFascicles;
		this._properties = {
			id: "LibraryFascicleId",
			name: "Name",
			children: "LibraryFascicles",
			checkbox: true
		}
	}

	@ViewChild('LibraryWorkItemBooks') tree: ElementRef;

	onTreeCheckedChange(e) {
	}

	onSwitch() {
		this.getFilterData();
	}

	public getFilterData() {
		let checkedItems = (this.tree as any).getChecked();
	}



	ngOnInit() {

	}
}
