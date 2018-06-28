"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.logIn = true;
        this.isSignUp = false;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.signIn = function (e) {
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
    };
    LoginComponent.prototype.signUp = function (e) {
        this.isSignUp = !this.isSignUp;
        //   this.userService.register(this.user).subscribe(
        //     success => {
        //       alert("Your account was successfully created.");
        //     },
        //     error => {
        //     	alert("Unfortunately we were unable to create your account.");
        //     }
        //   );
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBVXpDO0lBS0Msd0JBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFIcEUsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNwQywrQ0FBK0M7UUFDL0Msb0JBQW9CO1FBQ3BCLHNDQUFzQztRQUN0QyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLG9DQUFvQztRQUNwQyx5Q0FBeUM7UUFDekMsTUFBTTtRQUNOLEtBQUs7SUFDTixDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLENBQUM7UUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxvREFBb0Q7UUFDbkQsbUJBQW1CO1FBQ25CLHlEQUF5RDtRQUN6RCxTQUFTO1FBQ1QsaUJBQWlCO1FBQ2pCLHNFQUFzRTtRQUN0RSxRQUFRO1FBQ1IsT0FBTztJQUNSLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQXBDVyxjQUFjO1FBUjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDekUsQ0FBQzt5Q0FRMkIsZUFBTSxFQUF1QiwwQkFBVztPQUx4RCxjQUFjLENBcUMxQjtJQUFELHFCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxvZ2luXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9wYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG5cdHVzZXI6IFVzZXI7XHJcblx0bG9nSW46IGJvb2xlYW4gPSB0cnVlO1xyXG5cdGlzU2lnblVwID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcblx0ICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG5cdH1cclxuXHJcblx0c2lnbkluKGUpIHtcclxuICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saWJyYXJ5XCJdKTtcclxuXHRcdC8vIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUoXHJcblx0XHQvLyAgIChyZXNwb25zZSkgPT4ge1xyXG5cdFx0Ly8gICBcdGNvbnNvbGUuZGlyKHJlc3BvbnNlKTsgZGVidWdnZXI7XHJcblx0XHQvLyAgIH0sXHJcblx0XHQvLyAgIChlcnJvcikgPT4ge1xyXG5cdFx0Ly8gICAgIGNvbnNvbGUuZGlyKGVycm9yKTsgZGVidWdnZXI7XHJcblx0XHQvLyAgIFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpYnJhcnlcIl0pO1xyXG5cdFx0Ly8gICB9XHJcblx0XHQvLyApO1xyXG5cdH1cclxuXHJcblx0c2lnblVwKGUpIHtcclxuXHRcdHRoaXMuaXNTaWduVXAgPSAhdGhpcy5pc1NpZ25VcDtcclxuXHJcblx0Ly8gICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gIC8vICAgICBzdWNjZXNzID0+IHtcclxuICAvLyAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBlcnJvciA9PiB7XHJcbiAgLy8gICAgIFx0YWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICApO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG59XHJcbiJdfQ==