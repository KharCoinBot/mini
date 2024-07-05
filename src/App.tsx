import '@mantine/core/styles.css';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import React from 'react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Notifications } from '@mantine/notifications';

export default function App() {
  return (
    <React.StrictMode>
      <TonConnectUIProvider manifestUrl="https://kc.rahomaskan.com/tonconnect-manifest.json">
        <DirectionProvider initialDirection="rtl">
          <MantineProvider theme={theme} forceColorScheme="dark">
          <Notifications />
            <Router />
          </MantineProvider>
        </DirectionProvider>
      </TonConnectUIProvider>
    </React.StrictMode>
  );
}
