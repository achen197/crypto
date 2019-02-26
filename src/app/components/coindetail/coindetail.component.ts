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
  coinHistory: any[];
  coinType: string;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService,
    private location: Location
  ) { 
      //Getting the specific crypto based on the ID (coinType)
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
        //Changing unix time to readable time for dxcharts 
        this.coinHistory = this.coinHistory.map(history => ({...history, time: new Date(history.time * 1000)}));
      });
     }); 
    }

  customizeTooltip(arg) {
        return {
            text: "Open: $" + arg.openValue + "<br/>" +
                "Close: $" + arg.closeValue + "<br/>" +
                "High: $" + arg.highValue + "<br/>" +
                "Low: $" + arg.lowValue + "<br/>"
        };
    };

    tickInterval(arg) {
      return (arg.openValue < 100) ? '10' : '100'; 
    }

    ngOnInit() {

    }

  //Back to dashboard button
  goBack(): void {
    this.location.back();
  }
}
