import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { AppSidenavComponent } from './app-sidenav.component';

describe('AppSidenavComponent', () => {
  let component: AppSidenavComponent;
  let fixture: ComponentFixture<AppSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
