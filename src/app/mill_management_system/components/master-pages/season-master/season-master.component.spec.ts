import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonMasterComponent } from './season-master.component';

describe('SeasonMasterComponent', () => {
  let component: SeasonMasterComponent;
  let fixture: ComponentFixture<SeasonMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
