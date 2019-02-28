import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/service/coin.service';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { User } from 'src/app/types/user';
import { LoginService } from 'src/app/service/login.service';
import { CoinCombined } from 'src/app/types/coinCombined';

library.add(faCaretUp, faCaretDown);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username: User;
  coins: CoinCombined[] = [];  
  coinGeneralDetail: object;

  constructor(
    private coinService: CoinService,
    private loginService: LoginService
    ) { }
    
  ngOnInit(): void {
    this.username = this.loginService.getUsername();
    this.coinService.getCoinDataandGeneral()
    .subscribe(res => {
      this.coins = res;
      // console.log(res);
      // console.log(this.coins);
      console.log(this.coins);
      return this.coins;
    });
  }
}
