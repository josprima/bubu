import CaretDownIcon from '@components/icons/CaretDown';
import CaretUpIcon from '@components/icons/CaretUp';
import { StyleSheet, View } from 'react-native';
import Text from '@components/text';
import { PriceChangeIndicatorProps } from './PriceChangeIndicator.interfaces';

const PriceChangeIndicator = ({
  priceChange,
  style,
}: PriceChangeIndicatorProps) => {
  const renderCaretAndText = () => {
    if (priceChange.startsWith('-')) {
      return (
        <>
          <CaretDownIcon color="#cc2323" />

          <Text style={{ color: '#cc2323' }} type="label" text={priceChange} />
        </>
      );
    } else if (priceChange === '0.00') {
      return (
        <Text style={{ color: '#303030' }} type="label" text={priceChange} />
      );
    }

    return (
      <>
        <CaretUpIcon color="#4bcc4e" />
        <Text style={{ color: '#4bcc4e' }} type="label" text={priceChange} />
      </>
    );
  };

  return (
    <View style={{ ...styles.wrapper, ...style }}>{renderCaretAndText()}</View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default PriceChangeIndicator;
