import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillMasterComponent } from './mill-master.component';

describe('MillMasterComponent', () => {
  let component: MillMasterComponent;
  let fixture: ComponentFixture<MillMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MillMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
