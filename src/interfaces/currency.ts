export interface ICurrencyContent {
  code: string;
  codein: string;
  name: string;
  ask: string;
}

export default interface ICurrency {
  USD: ICurrencyContent;
  USDT: ICurrencyContent;
  CAD: ICurrencyContent;
  EUR: ICurrencyContent;
  GBP: ICurrencyContent;
  ARS: ICurrencyContent;
  BTC: ICurrencyContent;
  LTC: ICurrencyContent;
  JPY: ICurrencyContent;
  CHF: ICurrencyContent;
  AUD: ICurrencyContent;
  CNY: ICurrencyContent;
  ILS: ICurrencyContent;
  ETH: ICurrencyContent;
  XRP: ICurrencyContent;
  DOGE: ICurrencyContent;
}
