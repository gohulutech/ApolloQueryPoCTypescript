export interface ExchangeRate {
  currency: string;
  rate: string;
  name: string;
}

export interface ExchangeRateData {
  exchangeRate: ExchangeRate[];
}
