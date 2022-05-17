import ICurrency from './currency';
import ICurrencyFavorite from './currencyFavorite';

export default interface IContext {
  allCurrencies?: ICurrency[];
  handleFavorites?: (currency: ICurrency) => void;
  favoriteCodes?: ICurrencyFavorite[];
  favoriteCurrencies?: ICurrency[];
  isMounted?: boolean;
}
