"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var config_1 = require("../config");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serverUrl = config_1.Config.apiUrl + "/Account/Login";
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
    }
    UserService.prototype.register = function (user) {
    };
    UserService.prototype.login = function (user) {
        user.email = "onurhan@test.com";
        user.password = "Onurhan123@";
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl, JSON.stringify(user), { headers: options });
    };
    UserService.prototype.createRequestOptions = function () {
        var headers = new http_1.HttpHeaders({
            "AuthKey": "my-key",
            "AuthToken": "my-token",
            "Content-Type": "application/json"
        });
        return headers;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUE2RTtBQUc3RSxvQ0FBbUM7QUFHbkM7SUFFRSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVE3QixjQUFTLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztRQVBuRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxJQUFVO0lBQ25CLENBQUM7SUFHRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFTywwQ0FBb0IsR0FBNUI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDNUIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsV0FBVyxFQUFFLFVBQVU7WUFDdkIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUExQlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdlLGlCQUFVO09BRnpCLFdBQVcsQ0EyQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblx0aGVhZGVycztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICBcdHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcblx0XHR0aGlzLmhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICB9XHJcblxyXG5cdHByaXZhdGUgc2VydmVyVXJsID0gQ29uZmlnLmFwaVVybCArIFwiL0FjY291bnQvTG9naW5cIjtcclxuICBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgXHR1c2VyLmVtYWlsID0gXCJvbnVyaGFuQHRlc3QuY29tXCI7XHJcblx0XHR1c2VyLnBhc3N3b3JkID0gXCJPbnVyaGFuMTIzQFwiO1xyXG5cdFx0bGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XHJcblxyXG4gXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnNlcnZlclVybCwgSlNPTi5zdHJpbmdpZnkodXNlciksIHsgaGVhZGVyczogb3B0aW9ucyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgIFwiQXV0aEtleVwiOiBcIm15LWtleVwiLFxyXG4gICAgICBcIkF1dGhUb2tlblwiOiBcIm15LXRva2VuXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxufVxyXG4iXX0=