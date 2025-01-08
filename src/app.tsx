import 'src/global.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Router } from 'src/routes/sections';

import { ThemeProvider } from 'src/shared/theme/theme-provider';
import { useScrollToTop } from 'src/shared/hooks/use-scroll-to-top';

export default function App() {
  useScrollToTop();

  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
