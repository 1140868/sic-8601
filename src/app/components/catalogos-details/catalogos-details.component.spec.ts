import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogosDetailsComponent } from './catalogos-details.component';

describe('CatalogosDetailsComponent', () => {
  let component: CatalogosDetailsComponent;
  let fixture: ComponentFixture<CatalogosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogosDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
