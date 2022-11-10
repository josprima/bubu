import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import CoinCard from '@components/coin-card';
import SafeAreaContainer from '@components/safe-area-container';
import API_ENDPOINTS from '@constants/API_ENDPOINTS';
import Text from '@components/text';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState({});

  const fetchCoins = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.coinList);
      const data = await response.json();

      setCoins(data?.payload || []);
    } catch (error) {
      //
    }
  };

  const fetchPriceChanges = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.priceChanges);
      const data = await response.json();

      const priceChanges = data?.payload || [];

      const formattedPriceObj = {};

      priceChanges.forEach((priceChange) => {
        const coinCurrencyGroup = priceChange.pair?.split('/')[0];

        formattedPriceObj[coinCurrencyGroup.toUpperCase()] = {
          ...priceChange,
        };
      });

      setPrice(formattedPriceObj);
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    fetchCoins();
    fetchPriceChanges();
  }, []);

  return (
    <SafeAreaContainer>
      <Text text="Pintu Coins" type="header" style={{ padding: 15 }} />

      <ScrollView>
        {coins.map((coin) => (
          <CoinCard
            key={coin.currencySymbol}
            iconUrl={coin.logo}
            iconColor={coin.color}
            name={coin.name}
            code={coin.currencySymbol}
            changePricePercent={price[coin.currencyGroup]?.day}
            price={price[coin.currencyGroup]?.latestPrice}
          />
        ))}
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default Home;
