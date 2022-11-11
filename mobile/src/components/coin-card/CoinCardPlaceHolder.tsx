import COLORS from '@constants/COLORS';
import { View } from 'react-native';

const CoinCardLoading = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: 5,
        height: 85,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 35,
          height: 35,
          borderRadius: 35,
          backgroundColor: COLORS.gray[200],
          marginRight: 10,
        }}
      ></View>

      <View style={{ flexGrow: 1 }}>
        <View
          style={{
            width: 100,
            height: 20,
            backgroundColor: COLORS.gray[200],
            borderRadius: 5,
            marginBottom: 5,
          }}
        ></View>

        <View
          style={{
            width: 80,
            height: 10,
            backgroundColor: COLORS.gray[200],
            borderRadius: 3,
          }}
        ></View>
      </View>

      <View>
        <View
          style={{
            width: 60,
            height: 20,
            backgroundColor: COLORS.gray[200],
            borderRadius: 5,
            marginBottom: 5,
          }}
        ></View>

        <View
          style={{
            width: 30,
            height: 10,
            backgroundColor: COLORS.gray[200],
            borderRadius: 3,
            alignSelf: 'flex-end',
          }}
        ></View>
      </View>
    </View>
  );
};

export default CoinCardLoading;
