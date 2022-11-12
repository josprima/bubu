import CoinRow from '@components/coin-row';
import Text from '@components/text';
import useGetCoins from '@hooks/useGetCoins';
import useGetPriceChanges from '@hooks/useGetPriceChanges';
import QueryClientProvider from 'src/providers/QueryClientProvider';

const Home = () => {
  const { coins } = useGetCoins();
  const { priceChanges } = useGetPriceChanges();

  return (
    <div className="container mx-auto pt-10 pb-20">
      <Text text="Pintu Coins" type="header" className="mb-5" />

      <div className="border border-slate-200 rounded-lg">
        <table className="table-fixed w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-2 md:py-5 pr-2 md:pr-5 pl-11 md:pl-14 w-32 text-left text-slate-400">
                CRYPTO
              </th>
              <th className="p-2 md:p-5 w-28 text-left md:text-right text-slate-400 invisible md:visible">
                HARGA
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
