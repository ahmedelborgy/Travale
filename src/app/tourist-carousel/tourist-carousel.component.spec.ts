import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristCarouselComponent } from './tourist-carousel.component';

describe('TouristCarouselComponent', () => {
  let component: TouristCarouselComponent;
  let fixture: ComponentFixture<TouristCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouristCarouselComponent]
    });
    fixture = TestBed.createComponent(TouristCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
