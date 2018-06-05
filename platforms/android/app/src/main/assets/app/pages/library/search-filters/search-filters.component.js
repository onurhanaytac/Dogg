"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var SearchFiltersComponent = /** @class */ (function () {
    function SearchFiltersComponent(page) {
        this.page = page;
    }
    SearchFiltersComponent.prototype.ngOnInit = function () {
        console.log("filter");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLGdDQUErQjtBQVMvQjtJQUNDLGdDQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUM5QixDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQU5XLHNCQUFzQjtRQVBsQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLFNBQVMsRUFBRSxDQUFFLG1EQUFtRCxDQUFFO1NBQ25FLENBQUM7eUNBSXlCLFdBQUk7T0FEbEIsc0JBQXNCLENBT2xDO0lBQUQsNkJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInNlYXJjaC1maWx0ZXJzXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saWJyYXJ5L3NlYXJjaC1maWx0ZXJzL3NlYXJjaC1maWx0ZXJzLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoLWZpbHRlcnMvc2VhcmNoLWZpbHRlcnMuY3NzXCIgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJzQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJmaWx0ZXJcIilcclxuXHR9XHJcbn1cclxuIl19