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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2ZpbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFTekM7SUFHQywyQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksV0FBSSxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRTdCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBWFcsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFFLCtCQUErQixDQUFFO1NBQy9DLENBQUM7eUNBTXlCLFdBQUk7T0FIbEIsaUJBQWlCLENBWTdCO0lBQUQsd0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwid29ya2ZpbGVcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL3dvcmtmaWxlL3dvcmtmaWxlLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL3dvcmtmaWxlL3dvcmtmaWxlLmNzc1wiIF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV29ya2ZpbGVDb21wb25lbnQge1xyXG5cdF93b3JrRmlsZVN1bW1hcnk6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblx0XHR0aGlzLl93b3JrRmlsZVN1bW1hcnkgPSBuZXcgRGF0YSgpLndvcmtGaWxlU3VtbWFyeTtcclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuXHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGNvbnNvbGUuZGlyKHRoaXMuX3dvcmtGaWxlU3VtbWFyeSk7XHJcblx0fVxyXG59XHJcbiJdfQ==