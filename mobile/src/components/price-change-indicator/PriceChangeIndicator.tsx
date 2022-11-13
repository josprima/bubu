import CaretDownIcon from '@components/icons/CaretDown';
import CaretUpIcon from '@components/icons/CaretUp';
import { StyleSheet, View } from 'react-native';
import Text from '@components/text';
import { PriceChangeIndicatorProps } from './PriceChangeIndicator.interfaces';
import COLORS from '@constants/COLORS';

const PriceChangeIndicator = ({
  priceChange,
  style,
}: PriceChangeIndicatorProps) => {
  const renderCaretAndText = () => {
    if (priceChange.startsWith('-')) {
      return (
        <>
          <CaretDownIcon color={COLORS.red[600]} />

          <Text
            style={{ color: COLORS.red[600] }}
            type="label"
            text={`${priceChange.split('-')[1]}%`}
          />
        </>
      );
    }

    if (priceChange === '0.00') {
      return (
        <Text
          style={{ color: COLORS.gray[800] }}
          type="label"
          text={`${priceChange}%`}
        />
      );
    }

    return (
      <>
        <CaretUpIcon color={COLORS.green[600]} />
        <Text
          style={{ color: COLORS.green[600] }}
          type="label"
          text={`${priceChange}%`}
        />
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
