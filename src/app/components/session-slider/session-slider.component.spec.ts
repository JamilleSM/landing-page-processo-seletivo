import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionSliderComponent } from './session-slider.component';

describe('SessionSliderComponent', () => {
  let component: SessionSliderComponent;
  let fixture: ComponentFixture<SessionSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
