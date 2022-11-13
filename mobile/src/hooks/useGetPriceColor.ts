import COLORS from '@constants/COLORS';
import { useEffect, useRef, useState } from 'react';

const useGetPriceColor = (latestPrice) => {
  const currentPrice = useRef(latestPrice);
  const [priceColor, setPriceColor] = useState(COLORS.gray[800]);

  useEffect(() => {
    /**
     * Compare incomind/updated price with current price,
     * If it's lower it's means price is down, set the price color to red,
     * otherwise set price color to green
     */
    if (latestPrice < currentPrice.current) {
      setPriceColor(COLORS.red[600]);
    } else if (latestPrice > currentPrice.current) {
      setPriceColor(COLORS.green[600]);
    }

    currentPrice.current = latestPrice;
  }, [latestPrice]);

  useEffect(() => {
    /**
     * Watch text color changes and
     * set back color to default color after 1 second.
     */
    setTimeout(() => {
      setPriceColor(COLORS.gray[800]);
    }, 1000);
  }, [priceColor]);

  return priceColor;
};

export default useGetPriceColor;
