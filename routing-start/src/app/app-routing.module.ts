import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    // routing moved to a separate module to be registered in app.module.ts
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent}, // dynamic route with :id
      { path: ':id', component: UserComponent}
    ] },
    { path: '', component: HomeComponent },
    { path: 'servers',
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponent, children: [
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver}}
    ]},
    // { path: 'not-found', component: PageNotFoundComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    { path: '**', redirectTo: '/not-found'}
     // dynamic route with :
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
