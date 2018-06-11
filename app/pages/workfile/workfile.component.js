"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var WorkfileComponent = /** @class */ (function () {
    function WorkfileComponent(page) {
        this.page = page;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQVcvQjtJQUdDLDJCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUU3QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELG9EQUF3QixHQUF4QixVQUF5QixDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFmVyxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUUsK0JBQStCLENBQUU7U0FDL0MsQ0FBQzt5Q0FNeUIsV0FBSTtPQUhsQixpQkFBaUIsQ0FnQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhLCBDaGFuZ2VUeXBlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ3b3JrZmlsZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvd29ya2ZpbGUvd29ya2ZpbGUuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcIi4vcGFnZXMvd29ya2ZpbGUvd29ya2ZpbGUuY3NzXCIgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JrZmlsZUNvbXBvbmVudCB7XHJcblx0X3dvcmtGaWxlU3VtbWFyeTogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnNvbGUuZGlyKHRoaXMuX3dvcmtGaWxlU3VtbWFyeSk7XHJcblx0fVxyXG5cclxuXHRvblB1bGxUb1JlZnJlc2hJbml0aWF0ZWQoZSkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJyZWZyZXNoXCIpO1xyXG5cdFx0ZS5vYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XHJcblx0fVxyXG59XHJcbiJdfQ==