"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(page, _router) {
        this.page = page;
        this._router = _router;
    }
    LibraryComponent.prototype.onIndexChanged = function (e) {
        var viewMapping = {
            "0": "search-filters",
            "1": "search",
            "2": "account"
        };
        if (e.value !== e.oldValue) {
            var properties = { outlets: {} };
            properties["outlets"][viewMapping[e.value] + "-outlet"] = [];
            properties["outlets"][viewMapping[e.value] + "-outlet"].push(viewMapping[e.value]);
            this._router.navigate(['/library', properties]);
        }
    };
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        core_1.Component({
            selector: "library",
            templateUrl: "./pages/library/library.html",
            styleUrls: ["./pages/library/library.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], LibraryComponent);
    return LibraryComponent;
}());
exports.LibraryComponent = LibraryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBU3pDO0lBQ0MsMEJBQW9CLElBQVUsRUFBVSxPQUFlO1FBQW5DLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3ZELENBQUM7SUFFRCx5Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNmLElBQU0sV0FBVyxHQUFHO1lBQ25CLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLFFBQVE7WUFDYixHQUFHLEVBQUUsU0FBUztTQUNkLENBQUE7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksVUFBVSxHQUFHLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDO1lBQy9CLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3RCxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRW5GLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNGLENBQUM7SUFFRCxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQXJCVyxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUUsNkJBQTZCLENBQUU7U0FDN0MsQ0FBQzt5Q0FJeUIsV0FBSSxFQUFtQixlQUFNO09BRDNDLGdCQUFnQixDQXNCNUI7SUFBRCx1QkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGlicmFyeVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbGlicmFyeS9saWJyYXJ5Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL2xpYnJhcnkvbGlicmFyeS5jc3NcIiBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpYnJhcnlDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuXHR9XHJcblxyXG5cdG9uSW5kZXhDaGFuZ2VkKGUpIHtcclxuXHRcdGNvbnN0IHZpZXdNYXBwaW5nID0ge1xyXG5cdFx0XHRcIjBcIjogXCJzZWFyY2gtZmlsdGVyc1wiLFxyXG5cdFx0XHRcIjFcIjogXCJzZWFyY2hcIixcclxuXHRcdFx0XCIyXCI6IFwiYWNjb3VudFwiXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGUudmFsdWUgIT09IGUub2xkVmFsdWUpIHtcclxuXHRcdFx0bGV0IHByb3BlcnRpZXMgPSB7b3V0bGV0czoge319O1xyXG5cdFx0XHRwcm9wZXJ0aWVzW1wib3V0bGV0c1wiXVt2aWV3TWFwcGluZ1tlLnZhbHVlXSArIFwiLW91dGxldFwiXSA9IFtdO1xyXG5cdFx0XHRwcm9wZXJ0aWVzW1wib3V0bGV0c1wiXVt2aWV3TWFwcGluZ1tlLnZhbHVlXSArIFwiLW91dGxldFwiXS5wdXNoKHZpZXdNYXBwaW5nW2UudmFsdWVdKTtcclxuXHJcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9saWJyYXJ5JywgcHJvcGVydGllcyBdKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxufVxyXG4iXX0=