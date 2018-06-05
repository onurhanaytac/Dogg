import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {
	headers;
  constructor(private http: HttpClient) {
  	this.headers = new Headers();
		this.headers.append("Content-Type", "application/json");
  }

  register(user: User) {
  }

	private serverUrl = Config.apiUrl + "/Account/Login";
  login(user: User) {
  	user.email = "onurhan@test.com";
		user.password = "Onurhan123@";
		let options = this.createRequestOptions();

 		return this.http.post(this.serverUrl, JSON.stringify(user), { headers: options });
  }

  private createRequestOptions() {
    let headers = new HttpHeaders({
      "AuthKey": "my-key",
      "AuthToken": "my-token",
      "Content-Type": "application/json"
    });
    return headers;
  }
}
