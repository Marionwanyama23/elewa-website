import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

import { ContentDevelopmentPageComponent } from './main/content-development-page/content-development-page.component';

import { ContentDevelopmentPageRoutingModule } from './content-development.routing';
import { ContentDevHeroSectionComponent } from './components/content-dev-hero-section/content-dev-hero-section.component';
import { ElewaContentDevAboutOneComponent } from './components/elewa-content-dev-about-one/elewa-content-dev-about-one.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ElewaImageAndTextBannerComponent } from 'libs/elements/banners/src/lib/components/elewa-image-and-text-banner/elewa-image-and-text-banner.component';

@NgModule({
  imports: [
    CommonModule,
    ContentDevelopmentPageRoutingModule,
    AppHeaderModule,
    TextsModule,
    ButtonsModule,
  ],
  declarations: [
    ContentDevelopmentPageComponent,
    ContentDevHeroSectionComponent,
    ElewaContentDevAboutOneComponent,
    ElewaImageAndTextBannerComponent,
  ],
  exports: [ContentDevelopmentPageComponent, ElewaImageAndTextBannerComponent, ElewaContentDevAboutOneComponent],
})
export class ContentDevelopmentModule {}
