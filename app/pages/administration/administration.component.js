"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent(page) {
        this.page = page;
        page.actionBarHidden = true;
    }
    AdministrationComponent.prototype.ngOnInit = function () {
    };
    AdministrationComponent = __decorate([
        core_1.Component({
            selector: "administration",
            templateUrl: "./pages/administration/administration.html",
            styleUrls: ["./pages/administration/administration.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], AdministrationComponent);
    return AdministrationComponent;
}());
exports.AdministrationComponent = AdministrationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW5pc3RyYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQVMvQjtJQUNDLGlDQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsMENBQVEsR0FBUjtJQUNBLENBQUM7SUFOVyx1QkFBdUI7UUFQbkMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRDQUE0QztZQUN6RCxTQUFTLEVBQUUsQ0FBRSwyQ0FBMkMsQ0FBRTtTQUMzRCxDQUFDO3lDQUl5QixXQUFJO09BRGxCLHVCQUF1QixDQU9uQztJQUFELDhCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhZG1pbmlzdHJhdGlvblwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvYWRtaW5pc3RyYXRpb24vYWRtaW5pc3RyYXRpb24uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcIi4vcGFnZXMvYWRtaW5pc3RyYXRpb24vYWRtaW5pc3RyYXRpb24uY3NzXCIgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBZG1pbmlzdHJhdGlvbkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHR9XHJcbn1cclxuIl19