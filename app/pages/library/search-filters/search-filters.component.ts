import { Component, ViewChild, ElementRef, Host } from "@angular/core";
import { Page } from "ui/page";
import { Data } from "../../../shared/data";
import { _ } from "lodash";
import * as moment from 'moment';
import { LibraryFormData } from "../../../shared/library/library-form-data";
import { LibraryFormDataService } from "../../../shared/library/library-form-data.service";
import * as dialogs from "ui/dialogs";
import { LibraryComponent } from "../library.component";
import { Frame, topmost } from "tns-core-modules/ui/frame";
import { LibraryWorkItemService } from "../../../shared/library/library-workitem.service";

const localStorage = require( "nativescript-localstorage" );
const LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;

@Component({
	selector: "search-filters",
	templateUrl: "./pages/library/search-filters/search-filters.html",
	styleUrls: [ "./pages/library/search-filters/search-filters.css" ]
})


export class SearchFiltersComponent {
	public _data: any;
	public _properties: any;
	public _fromChild: any;
	public unitPriceYears: any = [];
	private loader;
	private loaderoptions;

	constructor(@Host() public libraryComponent: LibraryComponent ,private page: Page, public lfdService: LibraryFormDataService, public _frame: Frame, public lwiService: LibraryWorkItemService) {
		let localLfd = JSON.parse(localStorage.getItem("libraryFormData"));
		if (localLfd && localLfd.libraryBookFascicleIds) {
			lfdService.libraryFormData = localLfd;
		}
	}

	@ViewChild('LibraryWorkItemBooks') tree: ElementRef;

	onTreeCheckedChange(e) {
		this.getFascicleIds();
	}

	private getFascicleIds() {
		this.lfdService.libraryFormData.libraryBookFascicleIds = [];
		this.getLibraryBookFascicleIds((this.tree as any).dataSource.data, this.lfdService.libraryFormData.libraryBookFascicleIds);
		if (this.lfdService.libraryFormData.libraryBookFascicleIds.length === 0) {
			this.getAllLibraryBookFascicleIds((this.tree as any).dataSource.data, this.lfdService.libraryFormData.libraryBookFascicleIds)
		}

		this.lfdService.libraryFormData.libraryBookFascicleIds
	}

	public getLibraryBookFascicleIds(nodes, checkedNodes, parentId?) {
		_.each(nodes, node => {
			if (node.children.length) {
				return this.getLibraryBookFascicleIds(node.children, checkedNodes, node.LibraryBookId);
			}

			if (node.checkedFly) {
				checkedNodes.push({
					LibraryBookId: node.LibraryBookId ? node.LibraryBookId : parentId,
					LibraryFascicleId: node.LibraryFascicleId ? node.LibraryFascicleId : null
				});
			}

		});
	}

	public getAllLibraryBookFascicleIds(nodes, libraryBookFascicleIds, parentId?) {
		_.each(nodes, node => {
			if (node.children.length) {
				return this.getAllLibraryBookFascicleIds(node.children, libraryBookFascicleIds, node.LibraryBookId);
			}

			if (!node.checked) {
				libraryBookFascicleIds.push({
					LibraryBookId: node.LibraryBookId ? node.LibraryBookId : parentId,
					LibraryFascicleId: node.LibraryFascicleId ? node.LibraryFascicleId : null
				});
			}
		});
	}

	selectedIndexChanged(e) {
	}

	onTapYearButton() {
		let self = this;
		let options = {
			title: "Birim Fiyat Yılı",
			message: "Lütfen birim fiyat yılı seçiniz",
			cancelButtonText: "Vazgeç",
			actions: this.unitPriceYears
		};

		dialogs.action(options).then((result) => {
			this.lfdService.libraryFormData.selectedYear = isNaN(parseInt(result)) ? this.lfdService.libraryFormData.selectedYear : result.toString();
			this.libraryComponent.selectedTabIndex = 1;
		});

	}

	onTreeLoaded(evt) {
		let tree = (this.tree as any);
		let localLfd = JSON.parse(localStorage.getItem("libraryFormData"))
		setTimeout(() => {
			if (localLfd.libraryBookFascicleIds.length) {
				return tree.selectFromLibraryBookFascicleIds(localLfd.libraryBookFascicleIds);
			}
			tree.selectFirstSmallestChild();
		}, 0)
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

	private getViewData() {
		let self = this;
		this._properties = {
			id: "LibraryFascicleId",
			name: "Name",
			children: "LibraryFascicles",
			checkbox: true
		};

		this.loader.show(this.loaderoptions);
		this.lwiService.booksAndFascicles.subscribe(data => {
			self._data = data;
			(this.tree as any).prepareData(self._data);
			this.onTreeLoaded("manuel");
			this.loader.hide();
		}, error => {

		});

		this.lwiService.priceYears.subscribe(data => {
			_.each(_.clone(data), item => {
				self.unitPriceYears.push((data as any).pop().toString());
			})
		}, error => {

		});
	}

	createLoader() {
		this.loader = new LoadingIndicator();

		this.loaderoptions = {
			message: 'Yükleniyor...',
			progress: 0.65
		};
	}

	ngAfterViewInit() {
	}

	ngOnInit() {
		this.createLoader();
		this.getViewData();
	}
}
