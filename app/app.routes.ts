import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./components/pagenotfound-component";
import {HomeComponent} from "./components/home-component";
import {AboutComponent} from "./components/about-component";
import {ContactComponent} from "./components/contact-component";

export const allAppComponents = [PageNotFoundComponent, HomeComponent, AboutComponent, ContactComponent];

// Place more specific routes above less specific routes - "first match wins" strategy.
export const routes: Routes = [
	{path: "about", component: AboutComponent},
	{path: "contact", component: ContactComponent},
	{path: "", component: HomeComponent},
	// wildcard route for 404 not found
	{path: "**", component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);