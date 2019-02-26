import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/service/coin.service';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCaretUp, faCaretDown);
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  coins: object;
  coinFullDetail: object;

  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit() {
    this.coinService.getCoinData()
      .subscribe(res => {
        this.coins = res;
      })

    this.coinService.getCoinGeneralDetail()
      .subscribe(res => {
        this.coinFullDetail = res;
      })
  }

}
