import { AiOutlineArrowRight, AiOutlineHeart } from 'react-icons/ai';
import { useAppContext } from '../contexts/appContext';
import CurrencyCard from './CurrencyCard';

export default function CurrenciesList() {
  const { allCurrencies } = useAppContext();

  return (
    <>
      {allCurrencies?.map((currencie) => {
        const { name, codein, code, ask } = currencie;

        return (
          <CurrencyCard key={name}>
            <span className="text-xs mb-2">{name}</span>
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-row items-center">
                <span>{codein}</span>
                <AiOutlineArrowRight />
                <span>{code}</span>
              </div>
              <span>{Number(ask).toFixed(2)}</span>
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
