import { Component, Input } from '@angular/core';

import { ImageAndText } from '@elewa-website/models/schema/ui/image-and-text';
import { _highlightedImageData as highlightedImageData, getLayoutClass } from '@elewa-website/data/sections';

@Component({
  selector: 'elewa-website-elewa-content-dev-about-one',
  templateUrl: './elewa-content-dev-about-one.component.html',
  styleUrls: ['./elewa-content-dev-about-one.component.scss'],
})
export class ElewaContentDevAboutOneComponent {
  @Input() imageData !: ImageAndText[];
  imageContent: ImageAndText[];

  constructor (){
    this.imageContent = highlightedImageData;
  }

  getLayoutClass(imageContent: ImageAndText): string {
    return getLayoutClass(imageContent);
  }
}

