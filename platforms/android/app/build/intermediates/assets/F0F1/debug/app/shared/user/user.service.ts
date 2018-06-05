import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  register(user: User) {
  }

  login(user: User) {
  }
}
