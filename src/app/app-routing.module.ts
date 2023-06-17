import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PageafterloginComponent } from './pageafterlogin/pageafterlogin.component';
import { AppdashComponent } from './appdash/appdash.component';

const routes: Routes = [
  {path: 'appdash', component:AppdashComponent},
  {path:'loginpage', component:LoginpageComponent},
  {path:'pageafterlogin', component:PageafterloginComponent},
  {path: '', redirectTo:'/loginpage', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
