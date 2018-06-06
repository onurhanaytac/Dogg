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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBd0g7QUFDeEgsZ0NBQStCO0FBQy9CLGtDQUFpQztBQUdqQyw4REFBNEY7QUFHNUYsMENBQTBEO0FBQzFELDBCQUE0QjtBQUM1QixvQ0FBa0M7QUFNbEM7SUFNRSxzQkFBb0IsbUJBQXNDLEVBQVUsSUFBVSxFQUFVLE1BQWM7UUFBdEcsaUJBZ0JDO1FBaEJtQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKOUYsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0Qix1QkFBa0IsR0FBVyxvQkFBb0IsQ0FBQztRQUNsRCwwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFHNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksd0JBQWUsRUFBaEMsQ0FBZ0MsQ0FBQzthQUM5RCxTQUFTLENBQUMsVUFBQyxLQUFzQjtZQUNoQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFaEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDNUIsQ0FBQztZQUNELEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBRW5CLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFNRCxzQ0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCwrQkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUVNLGlDQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sdUNBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sMENBQW1CLEdBQTNCLFVBQTRCLENBQWtCO1FBQzVDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksY0FBc0IsQ0FBQztRQUUzQixjQUFjLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDcEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLHFCQUFxQixHQUFHLEtBQUssQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVNLHFDQUFjLEdBQXJCLFVBQXNCLEdBQVc7UUFDL0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBRWxCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUMzQixDQUFDO1FBRUQsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLElBQUk7WUFDVixHQUFHLEVBQUUsR0FBRztTQUNULENBQUE7SUFDSCxDQUFDO0lBdERvQjtRQUFwQixtQkFBWSxDQUFDLGFBQUssQ0FBQztrQ0FBUyxnQkFBUztnREFBUTtJQUNYO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjt5REFBQztJQXpCdkUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO3lDQU95Qyx3QkFBaUIsRUFBZ0IsV0FBSSxFQUFrQixlQUFNO09BTjNGLFlBQVksQ0ErRXhCO0lBQUQsbUJBQUM7Q0FBQSxBQS9FRCxJQStFQztBQS9FWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYWluXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gIHByaXZhdGUgX21haW5Db250ZW50VGV4dDogc3RyaW5nO1xuICBwcml2YXRlIGxvZ0luOiBib29sZWFuID0gdHJ1ZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZE1lbnVJdGVtSWQ6IHN0cmluZyA9IFwiY29udHJhY3R1YWxBbW91bnRzXCI7XG4gIHByaXZhdGUgZXhwYW5kV29ya2ZpbGVTdWJNZW51OiBib29sZWFuID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cbiAgICByb3V0ZXIuZXZlbnRzLmZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydClcbiAgICAuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvblN0YXJ0KSA9PiB7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkTWVudUl0ZW0oZXZlbnQpO1xuXG4gICAgICBpZiAoZXZlbnQudXJsID09PSBcIi9cIiB8fCBldmVudC51cmwgPT09IFwiL2xvZ2luXCIpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmxvZ0luID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9nSW4gPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuZHJhd2VyKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBAVmlld0NoaWxkcmVuKExhYmVsKSBsYWJlbHM6IFF1ZXJ5TGlzdDxMYWJlbD47XG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmRyYXdlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgb3BlbkRyYXdlcigpIHtcbiAgICB0aGlzLmRyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cblxuICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTZWxlY3RlZE1lbnVJdGVtKGU6IE5hdmlnYXRpb25TdGFydCkge1xuICAgIGxldCBwYXJzZWRVcmwgPSB0aGlzLnBhcnNlUm91dGVyVXJsKGUudXJsKTtcbiAgICBsZXQgc2lkZU1lbnVJdGVtSWQ6IHN0cmluZztcblxuICAgIHNpZGVNZW51SXRlbUlkID0gXy5jYW1lbENhc2UocGFyc2VkVXJsLm1haW4pO1xuICAgIGlmIChwYXJzZWRVcmwuc3ViICYmIHBhcnNlZFVybC5zdWIgIT09IFwiXCIpIHtcbiAgICAgIHNpZGVNZW51SXRlbUlkID0gXy5jYW1lbENhc2UocGFyc2VkVXJsLnN1Yik7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3RlZE1lbnVJdGVtSWQgPSBzaWRlTWVudUl0ZW1JZDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE1lbnVJdGVtSWQgPT09IFwid29ya2ZpbGVcIikge1xuICAgICAgdGhpcy5leHBhbmRXb3JrZmlsZVN1Yk1lbnUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV4cGFuZFdvcmtmaWxlU3ViTWVudSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwYXJzZVJvdXRlclVybCh1cmw6IHN0cmluZykge1xuICAgIGxldCBpdGVtID0gdXJsLnNwbGl0KFwiL1wiKTtcbiAgICBsZXQgbWFpbiA9IGl0ZW1bMV07XG4gICAgbGV0IHN1YjogYW55ID0gXCJcIjtcblxuICAgIGlmIChpdGVtW2l0ZW0ubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHN1YiA9IGl0ZW1baXRlbS5sZW5ndGggLSAxXS5yZXBsYWNlKC9cXCgvZywgXCJcIikucmVwbGFjZSgvXFwpL2csIFwiXCIpO1xuICAgICAgc3ViID0gc3ViLnNwbGl0KFwiOlwiKTtcbiAgICAgIHN1YiA9IHN1YltzdWIubGVuZ3RoIC0gMV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWFpbjogbWFpbixcbiAgICAgIHN1Yjogc3ViXG4gICAgfVxuICB9XG59XG4iXX0=