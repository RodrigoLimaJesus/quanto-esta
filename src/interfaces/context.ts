import { ICurrencyContent } from './currency';

export default interface IContext {
  allCurrencies?: ICurrencyContent[];
  isMounted?: boolean;
}
