import { AiFillCaretDown, AiFillCaretUp, AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai';
import ICurrencyList from '../interfaces/currencyList';
import CurrencyCard from './CurrencyCard';

export default function CurrenciesList({ currencies }: ICurrencyList) {
  return (
    <>
      {currencies?.map((currencie) => {
        const { name, codein, code, ask, pctChange } = currencie;
        const numberAsk = Number(ask).toFixed(2);
        const isUpVariation = Number(pctChange) >= 0;

        return (
          <CurrencyCard key={name}>
            <span className="text-xs mb-2">{name}</span>
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
                <span>{pctChange}</span>
              </div>
              <button type="button">
                <AiOutlineHeart />
              </button>
            </div>
          </CurrencyCard>
        );
      })}
    </>
  );
}
