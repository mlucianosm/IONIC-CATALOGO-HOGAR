import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3tab3Page } from './page3tab3.page';

describe('Page3tab3Page', () => {
  let component: Page3tab3Page;
  let fixture: ComponentFixture<Page3tab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page3tab3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page3tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
