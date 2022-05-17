import AwaitingCurrencies from '../../components/AwaitingCurrencies';
import CurrenciesList from '../../components/CurrenciesList';
import { useAppContext } from '../../contexts/appContext';

export default function Favorites() {
  const { isMounted, favoriteCurrencies } = useAppContext();

  return isMounted && favoriteCurrencies ? (
    favoriteCurrencies.length > 0 ? (
      <CurrenciesList currencies={favoriteCurrencies} />
    ) : (
      <div className="font-bold text-lg text-center">
        <span>Você não tem nenhuma moeda favorita.</span>
      </div>
    )
  ) : (
    <AwaitingCurrencies />
  );
}
