import ICurrency from './currency';

export default interface IContext {
  allCurrencies?: ICurrency[];
  isMounted?: boolean;
}
