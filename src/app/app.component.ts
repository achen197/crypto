import { Component } from '@angular/core';
import { StockService } from './service/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private stockService: StockService) { }

  ngOnInit() {
   
  }
  
}
