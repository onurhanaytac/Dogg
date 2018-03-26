import { LoginComponent } from "./pages/login/login.component";
import { WorkFileComponent } from "./pages/workFile/workFile.component";
import { MapComponent } from "./pages/map/map.component";

export const routes = [
  {
  	path: "",
  	component: LoginComponent
  },
  {
  	path: "workFile",
  	component: WorkFileComponent,
		children: [
      { path: "map", component: MapComponent, outlet: "pageOutlet" }
    ]

  }
];

export const navigatableComponents = [
  LoginComponent,
  WorkFileComponent,
  MapComponent
];
