import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { BackEndServiseService } from './shadule/back-end-servise.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoryComponent } from './components/story/story.component';
import { RouterModule } from '@angular/router';
import { LecturesModule } from './modules/lectures/lectures.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoryComponent,
    MainPageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    LecturesModule,
    AuthModule,
  ],
  providers: [BackEndServiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
