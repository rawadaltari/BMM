import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiGalleryImages } from './ai-gallery-images';

describe('AiGalleryImages', () => {
  let component: AiGalleryImages;
  let fixture: ComponentFixture<AiGalleryImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiGalleryImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiGalleryImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
