import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorModels } from './color-models';

describe('ColorModels', () => {
  let component: ColorModels;
  let fixture: ComponentFixture<ColorModels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorModels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorModels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
