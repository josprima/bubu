import COLORS from '@constants/COLORS';
import { SvgXml } from 'react-native-svg';
import { IconProps } from './Icon.interfaces';

const xml = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.95699 10.998C4.77431 10.998 4.59512 10.948 4.43887 10.8533C4.28262 10.7587 4.15528 10.6231 4.07067 10.4612C3.98606 10.2993 3.94741 10.1173 3.95893 9.93497C3.97044 9.75266 4.03168 9.57698 4.13599 9.42701L6.76899 5.64301C6.90716 5.44456 7.09127 5.28246 7.30561 5.17052C7.51995 5.05858 7.75818 5.00012 7.99999 5.00012C8.2418 5.00012 8.48003 5.05858 8.69437 5.17052C8.90871 5.28246 9.09282 5.44456 9.23099 5.64301L11.864 9.42701C11.9683 9.57698 12.0295 9.75266 12.0411 9.93497C12.0526 10.1173 12.0139 10.2993 11.9293 10.4612C11.8447 10.6231 11.7174 10.7587 11.5611 10.8533C11.4049 10.948 11.2257 10.998 11.043 10.998H4.95699Z" fill="currentColor"/>
  </svg>
`;

const CaretUpIcon = ({
  style = {},
  color = COLORS.gray[800],
  size = 16,
}: IconProps) => (
  <SvgXml xml={xml} width={size} height={size} color={color} style={style} />
);

export default CaretUpIcon;
