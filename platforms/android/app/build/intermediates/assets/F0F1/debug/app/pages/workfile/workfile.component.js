"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var data_1 = require("../../shared/data");
var WorkfileComponent = /** @class */ (function () {
    function WorkfileComponent(page) {
        this.page = page;
        this._workFileSummary = new data_1.Data().workFileSummary;
        page.actionBarHidden = true;
    }
    WorkfileComponent.prototype.ngOnInit = function () {
        console.dir(this._workFileSummary);
    };
    WorkfileComponent.prototype.onPullToRefreshInitiated = function (e) {
        console.log("refresh");
        e.object.notifyPullToRefreshFinished();
    };
    WorkfileComponent = __decorate([
        core_1.Component({
            selector: "workfile",
            templateUrl: "./pages/workfile/workfile.html",
            styleUrls: ["./pages/workfile/workfile.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], WorkfileComponent);
    return WorkfileComponent;
}());
exports.WorkfileComponent = WorkfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFVekM7SUFHQywyQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksV0FBSSxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRTdCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsb0RBQXdCLEdBQXhCLFVBQXlCLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQWhCVyxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUUsK0JBQStCLENBQUU7U0FDL0MsQ0FBQzt5Q0FNeUIsV0FBSTtPQUhsQixpQkFBaUIsQ0FpQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ3b3JrZmlsZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvd29ya2ZpbGUvd29ya2ZpbGUuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcIi4vcGFnZXMvd29ya2ZpbGUvd29ya2ZpbGUuY3NzXCIgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JrZmlsZUNvbXBvbmVudCB7XHJcblx0X3dvcmtGaWxlU3VtbWFyeTogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHRcdHRoaXMuX3dvcmtGaWxlU3VtbWFyeSA9IG5ldyBEYXRhKCkud29ya0ZpbGVTdW1tYXJ5O1xyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc29sZS5kaXIodGhpcy5fd29ya0ZpbGVTdW1tYXJ5KTtcclxuXHR9XHJcblxyXG5cdG9uUHVsbFRvUmVmcmVzaEluaXRpYXRlZChlKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcInJlZnJlc2hcIik7XHJcblx0XHRlLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKTtcclxuXHR9XHJcbn1cclxuIl19