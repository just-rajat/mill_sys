import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMillArrivalComponent } from './view-mill-arrival.component';

describe('ViewMillArrivalComponent', () => {
  let component: ViewMillArrivalComponent;
  let fixture: ComponentFixture<ViewMillArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMillArrivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMillArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
