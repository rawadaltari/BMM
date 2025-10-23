import { Component } from '@angular/core';
import {helloParagraphItem, wellcomeParagraph} from '../../config/paragraph';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {AudioService} from '../../audio-config/audio.service';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage,
    NgIf,
    NgClass
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  playing = false;
  private audio = new Audio('\\assets\\audios\\audio.ogg');
  constructor(private audioService: AudioService) {}
  theParagraph=helloParagraphItem
  wellcomeParagraph=wellcomeParagraph
  playSound(type:any) {
    this.audio.play();
    this.playing=true}

    stopSound() {
      this.audio.pause();
      this.playing=false
  }
}
