import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { Welcome } from '../components/Welcome/Welcome';
import { AppShell, Container } from '@mantine/core';
import WebApp from '@twa-dev/sdk';
export function HomePage() {
  const user = WebApp.initDataUnsafe.user;
  const usertgid = user?.id;
  return (
    <>
      <Container size={'xs'}>
        <AppShell header={{ height: 40 }} footer={{ height: 70 }} withBorder={false}>
          <AppShell.Header>
            <HeaderMenu
              username={user?.username ?? 'KC'}
              photoUrl={user?.photo_url ?? 'https://kc.rahomaskan.com/assets/images/kharcoin.jpg'}
            />
          </AppShell.Header>
          <AppShell.Main>
            <Container>
              <Welcome />
            </Container>
          </AppShell.Main>
          <AppShell.Footer>
            <FooterMenu />
          </AppShell.Footer>
        </AppShell>
      </Container>
      {/* <ColorSchemeToggle /> */}
    </>
  );
}
