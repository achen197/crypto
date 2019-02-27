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
  // coin: CoinCombined[] = [];
  // coinDetail: CoinCombined[] = [];

  constructor(
    private coinService: CoinService,
  ) { }

  ngOnInit(): void { 
    this.coinService.getCoinDataandGeneral()
    .subscribe(res => {
      return res;
    });

    // this.coinService.getCoinGeneralDetail()
    // .subscribe(res => {
    //   this.coinDetail = res;    
    //   console.log(this.coinDetail);
    // });
   }

}
