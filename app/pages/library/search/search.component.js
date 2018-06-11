"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var data_1 = require("../../../shared/data");
var library_form_data_service_1 = require("../../../shared/library/library-form-data.service");
var library_component_1 = require("../library.component");
var lodash_1 = require("lodash");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(libraryComponent, page, lfdService, _router) {
        this.page = page;
        this._router = _router;
        page.actionBarHidden = true;
        this._libraryComponent = libraryComponent;
        this.libraryFormData = lfdService.libraryFormData;
        this._libraryWorkItems = new data_1.Data().libraryWorkItems;
        this._libraryWorkItemsPage2 = new data_1.Data().libraryWorkItemsPage2;
        this.prepareUnitPrices();
        this._data = new data_1.Data().libraryBookAndFascicles;
        this._properties = {
            id: "LibraryFascicleId",
            name: "Name",
            children: "LibraryFascicles"
        };
    }
    SearchComponent.prototype.onSubmit = function (e) {
        // let searchBar = <SearchBar>e.object;
        // console.log(searchBar.text)
        this._libraryComponent.enginStart(e);
    };
    SearchComponent.prototype.onClear = function (e) {
    };
    SearchComponent.prototype.prepareUnitPrices = function () {
        lodash_1._.each(this._libraryWorkItems, function (item) {
            lodash_1._.each(item.LibraryWorkItemPrices, function (price) {
                if (!item["_libraryWorkItemUnitPrices"]) {
                    item["_libraryWorkItemUnitPrices"] = {};
                }
                item["_libraryWorkItemUnitPrices"][price.Year] = price.UnitPrice;
            });
        });
    };
    SearchComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var _this = this;
        var listView = args.object;
        var that = this;
        var cloneItems = lodash_1._.clone(this._libraryWorkItems);
        setTimeout(function () {
            _this._libraryWorkItems = lodash_1._.union(cloneItems, lodash_1._.clone(_this._libraryWorkItemsPage2));
            _this.prepareUnitPrices();
            listView.scrollToIndex(cloneItems.length - 1);
            listView.notifyLoadOnDemandFinished();
        }, 2000);
    };
    SearchComponent.prototype.onTapCard = function (evt, item) {
        this._router.navigate(["workitem-detail"]);
        debugger;
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: "search",
            templateUrl: "./pages/library/search/search.html",
            styleUrls: ["./pages/library/search/search.css"]
        }),
        __param(0, core_1.Host()),
        __metadata("design:paramtypes", [library_component_1.LibraryComponent, page_1.Page, library_form_data_service_1.LibraryFormDataService, router_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXlDO0FBQ3pDLGdDQUErQjtBQUUvQiw2Q0FBNEM7QUFFNUMsK0ZBQTJGO0FBQzNGLDBEQUF3RDtBQUN4RCxpQ0FBMkI7QUFTM0I7SUFRQyx5QkFBb0IsZ0JBQWtDLEVBQVUsSUFBVSxFQUFFLFVBQWtDLEVBQVMsT0FBZTtRQUF0RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQTZDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDckksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztRQUUvRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQixFQUFFLEVBQUUsbUJBQW1CO1lBQ3ZCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLGtCQUFrQjtTQUM1QixDQUFBO0lBQ0YsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ1QsdUNBQXVDO1FBQ3ZDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsQ0FBQztJQUVULENBQUM7SUFFRCwyQ0FBaUIsR0FBakI7UUFDQyxVQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxVQUFBLElBQUk7WUFDbEMsVUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsVUFBQSxLQUFLO2dCQUN2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEdBQUcsRUFBRSxDQUFBO2dCQUN4QyxDQUFDO2dCQUVELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sa0RBQXdCLEdBQS9CLFVBQWdDLElBQUk7UUFBcEMsaUJBYUM7UUFaQSxJQUFJLFFBQVEsR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLFVBQVUsR0FBRyxVQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRS9DLFVBQVUsQ0FBQztZQUNaLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDbkYsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFdkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzlDLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVaLENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsR0FBRyxFQUFFLElBQUk7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7UUFDMUMsUUFBUSxDQUFBO0lBQ1QsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFFQSxDQUFDO0lBckVXLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFLENBQUUsbUNBQW1DLENBQUU7U0FDbEQsQ0FBQztRQVdZLFdBQUEsV0FBSSxFQUFFLENBQUE7eUNBQW1CLG9DQUFnQixFQUFnQixXQUFJLEVBQWMsa0RBQXNCLEVBQWtCLGVBQU07T0FSMUgsZUFBZSxDQXNFM0I7SUFBRCxzQkFBQztDQUFBLEFBdEVELElBc0VDO0FBdEVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGFcIjtcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExpYnJhcnlDb21wb25lbnQgfSBmcm9tIFwiLi4vbGlicmFyeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgXyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNlYXJjaFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbGlicmFyeS9zZWFyY2gvc2VhcmNoLmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoL3NlYXJjaC5jc3NcIiBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCB7XHJcblx0cHVibGljIF9saWJyYXJ5V29ya0l0ZW1zOiBhbnk7XHJcblx0cHVibGljIF9kYXRhOiBhbnk7XHJcblx0cHVibGljIF9wcm9wZXJ0aWVzOiBhbnk7XHJcblx0cHVibGljIGxpYnJhcnlGb3JtRGF0YTogTGlicmFyeUZvcm1EYXRhO1xyXG5cdHByaXZhdGUgX2xpYnJhcnlDb21wb25lbnQ6IExpYnJhcnlDb21wb25lbnQ7XHJcblx0cHJpdmF0ZSBfbGlicmFyeVdvcmtJdGVtc1BhZ2UyOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBIb3N0KCkgbGlicmFyeUNvbXBvbmVudDogTGlicmFyeUNvbXBvbmVudCwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBsZmRTZXJ2aWNlOiBMaWJyYXJ5Rm9ybURhdGFTZXJ2aWNlLCBwdWJsaWMgX3JvdXRlcjogUm91dGVyKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLl9saWJyYXJ5Q29tcG9uZW50ID0gbGlicmFyeUNvbXBvbmVudDtcclxuXHRcdHRoaXMubGlicmFyeUZvcm1EYXRhID0gbGZkU2VydmljZS5saWJyYXJ5Rm9ybURhdGE7XHJcblx0XHR0aGlzLl9saWJyYXJ5V29ya0l0ZW1zID0gbmV3IERhdGEoKS5saWJyYXJ5V29ya0l0ZW1zO1xyXG5cdFx0dGhpcy5fbGlicmFyeVdvcmtJdGVtc1BhZ2UyID0gbmV3IERhdGEoKS5saWJyYXJ5V29ya0l0ZW1zUGFnZTI7XHJcblxyXG5cdFx0dGhpcy5wcmVwYXJlVW5pdFByaWNlcygpO1xyXG5cclxuXHRcdHRoaXMuX2RhdGEgPSBuZXcgRGF0YSgpLmxpYnJhcnlCb29rQW5kRmFzY2ljbGVzO1xyXG5cdFx0dGhpcy5fcHJvcGVydGllcyA9IHtcclxuXHRcdFx0aWQ6IFwiTGlicmFyeUZhc2NpY2xlSWRcIixcclxuXHRcdFx0bmFtZTogXCJOYW1lXCIsXHJcblx0XHRcdGNoaWxkcmVuOiBcIkxpYnJhcnlGYXNjaWNsZXNcIlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25TdWJtaXQoZSkge1xyXG5cdFx0Ly8gbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+ZS5vYmplY3Q7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhzZWFyY2hCYXIudGV4dClcclxuXHRcdHRoaXMuX2xpYnJhcnlDb21wb25lbnQuZW5naW5TdGFydChlKTtcclxuXHR9XHJcblxyXG5cdG9uQ2xlYXIoZSkge1xyXG5cclxuXHR9XHJcblxyXG5cdHByZXBhcmVVbml0UHJpY2VzKCkge1xyXG5cdFx0Xy5lYWNoKHRoaXMuX2xpYnJhcnlXb3JrSXRlbXMsIGl0ZW0gPT4ge1xyXG5cdFx0XHRfLmVhY2goaXRlbS5MaWJyYXJ5V29ya0l0ZW1QcmljZXMsIHByaWNlID0+IHtcclxuXHRcdFx0XHRpZiAoIWl0ZW1bXCJfbGlicmFyeVdvcmtJdGVtVW5pdFByaWNlc1wiXSkge1xyXG5cdFx0XHRcdFx0aXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdID0ge31cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGl0ZW1bXCJfbGlicmFyeVdvcmtJdGVtVW5pdFByaWNlc1wiXVtwcmljZS5ZZWFyXSA9IHByaWNlLlVuaXRQcmljZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJncykge1xyXG5cdFx0dmFyIGxpc3RWaWV3OiBhbnkgPSBhcmdzLm9iamVjdDtcclxuXHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdGxldCBjbG9uZUl0ZW1zID0gXy5jbG9uZSh0aGlzLl9saWJyYXJ5V29ya0l0ZW1zKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5fbGlicmFyeVdvcmtJdGVtcyA9IF8udW5pb24oY2xvbmVJdGVtcywgXy5jbG9uZSh0aGlzLl9saWJyYXJ5V29ya0l0ZW1zUGFnZTIpKTtcclxuXHRcdFx0dGhpcy5wcmVwYXJlVW5pdFByaWNlcygpO1xyXG5cclxuXHQgICAgbGlzdFZpZXcuc2Nyb2xsVG9JbmRleChjbG9uZUl0ZW1zLmxlbmd0aCAtIDEpO1xyXG5cdCAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG4gICAgfSwgMjAwMCk7XHJcblxyXG5cdH1cclxuXHJcblx0b25UYXBDYXJkKGV2dCwgaXRlbSkge1xyXG5cdFx0dGhpcy5fcm91dGVyLm5hdmlnYXRlKFtcIndvcmtpdGVtLWRldGFpbFwiXSlcclxuXHRcdGRlYnVnZ2VyXHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0fVxyXG59XHJcbiJdfQ==