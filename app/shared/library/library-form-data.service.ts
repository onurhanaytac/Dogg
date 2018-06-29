import { Injectable } from "@angular/core";
import { LibraryFormData } from "./library-form-data";

@Injectable()

export class LibraryFormDataService {

  constructor() {
  	if (!this._libraryFormData) {
  		this._libraryFormData = new LibraryFormData();
  	}
  }

  public _libraryFormData: LibraryFormData;

  get libraryFormData() {
    return this._libraryFormData;
  }

  set libraryFormData(lfd: LibraryFormData) {
    this._libraryFormData.includeObsoleteWorkItems = lfd.includeObsoleteWorkItems;
    this._libraryFormData.libraryBookFascicleIds = lfd.libraryBookFascicleIds;
    this._libraryFormData.page = lfd.page;
    this._libraryFormData.pageSize = lfd.pageSize;
    this._libraryFormData.searchInTermsOfProduction = lfd.searchInTermsOfProduction;
    this._libraryFormData.searchText = lfd.searchText;
    this._libraryFormData.selectedYear = lfd.selectedYear;
  }


}
