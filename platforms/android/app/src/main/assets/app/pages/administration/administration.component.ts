import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "administration",
  templateUrl: "./pages/administration/administration.html",
  styleUrls: [ "./pages/administration/administration.css" ]
})


export class AdministrationComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
