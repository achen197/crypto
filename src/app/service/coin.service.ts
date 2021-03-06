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

  getCoinDataRAW(): Observable<CoinPriceData[]> {
    return this.http.get<coinResponseDisplay>("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,EOS,TRX,XML,ETH,DASH,LTC,DOGE,BCH,BLOCK,XRP,OMG,PAY,IOT,KMD,ZEC,NEO,BNB,BAT,QTUM,POT,MTL,ZEN,NXT,BNT,QASH,USDT,EDG,AE,BTM,MINX,ZA,MCO,BTS,WAVES,KMD,MAID,SNT,PURA,LSK,ZRX,HSR,DGB,BTCD&tsyms=BTC,USD,AUD")
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
        let combined: CoinCombined[] = [];
        for (let key in keys) {
          let data = first[keys[key]];
          let general = second[keys[key]];
          combined.push({CoinData: data, CoinGeneral: general})
        }
        return combined;
      }))
      return allData;
  }


  first = this.getCoinDataRAW();
  second = this.getCoinGeneralDetail();
  // third = this.getCoinHistory(this.coinHistoryData); 
}
