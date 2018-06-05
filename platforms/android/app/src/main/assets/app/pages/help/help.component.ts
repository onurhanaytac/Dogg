import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "help",
  templateUrl: "./pages/help/help.html",
  styleUrls: [ "./pages/help/help.css" ]
})


export class HelpComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
