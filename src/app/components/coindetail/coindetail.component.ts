import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CoinService } from 'src/app/service/coin.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-coindetail',
  templateUrl: './coindetail.component.html',
  styleUrls: ['./coindetail.component.scss']
})
export class CoindetailComponent implements OnInit {

  coin: object;
  coinDetail: object;
  coinHistory: object[];
  coinType: string;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService,
    private location: Location
  ) { }

  customizeTooltip(arg) {
        return {
            text: "Open: $" + arg.openValue + "<br/>" +
                "Close: $" + arg.closeValue + "<br/>" +
                "High: $" + arg.highValue + "<br/>" +
                "Low: $" + arg.lowValue + "<br/>"
        };
    }

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
      this.coinHistory = Object.values(coinHistory.Data);
      console.log(this.coinHistory);
      // debugger;
      // let time = coinHistory.Date.map(time => this.date = new Date(time))
      // let time = this.coinHistory;
      // let date = new Date(time);

      // console.log(date);
      // this.coinHistory.map(time => this.date = new Date(time));
      // console.log(date);
    });
  }); 
}

  goBack(): void {
    this.location.back();
  }
}
