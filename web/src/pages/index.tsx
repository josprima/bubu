import CoinRow from '@components/coin-row';
import Text from '@components/text';
import useGetCoins from '@hooks/useGetCoins';
import useGetPriceChanges from '@hooks/useGetPriceChanges';
import { useState } from 'react';
import QueryClientProvider from 'src/providers/QueryClientProvider';

const Home = () => {
  const { coins } = useGetCoins();
  const { priceChanges } = useGetPriceChanges();
  const [timeSpan, setTimeSpan] = useState('day');

  const handleChangeTimeSpan = (e) => {
    const { value } = e.target;

    setTimeSpan(value);
  };

  return (
    <div className="container mx-auto pt-10 pb-20">
      <Text text="Pintu Coins" type="header" className="mb-5 px-5 xl:px-0" />

      <div className="border border-slate-200 rounded-lg">
        <table className="table-fixed w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-2 md:py-5 pr-2 md:pr-5 pl-11 md:pl-14 w-32 text-left text-slate-400">
                CRYPTO
              </th>
              <th className="p-2 md:p-5 w-28 text-right">
                <h3 className="text-left md:text-right text-slate-400 hidden md:block">
                  HARGA
                </h3>
                <select
                  name="time"
                  id="time"
                  className="border rounded md:hidden px-2 py-1 text-sm font-normal"
                  onChange={handleChangeTimeSpan}
                  value={timeSpan}
                >
                  <option value="day">24 Jam</option>
                  <option value="week">1 MGG</option>
                  <option value="month">1 BLN</option>
                  <option value="year">1 THN</option>
                </select>
              </th>
              <th className="p-2 md:p-5 w-12 text-center text-slate-400 hidden md:table-cell">
                24 JAM
              </th>
              <th className="p-2 md:p-5 w-12 text-center text-slate-400 hidden md:table-cell">
                1 MGG
              </th>
              <th className="p-2 md:p-5 w-12 text-center text-slate-400 hidden md:table-cell">
                1 BLN
              </th>
              <th className="p-2 md:p-5 w-12 text-center text-slate-400 hidden md:table-cell">
                1 THN
              </th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin) => (
              <CoinRow
                key={coin.currencySymbol}
                color={coin.color}
                currencySymbol={coin.currencySymbol}
                iconUrl={coin.logo}
                name={coin.name}
                priceChanges={priceChanges[coin.currencyGroup]}
                selectedTimeSpan={timeSpan}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <QueryClientProvider>{page}</QueryClientProvider>;
};

export default Home;
