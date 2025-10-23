import { CommonModule } from '@angular/common';
import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-audio',
  template: '<audio #audio class="d-none"></audio>',
  standalone: true,
  imports: []
})
  export class AudioComponent {
  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;

  constructor(private service: AudioService) {
    this.service.play = this.play;
  }

  play = (src: string) => {
    this.audio.nativeElement.src = src;
    this.audio.nativeElement.play();

  };
}

