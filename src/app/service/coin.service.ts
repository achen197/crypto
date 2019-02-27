import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { of, Observable, combineLatest } from 'rxjs';
import { CoinPriceData } from '../types/coinPriceData';
import { CoinGeneralData } from '../types/coinGeneralData';
import { CoinCombined } from '../types/coinCombined';
import { CoinHistoryData } from '../types/coinHistory';

interface coinResponseRaw {
  RAW: CoinPriceData[]
}

interface coinResponseDisplay {
  DISPLAY: CoinPriceData[]
}

interface coinResponseData {
  Data: CoinGeneralData[]
}

interface coinResponseHistory {
  Data: CoinHistoryData[]
}

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }
  
  // private coinData: CoinCombined[];
  // private coinGeneralDetail: CoinCombined[];
  // private coinHistoryData;  

  getCoinDataRAW(): Observable<CoinPriceData[]> {
    return this.http.get<coinResponseDisplay>("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,EOS,TRX,XML,ETH,DASH,LTC,DOGE,BCC,BCH,BLOCK,XRP,OMG,PAY,IOT,KMD,ZEC,NEO,BNB,BAT,QTUM,POT,NXT,BNT,QASH,USDT,EDG,POWER,AE,BTM,MINX,ZA,MCO,BTS,WAVES,KMD,MAID,SNT,PURA,LSK,ZRX,HSR,DGB,BTCD&tsyms=BTC,USD,AUD")
    .pipe(map(result => result.DISPLAY));
  }

  getCoinGeneralDetail(): Observable<CoinGeneralData[]>{
    return this.http.get<coinResponseData>("https://min-api.cryptocompare.com/data/all/coinlist")
    .pipe(map(result => result.Data));
    // return this.coinGeneralDetail;
  }

  getCoinHistory(coin): Observable<CoinHistoryData[]> {
    return this.http.get<coinResponseHistory>(`https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=30&aggregate=3&e=CCCAGG`)
    .pipe(map(result => result.Data));
  }

  getCoinDataandGeneral() {
    let allData = combineLatest(this.getCoinDataRAW(), this.getCoinGeneralDetail())
      .pipe(map(([first, second]) => {
        let keys = Object.keys(first);
        // console.log(first);
        let combined: CoinCombined[] = [];
        for (let key in keys) {
          // console.log(keys);
          let data = first[keys[key]];
          let general = second[keys[key]];
          console.log(data);
          console.log(general);
          combined.push({CoinGeneral: general, CoinHistory: data})
        }
        return combined;
      }))
      return allData;
  }


  first = this.getCoinDataRAW();
  second = this.getCoinGeneralDetail();
  // third = this.getCoinHistory(this.coinHistoryData); 

  // setCoinData(coinData) {
  //   this.coinData = coinData;
  // }
}
