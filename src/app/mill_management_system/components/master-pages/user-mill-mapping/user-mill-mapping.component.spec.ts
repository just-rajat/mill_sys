import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMillMappingComponent } from './user-mill-mapping.component';

describe('UserMillMappingComponent', () => {
  let component: UserMillMappingComponent;
  let fixture: ComponentFixture<UserMillMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMillMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMillMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
