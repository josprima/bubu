import { ScrollView } from 'react-native';
import CoinCard from '@components/coin-card';
import SafeAreaContainer from '@components/safe-area-container';
import Text from '@components/text';
import useGetCoins from 'src/hooks/useGetCoins';
import useGetPriceChanges from 'src/hooks/useGetPriceChanges';
import CoinCardPlaceHolder from '@components/coin-card/CoinCardPlaceHolder';

const Home = () => {
  const { coins, isLoading } = useGetCoins();
  const { priceChanges } = useGetPriceChanges();

  return (
    <SafeAreaContainer>
      <Text text="Pintu Coins" type="header" style={{ padding: 15 }} />

      {isLoading ? (
        <CoinCardPlaceHolder />
      ) : (
        <ScrollView>
          {coins.map((coin) => (
            <CoinCard
              key={coin.currencySymbol}
              iconUrl={coin.logo}
              iconColor={coin.color}
              name={coin.name}
              code={coin.currencySymbol}
              changePricePercent={priceChanges[coin.currencyGroup]?.day}
              price={priceChanges[coin.currencyGroup]?.latestPrice}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaContainer>
  );
};

export default Home;
