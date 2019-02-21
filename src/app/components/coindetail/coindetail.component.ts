import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Coin } from 'src/app/coin';
import { CoinService } from 'src/app/service/coin.service';

@Component({
  selector: 'app-coindetail',
  templateUrl: './coindetail.component.html',
  styleUrls: ['./coindetail.component.scss']
})
export class CoindetailComponent implements OnInit {

  coin: Coin;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.coin = this.coinService.getCoinData();
  }

  goBack(): void {
    this.location.back();
  }

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'BTC'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'USD'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'AUD'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // green
      backgroundColor: 'rgba(16, 180, 10,0.2)',
      borderColor: 'rgba(16, 180, 10,1)',
      pointBackgroundColor: 'rgba(16, 180, 10,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(16, 180, 10,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(54,94,238,0.2)',
      borderColor: 'rgba(54,94,238,1)',
      pointBackgroundColor: 'rgba(54,94,238,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54,94,238,1)'
    },
    { // grey
      backgroundColor: 'rgba(255,188,28,0.2)',
      borderColor: 'rgba(255,188,28,1)',
      pointBackgroundColor: 'rgba(255,188,28,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,188,28,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
}
