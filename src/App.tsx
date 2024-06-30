import '@mantine/core/styles.css';
import { AppShell, Container, DirectionProvider, MantineProvider, Title } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import React from 'react';
import FooterMenu from './components/FooterMenu/FooterMenu';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import { TonConnectUIProvider } from '@tonconnect/ui-react';



export default function App() {
  // const user = WebApp.initDataUnsafe.user;
  // const usertgid = user?.id;
  return (
    <React.StrictMode>
     <TonConnectUIProvider manifestUrl="https://kc.rahomaskan.com/tonconnect-manifest.json">
      <DirectionProvider initialDirection="rtl">
        <MantineProvider 
        theme={theme} 
        forceColorScheme = 'dark'
        >
          {/* <Notifications /> */}
          {/* <Container size={'xs'}>
            <AppShell
              header={{ height: 40 }}
              footer={{ height: 70 }}
              withBorder={false}
            >
              <AppShell.Header>
                <HeaderMenu username={user?.username?? 'KC'} photoUrl={user?.photo_url?? 'https://kc.rahomaskan.com/assets/images/kharcoin.jpg'} />
              </AppShell.Header>
              <AppShell.Main>
                <Router />
              </AppShell.Main>
              <AppShell.Footer>
                <FooterMenu />
              </AppShell.Footer>
            </AppShell>
          </Container> */}
          <Router />
        </MantineProvider>
      </DirectionProvider>
      </TonConnectUIProvider>
    </React.StrictMode>
  );
}