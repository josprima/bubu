import PriceChangeIndicator from '@components/price-change-indicator';
import Text from '@components/text';
import { formatPrice } from '@utils/currency';
import { useEffect, useState } from 'react';

const CoinRow = ({
  color,
  currencySymbol,
  iconUrl,
  name,
  priceChanges = {},
}) => {
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
      <td className="p-5">
        <div className="flex items-center w-full">
          <div
            style={{ color: color }}
            dangerouslySetInnerHTML={{ __html: svg }}
            className="mr-3"
          ></div>

          <h3 className="text-lg font-semibold grow">{name}</h3>

          <Text
            text={currencySymbol.toUpperCase()}
            type="label"
            className="w-10"
          />
        </div>
      </td>
      <td className="p-5 text-lg font-semibold">
        {formatPrice(priceChanges.latestPrice)}
      </td>
      <td className="p-5 text-center text-lg">
        <PriceChangeIndicator priceChange={priceChanges.day} />
      </td>
      <td className="p-5 text-center text-lg">
        <PriceChangeIndicator priceChange={priceChanges.week} />
      </td>
      <td className="p-5 text-center text-lg">
        <PriceChangeIndicator priceChange={priceChanges.month} />
      </td>
      <td className="p-5 text-center text-lg">
        <PriceChangeIndicator priceChange={priceChanges.year} />
      </td>
    </tr>
  );
};

export default CoinRow;
