import '@mantine/core/styles.css';
import { AppShell, Container, DirectionProvider, MantineProvider, Title } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import React from 'react';
import FooterMenu from './components/FooterMenu/FooterMenu';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import WebApp from '@twa-dev/sdk';

export default function App() {
  const user = WebApp.initDataUnsafe.user;
  const usertgid = user?.id;
  return (
    <React.StrictMode>
      <DirectionProvider initialDirection="rtl">
        <MantineProvider 
        theme={theme} 
        forceColorScheme = 'dark'
        >
          {/* <Notifications /> */}
          <Container size={'xs'}>
            <AppShell
              header={{ height: 40 }}
              footer={{ height: 70 }}
              withBorder={false}
            >
              <AppShell.Header>
                <HeaderMenu username={user?.username?? 'KCUser'} photoUrl={user?.photo_url?? 'https://kc.rahomaskan.com/assets/images/kharcoin.jpg'} />
              </AppShell.Header>
              <AppShell.Main>
                <Router />
              </AppShell.Main>
              <AppShell.Footer>
                <FooterMenu />
              </AppShell.Footer>
            </AppShell>
          </Container>
        </MantineProvider>
      </DirectionProvider>
    </React.StrictMode>
  );
}

// <React.StrictMode>
// <DirectionProvider initialDirection="rtl">
// <MantineProvider theme={theme}>
// <Container size={'xs'} bg={'#c3b091'}>
//   <AppShell
//     header={{ height: 40 }}
//     footer={{ height: 60 }}
//     withBorder={false}
//   >
//     <AppShell.Header
//       p="10"
//       style={{
//         background: 'linear-gradient(180deg, #0e87cc  30%, #c3b091)',
//         color: 'white',
//         fontWeight: 100,
//       }}
//     >
//       <Title order={1}>$</Title>
//     </AppShell.Header>
//     <AppShell.Main>
//       <Router />
//     </AppShell.Main>
//     <AppShell.Footer>
//       
//     </AppShell.Footer>
//   </AppShell>
// </Container>
// </MantineProvider>
//  </DirectionProvider>
//  </React.StrictMode>
