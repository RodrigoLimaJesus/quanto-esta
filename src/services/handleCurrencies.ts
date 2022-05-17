import axios from 'axios';
import ICurrency from '../interfaces/currency';

export async function getAllCurrencies(): Promise<ICurrency[]> {
  const { data } = await axios.get<{ currency: ICurrency }>('https://economia.awesomeapi.com.br/json/all');
  const currencies = Object.values(data);

  return currencies;
}
