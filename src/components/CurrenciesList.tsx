import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillHeart,
  AiOutlineArrowRight,
  AiOutlineHeart,
} from 'react-icons/ai';
import { useAppContext } from '../contexts/appContext';
import ICurrencyList from '../interfaces/currencyList';
import CurrencyCard from './CurrencyCard';

export default function CurrenciesList({ currencies }: ICurrencyList) {
  const { handleFavorites, favoriteCodes } = useAppContext();
  return (
    <div className="scrollbar-thin h-[80vh] overflow-hidden overflow-y-auto md:text-lg">
      {currencies?.map((currencie) => {
        const { name, codein, code, ask, pctChange } = currencie;
        const numberAsk = Number(ask).toFixed(2);
        const isUpVariation = Number(pctChange) >= 0;
        const isInFavorites = favoriteCodes?.some(({ name: nameFav }) => nameFav === name);

        return (
          <CurrencyCard key={name}>
            <span className="text-xs mb-2 lg:text-sm">{name}</span>
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row items-center text-sm">
                <span>{code}</span>
                <AiOutlineArrowRight />
                <span>{codein}</span>
              </div>
              <span>{numberAsk}</span>
              <div className="flex flex-row items-center">
                {isUpVariation ? (
                  <AiFillCaretUp className="text-green-500" />
                ) : (
                  <AiFillCaretDown className="text-red-500" />
                )}
                <span>{pctChange}%</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (handleFavorites) {
                    handleFavorites(currencie);
                  }
                }}
              >
                {isInFavorites ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
              </button>
            </div>
          </CurrencyCard>
        );
      })}
    </div>
  );
}
