import PriceChangeIndicator from '@components/price-change-indicator';
import Text from '@components/text';
import { formatPrice } from '@utils/currency';
import { useEffect, useRef, useState } from 'react';
import { CoinRowProps } from './CoinRow.interfaces';

const CoinRow = ({
  color,
  currencySymbol,
  iconUrl,
  name,
  priceChanges = {},
  selectedTimeSpan,
}: CoinRowProps) => {
  const currentPrice = useRef(null);
  const [svg, setSvg] = useState('');
  const [priceColor, setPriceColor] = useState('text-gray-900');

  const fetchSvg = async () => {
    try {
      const response = await fetch(`/api/fetch-coins?url=${iconUrl}`);

      const svgData = await response.text();

      setSvg(svgData);
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    fetchSvg();
  }, []);

  useEffect(() => {
    /**
     * Compare incomind/updated price with current price,
     * If it's lower it's means price is down, set the price color to red,
     * otherwise set price color to green
     */
    if (priceChanges.latestPrice < currentPrice.current) {
      setPriceColor('text-red-500');
    } else if (priceChanges.latestPrice > currentPrice.current) {
      setPriceColor('text-green-500');
    }

    currentPrice.current = priceChanges.latestPrice;
  }, [priceChanges]);

  useEffect(() => {
    /**
     * Watch text color changes and
     * set back color to default color after 1 second.
     */
    setTimeout(() => {
      setPriceColor('text-gray-900');
    }, 1000);
  }, [priceColor]);

  if (!priceChanges.latestPrice) {
    return null;
  }

  return (
    <tr key={currencySymbol} className="border-b border-slate-200">
      <td className="p-2 md:p-5">
        <div className="flex items-center w-full">
          <div
            style={{ color: color }}
            dangerouslySetInnerHTML={{ __html: svg }}
            className="mr-3"
          ></div>

          <div className="flex flex-col grow md:flex-row md:items-center">
            <h3 className="text-md md:text-lg font-semibold grow">{name}</h3>

            <Text
              text={currencySymbol.toUpperCase()}
              type="label"
              className="w-10"
            />
          </div>
        </div>
      </td>
      <td className="p-2 md:p-5">
        <h3
          className={`text-md md:text-lg font-semibold text-right transition-colors ${priceColor}`}
        >
          {formatPrice(priceChanges.latestPrice)}
        </h3>

        <PriceChangeIndicator
          priceChange={priceChanges[selectedTimeSpan]}
          className="justify-end md:hidden"
        />
      </td>
      <td className="p-2 md:p-5 text-center text-md hidden md:table-cell">
        <PriceChangeIndicator
          priceChange={priceChanges.day}
          className="justify-center"
        />
      </td>
      <td className="p-2 md:p-5 text-center text-md hidden md:table-cell">
        <PriceChangeIndicator
          priceChange={priceChanges.week}
          className="justify-center"
        />
      </td>
      <td className="p-2 md:p-5 text-center text-md hidden md:table-cell">
        <PriceChangeIndicator
          priceChange={priceChanges.month}
          className="justify-center"
        />
      </td>
      <td className="p-2 md:p-5 text-center text-md hidden md:table-cell">
        <PriceChangeIndicator
          priceChange={priceChanges.year}
          className="justify-center"
        />
      </td>
    </tr>
  );
};

export default CoinRow;
