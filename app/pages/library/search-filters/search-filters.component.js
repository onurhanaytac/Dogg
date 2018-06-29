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
        var checkedItems = this.tree.dataSource.data;
        this.lfdService.libraryFormData.libraryBookFascicleIds = [];
        this.getLibraryBookFascicleIds(checkedItems, this.lfdService.libraryFormData.libraryBookFascicleIds);
        if (!this.lfdService.libraryFormData.libraryBookFascicleIds.length) {
            this.getAllLibraryBookFascicleIds(checkedItems, this.lfdService.libraryFormData.libraryBookFascicleIds);
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
            debugger;
        }, function (error) {
        });
        this.lwiService.priceYears.subscribe(function (data) {
            lodash_1._.each(lodash_1._.clone(data), function (item) {
                self.unitPriceYears.push(data.pop().toString());
            });
            debugger;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VhcmNoLWZpbHRlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVFO0FBQ3ZFLGdDQUErQjtBQUUvQixpQ0FBMkI7QUFHM0IsK0ZBQTJGO0FBQzNGLG9DQUFzQztBQUN0QywwREFBd0Q7QUFDeEQsbURBQTJEO0FBQzNELDZGQUEwRjtBQUUxRixJQUFNLFlBQVksR0FBRyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQUM1RCxJQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0FBU3BGO0lBUUMsZ0NBQTJCLGdCQUFrQyxFQUFVLElBQVUsRUFBUyxVQUFrQyxFQUFTLE1BQWEsRUFBUyxVQUFrQztRQUFsSyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFTLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBSnRMLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBSy9CLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDbkUsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDakQsVUFBVSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7UUFDdkMsQ0FBQztJQUNGLENBQUM7SUFJRCxvREFBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNwQixJQUFJLFlBQVksR0FBSSxJQUFJLENBQUMsSUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENB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Q0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELDZDQUFZLEdBQVo7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVyQyxJQUFJLENBQUMsYUFBYSxHQUFHO1lBQ25CLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCxnREFBZSxHQUFmO0lBQ0EsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFwSWtDO1FBQWxDLGdCQUFTLENBQUMsc0JBQXNCLENBQUM7a0NBQU8saUJBQVU7d0RBQUM7SUFmeEMsc0JBQXNCO1FBUGxDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxvREFBb0Q7WUFDakUsU0FBUyxFQUFFLENBQUUsbURBQW1ELENBQUU7U0FDbEUsQ0FBQztRQVdZLFdBQUEsV0FBSSxFQUFFLENBQUE7eUNBQTBCLG9DQUFnQixFQUFnQixXQUFJLEVBQXFCLGtEQUFzQixFQUFpQixhQUFLLEVBQXFCLGlEQUFzQjtPQVJqTCxzQkFBc0IsQ0FvSmxDO0lBQUQsNkJBQUM7Q0FBQSxBQXBKRCxJQW9KQztBQXBKWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSG9zdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9kYXRhXCI7XHJcbmltcG9ydCB7IF8gfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGEgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGFcIjtcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTGlicmFyeUNvbXBvbmVudCB9IGZyb20gXCIuLi9saWJyYXJ5LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGcmFtZSwgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCB7IExpYnJhcnlXb3JrSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS13b3JraXRlbS5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBsb2NhbFN0b3JhZ2UgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIiApO1xyXG5jb25zdCBMb2FkaW5nSW5kaWNhdG9yID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiKS5Mb2FkaW5nSW5kaWNhdG9yO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6IFwic2VhcmNoLWZpbHRlcnNcIixcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xpYnJhcnkvc2VhcmNoLWZpbHRlcnMvc2VhcmNoLWZpbHRlcnMuaHRtbFwiLFxyXG5cdHN0eWxlVXJsczogWyBcIi4vcGFnZXMvbGlicmFyeS9zZWFyY2gtZmlsdGVycy9zZWFyY2gtZmlsdGVycy5jc3NcIiBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlcnNDb21wb25lbnQge1xyXG5cdHB1YmxpYyBfZGF0YTogYW55O1xyXG5cdHB1YmxpYyBfcHJvcGVydGllczogYW55O1xyXG5cdHB1YmxpYyBfZnJvbUNoaWxkOiBhbnk7XHJcblx0cHVibGljIHVuaXRQcmljZVllYXJzOiBhbnkgPSBbXTtcclxuXHRwcml2YXRlIGxvYWRlcjtcclxuXHRwcml2YXRlIGxvYWRlcm9wdGlvbnM7XHJcblxyXG5cdGNvbnN0cnVjdG9yKEBIb3N0KCkgcHVibGljIGxpYnJhcnlDb21wb25lbnQ6IExpYnJhcnlDb21wb25lbnQgLHByaXZhdGUgcGFnZTogUGFnZSwgcHVibGljIGxmZFNlcnZpY2U6IExpYnJhcnlGb3JtRGF0YVNlcnZpY2UsIHB1YmxpYyBfZnJhbWU6IEZyYW1lLCBwdWJsaWMgbHdpU2VydmljZTogTGlicmFyeVdvcmtJdGVtU2VydmljZSkge1xyXG5cdFx0bGV0IGxvY2FsTGZkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpYnJhcnlGb3JtRGF0YVwiKSk7XHJcblx0XHRpZiAobG9jYWxMZmQgJiYgbG9jYWxMZmQubGlicmFyeUJvb2tGYXNjaWNsZUlkcykge1xyXG5cdFx0XHRsZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YSA9IGxvY2FsTGZkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0QFZpZXdDaGlsZCgnTGlicmFyeVdvcmtJdGVtQm9va3MnKSB0cmVlOiBFbGVtZW50UmVmO1xyXG5cclxuXHRvblRyZWVDaGVja2VkQ2hhbmdlKGUpIHtcclxuXHRcdGxldCBjaGVja2VkSXRlbXMgPSAodGhpcy50cmVlIGFzIGFueSkuZGF0YVNvdXJjZS5kYXRhO1xyXG5cdFx0dGhpcy5sZmRTZXJ2aWNlLmxpYnJhcnlGb3JtRGF0YS5saWJyYXJ5Qm9va0Zhc2NpY2xlSWRzID0gW107XHJcblx0XHR0aGlzLmdldExpYnJhcnlCb29rRmFzY2ljbGVJZHMoY2hlY2tlZEl0ZW1zLCB0aGlzLmxmZFNlcnZpY2UubGlicmFyeUZvcm1EYXRhLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMpO1xyXG5cdFx0aWYgKCF0aGlzLmxmZFNlcnZpY2UubGlicmFyeUZvcm1EYXRhLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMubGVuZ3RoKSB7XHJcblx0XHRcdHRoaXMuZ2V0QWxsTGlicmFyeUJvb2tGYXNjaWNsZUlkcyhjaGVja2VkSXRlbXMsIHRoaXMubGZkU2VydmljZS5saWJyYXJ5Rm9ybURhdGEubGlicmFyeUJvb2tGYXNjaWNsZUlkcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRBbGxMaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKG5vZGVzLCBjaGVja2VkTm9kZXMsIHBhcmVudElkPykge1xyXG5cdFx0Xy5lYWNoKG5vZGVzLCBub2RlID0+IHtcclxuXHRcdFx0aWYgKG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0TGlicmFyeUJvb2tGYXNjaWNsZUlkcyhub2RlLmNoaWxkcmVuLCBjaGVja2VkTm9kZXMsIG5vZGUuTGlicmFyeUJvb2tJZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChub2RlLmNoZWNrZWQpIHtcclxuXHRcdFx0XHRjaGVja2VkTm9kZXMucHVzaCh7XHJcblx0XHRcdFx0XHRMaWJyYXJ5Qm9va0lkOiBub2RlLkxpYnJhcnlCb29rSWQgPyBub2RlLkxpYnJhcnlCb29rSWQgOiBwYXJlbnRJZCxcclxuXHRcdFx0XHRcdExpYnJhcnlGYXNjaWNsZUlkOiBub2RlLkxpYnJhcnlGYXNjaWNsZUlkID8gbm9kZS5MaWJyYXJ5RmFzY2ljbGVJZCA6IG51bGxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldExpYnJhcnlCb29rRmFzY2ljbGVJZHMobm9kZXMsIGNoZWNrZWROb2RlcywgcGFyZW50SWQ/KSB7XHJcblx0XHRfLmVhY2gobm9kZXMsIG5vZGUgPT4ge1xyXG5cdFx0XHRpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRMaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKG5vZGUuY2hpbGRyZW4sIGNoZWNrZWROb2Rlcywgbm9kZS5MaWJyYXJ5Qm9va0lkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG5vZGUuY2hlY2tlZCkge1xyXG5cdFx0XHRcdGNoZWNrZWROb2Rlcy5wdXNoKHtcclxuXHRcdFx0XHRcdExpYnJhcnlCb29rSWQ6IG5vZGUuTGlicmFyeUJvb2tJZCA/IG5vZGUuTGlicmFyeUJvb2tJZCA6IHBhcmVudElkLFxyXG5cdFx0XHRcdFx0TGlicmFyeUZhc2NpY2xlSWQ6IG5vZGUuTGlicmFyeUZhc2NpY2xlSWQgPyBub2RlLkxpYnJhcnlGYXNjaWNsZUlkIDogbnVsbFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZWxlY3RlZEluZGV4Q2hhbmdlZChlKSB7XHJcblx0fVxyXG5cclxuXHRvblRhcFllYXJCdXR0b24oKSB7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblx0XHRsZXQgb3B0aW9ucyA9IHtcclxuXHRcdFx0dGl0bGU6IFwiQmlyaW0gRml5YXQgWcSxbMSxXCIsXHJcblx0XHRcdG1lc3NhZ2U6IFwiTMO8dGZlbiBiaXJpbSBmaXlhdCB5xLFsxLEgc2XDp2luaXpcIixcclxuXHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJWYXpnZcOnXCIsXHJcblx0XHRcdGFjdGlvbnM6IHRoaXMudW5pdFByaWNlWWVhcnNcclxuXHRcdH07XHJcblxyXG5cdFx0ZGlhbG9ncy5hY3Rpb24ob3B0aW9ucykudGhlbigocmVzdWx0KSA9PiB7XHJcblx0XHRcdHRoaXMubGZkU2VydmljZS5saWJyYXJ5Rm9ybURhdGEuc2VsZWN0ZWRZZWFyID0gaXNOYU4ocGFyc2VJbnQocmVzdWx0KSkgPyB0aGlzLmxmZFNlcnZpY2UubGlicmFyeUZvcm1EYXRhLnNlbGVjdGVkWWVhciA6IHJlc3VsdC50b1N0cmluZygpO1xyXG5cdFx0XHR0aGlzLmxpYnJhcnlDb21wb25lbnQuc2VsZWN0ZWRUYWJJbmRleCA9IDE7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRvblRyZWVMb2FkZWQoZXZ0KSB7XHJcblx0XHRsZXQgdHJlZSA9ICh0aGlzLnRyZWUgYXMgYW55KTtcclxuXHRcdGxldCBsb2NhbExmZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsaWJyYXJ5Rm9ybURhdGFcIikpXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0aWYgKGxvY2FsTGZkLmxpYnJhcnlCb29rRmFzY2ljbGVJZHMubGVuZ3RoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRyZWUuc2VsZWN0RnJvbUxpYnJhcnlCb29rRmFzY2ljbGVJZHMobG9jYWxMZmQubGlicmFyeUJvb2tGYXNjaWNsZUlkcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dHJlZS5zZWxlY3RGaXJzdFNtYWxsZXN0Q2hpbGQoKTtcclxuXHRcdH0sIDApXHJcblx0fVxyXG5cclxuXHRwcmVwYXJlVW5pdFByaWNlcyhkYXRhKSB7XHJcblx0XHRfLmVhY2goZGF0YSwgaXRlbSA9PiB7XHJcblx0XHRcdF8uZWFjaChpdGVtLkxpYnJhcnlXb3JrSXRlbVByaWNlcywgcHJpY2UgPT4ge1xyXG5cdFx0XHRcdGlmICghaXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdKSB7XHJcblx0XHRcdFx0XHRpdGVtW1wiX2xpYnJhcnlXb3JrSXRlbVVuaXRQcmljZXNcIl0gPSB7fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdW3ByaWNlLlllYXJdID0gcHJpY2UuVW5pdFByaWNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBkYXRhXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFZpZXdEYXRhKCkge1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5fcHJvcGVydGllcyA9IHtcclxuXHRcdFx0aWQ6IFwiTGlicmFyeUZhc2NpY2xlSWRcIixcclxuXHRcdFx0bmFtZTogXCJOYW1lXCIsXHJcblx0XHRcdGNoaWxkcmVuOiBcIkxpYnJhcnlGYXNjaWNsZXNcIixcclxuXHRcdFx0Y2hlY2tib3g6IHRydWVcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5sb2FkZXIuc2hvdyh0aGlzLmxvYWRlcm9wdGlvbnMpO1xyXG5cdFx0dGhpcy5sd2lTZXJ2aWNlLmJvb2tzQW5kRmFzY2ljbGVzLnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0c2VsZi5fZGF0YSA9IGRhdGE7XHJcblx0XHRcdCh0aGlzLnRyZWUgYXMgYW55KS5wcmVwYXJlRGF0YShzZWxmLl9kYXRhKTtcclxuXHRcdFx0dGhpcy5vblRyZWVMb2FkZWQoXCJtYW51ZWxcIik7XHJcblx0XHRcdHRoaXMubG9hZGVyLmhpZGUoKTtcclxuXHRcdFx0ZGVidWdnZXJcclxuXHRcdH0sIGVycm9yID0+IHtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmx3aVNlcnZpY2UucHJpY2VZZWFycy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdF8uZWFjaChfLmNsb25lKGRhdGEpLCBpdGVtID0+IHtcclxuXHRcdFx0XHRzZWxmLnVuaXRQcmljZVllYXJzLnB1c2goKGRhdGEgYXMgYW55KS5wb3AoKS50b1N0cmluZygpKTtcclxuXHRcdFx0fSlcclxuXHRcdFx0ZGVidWdnZXJcclxuXHRcdH0sIGVycm9yID0+IHtcclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUxvYWRlcigpIHtcclxuXHRcdHRoaXMubG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuXHJcblx0XHR0aGlzLmxvYWRlcm9wdGlvbnMgPSB7XHJcblx0XHQgIG1lc3NhZ2U6ICdZw7xrbGVuaXlvci4uLicsXHJcblx0XHQgIHByb2dyZXNzOiAwLjY1XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0bmdBZnRlclZpZXdJbml0KCkge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmNyZWF0ZUxvYWRlcigpO1xyXG5cdFx0dGhpcy5nZXRWaWV3RGF0YSgpO1xyXG5cdH1cclxufVxyXG4iXX0=