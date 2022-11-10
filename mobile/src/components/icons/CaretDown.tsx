import { SvgXml } from 'react-native-svg';
import { IconProps } from './Icon.interfaces';

const xml = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.95699 5C4.77431 4.99999 4.59512 5.05002 4.43887 5.14466C4.28262 5.2393 4.15528 5.37493 4.07067 5.53684C3.98606 5.69874 3.94741 5.88072 3.95893 6.06304C3.97044 6.24535 4.03168 6.42103 4.13599 6.571L6.76899 10.355C6.90716 10.5534 7.09127 10.7155 7.30561 10.8275C7.51995 10.9394 7.75818 10.9979 7.99999 10.9979C8.2418 10.9979 8.48003 10.9394 8.69437 10.8275C8.90871 10.7155 9.09282 10.5534 9.23099 10.355L11.864 6.571C11.9683 6.42103 12.0295 6.24535 12.0411 6.06304C12.0526 5.88072 12.0139 5.69874 11.9293 5.53684C11.8447 5.37493 11.7174 5.2393 11.5611 5.14466C11.4049 5.05002 11.2257 4.99999 11.043 5H4.95699Z" fill="currentColor"/>
  </svg>
`;

const CaretDownIcon = ({
  style = {},
  color = '#7E7E7E',
  size = 16,
}: IconProps) => (
  <SvgXml xml={xml} width={size} height={size} color={color} style={style} />
);

export default CaretDownIcon;
