import CoinRow from '@components/table/CoinRow';
import Text from '@components/text';
import useGetCoins from '@hooks/useGetCoins';
import useGetPriceChanges from '@hooks/useGetPriceChanges';
import QueryClientProvider from 'src/providers/QueryClientProvider';

const Home = () => {
  const { coins } = useGetCoins();
  const { priceChanges } = useGetPriceChanges();

  return (
    <div className="container mx-auto pt-10 pb-20">
      <Text text="Pintu Coins" type="header" className="mb-4" />

      <div className="border border-slate-200 rounded-lg">
        <table className="table-fixed w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="p-5 w-32 text-left text-slate-400">CRYPTO</th>
              <th className="p-5 w-28 text-left text-slate-400">HARGA</th>
              <th className="p-5 w-12 text-center text-slate-400">24 JAM</th>
              <th className="p-5 w-12 text-center text-slate-400">1 MGG</th>
              <th className="p-5 w-12 text-center text-slate-400">1 BLN</th>
              <th className="p-5 w-12 text-center text-slate-400">1 THN</th>
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
