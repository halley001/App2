import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdashComponent } from './appdash.component';

describe('AppdashComponent', () => {
  let component: AppdashComponent;
  let fixture: ComponentFixture<AppdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppdashComponent]
    });
    fixture = TestBed.createComponent(AppdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
