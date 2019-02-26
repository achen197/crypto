export interface CoinPriceData {
    currency: string;    
    symbol: string;
    price: number;
    marketCap: number;
    change: number;
    totalVolume24H: number;
    changePct24Hour: number;
}