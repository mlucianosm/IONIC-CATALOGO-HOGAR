import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1tab1Page } from './page1tab1.page';

describe('Page1tab1Page', () => {
  let component: Page1tab1Page;
  let fixture: ComponentFixture<Page1tab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1tab1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
