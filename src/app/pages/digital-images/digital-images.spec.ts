import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalImages } from './digital-images';

describe('DigitalImages', () => {
  let component: DigitalImages;
  let fixture: ComponentFixture<DigitalImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
