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
    SearchFiltersComponent.prototype.onTreeCheckedChange = function (e) {
    };
    SearchFiltersComponent.prototype.onSwitch = function () {
        this.getFilterData();
    };
    SearchFiltersComponent.prototype.getFilterData = function () {
        var checkedItems = this.tree.getChecked();
    };
    SearchFiltersComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild('LibraryWorkItemBooks'),
        __metadata("design:type", core_1.ElementRef)
    ], SearchFiltersComponent.prototype, "tree", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLGdDQUErQjtBQUMvQiw2Q0FBNEM7QUFVNUM7SUFLQyxnQ0FBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDbEIsRUFBRSxFQUFFLG1CQUFtQjtZQUN2QixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFBO0lBQ0YsQ0FBQztJQUlELG9EQUFtQixHQUFuQixVQUFvQixDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSw4Q0FBYSxHQUFwQjtRQUNDLElBQUksWUFBWSxHQUFJLElBQUksQ0FBQyxJQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUlELHlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBakJrQztRQUFsQyxnQkFBUyxDQUFDLHNCQUFzQixDQUFDO2tDQUFPLGlCQUFVO3dEQUFDO0lBZnhDLHNCQUFzQjtRQVBsQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLFNBQVMsRUFBRSxDQUFFLG1EQUFtRCxDQUFFO1NBQ2xFLENBQUM7eUNBUXlCLFdBQUk7T0FMbEIsc0JBQXNCLENBaUNsQztJQUFELDZCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5pbXBvcnQgeyBfIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoLWZpbHRlcnNcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoLWZpbHRlcnMvc2VhcmNoLWZpbHRlcnMuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vcGFnZXMvbGlicmFyeS9zZWFyY2gtZmlsdGVycy9zZWFyY2gtZmlsdGVycy5jc3NcIiBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlcnNDb21wb25lbnQge1xyXG5cdHB1YmxpYyBfZGF0YTogYW55O1xyXG5cdHB1YmxpYyBfcHJvcGVydGllczogYW55O1xyXG5cdHB1YmxpYyBfZnJvbUNoaWxkOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG5cdFx0dGhpcy5fZGF0YSA9IG5ldyBEYXRhKCkubGlicmFyeUJvb2tBbmRGYXNjaWNsZXM7XHJcblx0XHR0aGlzLl9wcm9wZXJ0aWVzID0ge1xyXG5cdFx0XHRpZDogXCJMaWJyYXJ5RmFzY2ljbGVJZFwiLFxyXG5cdFx0XHRuYW1lOiBcIk5hbWVcIixcclxuXHRcdFx0Y2hpbGRyZW46IFwiTGlicmFyeUZhc2NpY2xlc1wiLFxyXG5cdFx0XHRjaGVja2JveDogdHJ1ZVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QFZpZXdDaGlsZCgnTGlicmFyeVdvcmtJdGVtQm9va3MnKSB0cmVlOiBFbGVtZW50UmVmO1xyXG5cclxuXHRvblRyZWVDaGVja2VkQ2hhbmdlKGUpIHtcclxuXHR9XHJcblxyXG5cdG9uU3dpdGNoKCkge1xyXG5cdFx0dGhpcy5nZXRGaWx0ZXJEYXRhKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0RmlsdGVyRGF0YSgpIHtcclxuXHRcdGxldCBjaGVja2VkSXRlbXMgPSAodGhpcy50cmVlIGFzIGFueSkuZ2V0Q2hlY2tlZCgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0fVxyXG59XHJcbiJdfQ==