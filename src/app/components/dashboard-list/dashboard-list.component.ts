import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/service/coin.service';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CoinCombined } from 'src/app/types/coinCombined';

library.add(faCaretUp, faCaretDown);
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  coin: CoinCombined[] = [];

  constructor(
    private coinService: CoinService,
  ) { }

  ngOnInit(): void { 
    this.coinService.getCoinDataandGeneral()
    .subscribe(res => {
      this.coin = res;
      console.log(this.coin);
      return this.coin;
    });
   }

}
