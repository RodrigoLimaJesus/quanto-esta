import CurrencyCard from './CurrencyCard';

export default function AwaitingCurrencies() {
  const waitingList = Array(6).fill('');

  return (
    <div>
      {waitingList.map((_, index) => (
        <CurrencyCard key={index} animate="animate-pulse">
          <div className="bg-slate-400 rounded mb-3 h-5 w-36"></div>

          <div className="w-full flex flex-row justify-between">
            <div className="bg-slate-400 rounded h-5 w-14"></div>
            <div className="bg-slate-400 rounded h-5 w-14"></div>
            <div className="bg-slate-400 rounded h-5 w-14"></div>
          </div>
        </CurrencyCard>
      ))}
    </div>
  );
}
