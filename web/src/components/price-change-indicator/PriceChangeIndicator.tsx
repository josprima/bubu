import CaretDownIcon from '@components/icons/CaretDown';
import CaretUpIcon from '@components/icons/CaretUp';
import { PriceChangeIndicatorProps } from './PriceChangeIndicator.interfaces';

const PriceChangeIndicator = ({ priceChange }: PriceChangeIndicatorProps) => {
  const renderCaretAndText = () => {
    if (priceChange.startsWith('-')) {
      return (
        <>
          <CaretDownIcon className="text-red-500" />
          <h3 className="text-lg font-semibold text-red-500">
            {priceChange.split('-')[1]}%
          </h3>
        </>
      );
    } else if (priceChange === '0.00') {
      return (
        <h3 className="text-lg font-semibold text-gray-600">{priceChange}%</h3>
      );
    }

    return (
      <>
        <CaretUpIcon className="text-green-500" />
        <h3 className="text-lg font-semibold text-green-500">{priceChange}%</h3>
      </>
    );
  };

  if (!priceChange) {
    return <h3 className="text-lg font-semibold text-gray-600">0.00%</h3>;
  }

  return (
    <div className="flex items-center justify-center">
      {renderCaretAndText()}
    </div>
  );
};

export default PriceChangeIndicator;
