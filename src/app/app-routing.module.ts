import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PageafterloginComponent } from './pageafterlogin/pageafterlogin.component';
import { AppdashComponent } from './appdash/appdash.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MediaComponent } from './media/media.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { CouponsComponent } from './coupons/coupons.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'', redirectTo:'/app-appdash', pathMatch:'full'},
{path: 'app-appdash', component:AppdashComponent},
{path: 'app-statistics', component:StatisticsComponent},
{path: 'app-media', component:MediaComponent},
{path: 'app-products', component:ProductsComponent},
{path: 'app-settings', component:SettingsComponent},
{path: 'app-coupons', component:CouponsComponent},
{path: 'app-pages', component:PagesComponent},
{path: 'app-loginpage', component:LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
