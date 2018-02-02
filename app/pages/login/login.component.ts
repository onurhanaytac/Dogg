import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
})


export class LoginComponent {
	user: User;
	isSignUp = false;

	constructor(private router: Router, private userService: UserService) {
	  this.user = new User();
	}

	signIn(e) {
		this.router.navigate(["/list"])

		// this.userService.login(this.user).subscribe(
  //     () => this.router.navigate(["/list"]),
  //     (error) => alert("Unfortunately we could not find your account.")
  //   );
	}

	signUp(e) {
		this.isSignUp = !this.isSignUp;

		// this.userService.register(this.user).subscribe(
  //     success => {
  //       alert("Your account was successfully created.");
  //     },
  //     error => {
  //     	alert("Unfortunately we were unable to create your account.");
  //     }
  //   );
	}
}
