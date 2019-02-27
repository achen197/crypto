import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/service/coin.service';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ActivatedRoute } from '@angular/router';
import { CoinPriceData } from 'src/app/types/coinPriceData';
import { CoinGeneralData } from 'src/app/types/coinGeneralData';

library.add(faCaretUp, faCaretDown);
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  coin: CoinPriceData[] = [];
  coinDetail: CoinGeneralData[] = [];

  constructor(
    private coinService: CoinService,
  ) { }

  ngOnInit(): void { 
    this.coinService.getCoinDataRAW()
    .subscribe(res => {
      this.coin = res;
      console.log(this.coin);
    });

    this.coinService.getCoinGeneralDetail()
    .subscribe(res => {
      this.coinDetail = res;    
    });
   }

}
