import { IconBrandTelegram, IconBrandYoutube, IconCircleCheck, IconCircleDashed, IconInfoCircle } from '@tabler/icons-react';
import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { AppShell, Blockquote, Container, List, ThemeIcon, Title, rem } from '@mantine/core';
import WebApp from '@twa-dev/sdk';

export function EarnPage() {
  const user = WebApp.initDataUnsafe.user;
  const usertgid = user?.id;
  return (
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
            <Title order={1}>درآمد</Title>
            <Blockquote color="yellow" cite="درآمد ویژه : کانال خرکوین" icon={<IconInfoCircle />} mt="xl">
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconBrandTelegram style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <List.Item>50 $KHAR : کانال خر کوین</List.Item>
            </List>
            </Blockquote>

            <Blockquote color="green" cite="درآمد جدید : کانالهای تلگرام" icon={<IconInfoCircle />} mt="xl">
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconBrandTelegram style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <List.Item>10 $KHAR : گروه خر کوین</List.Item>
              <List.Item>50 $KHAR : کانال نوبیتکس</List.Item>
              <List.Item>30 $KHAR : کانال جاوید</List.Item>
            </List>
            </Blockquote>


            <Blockquote color="green" cite="درآمد جدید : کانالهای یوتیوب" icon={<IconInfoCircle />} mt="xl">
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="red" size={24} radius="xl">
                  <IconBrandYoutube style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <List.Item>10 $Khar : K Youtube Chanal</List.Item>
              <List.Item>10 $Khar : K Youtube Chanal</List.Item>
              <List.Item>10 $Khar : K Youtube Chanal</List.Item>
              <List.Item>10 $Khar : K Youtube Chanal</List.Item>
            </List>
            </Blockquote>
            
            <Blockquote color="red" cite="درآمدهای قبلی" icon={<IconInfoCircle />} mt="xl">
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="red" size={24} radius="xl">
                  <IconBrandYoutube style={{ width: rem(16), height: rem(16) }} />
                </ThemeIcon>
              }
            >
              <List.Item>خربازی</List.Item>
              <List.Item>خربازی</List.Item>
              <List.Item>خربازی</List.Item>
              <List.Item>خربازی</List.Item>
            </List>
            </Blockquote>


          </Container>
        </AppShell.Main>
        <AppShell.Footer>
          <FooterMenu />
        </AppShell.Footer>
      </AppShell>
    </Container>
  );
}