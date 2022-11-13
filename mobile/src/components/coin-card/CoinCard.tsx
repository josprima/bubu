import { TouchableHighlight, View } from 'react-native';
import Text from '@components/text';
import { SvgXml } from 'react-native-svg';
import { formatPrice } from '@utils/currency';
import PriceChangeIndicator from '@components/price-change-indicator';
import CoinCardProps from './CoinCard.interfaces';
import COLORS from '@constants/COLORS';
import useGetSvg from '@hooks/useGetSvg';
import useGetPriceColor from '@hooks/useGetPriceColor';

const CoinCard = ({
  iconUrl,
  iconColor,
  name,
  code,
  latestPrice,
  changePricePercent,
}: CoinCardProps) => {
  const svg = useGetSvg(iconUrl);
  const priceColor = useGetPriceColor(latestPrice);

  const handleOnPress = () => {
    // TODO: Implement redirect to coin detail
  };

  if (!latestPrice) {
    return null;
  }

  return (
    <TouchableHighlight
      underlayColor={COLORS.blue[100]}
      onPress={handleOnPress}
    >
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          borderBottomWidth: 1,
          backgroundColor: COLORS.white,
          borderBottomColor: COLORS.slate[50],
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 35,
            height: 35,
            marginRight: 10,
          }}
        >
          {svg && (
            <SvgXml color={iconColor} xml={svg} width="100%" height="100%" />
          )}
        </View>

        <View style={{ flex: 1 }}>
          <Text type="sub-header" text={name} />
          <Text text={code.toUpperCase()} style={{ color: COLORS.gray[800] }} />
        </View>

        <View>
          <Text
            type="sub-header"
            text={formatPrice(latestPrice)}
            style={{ color: priceColor }}
          />

          <PriceChangeIndicator
            priceChange={changePricePercent}
            style={{ textAlign: 'right' }}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CoinCard;
