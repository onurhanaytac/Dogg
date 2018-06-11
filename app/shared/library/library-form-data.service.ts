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
  	this._libraryFormData = lfd;
  }


}
