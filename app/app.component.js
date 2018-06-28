"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var label_1 = require("ui/label");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var router_1 = require("@angular/router");
var _ = require("lodash");
require("rxjs/add/operator/filter");
var AppComponent = /** @class */ (function () {
    function AppComponent(_changeDetectionRef, page, router) {
        var _this = this;
        this._changeDetectionRef = _changeDetectionRef;
        this.page = page;
        this.router = router;
        this.logIn = true;
        this.selectedMenuItemId = "contractualAmounts";
        this.expandWorkfileSubMenu = true;
        page.actionBarHidden = true;
        router.events.filter(function (event) { return event instanceof router_1.NavigationStart; })
            .subscribe(function (event) {
            _this.setSelectedMenuItem(event);
            if (event.url === "/" || event.url === "/login") {
                return _this.logIn = true;
            }
            _this.logIn = false;
            if (_this.drawer) {
                _this.drawer.closeDrawer();
            }
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        if (this.drawerComponent) {
            this.drawer = this.drawerComponent.sideDrawer;
        }
        this._changeDetectionRef.detectChanges();
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    AppComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    AppComponent.prototype.setSelectedMenuItem = function (e) {
        var parsedUrl = this.parseRouterUrl(e.url);
        var sideMenuItemId;
        sideMenuItemId = _.camelCase(parsedUrl.main);
        if (parsedUrl.sub && parsedUrl.sub !== "") {
            sideMenuItemId = _.camelCase(parsedUrl.sub);
        }
        this.selectedMenuItemId = sideMenuItemId;
        if (this.selectedMenuItemId === "workfile") {
            this.expandWorkfileSubMenu = true;
        }
        else {
            this.expandWorkfileSubMenu = false;
        }
    };
    AppComponent.prototype.parseRouterUrl = function (url) {
        var item = url.split("/");
        var main = item[1];
        var sub = "";
        if (item[item.length - 1]) {
            sub = item[item.length - 1].replace(/\(/g, "").replace(/\)/g, "");
            sub = sub.split(":");
            sub = sub[sub.length - 1];
        }
        return {
            main: main,
            sub: sub
        };
    };
    __decorate([
        core_1.ViewChildren(label_1.Label),
        __metadata("design:type", core_1.QueryList)
    ], AppComponent.prototype, "labels", void 0);
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            templateUrl: "./app.component.html",
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, page_1.Page, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0g7QUFDeEgsZ0NBQStCO0FBQy9CLGtDQUFpQztBQUdqQyw4REFBNEY7QUFHNUYsMENBQTBEO0FBQzFELDBCQUE0QjtBQUM1QixvQ0FBa0M7QUFNbEM7SUFNRSxzQkFBb0IsbUJBQXNDLEVBQVUsSUFBVSxFQUFVLE1BQWM7UUFBdEcsaUJBZ0JDO1FBaEJtQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKOUYsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0Qix1QkFBa0IsR0FBVyxvQkFBb0IsQ0FBQztRQUNsRCwwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFHNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksd0JBQWUsRUFBaEMsQ0FBZ0MsQ0FBQzthQUM5RCxTQUFTLENBQUMsVUFBQyxLQUFzQjtZQUNoQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDNUIsQ0FBQztZQUNELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRW5CLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lB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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcclxuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInVpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1haW5cIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcclxuICBwcml2YXRlIF9tYWluQ29udGVudFRleHQ6IHN0cmluZztcclxuICBwcml2YXRlIGxvZ0luOiBib29sZWFuID0gdHJ1ZTtcclxuICBwcml2YXRlIHNlbGVjdGVkTWVudUl0ZW1JZDogc3RyaW5nID0gXCJjb250cmFjdHVhbEFtb3VudHNcIjtcclxuICBwcml2YXRlIGV4cGFuZFdvcmtmaWxlU3ViTWVudTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG5cclxuICAgIHJvdXRlci5ldmVudHMuZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KVxyXG4gICAgLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25TdGFydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFNlbGVjdGVkTWVudUl0ZW0oZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKGV2ZW50LnVybCA9PT0gXCIvXCIgfHwgZXZlbnQudXJsID09PSBcIi9sb2dpblwiKSB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLmxvZ0luID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvZ0luID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5kcmF3ZXIpIHtcclxuICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGRyZW4oTGFiZWwpIGxhYmVsczogUXVlcnlMaXN0PExhYmVsPjtcclxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLmRyYXdlckNvbXBvbmVudCkge1xyXG4gICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcclxuICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsb3NlRHJhd2VyVGFwKCkge1xyXG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U2VsZWN0ZWRNZW51SXRlbShlOiBOYXZpZ2F0aW9uU3RhcnQpIHtcclxuICAgIGxldCBwYXJzZWRVcmwgPSB0aGlzLnBhcnNlUm91dGVyVXJsKGUudXJsKTtcclxuICAgIGxldCBzaWRlTWVudUl0ZW1JZDogc3RyaW5nO1xyXG5cclxuICAgIHNpZGVNZW51SXRlbUlkID0gXy5jYW1lbENhc2UocGFyc2VkVXJsLm1haW4pO1xyXG4gICAgaWYgKHBhcnNlZFVybC5zdWIgJiYgcGFyc2VkVXJsLnN1YiAhPT0gXCJcIikge1xyXG4gICAgICBzaWRlTWVudUl0ZW1JZCA9IF8uY2FtZWxDYXNlKHBhcnNlZFVybC5zdWIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRNZW51SXRlbUlkID0gc2lkZU1lbnVJdGVtSWQ7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZE1lbnVJdGVtSWQgPT09IFwid29ya2ZpbGVcIikge1xyXG4gICAgICB0aGlzLmV4cGFuZFdvcmtmaWxlU3ViTWVudSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmV4cGFuZFdvcmtmaWxlU3ViTWVudSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhcnNlUm91dGVyVXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICBsZXQgaXRlbSA9IHVybC5zcGxpdChcIi9cIik7XHJcbiAgICBsZXQgbWFpbiA9IGl0ZW1bMV07XHJcbiAgICBsZXQgc3ViOiBhbnkgPSBcIlwiO1xyXG5cclxuICAgIGlmIChpdGVtW2l0ZW0ubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgc3ViID0gaXRlbVtpdGVtLmxlbmd0aCAtIDFdLnJlcGxhY2UoL1xcKC9nLCBcIlwiKS5yZXBsYWNlKC9cXCkvZywgXCJcIik7XHJcbiAgICAgIHN1YiA9IHN1Yi5zcGxpdChcIjpcIik7XHJcbiAgICAgIHN1YiA9IHN1YltzdWIubGVuZ3RoIC0gMV1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtYWluOiBtYWluLFxyXG4gICAgICBzdWI6IHN1YlxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=