import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2tab2Page } from './page2tab2.page';

describe('Page2tab2Page', () => {
  let component: Page2tab2Page;
  let fixture: ComponentFixture<Page2tab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2tab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
