import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from "@angular/common/http";
import { LibraryFormDataService } from "../library/library-form-data.service";
import { UserService } from "../user/user.service";
import { User } from "../../shared/user/user";

import { Config } from "../config";
const httpModule = require("http");

@Injectable()

export class LibraryWorkItemService {

  constructor(public http: HttpClient, public lfdService: LibraryFormDataService, public userService: UserService) {
  }

  public _libraryWorkItems;

  get libraryWorkItems() {
    let data = JSON.parse(JSON.stringify(this.lfdService._libraryFormData))
    let libraryBookFascicleIds = data.libraryBookFascicleIds

    let queryObject = {
      page: data.page,
      pageSize: data.pageSize,
      searchInTermsOfProduction: data.searchInTermsOfProduction,
      includeObsoleteWorkItems: data.includeObsoleteWorkItems,
      searchText: data.searchText,
      selectedYear: data.selectedYear
    }

    let queryString = this.jsonToQueryString(queryObject);
    let headers = new HttpHeaders({'Content-Type':  'application/json'});

    return this.http.post(Config.apiUrl + "/oskaapi/Library" + queryString, libraryBookFascicleIds, { headers: headers });
  }

  set libraryWorkItems(lwi) {
  	this._libraryWorkItems = lwi;
  }

  private jsonToQueryString(json) {
    return '?' +
    Object.keys(json).map(function(key) {
      return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key]);
    }).join('&');
  }
}
