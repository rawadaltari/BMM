import { Component } from '@angular/core';
import {CmykModelParagraph, helloParagraphItem, RgpModelParagraph} from "../../config/paragraph";
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-color-models',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './color-models.html',
  styleUrl: './color-models.scss'
})
export class ColorModels {

    protected readonly RgpModelParagraph = RgpModelParagraph;
    protected readonly CmykModelParagraph = CmykModelParagraph;

}
