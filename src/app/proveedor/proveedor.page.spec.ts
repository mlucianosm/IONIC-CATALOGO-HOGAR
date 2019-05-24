import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorPage } from './proveedor.page';

describe('ProveedorPage', () => {
  let component: ProveedorPage;
  let fixture: ComponentFixture<ProveedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
