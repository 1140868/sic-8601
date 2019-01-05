import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosRegistoComponent } from './catalogos-registo.component';

describe('CatalogosRegistoComponent', () => {
  let component: CatalogosRegistoComponent;
  let fixture: ComponentFixture<CatalogosRegistoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogosRegistoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogosRegistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
