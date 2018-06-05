import { Component, } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";

@Component({
  selector: "search-workitem",
  templateUrl: "./pages/search-workitem/search-workitem.html",
  styleUrls: [ "./pages/search-workitem/search-workitem.css" ]
})


export class SearchWorkitemComponent {
	constructor(private page: Page, private _router: Router) {
	}

	ngOnInit() {
	}
}
