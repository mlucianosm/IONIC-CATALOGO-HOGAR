import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricistaPage } from './electricista.page';

describe('ElectricistaPage', () => {
  let component: ElectricistaPage;
  let fixture: ComponentFixture<ElectricistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricistaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
