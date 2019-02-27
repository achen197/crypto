import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { of, Observable } from 'rxjs';
import { CoinPriceData } from '../types/coinPriceData';
import { CoinGeneralData } from '../types/coinGeneralData';

interface coinResponse {
  RAW: CoinPriceData[],
  Data: CoinGeneralData[]
}

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }
  
  private coinData: CoinPriceData[];
  private coinGeneralDetail: CoinGeneralData[];
  private coinHistoryData;
  // result: CoinPriceData[];
  result: any;  

  getCoinDataRAW(): Observable<CoinPriceData[]> {
    if (this.result) return of(this.result);
    this.coinData = this.http.get<coinResponse>("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,EOS,TRX,XML,ETH,DASH,LTC,DOGE,BCC,BCH,BLOCK,XRP,OMG,PAY,IOT,KMD,ZEC,NEO,BNB,BAT,QTUM,POT,NXT,BNT,QASH,USDT,EDG,POWER,AE,BTM,MINX,ZA,MCO,BTS,WAVES,KMD,MAID,SNT,PURA,LSK,ZRX,HSR,DGB,BTCD&tsyms=BTC,USD,AUD")
    .pipe(map(result => result.RAW));
    return this.coinData;
  }

  getCoinGeneralDetail(): Observable<CoinGeneralData[]>{
    if (this.result) return of(this.result);
    this.coinGeneralDetail = this.http.get<coinResponse>("https://min-api.cryptocompare.com/data/all/coinlist")
    .pipe(map(result => this.result = result.Data));
    return this.coinGeneralDetail;
  }

  getCoinHistory(coin) {
    if (this.result) return of(this.result);
    this.coinHistoryData = this.http.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=30&aggregate=3&e=CCCAGG`)
    .pipe(map(result => this.result = result));
    return this.coinHistoryData;
  }

  first = this.getCoinDataRAW();
  second = this.getCoinGeneralDetail();
  third = this.getCoinHistory(this.coinHistoryData); 

  setCoinData(coinData) {
    this.coinData = coinData;
  }
}
