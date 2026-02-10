import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanSideLandingComponent } from './human-side-landing.component';

describe('HumanSideLandingComponent', () => {
  let component: HumanSideLandingComponent;
  let fixture: ComponentFixture<HumanSideLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanSideLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanSideLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
