import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
    { path: '', component: HomeComponent }
  , { path: 'users', component: UsersComponent, children:
      [
         { path: ':id/:name', component: UsersComponent }
      ]
    }

  , { path: 'servers', component: ServersComponent, children:
      [
          { path: ':id', component: ServerComponent }
        , { path: ':id/edit', component: EditServerComponent }
      ]
    }

];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ServersComponent,
    HomeComponent,
    UserComponent,
    ServerComponent,
    EditServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
