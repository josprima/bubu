import Text from '@components/text';
import useGetCoins from '@hooks/useGetCoins';
import useGetPriceChanges from '@hooks/useGetPriceChanges';
import QueryClientProvider from 'src/providers/QueryClientProvider';

const Home = () => {
  const { coins } = useGetCoins();
  const { priceChanges } = useGetPriceChanges();

  return (
    <div>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <td>
              <Text text="CRYPTO" type="sub-header" />
            </td>
            <td>
              <Text text="HARGA" type="sub-header" />
            </td>
            <td>
              <Text text="24 JAM" type="sub-header" />
            </td>
            <td>
              <Text text="1 MGG" type="sub-header" />
            </td>
            <td>
              <Text text="1 BLN" type="sub-header" />
            </td>
            <td>
              <Text text="1 THN" type="sub-header" />
            </td>
          </tr>
        </thead>

        <tbody>
          {coins.map((coin) => (
            <tr key={coin.currencySymbol}>
              <td>
                {coin.name}
                {coin.currencySymbol}
              </td>
              <td>{priceChanges[coin.currencyGroup]?.latestPrice}</td>
              <td>{priceChanges[coin.currencyGroup]?.day}</td>
              <td>{priceChanges[coin.currencyGroup]?.week}</td>
              <td>{priceChanges[coin.currencyGroup]?.month}</td>
              <td>{priceChanges[coin.currencyGroup]?.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Home.getLayout = (page) => {
  return <QueryClientProvider>{page}</QueryClientProvider>;
};

export default Home;
