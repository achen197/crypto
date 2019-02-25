import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { DxChartModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './components/news/news.component';
import { CoindetailComponent } from './components/coindetail/coindetail.component';
import { CoinComponent } from './components/coin/coin.component';
import { CoinService } from './service/coin.service';
import { NewsService } from './service/news.service';
import { LoginComponent } from './components/login/login.component';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DashboardComponent,
    NewsComponent,
    CoindetailComponent,
    CoinComponent,
    LoginComponent,
    DashboardListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, 
    FontAwesomeModule, ChartsModule, FormsModule,
    DxChartModule
  ],
  providers: [ CoinService, NewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
