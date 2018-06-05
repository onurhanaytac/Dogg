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
        this.router.navigate(["/workfile"]);
        // this.userService.login(this.user).subscribe(
        //   (response) => {
        //     this.router.navigate(["/map"])
        //   },
        //   (error) => {
        //     console.dir(error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBVXpDO0lBS0Msd0JBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFIcEUsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUNuQywrQ0FBK0M7UUFDL0Msb0JBQW9CO1FBQ3BCLHFDQUFxQztRQUNyQyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQixNQUFNO1FBQ04sS0FBSztJQUNMLENBQUM7SUFFRCwrQkFBTSxHQUFOLFVBQU8sQ0FBQztRQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRWhDLG9EQUFvRDtRQUNuRCxtQkFBbUI7UUFDbkIseURBQXlEO1FBQ3pELFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsc0VBQXNFO1FBQ3RFLFFBQVE7UUFDUixPQUFPO0lBQ1IsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBbkNXLGNBQWM7UUFSMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSx5QkFBeUIsQ0FBQztTQUN6RSxDQUFDO3lDQVEyQixlQUFNLEVBQXVCLDBCQUFXO09BTHhELGNBQWMsQ0FvQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibG9naW5cIixcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcblx0dXNlcjogVXNlcjtcclxuXHRsb2dJbjogYm9vbGVhbiA9IHRydWU7XHJcblx0aXNTaWduVXAgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuXHQgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcblx0fVxyXG5cclxuXHRzaWduSW4oZSkge1xyXG5cdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi93b3JrZmlsZVwiXSlcclxuXHQvLyB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG5cdC8vICAgKHJlc3BvbnNlKSA9PiB7XHJcblx0Ly8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tYXBcIl0pXHJcblx0Ly8gICB9LFxyXG5cdC8vICAgKGVycm9yKSA9PiB7XHJcblx0Ly8gICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcclxuXHQvLyAgIH1cclxuXHQvLyApO1xyXG5cdH1cclxuXHJcblx0c2lnblVwKGUpIHtcclxuXHRcdHRoaXMuaXNTaWduVXAgPSAhdGhpcy5pc1NpZ25VcDtcclxuXHJcblx0Ly8gICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikuc3Vic2NyaWJlKFxyXG4gIC8vICAgICBzdWNjZXNzID0+IHtcclxuICAvLyAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBlcnJvciA9PiB7XHJcbiAgLy8gICAgIFx0YWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICApO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG59XHJcbiJdfQ==