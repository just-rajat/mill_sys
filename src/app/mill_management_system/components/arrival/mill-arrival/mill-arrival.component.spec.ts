import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillArrivalComponent } from './mill-arrival.component';

describe('MillArrivalComponent', () => {
  let component: MillArrivalComponent;
  let fixture: ComponentFixture<MillArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillArrivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MillArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
