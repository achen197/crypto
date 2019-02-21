import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/coin';
import { CoinService } from 'src/app/service/coin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  coins: Coin[];
  
  constructor(private coinService: CoinService) { }

  ngOnInit() {
  }

}
