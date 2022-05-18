import { useAppContext } from '../../contexts/appContext';

export default function Settings() {
  const { handleAppCurrency, appCurrency } = useAppContext();
  const exchangeCodes = ['BRL', 'USD', 'EUR'];

  return (
    <div>
      <label htmlFor="exchange-codes" className="flex flex-row justify-center items-center">
        Moeda de câmbio:
        <select
          id="exchange-codes"
          className="form-select appearance-none
            w-20
            px-1 ml-2          
            font-bold
            text-gray-700
            bg-white
            border border-solid border-gray-300
            rounded
            transition ease-in-out
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={appCurrency}
          onChange={({ target }) => {
            if (handleAppCurrency) {
              handleAppCurrency(target.value);
            }
          }}
        >
          {exchangeCodes.map((exchange) => (
            <option className="text-center" key={exchange}>
              {exchange}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
