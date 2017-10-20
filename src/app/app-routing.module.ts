import { AuthGuard } from './auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }
  , { path: 'users', component: UsersComponent, children:
      [
         { path: ':id/:name', component: UsersComponent }
      ]
    }

  , { path: 'servers',
            // now when you go to Servers and try to click one of the three servers it redirectes to home.
            canActivateChild: [AuthGuard],
            component: ServersComponent,
            children:
      [
          { path: ':id', component: ServerComponent }
        , { path: ':id/edit', component: EditServerComponent }
      ]
    }
  , { path: 'not-found', component: PageNotFoundComponent}
  , { path: '**', redirectTo: '/not-found'}

];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
