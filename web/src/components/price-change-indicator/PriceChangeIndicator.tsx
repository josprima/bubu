import CaretDownIcon from '@components/icons/CaretDown';
import CaretUpIcon from '@components/icons/CaretUp';
import { PriceChangeIndicatorProps } from './PriceChangeIndicator.interfaces';

const PriceChangeIndicator = ({
  priceChange,
  className = '',
}: PriceChangeIndicatorProps) => {
  const renderCaretAndText = () => {
    if (priceChange.startsWith('-')) {
      return (
        <>
          <CaretDownIcon className="text-red-500" />
          <h3 className="text-sm sm:text-md md:text-lg font-semibold text-red-500">
            {priceChange.split('-')[1]}%
          </h3>
        </>
      );
    } else if (priceChange === '0.00') {
      return (
        <h3 className="text-sm sm:text-md md:text-lg font-semibold text-gray-600">
          {priceChange}%
        </h3>
      );
    }

    return (
      <>
        <CaretUpIcon className="text-green-500" />
        <h3 className="text-sm sm:text-md md:text-lg font-semibold text-green-500">
          {priceChange}%
        </h3>
      </>
    );
  };

  if (!priceChange) {
    return (
      <div className={`flex items-center ${className}`}>
        <h3 className="text-sm sm:text-md md:text-lg font-semibold text-gray-600">
          0.00%
        </h3>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      {renderCaretAndText()}
    </div>
  );
};

export default PriceChangeIndicator;
