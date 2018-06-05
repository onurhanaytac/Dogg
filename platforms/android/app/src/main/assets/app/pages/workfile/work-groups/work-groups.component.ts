import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "work-groups",
  templateUrl: "./pages/workfile/work-groups/work-groups.html",
  styleUrls: [ "./pages/workfile/work-groups/work-groups.css" ]
})


export class WorkGroupsComponent {
	constructor(private page: Page) {
		page.actionBarHidden = true;
	}

	ngOnInit() {
	}
}
