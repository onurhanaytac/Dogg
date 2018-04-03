import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef, ViewChildren, QueryList } from "@angular/core";
import { Page } from "ui/page";
import { Label } from "ui/label";
import { ActionItem } from "ui/action-bar";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router, NavigationStart } from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: "main",
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit, OnInit {
	private _mainContentText: string;
	private logIn: boolean = true;
	private selectedMenuItemId: string = "contractualAmounts";
	private expandWorkfileSubMenu: boolean = true;

	constructor(private _changeDetectionRef: ChangeDetectorRef, private page: Page, private router: Router) {
	  page.actionBarHidden = true;

	  router.events.filter(event => event instanceof NavigationStart)
		.subscribe((event: NavigationStart) => {
			this.setSelectedMenuItem(event);

	    if (event.url === "/" || event.url === "/login") {
     		return this.logIn = true;
	    }
	    this.logIn = false;
	    this.drawer.closeDrawer();
	  });
	}

	@ViewChildren(Label) labels: QueryList<Label>;
	@ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
	private drawer: RadSideDrawer;

	ngAfterViewInit() {
		this.drawer = this.drawerComponent.sideDrawer;
		this._changeDetectionRef.detectChanges();


	}

	ngOnInit() {
	}

	public openDrawer() {
		this.drawer.showDrawer();
	}

	public onCloseDrawerTap() {
	  this.drawer.closeDrawer();
	}

	private setSelectedMenuItem(e: NavigationStart) {
		let parsedUrl = this.parseRouterUrl(e.url);
		let sideMenuItemId: string;

		sideMenuItemId = _.camelCase(parsedUrl.main);
		if (parsedUrl.sub && parsedUrl.sub !== "") {
			sideMenuItemId = _.camelCase(parsedUrl.sub);
		}

		this.selectedMenuItemId = sideMenuItemId;
		console.log(this.selectedMenuItemId);
		// if (this.selectedMenuItemId === "workfile") {
		// 	this.expandWorkfileSubMenu = true;
		// } else {
		// 	this.expandWorkfileSubMenu = false;
		// }
	}

	public parseRouterUrl(url: string) {
		let item = url.split("/");
		let main = item[1];
		let sub: any = "";

		if (item[item.length - 1]) {
			sub = item[item.length - 1].replace(/\(/g, "").replace(/\)/g, "");
			sub = sub.split(":");
			sub = sub[sub.length - 1]
		}

		return {
			main: main,
			sub: sub
		}
	}
}
