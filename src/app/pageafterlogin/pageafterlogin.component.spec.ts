import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageafterloginComponent } from './pageafterlogin.component';

describe('PageafterloginComponent', () => {
  let component: PageafterloginComponent;
  let fixture: ComponentFixture<PageafterloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageafterloginComponent]
    });
    fixture = TestBed.createComponent(PageafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
