import { SafeAreaView, Platform, View, StatusBar } from 'react-native';
import { SafeAreaContainerProps } from './SafeAreaContainer.interfaces';

const SafeAreaContainer = ({ children, style }: SafeAreaContainerProps) => {
  if (Platform.OS === 'android') {
    return (
      <View style={{ paddingTop: StatusBar.currentHeight, ...style }}>
        {children}
      </View>
    );
  }

  return <SafeAreaView style={style}>{children}</SafeAreaView>;
};

export default SafeAreaContainer;
