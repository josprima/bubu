import API_ENDPOINTS from '@constants/API_ENDPOINTS';
import { useEffect, useState } from 'react';

interface Coin {
  currencySymbol: string;
  logo: string;
  name: string;
  color: string;
  currencyGroup: string;
}

const useGetCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCoins = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.coinList);
      const data = await response.json();

      setCoins(data?.payload || []);
    } catch (error) {
      //
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return {
    coins,
    isLoading,
  };
};

export default useGetCoins;
