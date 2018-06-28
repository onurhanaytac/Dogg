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
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
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
    SearchComponent.prototype.createLoader = function () {
        this.loader = new LoadingIndicator();
        // optional options
        // android and ios have some platform specific options
        this.loaderoptions = {
            message: 'Yükleniyor...',
            progress: 0.65,
            android: {
                indeterminate: true,
                cancelable: true,
                cancelListener: function (dialog) { console.log("Loading cancelled"); },
                max: 100,
                progressNumberFormat: "%1d/%2d",
                progressPercentFormat: 0.53,
                progressStyle: 1,
                secondaryProgress: 1
            },
            ios: {
                details: "Lütfen bekleyiniz.",
                margin: 10,
                dimBackground: true,
            }
        };
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createLoader();
        this.loader.show(this.loaderoptions);
        this.lwiService.libraryWorkItems.subscribe(function (data) {
            _this.loader.hide();
            _this.lwiService._libraryWorkItems = lodash_1._.union(_this.lwiService._libraryWorkItems, _this.prepareUnitPrices(data));
        }, function (err) {
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUU7QUFDdkUsMENBQXlDO0FBQ3pDLGdDQUErQjtBQUUvQiw2Q0FBNEM7QUFFNUMsK0ZBQTJGO0FBQzNGLDZGQUEwRjtBQUMxRiwwREFBd0Q7QUFDeEQsaUNBQTJCO0FBQzNCLDJFQUEwRTtBQUUxRSxJQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0FBU3BGO0lBVUMseUJBQW9CLGdCQUFrQyxFQUFVLElBQVUsRUFBUyxVQUFrQyxFQUFTLFVBQWtDLEVBQVMsT0FBZTtRQUF4SCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBd0I7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDdkwsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztRQUVsRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUMsdUJBQXVCLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNsQixFQUFFLEVBQUUsbUJBQW1CO1lBQ3ZCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLGtCQUFrQjtTQUM1QixDQUFBO0lBRUYsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLENBQUM7UUFFUix5Q0FBbUIsQ0FBQyxPQUFPLEVBQUUs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QUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBRSxtQ0FBbUMsQ0FBRTtTQUNsRCxDQUFDO1FBYVksV0FBQSxXQUFJLEVBQUUsQ0FBQTt5Q0FBbUIsb0NBQWdCLEVBQWdCLFdBQUksRUFBcUIsa0RBQXNCLEVBQXFCLGlEQUFzQixFQUFrQixlQUFNO09BVjVLLGVBQWUsQ0FrSTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxJRCxJQWtJQztBQWxJWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGFcIjtcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExpYnJhcnlXb3JrSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS13b3JraXRlbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExpYnJhcnlDb21wb25lbnQgfSBmcm9tIFwiLi4vbGlicmFyeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgXyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgRGlzbWlzc1NvZnRLZXliYW9yZCB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvRGlzbWlzc1NvZnRLZXliYW9yZFwiO1xyXG5cclxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIikuTG9hZGluZ0luZGljYXRvcjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNlYXJjaFwiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbGlicmFyeS9zZWFyY2gvc2VhcmNoLmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoL3NlYXJjaC5jc3NcIiBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCB7XHJcblx0cHVibGljIF9saWJyYXJ5V29ya0l0ZW1zOiBhbnk7XHJcblx0cHVibGljIF9kYXRhOiBhbnk7XHJcblx0cHVibGljIF9wcm9wZXJ0aWVzOiBhbnk7XHJcblx0cHVibGljIGxpYnJhcnlGb3JtRGF0YTogTGlicmFyeUZvcm1EYXRhO1xyXG5cdHByaXZhdGUgX2xpYnJhcnlDb21wb25lbnQ6IExpYnJhcnlDb21wb25lbnQ7XHJcblx0cHJpdmF0ZSBfbGlicmFyeVdvcmtJdGVtc1BhZ2UyOiBhbnk7XHJcblx0cHJpdmF0ZSBsb2FkZXI7XHJcblx0cHJpdmF0ZSBsb2FkZXJvcHRpb25zO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASG9zdCgpIGxpYnJhcnlDb21wb25lbnQ6IExpYnJhcnlDb21wb25lbnQsIHByaXZhdGUgcGFnZTogUGFnZSwgcHVibGljIGxmZFNlcnZpY2U6IExpYnJhcnlGb3JtRGF0YVNlcnZpY2UsIHB1YmxpYyBsd2lTZXJ2aWNlOiBMaWJyYXJ5V29ya0l0ZW1TZXJ2aWNlLCBwdWJsaWMgX3JvdXRlcjogUm91dGVyKSB7XHJcblx0XHRwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblx0XHR0aGlzLl9saWJyYXJ5Q29tcG9uZW50ID0gbGlicmFyeUNvbXBvbmVudDtcclxuXHRcdHRoaXMubGlicmFyeUZvcm1EYXRhID0gbGZkU2VydmljZS5saWJyYXJ5Rm9ybURhdGE7XHJcblxyXG5cdFx0dGhpcy5fZGF0YSA9IG5ldyBEYXRhKCkubGlicmFyeUJvb2tBbmRGYXNjaWNsZXM7XHJcblx0XHR0aGlzLl9wcm9wZXJ0aWVzID0ge1xyXG5cdFx0XHRpZDogXCJMaWJyYXJ5RmFzY2ljbGVJZFwiLFxyXG5cdFx0XHRuYW1lOiBcIk5hbWVcIixcclxuXHRcdFx0Y2hpbGRyZW46IFwiTGlicmFyeUZhc2NpY2xlc1wiXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0b25TdWJtaXQoZSkge1xyXG5cdFx0dGhpcy5fbGlicmFyeUNvbXBvbmVudC5lbmdpblN0YXJ0KGUpO1xyXG5cdH1cclxuXHJcblx0b25DbGVhcihlKSB7XHJcblxyXG5cdFx0RGlzbWlzc1NvZnRLZXliYW9yZC5kaXNtaXNzKCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIG9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChhcmdzKSB7XHJcblx0XHR2YXIgbGlzdFZpZXc6IGFueSA9IGFyZ3Mub2JqZWN0O1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0bGV0IGNsb25lSXRlbXMgPSBfLmNsb25lKHRoaXMubHdpU2VydmljZS5fbGlicmFyeVdvcmtJdGVtcyk7XHJcblxyXG5cdFx0dGhpcy5sZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YS5wYWdlID0gdGhpcy5sZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YS5wYWdlICsgMTtcclxuXHJcblx0XHR0aGlzLmx3aVNlcnZpY2UubGlicmFyeVdvcmtJdGVtcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdGlmICghKGRhdGEgYXMgYW55KS5sZW5ndGggfHwgKGRhdGEgYXMgYW55KS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gbGlzdFZpZXcubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5sd2lTZXJ2aWNlLl9saWJyYXJ5V29ya0l0ZW1zID0gXy51bmlvbihjbG9uZUl0ZW1zLCBzZWxmLnByZXBhcmVVbml0UHJpY2VzKGRhdGEpKTtcclxuXHRcdFx0bGlzdFZpZXcuc2Nyb2xsVG9JbmRleChjbG9uZUl0ZW1zLmxlbmd0aCAtIDEpO1xyXG5cdFx0XHRsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG5cdFx0fSwgZXJyID0+IHtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdHByZXBhcmVVbml0UHJpY2VzKGRhdGEpIHtcclxuXHRcdF8uZWFjaChkYXRhLCBpdGVtID0+IHtcclxuXHRcdFx0Xy5lYWNoKGl0ZW0uTGlicmFyeVdvcmtJdGVtUHJpY2VzLCBwcmljZSA9PiB7XHJcblx0XHRcdFx0aWYgKCFpdGVtW1wiX2xpYnJhcnlXb3JrSXRlbVVuaXRQcmljZXNcIl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bXCJfbGlicmFyeVdvcmtJdGVtVW5pdFByaWNlc1wiXSA9IHt9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpdGVtW1wiX2xpYnJhcnlXb3JrSXRlbVVuaXRQcmljZXNcIl1bcHJpY2UuWWVhcl0gPSBwcmljZS5Vbml0UHJpY2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGRhdGFcclxuXHR9XHJcblxyXG5cdG9uVGFwQ2FyZChldnQsIGl0ZW0pIHtcclxuXHRcdGlmIChpdGVtLklzSGVhZGVyKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbXCJ3b3JraXRlbS1kZXRhaWxcIiwgaXRlbS5MaWJyYXJ5V29ya0l0ZW1JZF0pO1xyXG5cdH1cclxuXHJcblx0b25TZWFyY2hMYXlvdXRMb2FkZWQoZXZlbnQpIHtcclxuXHRcdGlmIChldmVudC5vYmplY3QuYW5kcm9pZCkge1xyXG5cdFx0XHRldmVudC5vYmplY3QuYW5kcm9pZC5zZXRGb2N1c2FibGVJblRvdWNoTW9kZSh0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uU2VhcmNoQmFyTG9hZGVkKGV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQub2JqZWN0LmFuZHJvaWQpIHtcclxuXHRcdFx0ZXZlbnQub2JqZWN0LmFuZHJvaWQuY2xlYXJGb2N1cygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlTG9hZGVyKCkge1xyXG5cdFx0dGhpcy5sb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG5cclxuXHRcdC8vIG9wdGlvbmFsIG9wdGlvbnNcclxuXHRcdC8vIGFuZHJvaWQgYW5kIGlvcyBoYXZlIHNvbWUgcGxhdGZvcm0gc3BlY2lmaWMgb3B0aW9uc1xyXG5cdFx0dGhpcy5sb2FkZXJvcHRpb25zID0ge1xyXG5cdFx0ICBtZXNzYWdlOiAnWcO8a2xlbml5b3IuLi4nLFxyXG5cdFx0ICBwcm9ncmVzczogMC42NSxcclxuXHRcdCAgYW5kcm9pZDoge1xyXG5cdFx0ICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcblx0XHQgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuXHRcdCAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24oZGlhbG9nKSB7IGNvbnNvbGUubG9nKFwiTG9hZGluZyBjYW5jZWxsZWRcIikgfSxcclxuXHRcdCAgICBtYXg6IDEwMCxcclxuXHRcdCAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcblx0XHQgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG5cdFx0ICAgIHByb2dyZXNzU3R5bGU6IDEsXHJcblx0XHQgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuXHRcdCAgfSxcclxuXHRcdCAgaW9zOiB7XHJcblx0XHQgICAgZGV0YWlsczogXCJMw7x0ZmVuIGJla2xleWluaXouXCIsXHJcblx0XHQgICAgbWFyZ2luOiAxMCxcclxuXHRcdCAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG5cdFx0ICAgIC8vIGNvbG9yOiBcIiM0QjlFRDZcIiwgLy8gY29sb3Igb2YgaW5kaWNhdG9yIGFuZCBsYWJlbHNcclxuXHRcdCAgICAvLyBiYWNrZ3JvdW5kIGJveCBhcm91bmQgaW5kaWNhdG9yXHJcblx0XHQgICAgLy8gaGlkZUJlemVsIHdpbGwgb3ZlcnJpZGUgdGhpcyBpZiB0cnVlXHJcblx0XHQgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG5cdFx0ICAgIC8vIHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IGZhbHNlLCAvLyBkZWZhdWx0IHRydWUuIFNldCBmYWxzZSBzbyB0aGF0IHRoZSB0b3VjaGVzIHdpbGwgZmFsbCB0aHJvdWdoIGl0LlxyXG5cdFx0ICAgIC8vIGhpZGVCZXplbDogdHJ1ZSwgLy8gZGVmYXVsdCBmYWxzZSwgY2FuIGhpZGUgdGhlIHN1cnJvdW5kaW5nIGJlemVsXHJcblx0XHQgICAgLy8gdmlldzogLCAvLyBUYXJnZXQgdmlldyB0byBzaG93IG9uIHRvcCBvZiAoRGVmYXVsdHMgdG8gZW50aXJlIHdpbmRvdylcclxuXHRcdCAgICAvLyBtb2RlOiAvLyBzZWUgaU9TIHNwZWNpZmljIG9wdGlvbnMgYmVsb3dcclxuXHRcdCAgfVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5jcmVhdGVMb2FkZXIoKTtcclxuXHRcdHRoaXMubG9hZGVyLnNob3codGhpcy5sb2FkZXJvcHRpb25zKTtcclxuXHRcdHRoaXMubHdpU2VydmljZS5saWJyYXJ5V29ya0l0ZW1zLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkZXIuaGlkZSgpO1xyXG5cdFx0XHR0aGlzLmx3aVNlcnZpY2UuX2xpYnJhcnlXb3JrSXRlbXMgPSBfLnVuaW9uKHRoaXMubHdpU2VydmljZS5fbGlicmFyeVdvcmtJdGVtcywgdGhpcy5wcmVwYXJlVW5pdFByaWNlcyhkYXRhKSk7XHJcblx0XHR9LCBlcnIgPT4ge1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==