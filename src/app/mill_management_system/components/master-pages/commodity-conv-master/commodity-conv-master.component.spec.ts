import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityConvMasterComponent } from './commodity-conv-master.component';

describe('CommodityConvMasterComponent', () => {
  let component: CommodityConvMasterComponent;
  let fixture: ComponentFixture<CommodityConvMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommodityConvMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommodityConvMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
