import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterWhMasterComponent } from './center-wh-master.component';

describe('CenterWhMasterComponent', () => {
  let component: CenterWhMasterComponent;
  let fixture: ComponentFixture<CenterWhMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterWhMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterWhMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
