"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var AccountComponent = /** @class */ (function () {
    function AccountComponent(page) {
        this.page = page;
    }
    AccountComponent.prototype.ngOnInit = function () {
        console.log("accountttt");
    };
    AccountComponent = __decorate([
        core_1.Component({
            selector: "account",
            templateUrl: "./pages/library/account/account.html",
            styleUrls: ["./pages/library/account/account.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFTL0I7SUFDQywwQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFDOUIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFOVyxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUUscUNBQXFDLENBQUU7U0FDckQsQ0FBQzt5Q0FJeUIsV0FBSTtPQURsQixnQkFBZ0IsQ0FPNUI7SUFBRCx1QkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYWNjb3VudFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbGlicmFyeS9hY2NvdW50L2FjY291bnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcIi4vcGFnZXMvbGlicmFyeS9hY2NvdW50L2FjY291bnQuY3NzXCIgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50Q29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJhY2NvdW50dHR0XCIpO1xyXG5cdH1cclxufVxyXG4iXX0=