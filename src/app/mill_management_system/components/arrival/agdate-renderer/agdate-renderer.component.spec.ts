import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgdateRendererComponent } from './agdate-renderer.component';

describe('AgdateRendererComponent', () => {
  let component: AgdateRendererComponent;
  let fixture: ComponentFixture<AgdateRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgdateRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgdateRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
