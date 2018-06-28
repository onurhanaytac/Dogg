"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var data_1 = require("../../../shared/data");
var lodash_1 = require("lodash");
var library_form_data_service_1 = require("../../../shared/library/library-form-data.service");
var dialogs = require("ui/dialogs");
var library_component_1 = require("../library.component");
var frame_1 = require("tns-core-modules/ui/frame");
var SearchFiltersComponent = /** @class */ (function () {
    function SearchFiltersComponent(libraryComponent, page, lfdService, _frame) {
        this.libraryComponent = libraryComponent;
        this.page = page;
        this._frame = _frame;
        this.unitPriceYears = [];
        this.libraryFormData = lfdService.libraryFormData;
        this._data = new data_1.Data().libraryBookAndFascicles;
        this._properties = {
            id: "LibraryFascicleId",
            name: "Name",
            children: "LibraryFascicles",
            checkbox: true
        };
    }
    SearchFiltersComponent.prototype.onTreeCheckedChange = function (e) {
        var checkedItems = this.tree.dataSource.data;
        this.libraryFormData.libraryBookFascicleIds = [];
        this.getLibraryBookFascicleIds(checkedItems, this.libraryFormData.libraryBookFascicleIds);
        debugger;
    };
    SearchFiltersComponent.prototype.getLibraryBookFascicleIds = function (nodes, checkedNodes, parentId) {
        var _this = this;
        lodash_1._.each(nodes, function (node) {
            if (node.children.length) {
                return _this.getLibraryBookFascicleIds(node.children, checkedNodes, node.LibraryBookId);
            }
            if (node.checked) {
                checkedNodes.push({
                    LibraryBookId: node.LibraryBookId ? node.LibraryBookId : parentId,
                    LibraryFascicleId: node.LibraryFascicleId ? node.LibraryFascicleId : null
                });
            }
        });
    };
    SearchFiltersComponent.prototype.selectedIndexChanged = function (e) {
    };
    SearchFiltersComponent.prototype.onTapYearButton = function () {
        var _this = this;
        var self = this;
        var options = {
            title: "Birim Fiyat Yılı",
            message: "Lütfen birim fiyat yılı seçiniz",
            cancelButtonText: "Vazgeç",
            actions: this.unitPriceYears
        };
        dialogs.action(options).then(function (result) {
            _this.libraryFormData.selectedYear = isNaN(parseInt(result)) ? _this.libraryFormData.selectedYear : result.toString();
            _this.libraryComponent.selectedTabIndex = 1;
        });
    };
    SearchFiltersComponent.prototype.ngOnInit = function () {
        var minYear = 2003;
        var maxYear = 2019;
        for (var i = maxYear - 1; i >= minYear; i--) {
            this.unitPriceYears.push(i.toString());
        }
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
        __param(0, core_1.Host()),
        __metadata("design:paramtypes", [library_component_1.LibraryComponent, page_1.Page, library_form_data_service_1.LibraryFormDataService, frame_1.Frame])
    ], SearchFiltersComponent);
    return SearchFiltersComponent;
}());
exports.SearchFiltersComponent = SearchFiltersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLGdDQUErQjtBQUMvQiw2Q0FBNEM7QUFDNUMsaUNBQTJCO0FBRzNCLCtGQUEyRjtBQUMzRixvQ0FBc0M7QUFDdEMsMERBQXdEO0FBQ3hELG1EQUEyRDtBQVMzRDtJQU9DLGdDQUEyQixnQkFBa0MsRUFBVSxJQUFVLEVBQUUsVUFBa0MsRUFBUyxNQUFhO1FBQWhILHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQTZDLFdBQU0sR0FBTixNQUFNLENBQU87UUFGcEksbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxJQUFJO1NBQ2QsQ0FBQTtJQUNGLENBQUM7SUFJRCxvREFBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNwQixJQUFJLFlBQVksR0FBSSxJQUFJLENBQUMsSUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDMUYsUUFBUSxDQUFBO0lBQ1QsQ0FBQztJQUVNLDBEQUF5QixHQUFoQyxVQUFpQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVM7UUFBL0QsaUJBY0M7UUFiQSxVQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFBLElBQUk7WUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUMsS0FBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRO29CQUNqRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDekUsQ0FBQyxDQUFDO1lBQ0osQ0FBQztRQUVGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHFEQUFvQixHQUFwQixVQUFxQixDQUFDO0lBQ3RCLENBQUM7SUFFRCxnREFBZSxHQUFmO1FBQUEsaUJBYUM7UUFaQSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxPQUFPLEdBQUc7WUFDYixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLE9BQU8sRUFBRSxpQ0FBaUM7WUFDMUMsZ0JBQWdCLEVBQUUsUUFBUTtZQUMxQixPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDNUIsQ0FBQztRQUVGLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNuQyxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEgsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUVuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0YsQ0FBQztJQWxEa0M7UUFBbEMsZ0JBQVMsQ0FBQyxzQkFBc0IsQ0FBQztrQ0FBTyxpQkFBVTt3REFBQztJQWxCeEMsc0JBQXNCO1FBUGxDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxvREFBb0Q7WUFDakUsU0FBUyxFQUFFLENBQUUsbURBQW1ELENBQUU7U0FDbEUsQ0FBQztRQVVZLFdBQUEsV0FBSSxFQUFFLENBQUE7eUNBQTBCLG9DQUFnQixFQUFnQixXQUFJLEVBQWMsa0RBQXNCLEVBQWlCLGFBQUs7T0FQL0gsc0JBQXNCLENBcUVsQztJQUFELDZCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5pbXBvcnQgeyBfIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9saWJyYXJ5L2xpYnJhcnktZm9ybS1kYXRhXCI7XHJcbmltcG9ydCB7IExpYnJhcnlGb3JtRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExpYnJhcnlDb21wb25lbnQgfSBmcm9tIFwiLi4vbGlicmFyeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRnJhbWUsIHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoLWZpbHRlcnNcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoLWZpbHRlcnMvc2VhcmNoLWZpbHRlcnMuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vcGFnZXMvbGlicmFyeS9zZWFyY2gtZmlsdGVycy9zZWFyY2gtZmlsdGVycy5jc3NcIiBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlcnNDb21wb25lbnQge1xyXG5cdHB1YmxpYyBfZGF0YTogYW55O1xyXG5cdHB1YmxpYyBfcHJvcGVydGllczogYW55O1xyXG5cdHB1YmxpYyBfZnJvbUNoaWxkOiBhbnk7XHJcblx0cHVibGljIGxpYnJhcnlGb3JtRGF0YTogTGlicmFyeUZvcm1EYXRhO1xyXG5cdHB1YmxpYyB1bml0UHJpY2VZZWFyczogc3RyaW5nW10gPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IoQEhvc3QoKSBwdWJsaWMgbGlicmFyeUNvbXBvbmVudDogTGlicmFyeUNvbXBvbmVudCAscHJpdmF0ZSBwYWdlOiBQYWdlLCBsZmRTZXJ2aWNlOiBMaWJyYXJ5Rm9ybURhdGFTZXJ2aWNlLCBwdWJsaWMgX2ZyYW1lOiBGcmFtZSkge1xyXG5cdFx0dGhpcy5saWJyYXJ5Rm9ybURhdGEgPSBsZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YTtcclxuXHRcdHRoaXMuX2RhdGEgPSBuZXcgRGF0YSgpLmxpYnJhcnlCb29rQW5kRmFzY2ljbGVzO1xyXG5cdFx0dGhpcy5fcHJvcGVydGllcyA9IHtcclxuXHRcdFx0aWQ6IFwiTGlicmFyeUZhc2NpY2xlSWRcIixcclxuXHRcdFx0bmFtZTogXCJOYW1lXCIsXHJcblx0XHRcdGNoaWxkcmVuOiBcIkxpYnJhcnlGYXNjaWNsZXNcIixcclxuXHRcdFx0Y2hlY2tib3g6IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ0xpYnJhcnlXb3JrSXRlbUJvb2tzJykgdHJlZTogRWxlbWVudFJlZjtcclxuXHJcblx0b25UcmVlQ2hlY2tlZENoYW5nZShlKSB7XHJcblx0XHRsZXQgY2hlY2tlZEl0ZW1zID0gKHRoaXMudHJlZSBhcyBhbnkpLmRhdGFTb3VyY2UuZGF0YTtcclxuXHRcdHRoaXMubGlicmFyeUZvcm1EYXRhLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMgPSBbXTtcclxuXHRcdHRoaXMuZ2V0TGlicmFyeUJvb2tGYXNjaWNsZUlkcyhjaGVja2VkSXRlbXMsIHRoaXMubGlicmFyeUZvcm1EYXRhLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMpO1xyXG5cdFx0ZGVidWdnZXJcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRMaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKG5vZGVzLCBjaGVja2VkTm9kZXMsIHBhcmVudElkPykge1xyXG5cdFx0Xy5lYWNoKG5vZGVzLCBub2RlID0+IHtcclxuXHRcdFx0aWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0TGlicmFyeUJvb2tGYXNjaWNsZUlkcyhub2RlLmNoaWxkcmVuLCBjaGVja2VkTm9kZXMsIG5vZGUuTGlicmFyeUJvb2tJZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChub2RlLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRjaGVja2VkTm9kZXMucHVzaCh7XHJcblx0XHRcdFx0XHRMaWJyYXJ5Qm9va0lkOiBub2RlLkxpYnJhcnlCb29rSWQgPyBub2RlLkxpYnJhcnlCb29rSWQgOiBwYXJlbnRJZCxcclxuXHRcdFx0XHRcdExpYnJhcnlGYXNjaWNsZUlkOiBub2RlLkxpYnJhcnlGYXNjaWNsZUlkID8gbm9kZS5MaWJyYXJ5RmFzY2ljbGVJZCA6IG51bGxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2VsZWN0ZWRJbmRleENoYW5nZWQoZSkge1xyXG5cdH1cclxuXHJcblx0b25UYXBZZWFyQnV0dG9uKCkge1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdHRpdGxlOiBcIkJpcmltIEZpeWF0IFnEsWzEsVwiLFxyXG5cdFx0XHRtZXNzYWdlOiBcIkzDvHRmZW4gYmlyaW0gZml5YXQgecSxbMSxIHNlw6dpbml6XCIsXHJcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiVmF6Z2XDp1wiLFxyXG5cdFx0XHRhY3Rpb25zOiB0aGlzLnVuaXRQcmljZVllYXJzXHJcblx0XHR9O1xyXG5cclxuXHRcdGRpYWxvZ3MuYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxpYnJhcnlGb3JtRGF0YS5zZWxlY3RlZFllYXIgPSBpc05hTihwYXJzZUludChyZXN1bHQpKSA/IHRoaXMubGlicmFyeUZvcm1EYXRhLnNlbGVjdGVkWWVhciA6IHJlc3VsdC50b1N0cmluZygpO1xyXG5cdFx0XHR0aGlzLmxpYnJhcnlDb21wb25lbnQuc2VsZWN0ZWRUYWJJbmRleCA9IDE7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0bGV0IG1pblllYXIgPSAyMDAzO1xyXG5cdFx0bGV0IG1heFllYXIgPSAyMDE5O1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSBtYXhZZWFyIC0gMTsgaSA+PSBtaW5ZZWFyOyBpLS0pIHtcclxuXHRcdFx0dGhpcy51bml0UHJpY2VZZWFycy5wdXNoKGkudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==