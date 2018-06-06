"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var data_1 = require("../../../shared/data");
var SearchFiltersComponent = /** @class */ (function () {
    function SearchFiltersComponent(page) {
        this.page = page;
        this._data = new data_1.Data().libraryBookAndFascicles;
        this._properties = {
            id: "LibraryFascicleId",
            name: "Name",
            children: "LibraryFascicles",
            checkbox: true
        };
    }
    SearchFiltersComponent.prototype.ngOnInit = function () {
    };
    SearchFiltersComponent = __decorate([
        core_1.Component({
            selector: "search-filters",
            templateUrl: "./pages/library/search-filters/search-filters.html",
            styleUrls: ["./pages/library/search-filters/search-filters.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], SearchFiltersComponent);
    return SearchFiltersComponent;
}());
exports.SearchFiltersComponent = SearchFiltersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQUMvQiw2Q0FBNEM7QUFTNUM7SUFJQyxnQ0FBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDbEIsRUFBRSxFQUFFLG1CQUFtQjtZQUN2QixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFBO0lBQ0YsQ0FBQztJQUVELHlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBaEJXLHNCQUFzQjtRQVBsQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLFNBQVMsRUFBRSxDQUFFLG1EQUFtRCxDQUFFO1NBQ2xFLENBQUM7eUNBT3lCLFdBQUk7T0FKbEIsc0JBQXNCLENBaUJsQztJQUFELDZCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2RhdGFcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNlYXJjaC1maWx0ZXJzXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saWJyYXJ5L3NlYXJjaC1maWx0ZXJzL3NlYXJjaC1maWx0ZXJzLmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoLWZpbHRlcnMvc2VhcmNoLWZpbHRlcnMuY3NzXCIgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJzQ29tcG9uZW50IHtcclxuXHRwdWJsaWMgX2RhdGE6IGFueTtcclxuXHRwdWJsaWMgX3Byb3BlcnRpZXM6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcblx0XHR0aGlzLl9kYXRhID0gbmV3IERhdGEoKS5saWJyYXJ5Qm9va0FuZEZhc2NpY2xlcztcclxuXHRcdHRoaXMuX3Byb3BlcnRpZXMgPSB7XHJcblx0XHRcdGlkOiBcIkxpYnJhcnlGYXNjaWNsZUlkXCIsXHJcblx0XHRcdG5hbWU6IFwiTmFtZVwiLFxyXG5cdFx0XHRjaGlsZHJlbjogXCJMaWJyYXJ5RmFzY2ljbGVzXCIsXHJcblx0XHRcdGNoZWNrYm94OiB0cnVlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0fVxyXG59XHJcbiJdfQ==