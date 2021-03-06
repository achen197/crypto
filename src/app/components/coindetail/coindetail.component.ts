import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CoinService } from 'src/app/service/coin.service';
import { CoinPriceData } from 'src/app/types/coinPriceData';
import { CoinGeneralData } from 'src/app/types/coinGeneralData';

@Component({
  selector: 'app-coindetail',
  templateUrl: './coindetail.component.html',
  styleUrls: ['./coindetail.component.scss']
})
export class CoindetailComponent implements OnInit {

  coin: CoinPriceData[] = [];
  coinDetail: CoinGeneralData[] = [];
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
        this.coinService.getCoinDataRAW().subscribe(coinData => {
          this.coin = coinData[this.coinType];
        });
      });

      this.route.params.subscribe( params => {
        this.coinType = params['id'];
          this.coinService.getCoinGeneralDetail().subscribe(coinGeneralDetail => {
          this.coinDetail = coinGeneralDetail[this.coinType];
        });
      });

    this.route.params.subscribe( params => {
      this.coinType = params['id'];
        this.coinService.getCoinHistory(this.coinType).subscribe(coinHistory => {
        this.coinHistory = coinHistory;
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

    ngOnInit(): void {}

  //Back to dashboard button
  goBack(): void {
    this.location.back();
  }
}
