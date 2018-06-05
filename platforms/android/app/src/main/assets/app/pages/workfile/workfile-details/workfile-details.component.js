"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var WorkfileDetailsComponent = /** @class */ (function () {
    function WorkfileDetailsComponent(page) {
        this.page = page;
        page.actionBarHidden = true;
    }
    WorkfileDetailsComponent.prototype.ngOnInit = function () {
    };
    WorkfileDetailsComponent = __decorate([
        core_1.Component({
            selector: "workfile-details",
            templateUrl: "./pages/workfile/workfile-details/workfile-details.html",
            styleUrls: ["./pages/workfile/workfile-details/workfile-details.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], WorkfileDetailsComponent);
    return WorkfileDetailsComponent;
}());
exports.WorkfileDetailsComponent = WorkfileDetailsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2ZpbGUtZGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JrZmlsZS1kZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFTL0I7SUFDQyxrQ0FBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVELDJDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTlcsd0JBQXdCO1FBUHBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSx5REFBeUQ7WUFDdEUsU0FBUyxFQUFFLENBQUUsd0RBQXdELENBQUU7U0FDeEUsQ0FBQzt5Q0FJeUIsV0FBSTtPQURsQix3QkFBd0IsQ0FPcEM7SUFBRCwrQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwid29ya2ZpbGUtZGV0YWlsc1wiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvd29ya2ZpbGUvd29ya2ZpbGUtZGV0YWlscy93b3JrZmlsZS1kZXRhaWxzLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL3dvcmtmaWxlL3dvcmtmaWxlLWRldGFpbHMvd29ya2ZpbGUtZGV0YWlscy5jc3NcIiBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmtmaWxlRGV0YWlsc0NvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHR9XHJcbn1cclxuIl19