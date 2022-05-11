import axios from 'axios';
import { useEffect, useState } from 'react';
import ICurrency from '../../interfaces/currency';
import IReactProps from '../../interfaces/reactProps';
import { AppContext } from '../appContext';

export default function AppProvider({ children }: IReactProps) {
  const [allCurrencies, setAllCurrencies] = useState<ICurrency>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    async function inititalFetchs() {
      const { data } = await axios.get<ICurrency>('https://economia.awesomeapi.com.br/json/all');

      setAllCurrencies(data);
      setIsMounted(true);
    }

    if (!isMounted) {
      inititalFetchs();
    }
  }, [isMounted]);

  return isMounted ? (
    <AppContext.Provider value={{ allCurrencies }}>{children}</AppContext.Provider>
  ) : (
    <h1>Loading...</h1>
  );
}
