import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "search-workitem",
  templateUrl: "./pages/search-workitem/search-workitem.html",
  styleUrls: [ "./pages/search-workitem/search-workitem.css" ]
})


export class SearchWorkitemComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
