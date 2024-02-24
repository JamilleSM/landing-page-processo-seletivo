import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';
import { CardsPageComponent } from './components/cards-page/cards-page.component';
import { AboutComponent } from './components/about/about.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { TagComponent } from './components/tag/tag.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TemplateComponent } from './components/template/template.component';
import { SessionNetworkComponent } from './components/session-network/session-network.component';
import { CardNetworkComponent } from './components/card-network/card-network.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SessionSliderComponent } from './components/session-slider/session-slider.component';
import { SlidetwoComponent } from './components/slidetwo/slidetwo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    CardComponent,
    CardsPageComponent,
    AboutComponent,
    SliderComponent,
    FooterComponent,
    ContactComponent,
    TagComponent,
    NavigationComponent,
    TemplateComponent,
    SessionNetworkComponent,
    CardNetworkComponent,
    SessionSliderComponent,
    SlidetwoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
