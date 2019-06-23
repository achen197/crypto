import { CoinPriceData } from './coinPriceData';
import { CoinGeneralData } from './coinGeneralData';
import { CoinHistoryData } from './coinHistory';

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

// export interface CoinCombined extends CoinPriceData, CoinGeneralData, CoinHistoryData {
//     source: string;
// }

export interface CoinCombined {
    CoinData: CoinPriceData;
    CoinGeneral: CoinGeneralData;
}