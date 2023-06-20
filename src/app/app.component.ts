import { Component} from '@angular/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'appdashboard';
  
  isSaideNavCollapsed = false;
  screenWidth = 0;
  onTogglesideNav(data: SideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSaideNavCollapsed = data.collapsed;

  }
  
}
