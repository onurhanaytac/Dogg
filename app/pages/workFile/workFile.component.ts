import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { NativeScriptRouterModule } from "nativescript-angular/router";

@Component({
  selector: "workFile",
  templateUrl: "./pages/workFile/workFile.html",
  styleUrls: ["./pages/workFile/workFile-common.css", "./pages/workFile/workFile.css"]
})


export class WorkFileComponent implements AfterViewInit, OnInit {
	private _mainContentText: string;

	constructor(private _changeDetectionRef: ChangeDetectorRef, private page: Page) {
	  page.actionBarHidden = true;
	}

	@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
	private drawer: RadSideDrawer;

	ngAfterViewInit() {
		this.drawer = this.drawerComponent.sideDrawer;
		this._changeDetectionRef.detectChanges();
	}

	ngOnInit() {
		this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
	}

	get mainContentText() {
		return this._mainContentText;
	}

	set mainContentText(value: string) {
		this._mainContentText = value;
	}

	public openDrawer() {
		this.drawer.showDrawer();
	}

	public onCloseDrawerTap() {
	  this.drawer.closeDrawer();
	}

	public onSideMenuLabelsClick() {
	  console.log("tap")
	}
}
