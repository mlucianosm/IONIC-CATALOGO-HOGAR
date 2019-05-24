import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasfiterPage } from './gasfiter.page';

describe('GasfiterPage', () => {
  let component: GasfiterPage;
  let fixture: ComponentFixture<GasfiterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasfiterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasfiterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
