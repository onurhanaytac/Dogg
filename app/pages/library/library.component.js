"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var frame_1 = require("tns-core-modules/ui/frame");
var library_form_data_service_1 = require("../../shared/library/library-form-data.service");
var library_workitem_service_1 = require("../../shared/library/library-workitem.service");
var user_service_1 = require("../../shared/user/user.service");
var lodash_1 = require("lodash");
var DismissSoftKeybaord_1 = require("../../shared/DismissSoftKeybaord");
var localStorage = require("nativescript-localstorage");
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(page, _router, frame, lfdService, lwiService) {
        this.page = page;
        this._router = _router;
        this.frame = frame;
        this.lfdService = lfdService;
        this.lwiService = lwiService;
        this.selectedTabIndex = 0;
        this._frame = frame;
    }
    LibraryComponent.prototype.onIndexChanged = function (e) {
        var viewMapping = {
            "0": "search-filters",
            "1": "search",
            "2": "account"
        };
        if (e.value !== e.oldValue) {
            var properties = { outlets: {} };
            properties["outlets"][viewMapping[e.value] + "-outlet"] = [];
            properties["outlets"][viewMapping[e.value] + "-outlet"].push(viewMapping[e.value]);
            this._router.navigate(['/library', properties]);
        }
    };
    LibraryComponent.prototype.enginStart = function (e) {
        var _this = this;
        var self = this;
        this.selectedTabIndex = 1;
        this.lfdService.libraryFormData.page = 1;
        localStorage.setItem("libraryFormData", JSON.stringify(this.lfdService.libraryFormData));
        DismissSoftKeybaord_1.DismissSoftKeybaord.dismiss();
        this.loader.show(this.loaderoptions);
        this.lwiService.libraryWorkItems.subscribe(function (data) {
            self.lwiService._libraryWorkItems = self.prepareUnitPrices(data);
            _this.loader.hide();
        }, function (err) {
            _this.loader.hide();
        });
    };
    LibraryComponent.prototype.prepareUnitPrices = function (data) {
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
    LibraryComponent.prototype.createLoader = function () {
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
    LibraryComponent.prototype.ngOnInit = function () {
        this.createLoader();
    };
    __decorate([
        core_1.ViewChild('SearchView'),
        __metadata("design:type", core_1.ElementRef)
    ], LibraryComponent.prototype, "searchView", void 0);
    LibraryComponent = __decorate([
        core_1.Component({
            selector: "library",
            templateUrl: "./pages/library/library.html",
            styleUrls: ["./pages/library/library.css"],
            providers: [library_form_data_service_1.LibraryFormDataService, library_workitem_service_1.LibraryWorkItemService, user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, frame_1.Frame, library_form_data_service_1.LibraryFormDataService, library_workitem_service_1.LibraryWorkItemService])
    ], LibraryComponent);
    return LibraryComponent;
}());
exports.LibraryComponent = LibraryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUN2RSxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLG1EQUEyRDtBQUUzRCw0RkFBd0Y7QUFDeEYsMEZBQXNGO0FBQ3RGLCtEQUE2RDtBQUU3RCxpQ0FBMkI7QUFDM0Isd0VBQXVFO0FBR3ZFLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBQzVELElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFVcEY7SUFDQywwQkFBbUIsSUFBVSxFQUFVLE9BQWUsRUFBVSxLQUFZLEVBQVMsVUFBa0MsRUFBUyxVQUFrQztRQUEvSSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBSzNKLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUozQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBUUQseUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZixJQUFNLFdBQVcsR0FBRztZQUNuQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxRQUFRO1lBQ2IsR0FBRyxFQUFFLFNBQVM7U0FDZCxDQUFBO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLFVBQVUsR0FBRyxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQztZQUMvQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMs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YUFTcEI7U0FDRixDQUFDO0lBQ0gsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXpFd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQWEsaUJBQVU7d0RBQUM7SUEzQnBDLGdCQUFnQjtRQVI1QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBRSw2QkFBNkIsQ0FBRTtZQUM1QyxTQUFTLEVBQUUsQ0FBRSxrREFBc0IsRUFBRSxpREFBc0IsRUFBRSwwQkFBVyxDQUFFO1NBQzNFLENBQUM7eUNBSXdCLFdBQUksRUFBbUIsZUFBTSxFQUFpQixhQUFLLEVBQXFCLGtEQUFzQixFQUFxQixpREFBc0I7T0FEdEosZ0JBQWdCLENBcUc1QjtJQUFELHVCQUFDO0NBQUEsQUFyR0QsSUFxR0M7QUFyR1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGcmFtZSwgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IExpYnJhcnlGb3JtRGF0YSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YVwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9saWJyYXJ5L2xpYnJhcnktZm9ybS1kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGlicmFyeVdvcmtJdGVtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LXdvcmtpdGVtLnNlcnZpY2VcIlxyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgXyB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgRGlzbWlzc1NvZnRLZXliYW9yZCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvRGlzbWlzc1NvZnRLZXliYW9yZFwiO1xyXG5pbXBvcnQgeyBPc2thVHJlZURhdGFTb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkLWNvbXBvbmVudHMvb3NrYS10cmVlL29za2EtdHJlZS1kYXRhc291cmNlLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgbG9jYWxTdG9yYWdlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcclxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIikuTG9hZGluZ0luZGljYXRvcjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImxpYnJhcnlcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xpYnJhcnkvbGlicmFyeS5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbIFwiLi9wYWdlcy9saWJyYXJ5L2xpYnJhcnkuY3NzXCIgXSxcclxuICBwcm92aWRlcnM6IFsgTGlicmFyeUZvcm1EYXRhU2VydmljZSwgTGlicmFyeVdvcmtJdGVtU2VydmljZSwgVXNlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWJyYXJ5Q29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGFnZTogUGFnZSwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZnJhbWU6IEZyYW1lLCBwdWJsaWMgbGZkU2VydmljZTogTGlicmFyeUZvcm1EYXRhU2VydmljZSwgcHVibGljIGx3aVNlcnZpY2U6IExpYnJhcnlXb3JrSXRlbVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuX2ZyYW1lID0gZnJhbWU7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9mcmFtZTogRnJhbWU7XHJcblx0cHVibGljIHNlbGVjdGVkVGFiSW5kZXggPSAwO1xyXG5cdHByaXZhdGUgbG9hZGVyO1xyXG5cdHByaXZhdGUgbG9hZGVyb3B0aW9ucztcclxuXHJcblxyXG5cdG9uSW5kZXhDaGFuZ2VkKGUpIHtcclxuXHRcdGNvbnN0IHZpZXdNYXBwaW5nID0ge1xyXG5cdFx0XHRcIjBcIjogXCJzZWFyY2gtZmlsdGVyc1wiLFxyXG5cdFx0XHRcIjFcIjogXCJzZWFyY2hcIixcclxuXHRcdFx0XCIyXCI6IFwiYWNjb3VudFwiXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGUudmFsdWUgIT09IGUub2xkVmFsdWUpIHtcclxuXHRcdFx0bGV0IHByb3BlcnRpZXMgPSB7b3V0bGV0czoge319O1xyXG5cdFx0XHRwcm9wZXJ0aWVzW1wib3V0bGV0c1wiXVt2aWV3TWFwcGluZ1tlLnZhbHVlXSArIFwiLW91dGxldFwiXSA9IFtdO1xyXG5cdFx0XHRwcm9wZXJ0aWVzW1wib3V0bGV0c1wiXVt2aWV3TWFwcGluZ1tlLnZhbHVlXSArIFwiLW91dGxldFwiXS5wdXNoKHZpZXdNYXBwaW5nW2UudmFsdWVdKTtcclxuXHJcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9saWJyYXJ5JywgcHJvcGVydGllcyBdKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ1NlYXJjaFZpZXcnKSBzZWFyY2hWaWV3OiBFbGVtZW50UmVmO1xyXG5cclxuXHRwdWJsaWMgZW5naW5TdGFydChlKSB7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5zZWxlY3RlZFRhYkluZGV4ID0gMTtcclxuICAgIHRoaXMubGZkU2VydmljZS5saWJyYXJ5Rm9ybURhdGEucGFnZSA9IDE7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaWJyYXJ5Rm9ybURhdGFcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5sZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YSkpO1xyXG5cclxuICAgIERpc21pc3NTb2Z0S2V5YmFvcmQuZGlzbWlzcygpO1xyXG5cclxuICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2FkZXJvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLmx3aVNlcnZpY2UubGlicmFyeVdvcmtJdGVtcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHNlbGYubHdpU2VydmljZS5fbGlicmFyeVdvcmtJdGVtcyA9IHNlbGYucHJlcGFyZVVuaXRQcmljZXMoZGF0YSlcclxuXHRcdFx0dGhpcy5sb2FkZXIuaGlkZSgpO1xyXG5cdFx0fSwgZXJyID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkZXIuaGlkZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0cHJlcGFyZVVuaXRQcmljZXMoZGF0YSkge1xyXG5cdFx0Xy5lYWNoKGRhdGEsIGl0ZW0gPT4ge1xyXG5cdFx0XHRfLmVhY2goaXRlbS5MaWJyYXJ5V29ya0l0ZW1QcmljZXMsIHByaWNlID0+IHtcclxuXHRcdFx0XHRpZiAoIWl0ZW1bXCJfbGlicmFyeVdvcmtJdGVtVW5pdFByaWNlc1wiXSkge1xyXG5cdFx0XHRcdFx0aXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdID0ge31cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGl0ZW1bXCJfbGlicmFyeVdvcmtJdGVtVW5pdFByaWNlc1wiXVtwcmljZS5ZZWFyXSA9IHByaWNlLlVuaXRQcmljZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlTG9hZGVyKCkge1xyXG5cdFx0dGhpcy5sb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG5cclxuXHRcdC8vIG9wdGlvbmFsIG9wdGlvbnNcclxuXHRcdC8vIGFuZHJvaWQgYW5kIGlvcyBoYXZlIHNvbWUgcGxhdGZvcm0gc3BlY2lmaWMgb3B0aW9uc1xyXG5cdFx0dGhpcy5sb2FkZXJvcHRpb25zID0ge1xyXG5cdFx0ICBtZXNzYWdlOiAnWcO8a2xlbml5b3IuLi4nLFxyXG5cdFx0ICBwcm9ncmVzczogMC42NSxcclxuXHRcdCAgYW5kcm9pZDoge1xyXG5cdFx0ICAgIGluZGV0ZXJtaW5hdGU6IHRydWUsXHJcblx0XHQgICAgY2FuY2VsYWJsZTogdHJ1ZSxcclxuXHRcdCAgICBjYW5jZWxMaXN0ZW5lcjogZnVuY3Rpb24oZGlhbG9nKSB7IGNvbnNvbGUubG9nKFwiTG9hZGluZyBjYW5jZWxsZWRcIikgfSxcclxuXHRcdCAgICBtYXg6IDEwMCxcclxuXHRcdCAgICBwcm9ncmVzc051bWJlckZvcm1hdDogXCIlMWQvJTJkXCIsXHJcblx0XHQgICAgcHJvZ3Jlc3NQZXJjZW50Rm9ybWF0OiAwLjUzLFxyXG5cdFx0ICAgIHByb2dyZXNzU3R5bGU6IDEsXHJcblx0XHQgICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IDFcclxuXHRcdCAgfSxcclxuXHRcdCAgaW9zOiB7XHJcblx0XHQgICAgZGV0YWlsczogXCJMw7x0ZmVuIGJla2xleWluaXouXCIsXHJcblx0XHQgICAgbWFyZ2luOiAxMCxcclxuXHRcdCAgICBkaW1CYWNrZ3JvdW5kOiB0cnVlLFxyXG5cdFx0ICAgIC8vIGNvbG9yOiBcIiM0QjlFRDZcIiwgLy8gY29sb3Igb2YgaW5kaWNhdG9yIGFuZCBsYWJlbHNcclxuXHRcdCAgICAvLyBiYWNrZ3JvdW5kIGJveCBhcm91bmQgaW5kaWNhdG9yXHJcblx0XHQgICAgLy8gaGlkZUJlemVsIHdpbGwgb3ZlcnJpZGUgdGhpcyBpZiB0cnVlXHJcblx0XHQgICAgLy8gYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxyXG5cdFx0ICAgIC8vIHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IGZhbHNlLCAvLyBkZWZhdWx0IHRydWUuIFNldCBmYWxzZSBzbyB0aGF0IHRoZSB0b3VjaGVzIHdpbGwgZmFsbCB0aHJvdWdoIGl0LlxyXG5cdFx0ICAgIC8vIGhpZGVCZXplbDogdHJ1ZSwgLy8gZGVmYXVsdCBmYWxzZSwgY2FuIGhpZGUgdGhlIHN1cnJvdW5kaW5nIGJlemVsXHJcblx0XHQgICAgLy8gdmlldzogLCAvLyBUYXJnZXQgdmlldyB0byBzaG93IG9uIHRvcCBvZiAoRGVmYXVsdHMgdG8gZW50aXJlIHdpbmRvdylcclxuXHRcdCAgICAvLyBtb2RlOiAvLyBzZWUgaU9TIHNwZWNpZmljIG9wdGlvbnMgYmVsb3dcclxuXHRcdCAgfVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5jcmVhdGVMb2FkZXIoKTtcclxuXHR9XHJcbn1cclxuIl19