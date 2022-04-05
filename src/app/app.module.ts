import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrustedCompaniesComponent } from './trusted-companies/trusted-companies.component';
import { NftStartComponent } from './nft-start/nft-start.component';
import { NftToolsComponent } from './nft-tools/nft-tools.component';
import { MarketPlaceComponent } from './market-place/market-place.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { OthersUseCaseComponent } from './others-use-case/others-use-case.component';
import { OpinionComponent } from './opinion/opinion.component';
import { FooterSection1Component } from './footer-section1/footer-section1.component';
import { FooterSection2Component } from './footer-section2/footer-section2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrustedCompaniesComponent,
    NftStartComponent,
    NftToolsComponent,
    MarketPlaceComponent,
    DashboardComponent,
    ContactComponent,
    OthersUseCaseComponent,
    OpinionComponent,
    FooterSection1Component,
    FooterSection2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
