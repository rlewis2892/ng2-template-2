import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home-component";
import {AboutComponent} from "./components/about-component";

export const allAppComponents = [HomeComponent, AboutComponent];

export const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "about", component: AboutComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);