import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "search-filters",
  templateUrl: "./pages/library/search-filters/search-filters.html",
  styleUrls: [ "./pages/library/search-filters/search-filters.css" ]
})


export class SearchFiltersComponent {
	constructor(private page: Page) {
	}

	ngOnInit() {
		console.log("filter")
	}
}
