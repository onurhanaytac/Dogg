import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Router, NavigationStart } from "@angular/router";

@Component({
  selector: "main",
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit, OnInit {
	private _mainContentText: string;
	private logIn: boolean = true;

	constructor(private _changeDetectionRef: ChangeDetectorRef, private page: Page, private router: Router) {
	  page.actionBarHidden = true;

	  router.events.filter(event => event instanceof NavigationStart)
		.subscribe((event: NavigationStart) => {
	    if (event.url === "/" || event.url === "/login") {
     		return this.logIn = true;
	    }
	    this.logIn = false;
	    this.drawer.closeDrawer();
	  });
	}

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
}
