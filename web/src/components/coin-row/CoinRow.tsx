import PriceChangeIndicator from '@components/price-change-indicator';
import Text from '@components/text';
import useGetPriceColor from '@hooks/useGetPriceColor';
import useGetSvg from '@hooks/useGetSvg';
import { formatPrice } from '@utils/currency';
import { CoinRowProps } from './CoinRow.interfaces';

const CoinRow = ({
  color,
  currencySymbol,
  iconUrl,
  name,
  priceChanges = {},
  selectedTimeSpan,
}: CoinRowProps) => {
  const priceColor = useGetPriceColor(priceChanges.latestPrice);
  const svg = useGetSvg(iconUrl);

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
