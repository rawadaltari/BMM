import { Injectable } from '@angular/core';
import { AudioComponent } from './audio';

export type SoundTypes = 'audio';
const soundTypeSrcMap: Record<SoundTypes, string> = {
  audio: '/assets/audios/audio.ogg',
};

@Injectable({ providedIn: 'root' })
export class AudioService {
  play!: (src: string) => void;

  playSound(type: SoundTypes) {
    const src = soundTypeSrcMap[type];
    this.play(src);
  }
}
