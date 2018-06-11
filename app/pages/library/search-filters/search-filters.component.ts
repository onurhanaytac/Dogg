import { Component, ViewChild, ElementRef } from "@angular/core";
import { Page } from "ui/page";
import { Data } from "../../../shared/data";
import { _ } from "lodash";
import * as moment from 'moment';
import { LibraryFormData } from "../../../shared/library/library-form-data";
import { LibraryFormDataService } from "../../../shared/library/library-form-data.service";
import * as dialogs from "ui/dialogs";

@Component({
	selector: "search-filters",
	templateUrl: "./pages/library/search-filters/search-filters.html",
	styleUrls: [ "./pages/library/search-filters/search-filters.css" ]
})


export class SearchFiltersComponent {
	public _data: any;
	public _properties: any;
	public _fromChild: any;
	public libraryFormData: LibraryFormData;
	public unitPriceYears: string[] = [];

	constructor(private page: Page, lfdService: LibraryFormDataService) {
		this.libraryFormData = lfdService.libraryFormData;
		this._data = new Data().libraryBookAndFascicles;
		this._properties = {
			id: "LibraryFascicleId",
			name: "Name",
			children: "LibraryFascicles",
			checkbox: true
		}
	}

	@ViewChild('LibraryWorkItemBooks') tree: ElementRef;
	onTreeCheckedChange(e) {
		let checkedItems = (this.tree as any).dataSource.data;
		this.libraryFormData.libraryBookFascicleIds = [];

		this.getLibraryBookFascicleIds(checkedItems, this.libraryFormData.libraryBookFascicleIds);
	}

	public getLibraryBookFascicleIds(nodes, checkedNodes, parentId?) {
		_.each(nodes, node => {
			if (node.children.length) {
				return this.getLibraryBookFascicleIds(node.children, checkedNodes, node.LibraryBookId);
			}

			if (node.checked) {
				checkedNodes.push({
					LibraryBookId: node.LibraryBookId ? node.LibraryBookId : parentId,
					LibraryFascicleId: node.LibraryFascicleId ? node.LibraryFascicleId : null
				});
			}

		});
	}

	selectedIndexChanged(e) {
	}

	onTapYearButton() {
		let options = {
			title: "Birim Fiyat Yılı",
			message: "Lütfen birim fiyat yılı seçiniz",
			cancelButtonText: "Vazgeç",
			actions: this.unitPriceYears
		};

		dialogs.action(options).then((result) => {
			this.libraryFormData.selectedYear = isNaN(parseInt(result)) ? this.libraryFormData.selectedYear : result.toString();
		});
	}

	ngOnInit() {
		let minYear = 2003;
		let maxYear = 2019;

		for (var i = maxYear - 1; i >= minYear; i--) {
			this.unitPriceYears.push(i.toString());
		}
	}
}
