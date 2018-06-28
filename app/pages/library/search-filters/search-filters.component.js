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
var library_workitem_service_1 = require("../../../shared/library/library-workitem.service");
var SearchFiltersComponent = /** @class */ (function () {
    function SearchFiltersComponent(libraryComponent, page, lfdService, _frame, lwiService) {
        this.libraryComponent = libraryComponent;
        this.page = page;
        this._frame = _frame;
        this.lwiService = lwiService;
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
        if (!this.libraryFormData.libraryBookFascicleIds.length) {
            this.getAllLibraryBookFascicleIds(checkedItems, this.libraryFormData.libraryBookFascicleIds);
        }
    };
    SearchFiltersComponent.prototype.getAllLibraryBookFascicleIds = function (nodes, checkedNodes, parentId) {
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
    SearchFiltersComponent.prototype.treeLoaded = function () {
        this.tree.selectFirstSmallestChild();
        // let checkedItems = (this.tree as any).dataSource.data;
        // this.getAllLibraryBookFascicleIds(checkedItems, this.libraryFormData.libraryBookFascicleIds);
    };
    SearchFiltersComponent.prototype.prepareUnitPrices = function (data) {
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
        __metadata("design:paramtypes", [library_component_1.LibraryComponent, page_1.Page, library_form_data_service_1.LibraryFormDataService, frame_1.Frame, library_workitem_service_1.LibraryWorkItemService])
    ], SearchFiltersComponent);
    return SearchFiltersComponent;
}());
exports.SearchFiltersComponent = SearchFiltersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLGdDQUErQjtBQUMvQiw2Q0FBNEM7QUFDNUMsaUNBQTJCO0FBRzNCLCtGQUEyRjtBQUMzRixvQ0FBc0M7QUFDdEMsMERBQXdEO0FBQ3hELG1EQUEyRDtBQUMzRCw2RkFBMEY7QUFTMUY7SUFPQyxnQ0FBMkIsZ0JBQWtDLEVBQVUsSUFBVSxFQUFFLFVBQWtDLEVBQVMsTUFBYSxFQUFTLFVBQWtDO1FBQTNKLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQTZDLFdBQU0sR0FBTixNQUFNLENBQU87UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUYvSyxtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUdwQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDbEIsRUFBRSxFQUFFLG1CQUFtQjtZQUN2QixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFBO0lBQ0YsQ0FBQztJQUlELG9EQUFtQixHQUFuQixVQUFvQixDQUFDO1FBQ3BCLElBQUksWUFBWSxHQUFJLElBQUksQ0FBQyxJQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FB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UUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLFNBQVMsRUFBRSxDQUFFLG1EQUFtRCxDQUFFO1NBQ2xFLENBQUM7UUFVWSxXQUFBLFdBQUksRUFBRSxDQUFBO3lDQUEwQixvQ0FBZ0IsRUFBZ0IsV0FBSSxFQUFjLGtEQUFzQixFQUFpQixhQUFLLEVBQXFCLGlEQUFzQjtPQVAxSyxzQkFBc0IsQ0E0R2xDO0lBQUQsNkJBQUM7Q0FBQSxBQTVHRCxJQTRHQztBQTVHWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9kYXRhXCI7XHJcbmltcG9ydCB7IF8gfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGFcIjtcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTGlicmFyeUNvbXBvbmVudCB9IGZyb20gXCIuLi9saWJyYXJ5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGcmFtZSwgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IExpYnJhcnlXb3JrSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS13b3JraXRlbS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogXCJzZWFyY2gtZmlsdGVyc1wiLFxyXG5cdHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbGlicmFyeS9zZWFyY2gtZmlsdGVycy9zZWFyY2gtZmlsdGVycy5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbIFwiLi9wYWdlcy9saWJyYXJ5L3NlYXJjaC1maWx0ZXJzL3NlYXJjaC1maWx0ZXJzLmNzc1wiIF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRmlsdGVyc0NvbXBvbmVudCB7XHJcblx0cHVibGljIF9kYXRhOiBhbnk7XHJcblx0cHVibGljIF9wcm9wZXJ0aWVzOiBhbnk7XHJcblx0cHVibGljIF9mcm9tQ2hpbGQ6IGFueTtcclxuXHRwdWJsaWMgbGlicmFyeUZvcm1EYXRhOiBMaWJyYXJ5Rm9ybURhdGE7XHJcblx0cHVibGljIHVuaXRQcmljZVllYXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASG9zdCgpIHB1YmxpYyBsaWJyYXJ5Q29tcG9uZW50OiBMaWJyYXJ5Q29tcG9uZW50ICxwcml2YXRlIHBhZ2U6IFBhZ2UsIGxmZFNlcnZpY2U6IExpYnJhcnlGb3JtRGF0YVNlcnZpY2UsIHB1YmxpYyBfZnJhbWU6IEZyYW1lLCBwdWJsaWMgbHdpU2VydmljZTogTGlicmFyeVdvcmtJdGVtU2VydmljZSkge1xyXG5cdFx0dGhpcy5saWJyYXJ5Rm9ybURhdGEgPSBsZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YTtcclxuXHRcdHRoaXMuX2RhdGEgPSBuZXcgRGF0YSgpLmxpYnJhcnlCb29rQW5kRmFzY2ljbGVzO1xyXG5cdFx0dGhpcy5fcHJvcGVydGllcyA9IHtcclxuXHRcdFx0aWQ6IFwiTGlicmFyeUZhc2NpY2xlSWRcIixcclxuXHRcdFx0bmFtZTogXCJOYW1lXCIsXHJcblx0XHRcdGNoaWxkcmVuOiBcIkxpYnJhcnlGYXNjaWNsZXNcIixcclxuXHRcdFx0Y2hlY2tib3g6IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ0xpYnJhcnlXb3JrSXRlbUJvb2tzJykgdHJlZTogRWxlbWVudFJlZjtcclxuXHJcblx0b25UcmVlQ2hlY2tlZENoYW5nZShlKSB7XHJcblx0XHRsZXQgY2hlY2tlZEl0ZW1zID0gKHRoaXMudHJlZSBhcyBhbnkpLmRhdGFTb3VyY2UuZGF0YTtcclxuXHRcdHRoaXMubGlicmFyeUZvcm1EYXRhLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMgPSBbXTtcclxuXHRcdHRoaXMuZ2V0TGlicmFyeUJvb2tGYXNjaWNsZUlkcyhjaGVja2VkSXRlbXMsIHRoaXMubGlicmFyeUZvcm1EYXRhLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMpO1xyXG5cdFx0aWYgKCF0aGlzLmxpYnJhcnlGb3JtRGF0YS5saWJyYXJ5Qm9va0Zhc2NpY2xlSWRzLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmdldEFsbExpYnJhcnlCb29rRmFzY2ljbGVJZHMoY2hlY2tlZEl0ZW1zLCB0aGlzLmxpYnJhcnlGb3JtRGF0YS5saWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEFsbExpYnJhcnlCb29rRmFzY2ljbGVJZHMobm9kZXMsIGNoZWNrZWROb2RlcywgcGFyZW50SWQ/KSB7XHJcblx0XHRfLmVhY2gobm9kZXMsIG5vZGUgPT4ge1xyXG5cdFx0XHRpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRMaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKG5vZGUuY2hpbGRyZW4sIGNoZWNrZWROb2Rlcywgbm9kZS5MaWJyYXJ5Qm9va0lkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5vZGUuY2hlY2tlZCkge1xyXG5cdFx0XHRcdGNoZWNrZWROb2Rlcy5wdXNoKHtcclxuXHRcdFx0XHRcdExpYnJhcnlCb29rSWQ6IG5vZGUuTGlicmFyeUJvb2tJZCA/IG5vZGUuTGlicmFyeUJvb2tJZCA6IHBhcmVudElkLFxyXG5cdFx0XHRcdFx0TGlicmFyeUZhc2NpY2xlSWQ6IG5vZGUuTGlicmFyeUZhc2NpY2xlSWQgPyBub2RlLkxpYnJhcnlGYXNjaWNsZUlkIDogbnVsbFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0TGlicmFyeUJvb2tGYXNjaWNsZUlkcyhub2RlcywgY2hlY2tlZE5vZGVzLCBwYXJlbnRJZD8pIHtcclxuXHRcdF8uZWFjaChub2Rlcywgbm9kZSA9PiB7XHJcblx0XHRcdGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldExpYnJhcnlCb29rRmFzY2ljbGVJZHMobm9kZS5jaGlsZHJlbiwgY2hlY2tlZE5vZGVzLCBub2RlLkxpYnJhcnlCb29rSWQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobm9kZS5jaGVja2VkKSB7XHJcblx0XHRcdFx0Y2hlY2tlZE5vZGVzLnB1c2goe1xyXG5cdFx0XHRcdFx0TGlicmFyeUJvb2tJZDogbm9kZS5MaWJyYXJ5Qm9va0lkID8gbm9kZS5MaWJyYXJ5Qm9va0lkIDogcGFyZW50SWQsXHJcblx0XHRcdFx0XHRMaWJyYXJ5RmFzY2ljbGVJZDogbm9kZS5MaWJyYXJ5RmFzY2ljbGVJZCA/IG5vZGUuTGlicmFyeUZhc2NpY2xlSWQgOiBudWxsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGUpIHtcclxuXHR9XHJcblxyXG5cdG9uVGFwWWVhckJ1dHRvbigpIHtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHR0aXRsZTogXCJCaXJpbSBGaXlhdCBZxLFsxLFcIixcclxuXHRcdFx0bWVzc2FnZTogXCJMw7x0ZmVuIGJpcmltIGZpeWF0IHnEsWzEsSBzZcOnaW5pelwiLFxyXG5cdFx0XHRjYW5jZWxCdXR0b25UZXh0OiBcIlZhemdlw6dcIixcclxuXHRcdFx0YWN0aW9uczogdGhpcy51bml0UHJpY2VZZWFyc1xyXG5cdFx0fTtcclxuXHJcblx0XHRkaWFsb2dzLmFjdGlvbihvcHRpb25zKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0dGhpcy5saWJyYXJ5Rm9ybURhdGEuc2VsZWN0ZWRZZWFyID0gaXNOYU4ocGFyc2VJbnQocmVzdWx0KSkgPyB0aGlzLmxpYnJhcnlGb3JtRGF0YS5zZWxlY3RlZFllYXIgOiByZXN1bHQudG9TdHJpbmcoKTtcclxuXHRcdFx0dGhpcy5saWJyYXJ5Q29tcG9uZW50LnNlbGVjdGVkVGFiSW5kZXggPSAxO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0dHJlZUxvYWRlZCgpIHtcclxuXHRcdCh0aGlzLnRyZWUgYXMgYW55KS5zZWxlY3RGaXJzdFNtYWxsZXN0Q2hpbGQoKTtcclxuXHRcdC8vIGxldCBjaGVja2VkSXRlbXMgPSAodGhpcy50cmVlIGFzIGFueSkuZGF0YVNvdXJjZS5kYXRhO1xyXG5cdFx0Ly8gdGhpcy5nZXRBbGxMaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKGNoZWNrZWRJdGVtcywgdGhpcy5saWJyYXJ5Rm9ybURhdGEubGlicmFyeUJvb2tGYXNjaWNsZUlkcyk7XHJcblx0fVxyXG5cclxuXHRwcmVwYXJlVW5pdFByaWNlcyhkYXRhKSB7XHJcblx0XHRfLmVhY2goZGF0YSwgaXRlbSA9PiB7XHJcblx0XHRcdF8uZWFjaChpdGVtLkxpYnJhcnlXb3JrSXRlbVByaWNlcywgcHJpY2UgPT4ge1xyXG5cdFx0XHRcdGlmICghaXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdKSB7XHJcblx0XHRcdFx0XHRpdGVtW1wiX2xpYnJhcnlXb3JrSXRlbVVuaXRQcmljZXNcIl0gPSB7fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdW3ByaWNlLlllYXJdID0gcHJpY2UuVW5pdFByaWNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBkYXRhXHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdGxldCBtaW5ZZWFyID0gMjAwMztcclxuXHRcdGxldCBtYXhZZWFyID0gMjAxOTtcclxuXHJcblx0XHRmb3IgKHZhciBpID0gbWF4WWVhciAtIDE7IGkgPj0gbWluWWVhcjsgaS0tKSB7XHJcblx0XHRcdHRoaXMudW5pdFByaWNlWWVhcnMucHVzaChpLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=