"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var data_1 = require("../../../shared/data");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(page) {
        this.page = page;
        this._workFileSummary = new data_1.Data().workFileSummary;
        this._data = new data_1.Data().libraryBookAndFascicles;
        this._properties = {
            id: "LibraryFascicleId",
            name: "Name",
            children: "LibraryFascicles"
        };
    }
    SearchComponent.prototype.onSubmit = function (e) {
        var searchBar = e.object;
        console.log(searchBar.text);
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
        __metadata("design:paramtypes", [page_1.Page])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsZ0NBQStCO0FBRS9CLDZDQUE0QztBQVM1QztJQU1DLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDbEIsRUFBRSxFQUFFLG1CQUFtQjtZQUN2QixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxrQkFBa0I7U0FDNUIsQ0FBQTtJQUNGLENBQUM7SUFFRCxrQ0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNULElBQUksU0FBUyxHQUFjLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxDQUFDO0lBRVQsQ0FBQztJQUVNLGtEQUF3QixHQUEvQixVQUFnQyxJQUFJO1FBQ25DLElBQUksUUFBUSxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEMsaUNBQWlDO1FBQy9CLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBRTFDLENBQUM7SUFFQSxrQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQW5DVyxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFFLG1DQUFtQyxDQUFFO1NBQ25ELENBQUM7eUNBU3lCLFdBQUk7T0FObEIsZUFBZSxDQW9DM0I7SUFBRCxzQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2RhdGFcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInNlYXJjaFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbGlicmFyeS9zZWFyY2gvc2VhcmNoLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoL3NlYXJjaC5jc3NcIiBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCB7XHJcblx0cHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xyXG5cdHB1YmxpYyBfd29ya0ZpbGVTdW1tYXJ5OiBhbnk7XHJcblx0cHVibGljIF9kYXRhOiBhbnk7XHJcblx0cHVibGljIF9wcm9wZXJ0aWVzOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG5cdFx0dGhpcy5fd29ya0ZpbGVTdW1tYXJ5ID0gbmV3IERhdGEoKS53b3JrRmlsZVN1bW1hcnk7XHJcblx0XHR0aGlzLl9kYXRhID0gbmV3IERhdGEoKS5saWJyYXJ5Qm9va0FuZEZhc2NpY2xlcztcclxuXHRcdHRoaXMuX3Byb3BlcnRpZXMgPSB7XHJcblx0XHRcdGlkOiBcIkxpYnJhcnlGYXNjaWNsZUlkXCIsXHJcblx0XHRcdG5hbWU6IFwiTmFtZVwiLFxyXG5cdFx0XHRjaGlsZHJlbjogXCJMaWJyYXJ5RmFzY2ljbGVzXCJcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uU3VibWl0KGUpIHtcclxuXHRcdGxldCBzZWFyY2hCYXIgPSA8U2VhcmNoQmFyPmUub2JqZWN0O1xyXG5cdFx0Y29uc29sZS5sb2coc2VhcmNoQmFyLnRleHQpXHJcblx0fVxyXG5cclxuXHRvbkNsZWFyKGUpIHtcclxuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3MpIHtcclxuXHRcdHZhciBsaXN0VmlldzogYW55ID0gYXJncy5vYmplY3Q7XHJcblxyXG5cdFx0LyogQ2FsbCBhZnRlciBsb2FkaW5nIGZpbmlzaGVkICovXHJcbiAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG5cclxufVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHJcblx0fVxyXG59XHJcbiJdfQ==