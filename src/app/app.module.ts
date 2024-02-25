import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { VideoComponent } from './components/video/video.component';
import { HomeComponent } from './pages/home/home.component';
import { SessionVideoComponent } from './components/session-video/session-video.component';
import { BlurComponent } from './components/blur/blur.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

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
    VideoComponent,
    HomeComponent,
    SessionVideoComponent,
    BlurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
