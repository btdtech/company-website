import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {theme, createEmotionCache} from '../theme';
import Link from 'next/link';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface RootAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function RootApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: RootAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
