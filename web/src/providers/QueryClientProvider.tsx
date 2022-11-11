import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryClientProviderLayoutProps } from './QueryClientProviderLayoutProps.interfaces';

const queryClient = new QueryClient();

const QueryClientProviderLayout = ({
  children,
}: QueryClientProviderLayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientProviderLayout;
