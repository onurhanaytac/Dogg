import { Component, } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { Frame, topmost } from "tns-core-modules/ui/frame";
import { LibraryFormData } from "../../shared/library/library-form-data";
import { LibraryFormDataService } from "../../shared/library/library-form-data.service";

@Component({
  selector: "library",
  templateUrl: "./pages/library/library.html",
  styleUrls: [ "./pages/library/library.css" ],
  providers: [LibraryFormDataService]
})


export class LibraryComponent {
	constructor(private page: Page, private _router: Router, private frame: Frame, lfdService: LibraryFormDataService) {
		this._frame = frame;
		this._libraryFormData = lfdService.libraryFormData;
	}

	private _frame: Frame;
	private _libraryFormData: LibraryFormData;

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

	public enginStart(e) {
		this._libraryFormData; debugger;
	}

	ngOnInit() {
	}
}
