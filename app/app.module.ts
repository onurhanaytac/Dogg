import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

import * as platform from "platform";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
registerElement('CardView', () => require("nativescript-cardview").CardView);
registerElement("Ripple", () => require("nativescript-ripple").Ripple);

// declare var GMSServices: any;
// if(platform.isIOS) {
//   GMSServices.provideAPIKey("AIzaSyCQzwqgBn5M3XcDYkOpQFobsNCr788N3Js");
// }


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    NativeScriptUIListViewModule,
    NativeScriptUISideDrawerModule,
    NativeScriptHttpClientModule,
    TNSCheckBoxModule
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
