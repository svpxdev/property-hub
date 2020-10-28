import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ListbodyComponent } from './components/listbody/listbody.component';
import { MapComponent } from './components/map/map.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RefreshComponent } from './refresh/refresh.component';


const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: ListbodyComponent},
  {path:"about", component: AboutComponent},
  {path:"create", component: CreateComponent},
  {path:"map", component: MapComponent},
  {path:"refresh", component: RefreshComponent},
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
