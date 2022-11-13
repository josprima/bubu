import { useEffect, useRef, useState } from 'react';

const useGetPriceColor = (latestPrice) => {
  const currentPrice = useRef(latestPrice);
  const [priceColor, setPriceColor] = useState('text-gray-900');

  useEffect(() => {
    /**
     * Compare incomind/updated price with current price,
     * If it's lower it's means price is down, set the price color to red,
     * otherwise set price color to green
     */
    if (latestPrice < currentPrice.current) {
      setPriceColor('text-red-500');
    } else if (latestPrice > currentPrice.current) {
      setPriceColor('text-green-500');
    }

    currentPrice.current = latestPrice;
  }, [latestPrice]);

  useEffect(() => {
    /**
     * Watch text color changes and
     * set back color to default color after 1 second.
     */
    setTimeout(() => {
      setPriceColor('text-gray-900');
    }, 1000);
  }, [priceColor]);

  return priceColor;
};

export default useGetPriceColor;
