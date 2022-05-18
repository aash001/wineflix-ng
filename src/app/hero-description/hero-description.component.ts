import { Component, OnInit } from '@angular/core';
import { heroContent, HeroContent } from '../../data';

@Component({
  selector: 'app-hero-description',
  templateUrl: './hero-description.component.html',
  styleUrls: ['./hero-description.component.css'],
})
export class HeroDescriptionComponent {
  heroContent = heroContent;
}
