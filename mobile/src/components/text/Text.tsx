import { Text as TextView, StyleSheet } from 'react-native';
import { TextProps } from './Text.interfaces';

const Text = ({ type = 'default', style, text }: TextProps) => {
  return (
    <TextView style={{ ...styles.default, ...styles[type], ...style }}>
      {text}
    </TextView>
  );
};

const styles = StyleSheet.create({
  default: {
    fontWeight: 'normal',
    fontFamily: 'NexaRegular',
    fontSize: 14,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'NexaBold',
    letterSpacing: 0.4,
  },
  'sub-header': {
    fontWeight: 'bold',
    fontFamily: 'NexaBold',
    fontSize: 18,
    letterSpacing: 0.3,
  },
  label: {
    fontWeight: 'bold',
    fontFamily: 'NexaBold',
    fontSize: 12,
  },
});

export default Text;
