import API_ENDPOINTS from '@constants/API_ENDPOINTS';
import { useQuery } from '@tanstack/react-query';

const formatPriceChanges = (priceChanges) => {
  const formattedPriceObj = {};

  priceChanges.forEach((priceChange) => {
    const coinCurrencyGroup = priceChange.pair?.split('/')[0];

    formattedPriceObj[coinCurrencyGroup.toUpperCase()] = {
      ...priceChange,
    };
  });

  return formattedPriceObj;
};

const useGetPriceChanges = () => {
  const fetchPriceChanges = async () => {
    const response = await fetch(API_ENDPOINTS.priceChanges);

    return response.json();
  };

  const { data } = useQuery(['priceChanges'], fetchPriceChanges, {
    refetchInterval: 3000, // refetch every 3 Second
  });

  return {
    priceChanges: formatPriceChanges(data?.payload || []),
  };
};

export default useGetPriceChanges;
