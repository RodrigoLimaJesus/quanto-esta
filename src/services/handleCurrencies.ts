import axios from 'axios';
import ICurrency from '../interfaces/currency';

export async function getAllCurrencies(): Promise<ICurrency> {
  const { data } = await axios.get<ICurrency>('https://economia.awesomeapi.com.br/json/all');

  return data as ICurrency;
}
