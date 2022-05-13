import AwaitingCurrencies from '../../components/AwaitingCurrencies';
import CurrenciesList from '../../components/CurrenciesList';
import { useAppContext } from '../../contexts/appContext';

export default function Home() {
  const { isMounted, allCurrencies } = useAppContext();

  return isMounted && allCurrencies ? <CurrenciesList /> : <AwaitingCurrencies />;
}
