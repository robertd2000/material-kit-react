import 'src/global.css';

import { Router } from 'src/routes/sections';

import { useScrollToTop } from 'src/shared/hooks/use-scroll-to-top';

import { ThemeProvider } from 'src/shared/theme/theme-provider';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
