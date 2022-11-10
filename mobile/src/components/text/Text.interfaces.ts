import { TextStyle } from 'react-native';

export interface TextProps {
  type?: 'default' | 'header' | 'sub-header' | 'label';
  text: string;
  style?: TextStyle;
}
