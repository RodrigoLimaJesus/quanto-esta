import { useEffect, useState } from 'react';
import ICurrency from '../../interfaces/currency';
import { getAllCurrencies } from '../../services/handleCurrencies';
import { ReactProps } from '../../types/reactProps';
import { AppContext } from '../appContext';

export default function AppProvider({ children }: ReactProps) {
  const [allCurrencies, setAllCurrencies] = useState<ICurrency>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    async function inititalFetchs() {
      const currencies = await getAllCurrencies();

      setAllCurrencies(currencies);
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
