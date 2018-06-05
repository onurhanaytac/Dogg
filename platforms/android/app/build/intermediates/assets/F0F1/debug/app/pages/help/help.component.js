"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var HelpComponent = /** @class */ (function () {
    function HelpComponent(page) {
        this.page = page;
        page.actionBarHidden = true;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        core_1.Component({
            selector: "help",
            templateUrl: "./pages/help/help.html",
            styleUrls: ["./pages/help/help.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HelpComponent);
    return HelpComponent;
}());
exports.HelpComponent = HelpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFTL0I7SUFDQyx1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTlcsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBRSx1QkFBdUIsQ0FBRTtTQUN2QyxDQUFDO3lDQUl5QixXQUFJO09BRGxCLGFBQWEsQ0FPekI7SUFBRCxvQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJoZWxwXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9oZWxwL2hlbHAuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcIi4vcGFnZXMvaGVscC9oZWxwLmNzc1wiIF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSGVscENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHR9XHJcbn1cclxuIl19