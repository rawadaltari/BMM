import {Component, ElementRef, ViewChild} from '@angular/core';
import {
  CmykDigitalImagesParagraph,
  digitalImagesParagraph,
  helloParagraphItem,
  RgpDigitalImagesParagraph
} from "../../config/paragraph";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-digital-images',
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './digital-images.html',
  styleUrl: './digital-images.scss'
})

export class DigitalImages {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  playVideo() {
    this.videoPlayer.nativeElement.play();
  }

  pauseVideo() {
    this.videoPlayer.nativeElement.pause();
  }
    protected readonly digitalImagesParagraph = digitalImagesParagraph;
    protected readonly RgpDigitalImagesParagraph = RgpDigitalImagesParagraph;
    protected readonly CmykDigitalImagesParagraph = CmykDigitalImagesParagraph;
}
