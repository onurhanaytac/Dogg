"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var frame_1 = require("tns-core-modules/ui/frame");
var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(page, _router, frame) {
        this.page = page;
        this._router = _router;
        this.frame = frame;
        this._frame = frame;
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
        console.log("engine");
    };
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        core_1.Component({
            selector: "library",
            templateUrl: "./pages/library/library.html",
            styleUrls: ["./pages/library/library.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, frame_1.Frame])
    ], LibraryComponent);
    return LibraryComponent;
}());
exports.LibraryComponent = LibraryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLG1EQUEyRDtBQVMzRDtJQUNDLDBCQUFvQixJQUFVLEVBQVUsT0FBZSxFQUFVLEtBQVk7UUFBekQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFJRCx5Q0FBYyxHQUFkLFVBQWUsQ0FBQztRQUNmLElBQU0sV0FBVyxHQUFHO1lBQ25CLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLFFBQVE7WUFDYixHQUFHLEVBQUUsU0FBUztTQUNkLENBQUE7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksVUFBVSxHQUFHLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBQyxDQUFDO1lBQy9CLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3RCxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRW5GLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNGLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBNUJXLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBRSw2QkFBNkIsQ0FBRTtTQUM3QyxDQUFDO3lDQUl5QixXQUFJLEVBQW1CLGVBQU0sRUFBaUIsYUFBSztPQURqRSxnQkFBZ0IsQ0E2QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRnJhbWUsIHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGlicmFyeVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbGlicmFyeS9saWJyYXJ5Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL2xpYnJhcnkvbGlicmFyeS5jc3NcIiBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpYnJhcnlDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZnJhbWU6IEZyYW1lKSB7XHJcblx0XHR0aGlzLl9mcmFtZSA9IGZyYW1lO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfZnJhbWU6IEZyYW1lO1xyXG5cclxuXHRvbkluZGV4Q2hhbmdlZChlKSB7XHJcblx0XHRjb25zdCB2aWV3TWFwcGluZyA9IHtcclxuXHRcdFx0XCIwXCI6IFwic2VhcmNoLWZpbHRlcnNcIixcclxuXHRcdFx0XCIxXCI6IFwic2VhcmNoXCIsXHJcblx0XHRcdFwiMlwiOiBcImFjY291bnRcIlxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChlLnZhbHVlICE9PSBlLm9sZFZhbHVlKSB7XHJcblx0XHRcdGxldCBwcm9wZXJ0aWVzID0ge291dGxldHM6IHt9fTtcclxuXHRcdFx0cHJvcGVydGllc1tcIm91dGxldHNcIl1bdmlld01hcHBpbmdbZS52YWx1ZV0gKyBcIi1vdXRsZXRcIl0gPSBbXTtcclxuXHRcdFx0cHJvcGVydGllc1tcIm91dGxldHNcIl1bdmlld01hcHBpbmdbZS52YWx1ZV0gKyBcIi1vdXRsZXRcIl0ucHVzaCh2aWV3TWFwcGluZ1tlLnZhbHVlXSk7XHJcblxyXG5cdFx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbGlicmFyeScsIHByb3BlcnRpZXMgXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRlbmdpblN0YXJ0KGUpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW5naW5lXCIpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG59XHJcbiJdfQ==