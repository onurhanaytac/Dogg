import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "account",
  templateUrl: "./pages/library/account/account.html",
  styleUrls: [ "./pages/library/account/account.css" ]
})


export class AccountComponent {
	constructor(private page: Page) {
	}

	ngOnInit() {
		console.log("accountttt");
	}
}
