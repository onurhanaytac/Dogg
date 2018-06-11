"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var data_1 = require("../../../shared/data");
var library_form_data_service_1 = require("../../../shared/library/library-form-data.service");
var library_component_1 = require("../library.component");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(libraryComponent, page, lfdService) {
        this.page = page;
        this._libraryComponent = libraryComponent;
        this.libraryFormData = lfdService.libraryFormData;
        this._libraryWorkItems = new data_1.Data().workFileSummary;
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
    SearchComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var listView = args.object;
        /* Call after loading finished */
        listView.notifyLoadOnDemandFinished();
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
        __metadata("design:paramtypes", [library_component_1.LibraryComponent, page_1.Page, library_form_data_service_1.LibraryFormDataService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsZ0NBQStCO0FBRS9CLDZDQUE0QztBQUU1QywrRkFBMkY7QUFDM0YsMERBQXVEO0FBU3ZEO0lBT0MseUJBQW9CLGdCQUFrQyxFQUFVLElBQVUsRUFBRSxVQUFrQztRQUE5QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3pFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksV0FBSSxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsa0JBQWtCO1NBQzVCLENBQUE7SUFDRixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLENBQUM7UUFDVCx1Q0FBdUM7UUFDdkMsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxDQUFDO0lBRVQsQ0FBQztJQUVNLGtEQUF3QixHQUEvQixVQUFnQyxJQUFJO1FBQ25DLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEMsaUNBQWlDO1FBQ2pDLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQXRDVyxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFFLG1DQUFtQyxDQUFFO1NBQ2xELENBQUM7UUFVWSxXQUFBLFdBQUksRUFBRSxDQUFBO3lDQUFtQixvQ0FBZ0IsRUFBZ0IsV0FBSSxFQUFjLGtEQUFzQjtPQVBsRyxlQUFlLENBdUMzQjtJQUFELHNCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGFcIjtcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExpYnJhcnlDb21wb25lbnQgfSBmcm9tIFwiLi4vbGlicmFyeS5jb21wb25lbnRcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saWJyYXJ5L3NlYXJjaC9zZWFyY2guaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vcGFnZXMvbGlicmFyeS9zZWFyY2gvc2VhcmNoLmNzc1wiIF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IHtcclxuXHRwdWJsaWMgX2xpYnJhcnlXb3JrSXRlbXM6IGFueTtcclxuXHRwdWJsaWMgX2RhdGE6IGFueTtcclxuXHRwdWJsaWMgX3Byb3BlcnRpZXM6IGFueTtcclxuXHRwdWJsaWMgbGlicmFyeUZvcm1EYXRhOiBMaWJyYXJ5Rm9ybURhdGE7XHJcblx0cHJpdmF0ZSBfbGlicmFyeUNvbXBvbmVudDogTGlicmFyeUNvbXBvbmVudDtcclxuXHJcblx0Y29uc3RydWN0b3IoQEhvc3QoKSBsaWJyYXJ5Q29tcG9uZW50OiBMaWJyYXJ5Q29tcG9uZW50LCBwcml2YXRlIHBhZ2U6IFBhZ2UsIGxmZFNlcnZpY2U6IExpYnJhcnlGb3JtRGF0YVNlcnZpY2UpIHtcclxuXHRcdHRoaXMuX2xpYnJhcnlDb21wb25lbnQgPSBsaWJyYXJ5Q29tcG9uZW50O1xyXG5cdFx0dGhpcy5saWJyYXJ5Rm9ybURhdGEgPSBsZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YTtcclxuXHRcdHRoaXMuX2xpYnJhcnlXb3JrSXRlbXMgPSBuZXcgRGF0YSgpLndvcmtGaWxlU3VtbWFyeTtcclxuXHRcdHRoaXMuX2RhdGEgPSBuZXcgRGF0YSgpLmxpYnJhcnlCb29rQW5kRmFzY2ljbGVzO1xyXG5cdFx0dGhpcy5fcHJvcGVydGllcyA9IHtcclxuXHRcdFx0aWQ6IFwiTGlicmFyeUZhc2NpY2xlSWRcIixcclxuXHRcdFx0bmFtZTogXCJOYW1lXCIsXHJcblx0XHRcdGNoaWxkcmVuOiBcIkxpYnJhcnlGYXNjaWNsZXNcIlxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25TdWJtaXQoZSkge1xyXG5cdFx0Ly8gbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+ZS5vYmplY3Q7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhzZWFyY2hCYXIudGV4dClcclxuXHRcdHRoaXMuX2xpYnJhcnlDb21wb25lbnQuZW5naW5TdGFydChlKTtcclxuXHR9XHJcblxyXG5cdG9uQ2xlYXIoZSkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJncykge1xyXG5cdFx0dmFyIGxpc3RWaWV3OiBhbnkgPSBhcmdzLm9iamVjdDtcclxuXHJcblx0XHQvKiBDYWxsIGFmdGVyIGxvYWRpbmcgZmluaXNoZWQgKi9cclxuXHRcdGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0fVxyXG59XHJcbiJdfQ==