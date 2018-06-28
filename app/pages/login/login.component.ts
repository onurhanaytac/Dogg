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
	logIn: boolean = true;
	isSignUp = false;

	constructor(private router: Router, private userService: UserService) {
	  this.user = new User();
	}

	signIn(e) {
  	this.router.navigate(["/library"]);
		// this.userService.login(this.user).subscribe(
		//   (response) => {
		//   	console.dir(response); debugger;
		//   },
		//   (error) => {
		//     console.dir(error); debugger;
		//   	this.router.navigate(["/library"]);
		//   }
		// );
	}

	signUp(e) {
		this.isSignUp = !this.isSignUp;

	//   this.userService.register(this.user).subscribe(
  //     success => {
  //       alert("Your account was successfully created.");
  //     },
  //     error => {
  //     	alert("Unfortunately we were unable to create your account.");
  //     }
  //   );
	}

	ngOnInit() {
	}
}
