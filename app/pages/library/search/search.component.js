"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var data_1 = require("../../../shared/data");
var library_form_data_service_1 = require("../../../shared/library/library-form-data.service");
var library_workitem_service_1 = require("../../../shared/library/library-workitem.service");
var library_component_1 = require("../library.component");
var lodash_1 = require("lodash");
var DismissSoftKeybaord_1 = require("../../../shared/DismissSoftKeybaord");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(libraryComponent, page, lfdService, lwiService, _router) {
        this.page = page;
        this.lfdService = lfdService;
        this.lwiService = lwiService;
        this._router = _router;
        page.actionBarHidden = true;
        this._libraryComponent = libraryComponent;
        this.libraryFormData = lfdService.libraryFormData;
        this._data = new data_1.Data().libraryBookAndFascicles;
        this._properties = {
            id: "LibraryFascicleId",
            name: "Name",
            children: "LibraryFascicles"
        };
    }
    SearchComponent.prototype.onSubmit = function (e) {
        this._libraryComponent.enginStart(e);
    };
    SearchComponent.prototype.onClear = function (e) {
        DismissSoftKeybaord_1.DismissSoftKeybaord.dismiss();
    };
    SearchComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var _this = this;
        var listView = args.object;
        var self = this;
        var cloneItems = lodash_1._.clone(this.lwiService._libraryWorkItems);
        this.lfdService.libraryFormData.page = this.lfdService.libraryFormData.page + 1;
        this.lwiService.libraryWorkItems.subscribe(function (data) {
            if (!data.length || data.length === 0) {
                return listView.notifyLoadOnDemandFinished();
            }
            _this.lwiService._libraryWorkItems = lodash_1._.union(cloneItems, self.prepareUnitPrices(data));
            listView.scrollToIndex(cloneItems.length - 1);
            listView.notifyLoadOnDemandFinished();
        }, function (err) {
        });
    };
    SearchComponent.prototype.prepareUnitPrices = function (data) {
        lodash_1._.each(data, function (item) {
            lodash_1._.each(item.LibraryWorkItemPrices, function (price) {
                if (!item["_libraryWorkItemUnitPrices"]) {
                    item["_libraryWorkItemUnitPrices"] = {};
                }
                item["_libraryWorkItemUnitPrices"][price.Year] = price.UnitPrice;
            });
        });
        return data;
    };
    SearchComponent.prototype.onTapCard = function (evt, item) {
        if (item.IsHeader) {
            return;
        }
        this._router.navigate(["workitem-detail", item.LibraryWorkItemId]);
    };
    SearchComponent.prototype.onSearchLayoutLoaded = function (event) {
        if (event.object.android) {
            event.object.android.setFocusableInTouchMode(true);
        }
    };
    SearchComponent.prototype.onSearchBarLoaded = function (event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
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
        __metadata("design:paramtypes", [library_component_1.LibraryComponent, page_1.Page, library_form_data_service_1.LibraryFormDataService, library_workitem_service_1.LibraryWorkItemService, router_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFDdkUsMENBQXlDO0FBQ3pDLGdDQUErQjtBQUUvQiw2Q0FBNEM7QUFFNUMsK0ZBQTJGO0FBQzNGLDZGQUEwRjtBQUMxRiwwREFBd0Q7QUFDeEQsaUNBQTJCO0FBQzNCLDJFQUEwRTtBQVMxRTtJQVFDLHlCQUFvQixnQkFBa0MsRUFBVSxJQUFVLEVBQVMsVUFBa0MsRUFBUyxVQUFrQyxFQUFTLE9BQWU7UUFBeEgsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ3ZMLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFFbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDbEIsRUFBRSxFQUFFLG1CQUFtQjtZQUN2QixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxrQkFBa0I7U0FDNUIsQ0FBQTtJQUVGLENBQUM7SUFFRCxrQ0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxDQUFDO1FBRVIseUNBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUdNLGtEQUF3QixHQUEvQixVQUFnQyxJQUFJO1FBQXBDLGlCQWtCQztRQWpC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QSxXQUFJLEVBQUUsQ0FBQTt5Q0FBbUIsb0NBQWdCLEVBQWdCLFdBQUksRUFBcUIsa0RBQXNCLEVBQXFCLGlEQUFzQixFQUFrQixlQUFNO09BUjVLLGVBQWUsQ0F1RjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZGRCxJQXVGQztBQXZGWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGFcIjtcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExpYnJhcnlXb3JrSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS13b3JraXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExpYnJhcnlDb21wb25lbnQgfSBmcm9tIFwiLi4vbGlicmFyeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgXyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgRGlzbWlzc1NvZnRLZXliYW9yZCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvRGlzbWlzc1NvZnRLZXliYW9yZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saWJyYXJ5L3NlYXJjaC9zZWFyY2guaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vcGFnZXMvbGlicmFyeS9zZWFyY2gvc2VhcmNoLmNzc1wiIF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IHtcclxuXHRwdWJsaWMgX2xpYnJhcnlXb3JrSXRlbXM6IGFueTtcclxuXHRwdWJsaWMgX2RhdGE6IGFueTtcclxuXHRwdWJsaWMgX3Byb3BlcnRpZXM6IGFueTtcclxuXHRwdWJsaWMgbGlicmFyeUZvcm1EYXRhOiBMaWJyYXJ5Rm9ybURhdGE7XHJcblx0cHJpdmF0ZSBfbGlicmFyeUNvbXBvbmVudDogTGlicmFyeUNvbXBvbmVudDtcclxuXHRwcml2YXRlIF9saWJyYXJ5V29ya0l0ZW1zUGFnZTI6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEhvc3QoKSBsaWJyYXJ5Q29tcG9uZW50OiBMaWJyYXJ5Q29tcG9uZW50LCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHB1YmxpYyBsZmRTZXJ2aWNlOiBMaWJyYXJ5Rm9ybURhdGFTZXJ2aWNlLCBwdWJsaWMgbHdpU2VydmljZTogTGlicmFyeVdvcmtJdGVtU2VydmljZSwgcHVibGljIF9yb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0cGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cdFx0dGhpcy5fbGlicmFyeUNvbXBvbmVudCA9IGxpYnJhcnlDb21wb25lbnQ7XHJcblx0XHR0aGlzLmxpYnJhcnlGb3JtRGF0YSA9IGxmZFNlcnZpY2UubGlicmFyeUZvcm1EYXRhO1xyXG5cclxuXHRcdHRoaXMuX2RhdGEgPSBuZXcgRGF0YSgpLmxpYnJhcnlCb29rQW5kRmFzY2ljbGVzO1xyXG5cdFx0dGhpcy5fcHJvcGVydGllcyA9IHtcclxuXHRcdFx0aWQ6IFwiTGlicmFyeUZhc2NpY2xlSWRcIixcclxuXHRcdFx0bmFtZTogXCJOYW1lXCIsXHJcblx0XHRcdGNoaWxkcmVuOiBcIkxpYnJhcnlGYXNjaWNsZXNcIlxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdG9uU3VibWl0KGUpIHtcclxuXHRcdHRoaXMuX2xpYnJhcnlDb21wb25lbnQuZW5naW5TdGFydChlKTtcclxuXHR9XHJcblxyXG5cdG9uQ2xlYXIoZSkge1xyXG5cclxuXHRcdERpc21pc3NTb2Z0S2V5YmFvcmQuZGlzbWlzcygpO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJncykge1xyXG5cdFx0dmFyIGxpc3RWaWV3OiBhbnkgPSBhcmdzLm9iamVjdDtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGxldCBjbG9uZUl0ZW1zID0gXy5jbG9uZSh0aGlzLmx3aVNlcnZpY2UuX2xpYnJhcnlXb3JrSXRlbXMpO1xyXG5cclxuXHRcdHRoaXMubGZkU2VydmljZS5saWJyYXJ5Rm9ybURhdGEucGFnZSA9IHRoaXMubGZkU2VydmljZS5saWJyYXJ5Rm9ybURhdGEucGFnZSArIDE7XHJcblxyXG5cdFx0dGhpcy5sd2lTZXJ2aWNlLmxpYnJhcnlXb3JrSXRlbXMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRpZiAoIShkYXRhIGFzIGFueSkubGVuZ3RoIHx8IChkYXRhIGFzIGFueSkubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMubHdpU2VydmljZS5fbGlicmFyeVdvcmtJdGVtcyA9IF8udW5pb24oY2xvbmVJdGVtcywgc2VsZi5wcmVwYXJlVW5pdFByaWNlcyhkYXRhKSk7XHJcblx0XHRcdGxpc3RWaWV3LnNjcm9sbFRvSW5kZXgoY2xvbmVJdGVtcy5sZW5ndGggLSAxKTtcclxuXHRcdFx0bGlzdFZpZXcubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuXHRcdH0sIGVyciA9PiB7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRwcmVwYXJlVW5pdFByaWNlcyhkYXRhKSB7XHJcblx0XHRfLmVhY2goZGF0YSwgaXRlbSA9PiB7XHJcblx0XHRcdF8uZWFjaChpdGVtLkxpYnJhcnlXb3JrSXRlbVByaWNlcywgcHJpY2UgPT4ge1xyXG5cdFx0XHRcdGlmICghaXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdKSB7XHJcblx0XHRcdFx0XHRpdGVtW1wiX2xpYnJhcnlXb3JrSXRlbVVuaXRQcmljZXNcIl0gPSB7fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdW3ByaWNlLlllYXJdID0gcHJpY2UuVW5pdFByaWNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBkYXRhXHJcblx0fVxyXG5cclxuXHRvblRhcENhcmQoZXZ0LCBpdGVtKSB7XHJcblx0XHRpZiAoaXRlbS5Jc0hlYWRlcikge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW1wid29ya2l0ZW0tZGV0YWlsXCIsIGl0ZW0uTGlicmFyeVdvcmtJdGVtSWRdKTtcclxuXHR9XHJcblxyXG5cdG9uU2VhcmNoTGF5b3V0TG9hZGVkKGV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQub2JqZWN0LmFuZHJvaWQpIHtcclxuXHRcdFx0ZXZlbnQub2JqZWN0LmFuZHJvaWQuc2V0Rm9jdXNhYmxlSW5Ub3VjaE1vZGUodHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvblNlYXJjaEJhckxvYWRlZChldmVudCkge1xyXG5cdFx0aWYgKGV2ZW50Lm9iamVjdC5hbmRyb2lkKSB7XHJcblx0XHRcdGV2ZW50Lm9iamVjdC5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxufVxyXG4iXX0=