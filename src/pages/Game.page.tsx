import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { Welcome } from '../components/Welcome/Welcome';
import { AppShell, Box, Center, Container, Image } from '@mantine/core';
import WebApp from '@twa-dev/sdk';

export function GamePage() {
  const user = WebApp.initDataUnsafe.user;
  const usertgid = user?.id;
  return (
    <>
          <Container size={'xs'}>
        <AppShell
          header={{ height: 40 }}
          footer={{ height: 70 }}
          withBorder={false}
        >
          <AppShell.Header>
            <HeaderMenu username={user?.username ?? 'KC'} photoUrl={user?.photo_url ?? 'https://kc.rahomaskan.com/assets/images/kharcoin.jpg'} />
          </AppShell.Header>
          <AppShell.Main>
            <Container>
            {/* <Welcome/> */}
            <Center maw={400} h={200}>            
            </Center>
            <Center maw={400} h={100} >
      <Box><Image
              radius="md"
              src="https://kc.rahomaskan.com/assets/images/khar10.png"
            /></Box>
    </Center>
            </Container>
          </AppShell.Main>
          <AppShell.Footer>
            <FooterMenu />
          </AppShell.Footer>
        </AppShell>
      </Container>
    </>
  );
}