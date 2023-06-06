import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityMasterComponent } from './commodity-master.component';

describe('CommodityMasterComponent', () => {
  let component: CommodityMasterComponent;
  let fixture: ComponentFixture<CommodityMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommodityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
