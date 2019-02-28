import { Component, OnInit, ViewChild } from '@angular/core';
import { CoinService } from 'src/app/service/coin.service';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { CoinCombined } from 'src/app/types/coinCombined';
import {MatSort, MatTableDataSource} from '@angular/material';

library.add(faCaretUp, faCaretDown);
@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})

export class DashboardListComponent implements OnInit {
  coin: CoinCombined[] = [];
  dataSource: CoinCombined[] = [];

  constructor(
    private coinService: CoinService,
  ) { }

  displayedColumns: string[] = ['coin.CoinGeneral.SortOrder', 
  'coin.CoinData.USD.PRICE', 'coin.CoinData.USD.MKTCAP', 
  'coin.CoinData.USD.TOTALVOLUME24HTO', 'coin..CoinData.USD.SUPPLY',
  'coin.CoinData.USD.CHANGEPCTDAY'];

  @ViewChild(MatSort) sort: MatSort;

  
  ngOnInit(): void { 
    this.coinService.getCoinDataandGeneral()
    .subscribe(res => {
      this.coin = res;
      this.dataSource = new MatTableDataSource(this.coin);
      console.log(this.dataSource);
      return this.coin;
    });

    this.dataSource.sort = this.sort;
   }

}
