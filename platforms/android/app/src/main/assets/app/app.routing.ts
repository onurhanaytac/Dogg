import { AdministrationComponent } from "./pages/administration/administration.component";
import { HelpComponent } from "./pages/help/help.component";
import { LibraryComponent } from "./pages/library/library.component";
import { LoginComponent } from "./pages/login/login.component";
import { MapComponent } from "./pages/map/map.component";
import { SearchWorkitemComponent } from "./pages/search-workitem/search-workitem.component";
import { WorkfileComponent } from "./pages/workfile/workfile.component";

import { AllowancesComponent } from "./pages/workfile/allowances/allowances.component";
import { ContractualAmountsComponent } from "./pages/workfile/contractual-amounts/contractual-amounts.component";
import { ProgressPaymentsComponent } from "./pages/workfile/progress-payments/progress-payments.component";
import { TimeExtensionComponent } from "./pages/workfile/time-extension/time-extension.component";
import { WorkAmendmentsComponent } from "./pages/workfile/work-amendments/work-amendments.component";
import { WorkGroupsComponent } from "./pages/workfile/work-groups/work-groups.component";
import { WorkfileDetailsComponent } from "./pages/workfile/workfile-details/workfile-details.component";

import { SearchFiltersComponent } from "./pages/library/search-filters/search-filters.component";
import { SearchComponent } from "./pages/library/search/search.component";
import { AccountComponent } from "./pages/library/account/account.component";

export const routes = [
  {
  	path: "",
    redirectTo: "library",
    pathMatch: 'full'
  },
  {
    path: "administration",
    component: AdministrationComponent
  },
  {
    path: "help",
    component: HelpComponent
  },
  {
    path: "library",
    component: LibraryComponent,
    children: [
      { path: "search-filters", component: SearchFiltersComponent, outlet: "search-filters-outlet" },
      { path: "search",         component: SearchComponent,        outlet: "search-outlet" },
      { path: "account",        component: AccountComponent,       outlet: "account-outlet" },
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "search-workitem",
    component: SearchWorkitemComponent
  },
  {
  	path: "workfile",
  	component: WorkfileComponent,
		children: [
      { path: "allowances",           component: AllowancesComponent,         outlet: "workfileOutlet" },
      { path: "contractual-amounts",  component: ContractualAmountsComponent, outlet: "workfileOutlet" },
      { path: "progress-payments",    component: ProgressPaymentsComponent,   outlet: "workfileOutlet" },
      { path: "time-extension",       component: TimeExtensionComponent,      outlet: "workfileOutlet" },
      { path: "work-amendments",      component: WorkAmendmentsComponent,     outlet: "workfileOutlet" },
      { path: "work-groups",          component: WorkGroupsComponent,         outlet: "workfileOutlet" },
      { path: "workfile-details",     component: WorkfileDetailsComponent,    outlet: "workfileOutlet" }
    ]
  }
];

export const navigatableComponents = [
  AdministrationComponent,
  HelpComponent,
  LibraryComponent,
  LoginComponent,
  MapComponent,
  SearchWorkitemComponent,
  WorkfileComponent,
  AllowancesComponent,
  ContractualAmountsComponent,
  ProgressPaymentsComponent,
  TimeExtensionComponent,
  WorkAmendmentsComponent,
  WorkGroupsComponent,
  WorkfileDetailsComponent,
  SearchFiltersComponent,
  SearchComponent,
  AccountComponent
];
