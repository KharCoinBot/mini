import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { AppShell, Container, Title, Text } from '@mantine/core';
import WebApp from '@twa-dev/sdk';

export function GiftsPage() {
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
              <Title order={1}>جایزه</Title>
              <Text>
                اینجا جایزه هایی که دریافت کردید را میبینید، بابت آروم کردن خر توی بازی جایزه
                میگیرید، بابت کارهایی که توی بازی اضافه میشه مانند عضو کانالها شدن هم جایزه میگیرید،
                همه جوایز به صورت خرکوین برای شما ارسال خواهند شد!
              </Text>
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
