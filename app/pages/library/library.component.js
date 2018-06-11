"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var frame_1 = require("tns-core-modules/ui/frame");
var library_form_data_service_1 = require("../../shared/library/library-form-data.service");
var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(page, _router, frame, lfdService) {
        this.page = page;
        this._router = _router;
        this.frame = frame;
        this._frame = frame;
        this._libraryFormData = lfdService.libraryFormData;
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
    LibraryComponent.prototype.enginStart = function (e) {
        this._libraryFormData;
        debugger;
    };
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        core_1.Component({
            selector: "library",
            templateUrl: "./pages/library/library.html",
            styleUrls: ["./pages/library/library.css"],
            providers: [library_form_data_service_1.LibraryFormDataService]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, frame_1.Frame, library_form_data_service_1.LibraryFormDataService])
    ], LibraryComponent);
    return LibraryComponent;
}());
exports.LibraryComponent = LibraryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLG1EQUEyRDtBQUUzRCw0RkFBd0Y7QUFVeEY7SUFDQywwQkFBb0IsSUFBVSxFQUFVLE9BQWUsRUFBVSxLQUFZLEVBQUUsVUFBa0M7UUFBN0YsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO0lBQ3BELENBQUM7SUFLRCx5Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNmLElBQU0sV0FBVyxHQUFHO1lBQ25CLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLFFBQVE7WUFDYixHQUFHLEVBQUUsU0FBUztTQUNkLENBQUE7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksVUFBVSxHQUFHLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDO1lBQy9CLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3RCxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRW5GLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNGLENBQUM7SUFFTSxxQ0FBVSxHQUFqQixVQUFrQixDQUFDO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtJQUNBLENBQUM7SUE5QlcsZ0JBQWdCO1FBUjVCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFFLDZCQUE2QixDQUFFO1lBQzVDLFNBQVMsRUFBRSxDQUFDLGtEQUFzQixDQUFDO1NBQ3BDLENBQUM7eUNBSXlCLFdBQUksRUFBbUIsZUFBTSxFQUFpQixhQUFLLEVBQWMsa0RBQXNCO09BRHJHLGdCQUFnQixDQStCNUI7SUFBRCx1QkFBQztDQUFBLEFBL0JELElBK0JDO0FBL0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGcmFtZSwgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IExpYnJhcnlGb3JtRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YVwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9saWJyYXJ5L2xpYnJhcnktZm9ybS1kYXRhLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxpYnJhcnlcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xpYnJhcnkvbGlicmFyeS5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbIFwiLi9wYWdlcy9saWJyYXJ5L2xpYnJhcnkuY3NzXCIgXSxcclxuICBwcm92aWRlcnM6IFtMaWJyYXJ5Rm9ybURhdGFTZXJ2aWNlXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWJyYXJ5Q29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIGZyYW1lOiBGcmFtZSwgbGZkU2VydmljZTogTGlicmFyeUZvcm1EYXRhU2VydmljZSkge1xyXG5cdFx0dGhpcy5fZnJhbWUgPSBmcmFtZTtcclxuXHRcdHRoaXMuX2xpYnJhcnlGb3JtRGF0YSA9IGxmZFNlcnZpY2UubGlicmFyeUZvcm1EYXRhO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZnJhbWU6IEZyYW1lO1xyXG5cdHByaXZhdGUgX2xpYnJhcnlGb3JtRGF0YTogTGlicmFyeUZvcm1EYXRhO1xyXG5cclxuXHRvbkluZGV4Q2hhbmdlZChlKSB7XHJcblx0XHRjb25zdCB2aWV3TWFwcGluZyA9IHtcclxuXHRcdFx0XCIwXCI6IFwic2VhcmNoLWZpbHRlcnNcIixcclxuXHRcdFx0XCIxXCI6IFwic2VhcmNoXCIsXHJcblx0XHRcdFwiMlwiOiBcImFjY291bnRcIlxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChlLnZhbHVlICE9PSBlLm9sZFZhbHVlKSB7XHJcblx0XHRcdGxldCBwcm9wZXJ0aWVzID0ge291dGxldHM6IHt9fTtcclxuXHRcdFx0cHJvcGVydGllc1tcIm91dGxldHNcIl1bdmlld01hcHBpbmdbZS52YWx1ZV0gKyBcIi1vdXRsZXRcIl0gPSBbXTtcclxuXHRcdFx0cHJvcGVydGllc1tcIm91dGxldHNcIl1bdmlld01hcHBpbmdbZS52YWx1ZV0gKyBcIi1vdXRsZXRcIl0ucHVzaCh2aWV3TWFwcGluZ1tlLnZhbHVlXSk7XHJcblxyXG5cdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbGlicmFyeScsIHByb3BlcnRpZXMgXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZW5naW5TdGFydChlKSB7XHJcblx0XHR0aGlzLl9saWJyYXJ5Rm9ybURhdGE7IGRlYnVnZ2VyO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG59XHJcbiJdfQ==