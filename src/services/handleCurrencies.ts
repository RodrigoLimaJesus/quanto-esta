import axios from 'axios';
import ICurrency from '../interfaces/currency';
import ICurrencyFavorite from '../interfaces/currencyFavorite';

export async function getAllCurrencies(appCurrency: string): Promise<ICurrency[]> {
  const { data: allCurrencies } = await axios.get<{ currency: ICurrency }>(
    'https://economia.awesomeapi.com.br/json/all',
  );

  const currencieCodes = Object.keys(allCurrencies)
    .filter((code) => code !== 'USDT' && code !== appCurrency)
    .map((code) => `${code}-${appCurrency}`)
    .join(',');

  const { data } = await axios.get<{ currency: ICurrency }>(
    `https://economia.awesomeapi.com.br/json/last/${currencieCodes}`,
  );

  return Object.values(data);
}

function formatCurrencyCodes(currInfos: ICurrencyFavorite[]): string {
  return currInfos.reduce((prev, curr, index) => {
    const { code, codein } = curr;

    if (index > 0) {
      return `${prev},${code}-${codein}`;
    }
    return `${code}-${codein}`;
  }, '');
}

export async function getFavorites(currInfos: ICurrencyFavorite[]): Promise<ICurrency[]> {
  if (currInfos.length === 0) {
    return [];
  }

  const currencyCodes = formatCurrencyCodes(currInfos);

  const { data } = await axios.get<{ currency: ICurrency }>(
    `https://economia.awesomeapi.com.br/json/last/${currencyCodes}`,
  );

  return Object.values(data);
}
