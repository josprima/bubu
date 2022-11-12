import PriceChangeIndicator from '@components/price-change-indicator';
import Text from '@components/text';
import { formatPrice } from '@utils/currency';
import { useEffect, useState } from 'react';
import { CoinRowProps } from './CoinRow.interfaces';

const CoinRow = ({
  color,
  currencySymbol,
  iconUrl,
  name,
  priceChanges = {},
}: CoinRowProps) => {
  const [svg, setSvg] = useState('');

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
            <h3 className="text-md font-semibold grow">{name}</h3>

            <Text
              text={currencySymbol.toUpperCase()}
              type="label"
              className="w-10"
            />
          </div>
        </div>
      </td>
      <td className="p-2 md:p-5">
        <h3 className="text-md md:text-lg font-semibold text-right">
          {formatPrice(priceChanges.latestPrice)}
        </h3>
      </td>
      <td className="p-2 md:p-5 text-center text-md hidden md:table-cell">
        <PriceChangeIndicator priceChange={priceChanges.day} />
      </td>
      <td className="p-2 md:p-5 text-center text-md hidden md:table-cell">
        <PriceChangeIndicator priceChange={priceChanges.week} />
      </td>
      <td className="p-2 md:p-5 text-center text-md hidden md:table-cell">
        <PriceChangeIndicator priceChange={priceChanges.month} />
      </td>
      <td className="p-2 md:p-5 text-center text-md hidden md:table-cell">
        <PriceChangeIndicator priceChange={priceChanges.year} />
      </td>
    </tr>
  );
};

export default CoinRow;
