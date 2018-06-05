import { Component, } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";

@Component({
  selector: "library",
  templateUrl: "./pages/library/library.html",
  styleUrls: [ "./pages/library/library.css" ]
})


export class LibraryComponent {
	constructor(private page: Page, private _router: Router) {
	}

	onIndexChanged(e) {
		const viewMapping = {
			"0": "search-filters",
			"1": "search",
			"2": "account"
		}

		if (e.value !== e.oldValue) {
			let properties = {outlets: {}};
			properties["outlets"][viewMapping[e.value] + "-outlet"] = [];
			properties["outlets"][viewMapping[e.value] + "-outlet"].push(viewMapping[e.value]);

			this._router.navigate(['/library', properties ]);
		}
	}

	ngOnInit() {
	}
}
