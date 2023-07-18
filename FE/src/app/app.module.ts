import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './shared/theme.module';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { SidebarComponent } from './pages/layout/sidebar/sidebar.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';
import { BannerComponent } from './pages/layout/banner/banner.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductItemComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ThemeModule.forRoot(),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
