import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Text from '@components/text';
import { SvgXml } from 'react-native-svg';
import { formatPrice } from '@utils/currency';
import PriceChangeIndicator from '@components/price-change-indicator';
import CoinCardProps from './CoinCard.interfaces';

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

  useEffect(() => {
    fetchSvg();
  }, []);

  if (!price) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ebebeb',
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
        <Text text={code.toUpperCase()} style={{ color: '#9e9e9e' }} />
      </View>

      <View>
        <Text type="sub-header" text={formatPrice(price)} />
        <PriceChangeIndicator
          priceChange={changePricePercent}
          style={{ textAlign: 'right' }}
        />
      </View>
    </View>
  );
};

export default CoinCard;
