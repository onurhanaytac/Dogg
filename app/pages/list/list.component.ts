import { Component, ViewChild, ElementRef } from "@angular/core";
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.html",
  styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent {

    latitude =  35.693812;
    longitude = 139.701537;
    zoom = 16;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: String;

    constructor() {
    }

    //Map events
    onMapReady(event) {
        console.log('Map Ready');

        this.mapView = event.object;

        console.log("Setting a marker...");

        var marker = new Marker();
        marker.position = Position.positionFromLatLng(-33.86, 151.20);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }

    onCoordinateTapped(args) {
      console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
      console.log("Marker Event: '" + args.eventName + "' triggered on: " + args.marker.title + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }

}
