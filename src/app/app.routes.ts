import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'color-models',
    loadComponent: () => import('./pages/color-models/color-models').then(m => m.ColorModels),
  },
  {
    path: 'digital-images',
    loadComponent: () => import('./pages/digital-images/digital-images').then(m => m.DigitalImages),
  },
  {
    path: 'ai-gallery-images',
    loadComponent: () => import('./pages/ai-gallery-images/ai-gallery-images').then(m => m.AiGalleryImages),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  }

];
