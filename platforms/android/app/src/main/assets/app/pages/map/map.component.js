"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.latitude = 35.693812;
        this.longitude = 139.701537;
        this.zoom = 16;
        this.minZoom = 0;
        this.maxZoom = 22;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
    }
    //Map events
    MapComponent.prototype.onMapReady = function (event) {
        // console.log('Map Ready');
        this.mapView = event.object;
        // console.log("Setting a marker...");
        var marker = new nativescript_google_maps_sdk_1.Marker();
        marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(-33.86, 151.20);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = { index: 1 };
        this.mapView.addMarker(marker);
    };
    MapComponent.prototype.onCoordinateTapped = function (args) {
        // console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    MapComponent.prototype.onMarkerEvent = function (args) {
        // console.log("Marker Event: '" + args.eventName + "' triggered on: " + args.marker.title + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    };
    MapComponent.prototype.onCameraChanged = function (args) {
        // console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "Map",
            moduleId: module.id,
            templateUrl: "./map.html",
            styleUrls: ["./map-common.css", "./map.css"]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUU7QUFDakUsNkVBQXlFO0FBUXpFO0lBY0M7UUFaQSxhQUFRLEdBQUksU0FBUyxDQUFDO1FBQ3RCLGNBQVMsR0FBRyxVQUFVLENBQUM7UUFDdkIsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQU0zQixDQUFDO0lBRUQsWUFBWTtJQUNaLGlDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ2YsNEJBQTRCO1FBRTVCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU1QixzQ0FBc0M7UUFFdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELHlDQUFrQixHQUFsQixVQUFtQixJQUFJO1FBQ3JCLGdIQUFnSDtJQUNsSCxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLElBQUk7UUFDaEIsMkxBQTJMO0lBQzdMLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDbkIsa0hBQWtIO1FBQ2xILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQTVDVyxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsWUFBWTtZQUN6QixTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUM7U0FDN0MsQ0FBQzs7T0FDVyxZQUFZLENBOEN4QjtJQUFELG1CQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUE5Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIk1hcFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYXAuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9tYXAtY29tbW9uLmNzc1wiLCBcIi4vbWFwLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IHtcclxuXHJcblx0bGF0aXR1ZGUgPSAgMzUuNjkzODEyO1xyXG5cdGxvbmdpdHVkZSA9IDEzOS43MDE1Mzc7XHJcblx0em9vbSA9IDE2O1xyXG5cdG1pblpvb20gPSAwO1xyXG5cdG1heFpvb20gPSAyMjtcclxuXHRiZWFyaW5nID0gMDtcclxuXHR0aWx0ID0gMDtcclxuXHRwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcclxuXHRtYXBWaWV3OiBNYXBWaWV3O1xyXG5cclxuXHRsYXN0Q2FtZXJhOiBTdHJpbmc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdH1cclxuXHJcblx0Ly9NYXAgZXZlbnRzXHJcblx0b25NYXBSZWFkeShldmVudCkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ01hcCBSZWFkeScpO1xyXG5cclxuXHRcdHRoaXMubWFwVmlldyA9IGV2ZW50Lm9iamVjdDtcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIlNldHRpbmcgYSBtYXJrZXIuLi5cIik7XHJcblxyXG5cdFx0dmFyIG1hcmtlciA9IG5ldyBNYXJrZXIoKTtcclxuXHRcdG1hcmtlci5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZygtMzMuODYsIDE1MS4yMCk7XHJcblx0XHRtYXJrZXIudGl0bGUgPSBcIlN5ZG5leVwiO1xyXG5cdFx0bWFya2VyLnNuaXBwZXQgPSBcIkF1c3RyYWxpYVwiO1xyXG5cdFx0bWFya2VyLnVzZXJEYXRhID0ge2luZGV4OiAxfTtcclxuXHRcdHRoaXMubWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcclxuXHR9XHJcblxyXG5cdG9uQ29vcmRpbmF0ZVRhcHBlZChhcmdzKSB7XHJcblx0ICAvLyBjb25zb2xlLmxvZyhcIkNvb3JkaW5hdGUgVGFwcGVkLCBMYXQ6IFwiICsgYXJncy5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5wb3NpdGlvbi5sb25naXR1ZGUsIGFyZ3MpO1xyXG5cdH1cclxuXHJcblx0b25NYXJrZXJFdmVudChhcmdzKSB7XHJcblx0ICAvLyBjb25zb2xlLmxvZyhcIk1hcmtlciBFdmVudDogJ1wiICsgYXJncy5ldmVudE5hbWUgKyBcIicgdHJpZ2dlcmVkIG9uOiBcIiArIGFyZ3MubWFya2VyLnRpdGxlICsgXCIsIExhdDogXCIgKyBhcmdzLm1hcmtlci5wb3NpdGlvbi5sYXRpdHVkZSArIFwiLCBMb246IFwiICsgYXJncy5tYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlLCBhcmdzKTtcclxuXHR9XHJcblxyXG5cdG9uQ2FtZXJhQ2hhbmdlZChhcmdzKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIkNhbWVyYSBjaGFuZ2VkOiBcIiArIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSwgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpID09PSB0aGlzLmxhc3RDYW1lcmEpO1xyXG5cdFx0dGhpcy5sYXN0Q2FtZXJhID0gSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19