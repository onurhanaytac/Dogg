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
        this._libraryFormData = lfdService.libraryFormData;
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
    LibraryComponent.prototype.getAllLibraryBookFascicleIds = function (nodes, checkedNodes, parentId) {
        var _this = this;
        lodash_1._.each(nodes, function (node) {
            if (node.children.length) {
                return _this.getAllLibraryBookFascicleIds(node.children, checkedNodes, node.LibraryBookId);
            }
            checkedNodes.push({
                LibraryBookId: node.LibraryBookId ? node.LibraryBookId : parentId,
                LibraryFascicleId: node.LibraryFascicleId ? node.LibraryFascicleId : null
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlicmFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWJyYXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF1RTtBQUN2RSxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLG1EQUEyRDtBQUUzRCw0RkFBd0Y7QUFDeEYsMEZBQXNGO0FBQ3RGLCtEQUE2RDtBQUU3RCxpQ0FBMkI7QUFDM0Isd0VBQXVFO0FBR3ZFLElBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7QUFVcEY7SUFDQywwQkFBbUIsSUFBVSxFQUFVLE9BQWUsRUFBVSxLQUFZLEVBQVMsVUFBa0MsRUFBUyxVQUFrQztRQUEvSSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU87UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUFTLGVBQVUsR0FBVixVQUFVLENBQXdCO1FBTzNKLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQU4zQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztJQUNwRCxDQUFDO0lBU0QseUNBQWMsR0FBZCxVQUFlLENBQUM7UUFDZixJQUFNLFdBQVcsR0FBRztZQUNuQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxRQUFRO1lBQ2IsR0FBRyxFQUFFLFNBQVM7U0FDZCxDQUFBO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLFVBQVUsR0FBRyxFQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUMsQ0FBQztZQUMvQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMs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LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRnJhbWUsIHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBMaWJyYXJ5Rm9ybURhdGEgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS1mb3JtLWRhdGFcIjtcclxuaW1wb3J0IHsgTGlicmFyeUZvcm1EYXRhU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbGlicmFyeS9saWJyYXJ5LWZvcm0tZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExpYnJhcnlXb3JrSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2xpYnJhcnkvbGlicmFyeS13b3JraXRlbS5zZXJ2aWNlXCJcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gXCIuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IF8gfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7IERpc21pc3NTb2Z0S2V5YmFvcmQgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0Rpc21pc3NTb2Z0S2V5YmFvcmRcIjtcclxuaW1wb3J0IHsgT3NrYVRyZWVEYXRhU291cmNlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC1jb21wb25lbnRzL29za2EtdHJlZS9vc2thLXRyZWUtZGF0YXNvdXJjZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCIpLkxvYWRpbmdJbmRpY2F0b3I7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaWJyYXJ5XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9saWJyYXJ5L2xpYnJhcnkuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogWyBcIi4vcGFnZXMvbGlicmFyeS9saWJyYXJ5LmNzc1wiIF0sXHJcbiAgcHJvdmlkZXJzOiBbIExpYnJhcnlGb3JtRGF0YVNlcnZpY2UsIExpYnJhcnlXb3JrSXRlbVNlcnZpY2UsIFVzZXJTZXJ2aWNlIF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTGlicmFyeUNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBhZ2U6IFBhZ2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIGZyYW1lOiBGcmFtZSwgcHVibGljIGxmZFNlcnZpY2U6IExpYnJhcnlGb3JtRGF0YVNlcnZpY2UsIHB1YmxpYyBsd2lTZXJ2aWNlOiBMaWJyYXJ5V29ya0l0ZW1TZXJ2aWNlKSB7XHJcblx0XHR0aGlzLl9mcmFtZSA9IGZyYW1lO1xyXG5cdFx0dGhpcy5fbGlicmFyeUZvcm1EYXRhID0gbGZkU2VydmljZS5saWJyYXJ5Rm9ybURhdGE7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9mcmFtZTogRnJhbWU7XHJcblx0cHJpdmF0ZSBfbGlicmFyeUZvcm1EYXRhOiBMaWJyYXJ5Rm9ybURhdGE7XHJcblx0cHVibGljIHNlbGVjdGVkVGFiSW5kZXggPSAwO1xyXG5cdHByaXZhdGUgbG9hZGVyO1xyXG5cdHByaXZhdGUgbG9hZGVyb3B0aW9ucztcclxuXHJcblxyXG5cdG9uSW5kZXhDaGFuZ2VkKGUpIHtcclxuXHRcdGNvbnN0IHZpZXdNYXBwaW5nID0ge1xyXG5cdFx0XHRcIjBcIjogXCJzZWFyY2gtZmlsdGVyc1wiLFxyXG5cdFx0XHRcIjFcIjogXCJzZWFyY2hcIixcclxuXHRcdFx0XCIyXCI6IFwiYWNjb3VudFwiXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGUudmFsdWUgIT09IGUub2xkVmFsdWUpIHtcclxuXHRcdFx0bGV0IHByb3BlcnRpZXMgPSB7b3V0bGV0czoge319O1xyXG5cdFx0XHRwcm9wZXJ0aWVzW1wib3V0bGV0c1wiXVt2aWV3TWFwcGluZ1tlLnZhbHVlXSArIFwiLW91dGxldFwiXSA9IFtdO1xyXG5cdFx0XHRwcm9wZXJ0aWVzW1wib3V0bGV0c1wiXVt2aWV3TWFwcGluZ1tlLnZhbHVlXSArIFwiLW91dGxldFwiXS5wdXNoKHZpZXdNYXBwaW5nW2UudmFsdWVdKTtcclxuXHJcblx0XHRcdHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9saWJyYXJ5JywgcHJvcGVydGllcyBdKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ1NlYXJjaFZpZXcnKSBzZWFyY2hWaWV3OiBFbGVtZW50UmVmO1xyXG5cclxuXHRwdWJsaWMgZW5naW5TdGFydChlKSB7XHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5zZWxlY3RlZFRhYkluZGV4ID0gMTtcclxuXHJcbiAgICB0aGlzLmxmZFNlcnZpY2UubGlicmFyeUZvcm1EYXRhLnBhZ2UgPSAxO1xyXG5cclxuICAgIERpc21pc3NTb2Z0S2V5YmFvcmQuZGlzbWlzcygpO1xyXG5cclxuICAgIHRoaXMubG9hZGVyLnNob3codGhpcy5sb2FkZXJvcHRpb25zKTtcclxuXHJcblx0XHR0aGlzLmx3aVNlcnZpY2UubGlicmFyeVdvcmtJdGVtcy5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdHNlbGYubHdpU2VydmljZS5fbGlicmFyeVdvcmtJdGVtcyA9IHNlbGYucHJlcGFyZVVuaXRQcmljZXMoZGF0YSlcclxuXHRcdFx0dGhpcy5sb2FkZXIuaGlkZSgpO1xyXG5cdFx0fSwgZXJyID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkZXIuaGlkZSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0cHJlcGFyZVVuaXRQcmljZXMoZGF0YSkge1xyXG5cdFx0Xy5lYWNoKGRhdGEsIGl0ZW0gPT4ge1xyXG5cdFx0XHRfLmVhY2goaXRlbS5MaWJyYXJ5V29ya0l0ZW1QcmljZXMsIHByaWNlID0+IHtcclxuXHRcdFx0XHRpZiAoIWl0ZW1bXCJfbGlicmFyeVdvcmtJdGVtVW5pdFByaWNlc1wiXSkge1xyXG5cdFx0XHRcdFx0aXRlbVtcIl9saWJyYXJ5V29ya0l0ZW1Vbml0UHJpY2VzXCJdID0ge31cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGl0ZW1bXCJfbGlicmFyeVdvcmtJdGVtVW5pdFByaWNlc1wiXVtwcmljZS5ZZWFyXSA9IHByaWNlLlVuaXRQcmljZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gZGF0YVxyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEFsbExpYnJhcnlCb29rRmFzY2ljbGVJZHMobm9kZXMsIGNoZWNrZWROb2RlcywgcGFyZW50SWQ/KSB7XHJcblx0XHRfLmVhY2gobm9kZXMsIG5vZGUgPT4ge1xyXG5cdFx0XHRpZiAobm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5nZXRBbGxMaWJyYXJ5Qm9va0Zhc2NpY2xlSWRzKG5vZGUuY2hpbGRyZW4sIGNoZWNrZWROb2Rlcywgbm9kZS5MaWJyYXJ5Qm9va0lkKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Y2hlY2tlZE5vZGVzLnB1c2goe1xyXG5cdFx0XHRcdExpYnJhcnlCb29rSWQ6IG5vZGUuTGlicmFyeUJvb2tJZCA/IG5vZGUuTGlicmFyeUJvb2tJZCA6IHBhcmVudElkLFxyXG5cdFx0XHRcdExpYnJhcnlGYXNjaWNsZUlkOiBub2RlLkxpYnJhcnlGYXNjaWNsZUlkID8gbm9kZS5MaWJyYXJ5RmFzY2ljbGVJZCA6IG51bGxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVMb2FkZXIoKSB7XHJcblx0XHR0aGlzLmxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcblxyXG5cdFx0Ly8gb3B0aW9uYWwgb3B0aW9uc1xyXG5cdFx0Ly8gYW5kcm9pZCBhbmQgaW9zIGhhdmUgc29tZSBwbGF0Zm9ybSBzcGVjaWZpYyBvcHRpb25zXHJcblx0XHR0aGlzLmxvYWRlcm9wdGlvbnMgPSB7XHJcblx0XHQgIG1lc3NhZ2U6ICdZw7xrbGVuaXlvci4uLicsXHJcblx0XHQgIHByb2dyZXNzOiAwLjY1LFxyXG5cdFx0ICBhbmRyb2lkOiB7XHJcblx0XHQgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcclxuXHRcdCAgICBjYW5jZWxhYmxlOiB0cnVlLFxyXG5cdFx0ICAgIGNhbmNlbExpc3RlbmVyOiBmdW5jdGlvbihkaWFsb2cpIHsgY29uc29sZS5sb2coXCJMb2FkaW5nIGNhbmNlbGxlZFwiKSB9LFxyXG5cdFx0ICAgIG1heDogMTAwLFxyXG5cdFx0ICAgIHByb2dyZXNzTnVtYmVyRm9ybWF0OiBcIiUxZC8lMmRcIixcclxuXHRcdCAgICBwcm9ncmVzc1BlcmNlbnRGb3JtYXQ6IDAuNTMsXHJcblx0XHQgICAgcHJvZ3Jlc3NTdHlsZTogMSxcclxuXHRcdCAgICBzZWNvbmRhcnlQcm9ncmVzczogMVxyXG5cdFx0ICB9LFxyXG5cdFx0ICBpb3M6IHtcclxuXHRcdCAgICBkZXRhaWxzOiBcIkzDvHRmZW4gYmVrbGV5aW5pei5cIixcclxuXHRcdCAgICBtYXJnaW46IDEwLFxyXG5cdFx0ICAgIGRpbUJhY2tncm91bmQ6IHRydWUsXHJcblx0XHQgICAgLy8gY29sb3I6IFwiIzRCOUVENlwiLCAvLyBjb2xvciBvZiBpbmRpY2F0b3IgYW5kIGxhYmVsc1xyXG5cdFx0ICAgIC8vIGJhY2tncm91bmQgYm94IGFyb3VuZCBpbmRpY2F0b3JcclxuXHRcdCAgICAvLyBoaWRlQmV6ZWwgd2lsbCBvdmVycmlkZSB0aGlzIGlmIHRydWVcclxuXHRcdCAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXHJcblx0XHQgICAgLy8gdXNlckludGVyYWN0aW9uRW5hYmxlZDogZmFsc2UsIC8vIGRlZmF1bHQgdHJ1ZS4gU2V0IGZhbHNlIHNvIHRoYXQgdGhlIHRvdWNoZXMgd2lsbCBmYWxsIHRocm91Z2ggaXQuXHJcblx0XHQgICAgLy8gaGlkZUJlemVsOiB0cnVlLCAvLyBkZWZhdWx0IGZhbHNlLCBjYW4gaGlkZSB0aGUgc3Vycm91bmRpbmcgYmV6ZWxcclxuXHRcdCAgICAvLyB2aWV3OiAsIC8vIFRhcmdldCB2aWV3IHRvIHNob3cgb24gdG9wIG9mIChEZWZhdWx0cyB0byBlbnRpcmUgd2luZG93KVxyXG5cdFx0ICAgIC8vIG1vZGU6IC8vIHNlZSBpT1Mgc3BlY2lmaWMgb3B0aW9ucyBiZWxvd1xyXG5cdFx0ICB9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmNyZWF0ZUxvYWRlcigpO1xyXG5cdH1cclxufVxyXG4iXX0=