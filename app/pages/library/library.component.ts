import { Component, Host, ViewChild, ElementRef } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { Frame, topmost } from "tns-core-modules/ui/frame";
import { LibraryFormData } from "../../shared/library/library-form-data";
import { LibraryFormDataService } from "../../shared/library/library-form-data.service";
import { LibraryWorkItemService } from "../../shared/library/library-workitem.service"
import { UserService } from "../../shared/user/user.service";
import { SearchComponent } from "./search/search.component";
import { _ } from "lodash";
import { DismissSoftKeybaord } from "../../shared/DismissSoftKeybaord";
import { OskaTreeDataSourceService } from '../shared-components/oska-tree/oska-tree-datasource.service';

const LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;

@Component({
  selector: "library",
  templateUrl: "./pages/library/library.html",
  styleUrls: [ "./pages/library/library.css" ],
  providers: [ LibraryFormDataService, LibraryWorkItemService, UserService ]
})


export class LibraryComponent {
	constructor(public page: Page, private _router: Router, private frame: Frame, public lfdService: LibraryFormDataService, public lwiService: LibraryWorkItemService) {
		this._frame = frame;
		this._libraryFormData = lfdService.libraryFormData;
	}

	private _frame: Frame;
	private _libraryFormData: LibraryFormData;
	public selectedTabIndex = 0;
	private loader;
	private loaderoptions;


	onIndexChanged(e) {
		const viewMapping = {
			"0": "search-filters",
			"1": "search",
			"2": "account"
		}

		if (e.value !== e.oldValue) {
			let properties = {outlets: {}};
			properties["outlets"][viewMapping[e.value] + "-outlet"] = [];
			properties["outlets"][viewMapping[e.value] + "-outlet"].push(viewMapping[e.value]);

			this._router.navigate(['/library', properties ]);
		}
	}

	@ViewChild('SearchView') searchView: ElementRef;

	public enginStart(e) {
		let self = this;

		this.selectedTabIndex = 1;

    this.lfdService.libraryFormData.page = 1;

    DismissSoftKeybaord.dismiss();

    this.loader.show(this.loaderoptions);

		this.lwiService.libraryWorkItems.subscribe(data => {
			self.lwiService._libraryWorkItems = self.prepareUnitPrices(data)
			this.loader.hide();
		}, err => {
			this.loader.hide();
		});

	}

	prepareUnitPrices(data) {
		_.each(data, item => {
			_.each(item.LibraryWorkItemPrices, price => {
				if (!item["_libraryWorkItemUnitPrices"]) {
					item["_libraryWorkItemUnitPrices"] = {}
				}

				item["_libraryWorkItemUnitPrices"][price.Year] = price.UnitPrice;
			});
		});

		return data
	}

	public getAllLibraryBookFascicleIds(nodes, checkedNodes, parentId?) {
		_.each(nodes, node => {
			if (node.children.length) {
				return this.getAllLibraryBookFascicleIds(node.children, checkedNodes, node.LibraryBookId);
			}

			checkedNodes.push({
				LibraryBookId: node.LibraryBookId ? node.LibraryBookId : parentId,
				LibraryFascicleId: node.LibraryFascicleId ? node.LibraryFascicleId : null
			});

		});
	}

	createLoader() {
		this.loader = new LoadingIndicator();

		// optional options
		// android and ios have some platform specific options
		this.loaderoptions = {
		  message: 'Yükleniyor...',
		  progress: 0.65,
		  android: {
		    indeterminate: true,
		    cancelable: true,
		    cancelListener: function(dialog) { console.log("Loading cancelled") },
		    max: 100,
		    progressNumberFormat: "%1d/%2d",
		    progressPercentFormat: 0.53,
		    progressStyle: 1,
		    secondaryProgress: 1
		  },
		  ios: {
		    details: "Lütfen bekleyiniz.",
		    margin: 10,
		    dimBackground: true,
		    // color: "#4B9ED6", // color of indicator and labels
		    // background box around indicator
		    // hideBezel will override this if true
		    // backgroundColor: "yellow",
		    // userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
		    // hideBezel: true, // default false, can hide the surrounding bezel
		    // view: , // Target view to show on top of (Defaults to entire window)
		    // mode: // see iOS specific options below
		  }
		};
	}



	ngOnInit() {
		this.createLoader();
	}
}
