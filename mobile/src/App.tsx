import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';

import Home from '@pages/Home';
import COLORS from '@constants/COLORS';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const App = () => {
  const [fontsLoaded] = useFonts({
    NexaBold: require('../assets/fonts/Nexa-Bold.otf'),
    NexaRegular: require('../assets/fonts/Nexa-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />

      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default registerRootComponent(App);
