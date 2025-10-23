import {Component, OnInit} from '@angular/core';
import {aboutParagraphItem,names} from '../../config/aboutParagraph';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    NgForOf
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  protected readonly aboutParagraphItem = aboutParagraphItem;
  protected readonly names = names;

  ngOnInit() {
  }

}
