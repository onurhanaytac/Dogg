import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "allowances",
  templateUrl: "./pages/workfile/allowances/allowances.html",
  styleUrls: [ "./pages/workfile/allowances/allowances.css" ]
})


export class AllowancesComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
