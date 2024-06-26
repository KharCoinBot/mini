import { useState } from 'react';
import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { Welcome } from '../components/Welcome/Welcome';
import { AppShell, Box, Center, Container, Image, RingProgress, Text } from '@mantine/core';
import WebApp from '@twa-dev/sdk';

export function GamePage() {
  const user = WebApp.initDataUnsafe.user;
  const usertgid = user?.id;


  // State to manage the blinking and loading status
  const [isBlinking, setIsBlinking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Event handler for mouse down
  const handleMouseDown = () => {
    setIsBlinking(true);
    setIsLoading(true); // Start showing the loading indicator
  };

  // Event handler for mouse up
  const handleMouseUp = () => {
    setIsBlinking(false);
    setIsLoading(false); // Stop showing the loading indicator
  };

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
                  style={{
                    transition: 'opacity 0.5s',
                    opacity: isBlinking ? 0 : 1,
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                /></Box>
              </Center>
              {/* Loading indicator (e.g., progress bar) */}
              {isLoading && (
                <RingProgress
                sections={[{ value: 40, color: 'blue' }]}
                label={
                  
                  <Text c="blue" fw={700} ta="center" size="xl" >
                    خر بازی
                  </Text>
                }
              />
              )}
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