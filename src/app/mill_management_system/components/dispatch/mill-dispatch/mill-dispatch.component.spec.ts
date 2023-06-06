import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillDispatchComponent } from './mill-dispatch.component';

describe('MillDispatchComponent', () => {
  let component: MillDispatchComponent;
  let fixture: ComponentFixture<MillDispatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillDispatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MillDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
