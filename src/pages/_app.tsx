import '@rainbow-me/rainbowkit/styles.css';

import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import {
  RainbowKitProvider,
  connectorsForWallets
} from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets';

import { chain, WagmiConfig, configureChains, createClient } from 'wagmi';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import theme from '../theme';
import createEmotionCache from '../createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const { chains, provider } = configureChains(
  [chain.goerli],
  // [chain.mainnet, chain.goerli],
  [
    // alchemyProvider({ apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC' }), // Replace your own apiKey
    publicProvider()
  ]
);

const appName = 'web3-nextjs-template';

const appInfo = {
  appName
};

const connectors = connectorsForWallets([
  {
    groupName: 'Suggested',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      coinbaseWallet({ chains, appName: appName }),
      walletConnectWallet({ chains })
    ]
  }
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider coolMode appInfo={appInfo} chains={chains}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </CacheProvider>
  );
}
