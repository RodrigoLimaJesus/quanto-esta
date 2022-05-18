import { useEffect, useState } from 'react';
import ICurrency from '../../interfaces/currency';
import ICurrencyFavorite from '../../interfaces/currencyFavorite';
import IReactProps from '../../interfaces/reactProps';
import { getAllCurrencies, getFavorites } from '../../services/handleCurrencies';
import { AppContext } from '../appContext';

export default function AppProvider({ children }: IReactProps) {
  const [allCurrencies, setAllCurrencies] = useState<ICurrency[]>();
  const [favoriteCodes, setFavoriteCodes] = useState<ICurrencyFavorite[]>([]);
  const [favoriteCurrencies, setFavoriteCurrencies] = useState<ICurrency[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [appCurrency, setAppCurrency] = useState<string>('BRL');
  const storageFavoriteKey = 'favorites';

  useEffect(() => {
    async function inititalFetchs() {
      const currencies = await getAllCurrencies(appCurrency);
      const favorites = localStorage.getItem(storageFavoriteKey);

      if (favorites) {
        setFavoriteCodes(JSON.parse(favorites));
      }

      setAllCurrencies(currencies);
      setIsMounted(true);
    }

    async function currenciesFetch() {
      const currencies = await getAllCurrencies(appCurrency);

      setAllCurrencies(currencies);
    }

    if (!isMounted) {
      inititalFetchs();
    } else {
      currenciesFetch();
    }
  }, [isMounted, appCurrency]);

  useEffect(() => {
    async function favoriteFetchs() {
      const favorites = await getFavorites(favoriteCodes);

      setFavoriteCurrencies(favorites);
      localStorage.setItem(storageFavoriteKey, JSON.stringify(favoriteCodes));
    }

    if (isMounted) {
      favoriteFetchs();
    }
  }, [isMounted, favoriteCodes]);

  function handleFavorites(currency: ICurrency) {
    const hasInFavorites = favoriteCodes?.some(({ name }) => name === currency.name);

    if (hasInFavorites) {
      setFavoriteCodes((prevInfos) => prevInfos?.filter(({ name }) => name !== currency.name));
      return;
    }

    const newFavorite = { name: currency.name, code: currency.code, codein: currency.codein };
    setFavoriteCodes((prevInfos) => [...prevInfos, newFavorite]);
    return;
  }

  function handleAppCurrency(currency: string) {
    setAppCurrency(currency);
  }

  return (
    <AppContext.Provider
      value={{
        allCurrencies,
        handleFavorites,
        appCurrency,
        handleAppCurrency,
        favoriteCurrencies,
        favoriteCodes,
        isMounted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
