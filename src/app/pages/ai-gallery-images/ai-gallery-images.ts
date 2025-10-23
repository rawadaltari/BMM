import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {
  AICmykModelParagraph, AIFirstDialogImagesParagraph,
  AIGrayscaleParagraph,
  AIRgpDigitalImagesParagraph,
  AIRgpModelParagraph, AISecondDialogImagesParagraph
} from '../../config/AI-paragraph';
import {CmykModelParagraph} from '../../config/paragraph';

@Component({
  selector: 'app-ai-gallery-images',
  imports: [NgOptimizedImage],
  templateUrl: './ai-gallery-images.html',
  styleUrl: './ai-gallery-images.scss'
})
export class AiGalleryImages {
  isDialogOpen = false;

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  save() {
    this.closeDialog();
  }
  protected readonly AIRgpModelParagraph = AIRgpModelParagraph;
  protected readonly AICmykModelParagraph = AICmykModelParagraph;
  protected readonly AIGrayscaleParagraph = AIGrayscaleParagraph;
  protected readonly AIRgpDigitalImagesParagraph = AIRgpDigitalImagesParagraph;
  protected readonly AIFirstDialogImagesParagraph = AIFirstDialogImagesParagraph;
  protected readonly AISecondDialogImagesParagraph = AISecondDialogImagesParagraph;
}
