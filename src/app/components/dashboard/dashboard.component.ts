import { Component, OnInit } from '@angular/core';
import { COINS } from 'src/app/coin-details';
import { CoinService } from 'src/app/service/coin.service';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { User } from 'src/app/user';
import { LoginService } from 'src/app/service/login.service';

library.add(faCaretUp, faCaretDown);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username: User;
  // coin = COINS;
  coins: object;

  constructor(
    private coinService: CoinService,
    private loginService: LoginService
    ) { }

  // sendCoinData(c) {
  //   this.coinService.setCoinData(c);
  // }

  ngOnInit() {
    this.username = this.loginService.getUsername();
    this.coinService.getCoinData()
    .subscribe(res => {
      this.coins = res;
    });
  }
}
