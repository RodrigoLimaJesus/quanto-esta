import axios from 'axios';
import ICurrency from '../interfaces/currency';
import ICurrencyFavorite from '../interfaces/currencyFavorite';

export async function getAllCurrencies(): Promise<ICurrency[]> {
  const { data } = await axios.get<{ currency: ICurrency }>(
    'https://economia.awesomeapi.com.br/json/all',
  );
  const currencies = Object.values(data);

  return currencies;
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

  const currencies = Object.values(data);

  return currencies;
}
