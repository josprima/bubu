import { useEffect, useState } from 'react';
import { TouchableHighlight, View } from 'react-native';
import Text from '@components/text';
import { SvgXml } from 'react-native-svg';
import { formatPrice } from '@utils/currency';
import PriceChangeIndicator from '@components/price-change-indicator';
import CoinCardProps from './CoinCard.interfaces';
import COLORS from '@constants/COLORS';

const CoinCard = ({
  iconUrl,
  iconColor,
  name,
  code,
  price,
  changePricePercent,
}: CoinCardProps) => {
  const [svg, setSvg] = useState('');

  const fetchSvg = async () => {
    try {
      const response = await fetch(iconUrl);
      const svgData = await response.text();

      setSvg(svgData);
    } catch (error) {
      //
    }
  };

  const handleOnPress = () => {
    // TODO: Implement redirect to coin detail
  };

  useEffect(() => {
    fetchSvg();
  }, []);

  if (!price) {
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
          <Text type="sub-header" text={formatPrice(price)} />
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
