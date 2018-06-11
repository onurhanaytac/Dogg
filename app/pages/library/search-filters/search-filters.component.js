"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var data_1 = require("../../../shared/data");
var lodash_1 = require("lodash");
var library_form_data_service_1 = require("../../../shared/library/library-form-data.service");
var dialogs = require("ui/dialogs");
var SearchFiltersComponent = /** @class */ (function () {
    function SearchFiltersComponent(page, lfdService) {
        this.page = page;
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
        var options = {
            title: "Birim Fiyat Yılı",
            message: "Lütfen birim fiyat yılı seçiniz",
            cancelButtonText: "Vazgeç",
            actions: this.unitPriceYears
        };
        dialogs.action(options).then(function (result) {
            _this.libraryFormData.selectedYear = isNaN(parseInt(result)) ? _this.libraryFormData.selectedYear : result.toString();
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
        __metadata("design:paramtypes", [page_1.Page, library_form_data_service_1.LibraryFormDataService])
    ], SearchFiltersComponent);
    return SearchFiltersComponent;
}());
exports.SearchFiltersComponent = SearchFiltersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLGdDQUErQjtBQUMvQiw2Q0FBNEM7QUFDNUMsaUNBQTJCO0FBRzNCLCtGQUEyRjtBQUMzRixvQ0FBc0M7QUFTdEM7SUFPQyxnQ0FBb0IsSUFBVSxFQUFFLFVBQWtDO1FBQTlDLFNBQUksR0FBSixJQUFJLENBQU07UUFGdkIsbUJBQWMsR0FBYSxFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1FBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2xCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsSUFBSSxFQUFFLE1BQU07WUFDWixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxJQUFJO1NBQ2QsQ0FBQTtJQUNGLENBQUM7SUFHRCxvREFBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNwQixJQUFJLFlBQVksR0FBSSxJQUFJLENBQUMsSUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVNLDBEQUF5QixHQUFoQyxVQUFpQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFFBQVM7UUFBL0QsaUJBY0M7UUFiQSxVQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFBLElBQUk7WUFDakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUMsS0FBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRO29CQUNqRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDekUsQ0FBQyxDQUFDO1lBQ0osQ0FBQztRQUVGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHFEQUFvQixHQUFwQixVQUFxQixDQUFDO0lBQ3RCLENBQUM7SUFFRCxnREFBZSxHQUFmO1FBQUEsaUJBV0M7UUFWQSxJQUFJLE9BQU8sR0FBRztZQUNiLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsT0FBTyxFQUFFLGlDQUFpQztZQUMxQyxnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYztTQUM1QixDQUFDO1FBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ25DLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNySCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUVuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0YsQ0FBQztJQS9Da0M7UUFBbEMsZ0JBQVMsQ0FBQyxzQkFBc0IsQ0FBQztrQ0FBTyxpQkFBVTt3REFBQztJQWxCeEMsc0JBQXNCO1FBUGxDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxvREFBb0Q7WUFDakUsU0FBUyxFQUFFLENBQUUsbURBQW1ELENBQUU7U0FDbEUsQ0FBQzt5Q0FVeUIsV0FBSSxFQUFjLGtEQUFzQjtPQVB0RCxzQkFBc0IsQ0FrRWxDO0lBQUQsNkJBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9kYXRhXCI7XHJcbmltcG9ydCB7IF8gfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGFcIjtcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNlYXJjaC1maWx0ZXJzXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saWJyYXJ5L3NlYXJjaC1maWx0ZXJzL3NlYXJjaC1maWx0ZXJzLmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoLWZpbHRlcnMvc2VhcmNoLWZpbHRlcnMuY3NzXCIgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJzQ29tcG9uZW50IHtcclxuXHRwdWJsaWMgX2RhdGE6IGFueTtcclxuXHRwdWJsaWMgX3Byb3BlcnRpZXM6IGFueTtcclxuXHRwdWJsaWMgX2Zyb21DaGlsZDogYW55O1xyXG5cdHB1YmxpYyBsaWJyYXJ5Rm9ybURhdGE6IExpYnJhcnlGb3JtRGF0YTtcclxuXHRwdWJsaWMgdW5pdFByaWNlWWVhcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgbGZkU2VydmljZTogTGlicmFyeUZvcm1EYXRhU2VydmljZSkge1xyXG5cdFx0dGhpcy5saWJyYXJ5Rm9ybURhdGEgPSBsZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YTtcclxuXHRcdHRoaXMuX2RhdGEgPSBuZXcgRGF0YSgpLmxpYnJhcnlCb29rQW5kRmFzY2ljbGVzO1xyXG5cdFx0dGhpcy5fcHJvcGVydGllcyA9IHtcclxuXHRcdFx0aWQ6IFwiTGlicmFyeUZhc2NpY2xlSWRcIixcclxuXHRcdFx0bmFtZTogXCJOYW1lXCIsXHJcblx0XHRcdGNoaWxkcmVuOiBcIkxpYnJhcnlGYXNjaWNsZXNcIixcclxuXHRcdFx0Y2hlY2tib3g6IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ0xpYnJhcnlXb3JrSXRlbUJvb2tzJykgdHJlZTogRWxlbWVudFJlZjtcclxuXHRvblRyZWVDaGVja2VkQ2hhbmdlKGUpIHtcclxuXHRcdGxldCBjaGVja2VkSXRlbXMgPSAodGhpcy50cmVlIGFzIGFueSkuZGF0YVNvdXJjZS5kYXRhO1xyXG5cdFx0dGhpcy5saWJyYXJ5Rm9ybURhdGEubGlicmFyeUJvb2tGYXNjaWNsZUlkcyA9IFtdO1xyXG5cclxuXHRcdHRoaXMuZ2V0TGlicmFyeUJvb2tGYXNjaWNsZUlkcyhjaGVja2VkSXRlbXMsIHRoaXMubGlicmFyeUZvcm1EYXRhLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldExpYnJhcnlCb29rRmFzY2ljbGVJZHMobm9kZXMsIGNoZWNrZWROb2RlcywgcGFyZW50SWQ/KSB7XHJcblx0XHRfLmVhY2gobm9kZXMsIG5vZGUgPT4ge1xyXG5cdFx0XHRpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRMaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKG5vZGUuY2hpbGRyZW4sIGNoZWNrZWROb2Rlcywgbm9kZS5MaWJyYXJ5Qm9va0lkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5vZGUuY2hlY2tlZCkge1xyXG5cdFx0XHRcdGNoZWNrZWROb2Rlcy5wdXNoKHtcclxuXHRcdFx0XHRcdExpYnJhcnlCb29rSWQ6IG5vZGUuTGlicmFyeUJvb2tJZCA/IG5vZGUuTGlicmFyeUJvb2tJZCA6IHBhcmVudElkLFxyXG5cdFx0XHRcdFx0TGlicmFyeUZhc2NpY2xlSWQ6IG5vZGUuTGlicmFyeUZhc2NpY2xlSWQgPyBub2RlLkxpYnJhcnlGYXNjaWNsZUlkIDogbnVsbFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZWxlY3RlZEluZGV4Q2hhbmdlZChlKSB7XHJcblx0fVxyXG5cclxuXHRvblRhcFllYXJCdXR0b24oKSB7XHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0dGl0bGU6IFwiQmlyaW0gRml5YXQgWcSxbMSxXCIsXHJcblx0XHRcdG1lc3NhZ2U6IFwiTMO8dGZlbiBiaXJpbSBmaXlhdCB5xLFsxLEgc2XDp2luaXpcIixcclxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJWYXpnZcOnXCIsXHJcblx0XHRcdGFjdGlvbnM6IHRoaXMudW5pdFByaWNlWWVhcnNcclxuXHRcdH07XHJcblxyXG5cdFx0ZGlhbG9ncy5hY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdHRoaXMubGlicmFyeUZvcm1EYXRhLnNlbGVjdGVkWWVhciA9IGlzTmFOKHBhcnNlSW50KHJlc3VsdCkpID8gdGhpcy5saWJyYXJ5Rm9ybURhdGEuc2VsZWN0ZWRZZWFyIDogcmVzdWx0LnRvU3RyaW5nKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0bGV0IG1pblllYXIgPSAyMDAzO1xyXG5cdFx0bGV0IG1heFllYXIgPSAyMDE5O1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSBtYXhZZWFyIC0gMTsgaSA+PSBtaW5ZZWFyOyBpLS0pIHtcclxuXHRcdFx0dGhpcy51bml0UHJpY2VZZWFycy5wdXNoKGkudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==