import { useEffect, useState } from "react";
import ICurrency from "../../interfaces/currency";
import IReactProps from "../../interfaces/reactProps";
import { getAllCurrencies } from "../../services/handleCurrencies";
import { AppContext } from "../appContext";

export default function AppProvider({ children }: IReactProps) {
  const [allCurrencies, setAllCurrencies] = useState<ICurrency[]>([]);
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

  return (
    <AppContext.Provider value={{ allCurrencies, isMounted }}>
      {children}
    </AppContext.Provider>
  );
}
