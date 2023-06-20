import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{
  @Output() onTogglesideNav: EventEmitter<SideNavToggle> = new EventEmitter();

 collapsed = false;
 screenWith = 0;

  screenWidth!: number;

 @HostListener('window:resize',['$event'])
onResize(event: any){
  this.screenWidth = window.innerWidth;
  if(this.screenWith <= 760){
    this.collapsed = false;
    this.onTogglesideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }
}
 ngOnInit(): void {
   this.screenWidth = window.innerWidth;
 }

 toggleCollapse(): void{
  this.collapsed=!this.collapsed;
  this.onTogglesideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

 closeSidenav(): void{
  this.collapsed= false;
  this.onTogglesideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

 }

}
