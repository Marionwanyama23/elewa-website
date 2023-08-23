import { Component, Input } from '@angular/core';
import { HeroText } from '@elewa-website/models/schema/ui/texts';
import { content as mockContent} from '@elewa-website/data/ui/content-text';

@Component({
  selector: 'elewa-website-elewa-text-section',
  templateUrl: './elewa-text-section.component.html',
  styleUrls: ['./elewa-text-section.component.scss'],
})
export class ElewaTextSectionComponent {
  @Input() textsample!: HeroText[];
  content: HeroText[];

  constructor() {
    this.content = mockContent;
  
  }
}
