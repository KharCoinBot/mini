import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { Welcome } from '../components/Welcome/Welcome';
import { AppShell, Container, SimpleGrid, Title, Text, Box, Button } from '@mantine/core';
import WebApp from '@twa-dev/sdk';
import { useTonAddress } from '@tonconnect/ui-react';
import { useEffect } from 'react';
import { API_CONFIG } from '../config/apiConfig';

export function BoostsPage() {
  const user = WebApp.initDataUnsafe.user;
  const usertgid = user?.id;
  const userFriendlyAddress = useTonAddress();

  useEffect(() => {
    if (userFriendlyAddress) {
      const formdata = new FormData();
      console.log(String(usertgid));
      formdata.append('wallet', userFriendlyAddress);
      formdata.append('id', String(usertgid));

      const requestOptions = {
        method: 'POST',
        body: formdata,
      };
      fetch(`${API_CONFIG.API_BASE_URL}savewallet`, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text(); // Assuming the response is text. Adjust accordingly.
        })
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    }
  }, [userFriendlyAddress]);
  return (
    <Container size={'xs'}>
      <AppShell header={{ height: 40 }} footer={{ height: 70 }} withBorder={false}>
        <AppShell.Header>
          <HeaderMenu
            username={user?.username ?? 'KC'}
            photoUrl={user?.photo_url ?? `${API_CONFIG.ASSETS_URL}assets/images/kharcoin.jpg`}
          />
        </AppShell.Header>
        <AppShell.Main>
          <Container>
            <Title order={1}>تقویت</Title>
            {userFriendlyAddress && (
              <>
                <div>
                  <span>
                    کیف پول شما برای بازی <br /> {userFriendlyAddress} <br /> است
                  </span>
                </div>
              </>
            )}

            <Box pt={'lg'} mt={'lg'} ta={'center'}>
              <Button variant="filled" color="yellow" size="xl" radius="md" ta={'center'}>
                خر کوین
              </Button>
            </Box>
            <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl" pt={'lg'} mt={'lg'}>
              <Box p={'lg'} bg={'gray'}>
                <Text
                  ta={'center'}
                  size="xl"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'rgba(255, 255, 255, 1)', deg: 0 }}
                >
                  شــیــر خـــــر
                </Text>
              </Box>
              <Box p={'lg'} bg={'gray'}>
                <Text
                  ta={'center'}
                  size="xl"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: 'orange', to: 'yellow', deg: 0 }}
                >
                  عنـبـر نــســا
                </Text>
              </Box>
              <Box p={'lg'} bg={'gray'}>
                <Text
                  ta={'center'}
                  size="xl"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: 'brown', to: 'green', deg: 0 }}
                >
                  کـــره خـــــر
                </Text>
              </Box>
              <Box p={'lg'} bg={'gray'}>
                <Text
                  ta={'center'}
                  size="xl"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: 'red', to: 'blue', deg: 0 }}
                >
                  جــفــتــک
                </Text>
              </Box>
            </SimpleGrid>
          </Container>
        </AppShell.Main>
        <AppShell.Footer>
          <FooterMenu />
        </AppShell.Footer>
      </AppShell>
    </Container>
  );
}
