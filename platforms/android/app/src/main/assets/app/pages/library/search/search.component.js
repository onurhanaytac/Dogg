"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var data_1 = require("../../../shared/data");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(page) {
        this.page = page;
        this._workFileSummary = new data_1.Data().workFileSummary;
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
        console.dir(this._workFileSummary);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsZ0NBQStCO0FBRS9CLDZDQUE0QztBQVM1QztJQUlDLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUM7SUFDcEQsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxDQUFDO1FBQ1QsSUFBSSxTQUFTLEdBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLENBQUM7SUFFVCxDQUFDO0lBRU0sa0RBQXdCLEdBQS9CLFVBQWdDLElBQUk7UUFDbkMsSUFBSSxRQUFRLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUVoQyxpQ0FBaUM7UUFDL0IsUUFBUSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFFMUMsQ0FBQztJQUVBLGtDQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUEzQlcsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9DQUFvQztZQUNqRCxTQUFTLEVBQUUsQ0FBRSxtQ0FBbUMsQ0FBRTtTQUNuRCxDQUFDO3lDQU95QixXQUFJO09BSmxCLGVBQWUsQ0E0QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9kYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJzZWFyY2hcIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoL3NlYXJjaC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbIFwiLi9wYWdlcy9saWJyYXJ5L3NlYXJjaC9zZWFyY2guY3NzXCIgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQge1xyXG5cdHB1YmxpYyBzZWFyY2hQaHJhc2U6IHN0cmluZztcclxuXHRwdWJsaWMgX3dvcmtGaWxlU3VtbWFyeTogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuXHRcdHRoaXMuX3dvcmtGaWxlU3VtbWFyeSA9IG5ldyBEYXRhKCkud29ya0ZpbGVTdW1tYXJ5O1xyXG5cdH1cclxuXHJcblx0b25TdWJtaXQoZSkge1xyXG5cdFx0bGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+ZS5vYmplY3Q7XHJcblx0XHRjb25zb2xlLmxvZyhzZWFyY2hCYXIudGV4dClcclxuXHR9XHJcblxyXG5cdG9uQ2xlYXIoZSkge1xyXG5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJncykge1xyXG5cdFx0dmFyIGxpc3RWaWV3OiBhbnkgPSBhcmdzLm9iamVjdDtcclxuXHJcblx0XHQvKiBDYWxsIGFmdGVyIGxvYWRpbmcgZmluaXNoZWQgKi9cclxuICAgIGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XHJcblxyXG59XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0Y29uc29sZS5kaXIodGhpcy5fd29ya0ZpbGVTdW1tYXJ5KVxyXG5cdH1cclxufVxyXG4iXX0=