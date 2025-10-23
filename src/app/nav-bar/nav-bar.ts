import { Component } from '@angular/core';
import { NgOptimizedImage} from '@angular/common';
import {defaultMenuItems} from '../config/menu-items';

@Component({
  selector: 'app-nav-bar',
  imports: [NgOptimizedImage],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
 navigationItems= defaultMenuItems
}
