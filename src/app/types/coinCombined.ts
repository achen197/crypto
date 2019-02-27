import { CoinPriceData } from './coinPriceData';
import { coinGeneralData } from './coinGeneralData';
import { coinHistory } from './coinHistory';

// export interface coinCombined {
//     id: string;
//     name: string;
//     symbol: string;
//     rank: string;
//     currency: string;    
//     price: number;
//     marketCap: number;
//     change: number;
//     totalVolume24H: number;
//     changePct24Hour: number;
// }

export interface coinCombined extends CoinPriceData, coinGeneralData, coinHistory {
    id: string;
    name: string;
    symbol: string;
    rank: string;
    currency: string;    
    price: number;
    marketCap: number;
    change: number;
    totalVolume24H: number;
    changePct24Hour: number;
    date: Date;
    close: number;
    open: number;
    low: number;
    high: number;
}