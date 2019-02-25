import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CoinService } from 'src/app/service/coin.service';

@Component({
  selector: 'app-coindetail',
  templateUrl: './coindetail.component.html',
  styleUrls: ['./coindetail.component.scss']
})
export class CoindetailComponent implements OnInit {

  coin: object;
  coinDetail: object;
  coinHistory: object;
  coinType: string;
  // coinData$: object;
  // coinDetail$: object;
  // coinHistory$: object;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService,
    private location: Location
  ) { }

  ngOnInit() {

    this.route.params.subscribe( params => {
      this.coinType = params['id'];
      this.coinService.getCoinData().subscribe(coinData => {
        this.coin = coinData.RAW[this.coinType];
      });
  });

    this.route.params.subscribe( params => {
      this.coinType = params['id'];
        this.coinService.getCoinGeneralDetail().subscribe(coinGeneralDetail => {
        this.coinDetail = coinGeneralDetail.Data[this.coinType];
      });
  });

  this.route.params.subscribe( params => {
    this.coinType = params['id'];
      this.coinService.getCoinHistory(this.coinType).subscribe(coinHistory => {
      this.coinHistory = coinHistory.Data;
    });
});

// this.coinData$ = this.coinService.getCoinData();
// this.coinDetail$ = this.coinService.getCoinGeneralDetail();
// this.coinHistory$ = this.coinService.getCoinHistory(this.coinType);
  }

  goBack(): void {
    this.location.back();
  }
}
