import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PageafterloginComponent } from './pageafterlogin/pageafterlogin.component';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {AppdashComponent } from './appdash/appdash.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { MediaComponent } from './media/media.component';
import { CouponsComponent } from './coupons/coupons.component';
import { BodyComponent } from './body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    PageafterloginComponent,
    AppdashComponent,
    MainNavComponent,
    SettingsComponent,
    StatisticsComponent,
    PagesComponent,
    ProductsComponent,
    MediaComponent,
    CouponsComponent,
    BodyComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatSortModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
