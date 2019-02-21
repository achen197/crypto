import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take, delay } from "rxjs/operators";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }
  
  private coinData;
  result: any;

  getCoinData() {
    // return this.coinData;
    if (this.result) return of(this.result);
    this.coinData = this.http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,EOS,TRX,XML,ETH,DASH,LTC,DOGE,BCC,BCH,BLOCK,XRP&tsyms=BTC,USD,AUD")
    .pipe(map(result => this.result = result));
    return this.coinData;
  }

  setCoinData(coinData) {
    this.coinData = coinData;
  }
}
