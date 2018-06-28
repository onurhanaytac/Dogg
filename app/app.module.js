"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var angular_3 = require("nativescript-ui-chart/angular");
var angular_4 = require("nativescript-checkbox/angular");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("MapView", function () { return require("nativescript-google-maps-sdk").MapView; });
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
element_registry_1.registerElement('CardView', function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("Ripple", function () { return require("nativescript-ripple").Ripple; });
// declare var GMSServices: any;
// if(platform.isIOS) {
//   GMSServices.provideAPIKey("AIzaSyCQzwqgBn5M3XcDYkOpQFobsNCr788N3Js");
// }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUISideDrawerModule,
                angular_3.NativeScriptUIChartModule,
                http_client_1.NativeScriptHttpClientModule,
                angular_4.TNSCheckBoxModule
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(app_routing_1.navigatableComponents),
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRUFBZ0Y7QUFDaEYsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSw0REFBZ0Y7QUFDaEYsOERBQW9GO0FBQ3BGLHlEQUF5RTtBQUV6RSx5REFBa0U7QUFFbEUsaURBQStDO0FBQy9DLDZDQUE4RDtBQUk5RCwwRUFBd0U7QUFDeEUsa0NBQWUsQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLE9BQU8sRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDO0FBQ2xGLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQUMvRSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0FBRXZFLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkIsMEVBQTBFO0FBQzFFLElBQUk7QUFzQko7SUFBQTtJQUF3QixDQUFDO0lBQVosU0FBUztRQW5CckIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7Z0JBQ3hDLHNDQUE0QjtnQkFDNUIsd0NBQThCO2dCQUM5QixtQ0FBeUI7Z0JBQ3pCLDBDQUE0QjtnQkFDNUIsMkJBQWlCO2FBQ2xCO1lBQ0QsWUFBWTtnQkFDViw0QkFBWTtxQkFDVCxtQ0FBcUIsQ0FDekI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiXHJcblxyXG5pbXBvcnQgeyBUTlNDaGVja0JveE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5cclxuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInBsYXRmb3JtXCI7XHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCIpLk1hcFZpZXcpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG5yZWdpc3RlckVsZW1lbnQoJ0NhcmRWaWV3JywgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbnJlZ2lzdGVyRWxlbWVudChcIlJpcHBsZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXJpcHBsZVwiKS5SaXBwbGUpO1xyXG5cclxuLy8gZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcclxuLy8gaWYocGxhdGZvcm0uaXNJT1MpIHtcclxuLy8gICBHTVNTZXJ2aWNlcy5wcm92aWRlQVBJS2V5KFwiQUl6YVN5Q1F6d3FnQm41TTNYY0RZa09wUUZvYnNOQ3I3ODhOM0pzXCIpO1xyXG4vLyB9XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcclxuICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgVE5TQ2hlY2tCb3hNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQXBwQ29tcG9uZW50LFxyXG4gICAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzXHJcbiAgXSxcclxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cclxuIl19