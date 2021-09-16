import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const appRoutes: Routes = [
    // routing moved to a separate module to be registered in app.module.ts
    { path: 'subscription', component: SubscriptionComponent },
    { path: 'home', component: SignupComponent}
  ]; // array of routes

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes, {useHash: true}) // uses hash # in url for hashmode routing, older way of doing it
        // add a /# after the host in order to let the webserver know not to care about anything after /#
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
