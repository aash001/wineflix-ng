import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DrinkButtonComponent } from './drink-button/drink-button.component';
import { InfoButtonComponent } from './info-button/info-button.component';
import { ButtonControlsComponent } from './button-controls/button-controls.component';
import { HeroDescriptionComponent } from './hero-description/hero-description.component';
import { DrinkAgainComponent } from './drink-again/drink-again.component';
import { KeepDrinkingComponent } from './keep-drinking/keep-drinking.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { NewBadgeComponent } from './new-badge/new-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    NavLinksComponent,
    UserAvatarComponent,
    NavBarComponent,
    DrinkButtonComponent,
    InfoButtonComponent,
    ButtonControlsComponent,
    HeroDescriptionComponent,
    DrinkAgainComponent,
    KeepDrinkingComponent,
    DrinkListComponent,
    NewBadgeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
