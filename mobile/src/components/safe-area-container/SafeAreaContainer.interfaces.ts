import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface SafeAreaContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}
