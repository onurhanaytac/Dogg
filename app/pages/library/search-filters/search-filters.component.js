"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var lodash_1 = require("lodash");
var library_form_data_service_1 = require("../../../shared/library/library-form-data.service");
var dialogs = require("ui/dialogs");
var library_component_1 = require("../library.component");
var frame_1 = require("tns-core-modules/ui/frame");
var library_workitem_service_1 = require("../../../shared/library/library-workitem.service");
var localStorage = require("nativescript-localstorage");
var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;
var SearchFiltersComponent = /** @class */ (function () {
    function SearchFiltersComponent(libraryComponent, page, lfdService, _frame, lwiService) {
        this.libraryComponent = libraryComponent;
        this.page = page;
        this.lfdService = lfdService;
        this._frame = _frame;
        this.lwiService = lwiService;
        this.unitPriceYears = [];
        var localLfd = JSON.parse(localStorage.getItem("libraryFormData"));
        if (localLfd && localLfd.libraryBookFascicleIds) {
            lfdService.libraryFormData = localLfd;
        }
    }
    SearchFiltersComponent.prototype.onTreeCheckedChange = function (e) {
        this.getFascicleIds();
    };
    SearchFiltersComponent.prototype.getFascicleIds = function () {
        this.lfdService.libraryFormData.libraryBookFascicleIds = [];
        this.getLibraryBookFascicleIds(this.tree.dataSource.data, this.lfdService.libraryFormData.libraryBookFascicleIds);
        if (this.lfdService.libraryFormData.libraryBookFascicleIds.length === 0) {
            this.getAllLibraryBookFascicleIds(this.tree.dataSource.data, this.lfdService.libraryFormData.libraryBookFascicleIds);
        }
        this.lfdService.libraryFormData.libraryBookFascicleIds;
    };
    SearchFiltersComponent.prototype.getLibraryBookFascicleIds = function (nodes, checkedNodes, parentId) {
        var _this = this;
        lodash_1._.each(nodes, function (node) {
            if (node.children.length) {
                return _this.getLibraryBookFascicleIds(node.children, checkedNodes, node.LibraryBookId);
            }
            if (node.checkedFly) {
                checkedNodes.push({
                    LibraryBookId: node.LibraryBookId ? node.LibraryBookId : parentId,
                    LibraryFascicleId: node.LibraryFascicleId ? node.LibraryFascicleId : null
                });
            }
        });
    };
    SearchFiltersComponent.prototype.getAllLibraryBookFascicleIds = function (nodes, libraryBookFascicleIds, parentId) {
        var _this = this;
        lodash_1._.each(nodes, function (node) {
            if (node.children.length) {
                return _this.getAllLibraryBookFascicleIds(node.children, libraryBookFascicleIds, node.LibraryBookId);
            }
            if (!node.checked) {
                libraryBookFascicleIds.push({
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
            _this.lfdService.libraryFormData.selectedYear = isNaN(parseInt(result)) ? _this.lfdService.libraryFormData.selectedYear : result.toString();
            _this.libraryComponent.selectedTabIndex = 1;
        });
    };
    SearchFiltersComponent.prototype.onTreeLoaded = function (evt) {
        var tree = this.tree;
        var localLfd = JSON.parse(localStorage.getItem("libraryFormData"));
        setTimeout(function () {
            if (localLfd.libraryBookFascicleIds.length) {
                return tree.selectFromLibraryBookFascicleIds(localLfd.libraryBookFascicleIds);
            }
            tree.selectFirstSmallestChild();
        }, 0);
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
    SearchFiltersComponent.prototype.getViewData = function () {
        var _this = this;
        var self = this;
        this._properties = {
            id: "LibraryFascicleId",
            name: "Name",
            children: "LibraryFascicles",
            checkbox: true
        };
        this.loader.show(this.loaderoptions);
        this.lwiService.booksAndFascicles.subscribe(function (data) {
            self._data = data;
            _this.tree.prepareData(self._data);
            _this.onTreeLoaded("manuel");
            _this.loader.hide();
        }, function (error) {
        });
        this.lwiService.priceYears.subscribe(function (data) {
            lodash_1._.each(lodash_1._.clone(data), function (item) {
                self.unitPriceYears.push(data.pop().toString());
            });
        }, function (error) {
        });
    };
    SearchFiltersComponent.prototype.createLoader = function () {
        this.loader = new LoadingIndicator();
        this.loaderoptions = {
            message: 'Yükleniyor...',
            progress: 0.65
        };
    };
    SearchFiltersComponent.prototype.ngAfterViewInit = function () {
    };
    SearchFiltersComponent.prototype.ngOnInit = function () {
        this.createLoader();
        this.getViewData();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLGdDQUErQjtBQUUvQixpQ0FBMkI7QUFHM0IsK0ZBQTJGO0FBQzNGLG9DQUFzQztBQUN0QywwREFBd0Q7QUFDeEQsbURBQTJEO0FBQzNELDZGQUEwRjtBQUUxRixJQUFNLFlBQVksR0FBRyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQUM1RCxJQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0FBU3BGO0lBUUMsZ0NBQTJCLGdCQUFrQyxFQUFVLElBQVUsRUFBUyxVQUFrQyxFQUFTLE1BQWEsRUFBUyxVQUFrQztRQUFsSyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFTLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBSnRMLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBSy9CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDbkUsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDakQsVUFBVSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDdkMsQ0FBQztJQUNGLENBQUM7SUFJRCxvREFBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLCtDQUFjLEdBQXRCO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMs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R0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQTtRQUNILENBQUMsRUFBRSxVQUFBLEtBQUs7UUFFUixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCw2Q0FBWSxHQUFaO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFFckMsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNwQixPQUFPLEVBQUUsZUFBZTtZQUN4QixRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0RBQWUsR0FBZjtJQUNBLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBdElrQztRQUFsQyxnQkFBUyxDQUFDLHNCQUFzQixDQUFDO2tDQUFPLGlCQUFVO3dEQUFDO0lBZnhDLHNCQUFzQjtRQVBsQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsb0RBQW9EO1lBQ2pFLFNBQVMsRUFBRSxDQUFFLG1EQUFtRCxDQUFFO1NBQ2xFLENBQUM7UUFXWSxXQUFBLFdBQUksRUFBRSxDQUFBO3lDQUEwQixvQ0FBZ0IsRUFBZ0IsV0FBSSxFQUFxQixrREFBc0IsRUFBaUIsYUFBSyxFQUFxQixpREFBc0I7T0FSakwsc0JBQXNCLENBc0psQztJQUFELDZCQUFDO0NBQUEsQUF0SkQsSUFzSkM7QUF0Slksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEhvc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGF0YVwiO1xyXG5pbXBvcnQgeyBfIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9saWJyYXJ5L2xpYnJhcnktZm9ybS1kYXRhXCI7XHJcbmltcG9ydCB7IExpYnJhcnlGb3JtRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IExpYnJhcnlDb21wb25lbnQgfSBmcm9tIFwiLi4vbGlicmFyeS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRnJhbWUsIHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5V29ya0l0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9saWJyYXJ5L2xpYnJhcnktd29ya2l0ZW0uc2VydmljZVwiO1xyXG5cclxuY29uc3QgbG9jYWxTdG9yYWdlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcclxuY29uc3QgTG9hZGluZ0luZGljYXRvciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIikuTG9hZGluZ0luZGljYXRvcjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcInNlYXJjaC1maWx0ZXJzXCIsXHJcblx0dGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saWJyYXJ5L3NlYXJjaC1maWx0ZXJzL3NlYXJjaC1maWx0ZXJzLmh0bWxcIixcclxuXHRzdHlsZVVybHM6IFsgXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoLWZpbHRlcnMvc2VhcmNoLWZpbHRlcnMuY3NzXCIgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hGaWx0ZXJzQ29tcG9uZW50IHtcclxuXHRwdWJsaWMgX2RhdGE6IGFueTtcclxuXHRwdWJsaWMgX3Byb3BlcnRpZXM6IGFueTtcclxuXHRwdWJsaWMgX2Zyb21DaGlsZDogYW55O1xyXG5cdHB1YmxpYyB1bml0UHJpY2VZZWFyczogYW55ID0gW107XHJcblx0cHJpdmF0ZSBsb2FkZXI7XHJcblx0cHJpdmF0ZSBsb2FkZXJvcHRpb25zO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihASG9zdCgpIHB1YmxpYyBsaWJyYXJ5Q29tcG9uZW50OiBMaWJyYXJ5Q29tcG9uZW50ICxwcml2YXRlIHBhZ2U6IFBhZ2UsIHB1YmxpYyBsZmRTZXJ2aWNlOiBMaWJyYXJ5Rm9ybURhdGFTZXJ2aWNlLCBwdWJsaWMgX2ZyYW1lOiBGcmFtZSwgcHVibGljIGx3aVNlcnZpY2U6IExpYnJhcnlXb3JrSXRlbVNlcnZpY2UpIHtcclxuXHRcdGxldCBsb2NhbExmZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaWJyYXJ5Rm9ybURhdGFcIikpO1xyXG5cdFx0aWYgKGxvY2FsTGZkICYmIGxvY2FsTGZkLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMpIHtcclxuXHRcdFx0bGZkU2VydmljZS5saWJyYXJ5Rm9ybURhdGEgPSBsb2NhbExmZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ0xpYnJhcnlXb3JrSXRlbUJvb2tzJykgdHJlZTogRWxlbWVudFJlZjtcclxuXHJcblx0b25UcmVlQ2hlY2tlZENoYW5nZShlKSB7XHJcblx0XHR0aGlzLmdldEZhc2NpY2xlSWRzKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldEZhc2NpY2xlSWRzKCkge1xyXG5cdFx0dGhpcy5sZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YS5saWJyYXJ5Qm9va0Zhc2NpY2xlSWRzID0gW107XHJcblx0XHR0aGlzLmdldExpYnJhcnlCb29rRmFzY2ljbGVJZHMoKHRoaXMudHJlZSBhcyBhbnkpLmRhdGFTb3VyY2UuZGF0YSwgdGhpcy5sZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YS5saWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKTtcclxuXHRcdGlmICh0aGlzLmxmZFNlcnZpY2UubGlicmFyeUZvcm1EYXRhLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHRoaXMuZ2V0QWxsTGlicmFyeUJvb2tGYXNjaWNsZUlkcygodGhpcy50cmVlIGFzIGFueSkuZGF0YVNvdXJjZS5kYXRhLCB0aGlzLmxmZFNlcnZpY2UubGlicmFyeUZvcm1EYXRhLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMpXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5sZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YS5saWJyYXJ5Qm9va0Zhc2NpY2xlSWRzXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0TGlicmFyeUJvb2tGYXNjaWNsZUlkcyhub2RlcywgY2hlY2tlZE5vZGVzLCBwYXJlbnRJZD8pIHtcclxuXHRcdF8uZWFjaChub2Rlcywgbm9kZSA9PiB7XHJcblx0XHRcdGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldExpYnJhcnlCb29rRmFzY2ljbGVJZHMobm9kZS5jaGlsZHJlbiwgY2hlY2tlZE5vZGVzLCBub2RlLkxpYnJhcnlCb29rSWQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobm9kZS5jaGVja2VkRmx5KSB7XHJcblx0XHRcdFx0Y2hlY2tlZE5vZGVzLnB1c2goe1xyXG5cdFx0XHRcdFx0TGlicmFyeUJvb2tJZDogbm9kZS5MaWJyYXJ5Qm9va0lkID8gbm9kZS5MaWJyYXJ5Qm9va0lkIDogcGFyZW50SWQsXHJcblx0XHRcdFx0XHRMaWJyYXJ5RmFzY2ljbGVJZDogbm9kZS5MaWJyYXJ5RmFzY2ljbGVJZCA/IG5vZGUuTGlicmFyeUZhc2NpY2xlSWQgOiBudWxsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRBbGxMaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKG5vZGVzLCBsaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzLCBwYXJlbnRJZD8pIHtcclxuXHRcdF8uZWFjaChub2Rlcywgbm9kZSA9PiB7XHJcblx0XHRcdGlmIChub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmdldEFsbExpYnJhcnlCb29rRmFzY2ljbGVJZHMobm9kZS5jaGlsZHJlbiwgbGlicmFyeUJvb2tGYXNjaWNsZUlkcywgbm9kZS5MaWJyYXJ5Qm9va0lkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFub2RlLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRsaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzLnB1c2goe1xyXG5cdFx0XHRcdFx0TGlicmFyeUJvb2tJZDogbm9kZS5MaWJyYXJ5Qm9va0lkID8gbm9kZS5MaWJyYXJ5Qm9va0lkIDogcGFyZW50SWQsXHJcblx0XHRcdFx0XHRMaWJyYXJ5RmFzY2ljbGVJZDogbm9kZS5MaWJyYXJ5RmFzY2ljbGVJZCA/IG5vZGUuTGlicmFyeUZhc2NpY2xlSWQgOiBudWxsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2VsZWN0ZWRJbmRleENoYW5nZWQoZSkge1xyXG5cdH1cclxuXHJcblx0b25UYXBZZWFyQnV0dG9uKCkge1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdHRpdGxlOiBcIkJpcmltIEZpeWF0IFnEsWzEsVwiLFxyXG5cdFx0XHRtZXNzYWdlOiBcIkzDvHRmZW4gYmlyaW0gZml5YXQgecSxbMSxIHNlw6dpbml6XCIsXHJcblx0XHRcdGNhbmNlbEJ1dHRvblRleHQ6IFwiVmF6Z2XDp1wiLFxyXG5cdFx0XHRhY3Rpb25zOiB0aGlzLnVuaXRQcmljZVllYXJzXHJcblx0XHR9O1xyXG5cclxuXHRcdGRpYWxvZ3MuYWN0aW9uKG9wdGlvbnMpLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxmZFNlcnZpY2UubGlicmFyeUZvcm1EYXRhLnNlbGVjdGVkWWVhciA9IGlzTmFOKHBhcnNlSW50KHJlc3VsdCkpID8gdGhpcy5sZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YS5zZWxlY3RlZFllYXIgOiByZXN1bHQudG9TdHJpbmcoKTtcclxuXHRcdFx0dGhpcy5saWJyYXJ5Q29tcG9uZW50LnNlbGVjdGVkVGFiSW5kZXggPSAxO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0b25UcmVlTG9hZGVkKGV2dCkge1xyXG5cdFx0bGV0IHRyZWUgPSAodGhpcy50cmVlIGFzIGFueSk7XHJcblx0XHRsZXQgbG9jYWxMZmQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlicmFyeUZvcm1EYXRhXCIpKVxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGlmIChsb2NhbExmZC5saWJyYXJ5Qm9va0Zhc2NpY2xlSWRzLmxlbmd0aCkge1xyXG5cdFx0XHRcdHJldHVybiB0cmVlLnNlbGVjdEZyb21MaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKGxvY2FsTGZkLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRyZWUuc2VsZWN0Rmlyc3RTbWFsbGVzdENoaWxkKCk7XHJcblx0XHR9LCAwKVxyXG5cdH1cclxuXHJcblx0cHJlcGFyZVVuaXRQcmljZXMoZGF0YSkge1xyXG5cdFx0Xy5lYWNoKGRhdGEsIGl0ZW0gPT4ge1xyXG5cdFx0XHRfLmVhY2goaXRlbS5MaWJyYXJ5V29ya0l0ZW1QcmljZXMsIHByaWNlID0+IHtcclxuXHRcdFx0XHRpZiAoIWl0ZW1bXCJfbGlicmFyeVdvcmtJdGVtVW5pdFByaWNlc1wiXSkge1xyXG5cdFx0XHRcdFx0aXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdID0ge31cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGl0ZW1bXCJfbGlicmFyeVdvcmtJdGVtVW5pdFByaWNlc1wiXVtwcmljZS5ZZWFyXSA9IHByaWNlLlVuaXRQcmljZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRWaWV3RGF0YSgpIHtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdHRoaXMuX3Byb3BlcnRpZXMgPSB7XHJcblx0XHRcdGlkOiBcIkxpYnJhcnlGYXNjaWNsZUlkXCIsXHJcblx0XHRcdG5hbWU6IFwiTmFtZVwiLFxyXG5cdFx0XHRjaGlsZHJlbjogXCJMaWJyYXJ5RmFzY2ljbGVzXCIsXHJcblx0XHRcdGNoZWNrYm94OiB0cnVlXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMubG9hZGVyLnNob3codGhpcy5sb2FkZXJvcHRpb25zKTtcclxuXHRcdHRoaXMubHdpU2VydmljZS5ib29rc0FuZEZhc2NpY2xlcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHNlbGYuX2RhdGEgPSBkYXRhO1xyXG5cdFx0XHQodGhpcy50cmVlIGFzIGFueSkucHJlcGFyZURhdGEoc2VsZi5fZGF0YSk7XHJcblx0XHRcdHRoaXMub25UcmVlTG9hZGVkKFwibWFudWVsXCIpO1xyXG5cdFx0XHR0aGlzLmxvYWRlci5oaWRlKCk7XHJcblx0XHR9LCBlcnJvciA9PiB7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5sd2lTZXJ2aWNlLnByaWNlWWVhcnMuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRfLmVhY2goXy5jbG9uZShkYXRhKSwgaXRlbSA9PiB7XHJcblx0XHRcdFx0c2VsZi51bml0UHJpY2VZZWFycy5wdXNoKChkYXRhIGFzIGFueSkucG9wKCkudG9TdHJpbmcoKSk7XHJcblx0XHRcdH0pXHJcblx0XHR9LCBlcnJvciA9PiB7XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVMb2FkZXIoKSB7XHJcblx0XHR0aGlzLmxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcblxyXG5cdFx0dGhpcy5sb2FkZXJvcHRpb25zID0ge1xyXG5cdFx0XHRtZXNzYWdlOiAnWcO8a2xlbml5b3IuLi4nLFxyXG5cdFx0XHRwcm9ncmVzczogMC42NVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5jcmVhdGVMb2FkZXIoKTtcclxuXHRcdHRoaXMuZ2V0Vmlld0RhdGEoKTtcclxuXHR9XHJcbn1cclxuIl19