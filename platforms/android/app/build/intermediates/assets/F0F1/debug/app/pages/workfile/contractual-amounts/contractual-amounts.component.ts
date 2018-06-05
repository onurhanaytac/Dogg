import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "contractual-amounts",
  templateUrl: "./pages/workfile/contractual-amounts/contractual-amounts.html",
  styleUrls: [ "./pages/workfile/contractual-amounts/contractual-amounts.css" ]
})


export class ContractualAmountsComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
