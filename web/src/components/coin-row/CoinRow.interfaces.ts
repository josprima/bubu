export interface CoinRowProps {
  color: string;
  currencySymbol: string;
  iconUrl: string;
  name: string;
  priceChanges?: {
    latestPrice?: string;
    day?: string;
    week?: string;
    month?: string;
    year?: string;
  };
}
