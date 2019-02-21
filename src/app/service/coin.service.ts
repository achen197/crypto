import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor() { }
  
  private coinData;

  getCoinData() {
    return this.coinData;
  }

  setCoinData(coinData) {
    this.coinData = coinData;
  }
  
}
