import { useEffect, useRef, useState } from 'react';
import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { Welcome } from '../components/Welcome/Welcome';
import { AppShell, BackgroundImage, Box, Center, Container, Image, RingProgress, Text } from '@mantine/core';
import WebApp from '@twa-dev/sdk';

// Custom useInterval hook
function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


export function GamePage() {
  const user = WebApp.initDataUnsafe.user;


  // State to manage the blinking and loading status
  const [isBlinking, setIsBlinking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0); // Reset initial progress to 0

  const [showText, setShowText] = useState(false); // State to control the visibility of the text


  // Event handler for mouse down
  const handleMouseDown = () => {
    setIsBlinking(true);
    setIsLoading(true); // Start showing the loading indicator
    setProgress(0); // Reset progress to 0 on each new interaction
  };

  // Event handler for mouse up
  const handleMouseUp = () => {
    setIsBlinking(false);
    setIsLoading(false); // Stop showing the loading indicator
    if (progress >= 100) {
      setShowText(true); // Show text if progress reached 100%
    } else {
      setProgress(0); // Reset progress if it did not reach 100%
    }
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(intervalId);
        setIsLoading(false); // Ensure loading stops once progress is at 100%
      }
    }, 100);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [progress]);

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
              <Box 
              maw={300} 
              mah={400}
              h={400}
              w={200}
              mx="auto"
              ta={'center'} 
              mt={'lg'} 
              pt={'lg'}
              style={{
                width: '100%',
                height: '100%',
                transition: 'opacity 0.5s',
                opacity: isBlinking ? 0 : 1,
              }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <BackgroundImage
                  src="https://kc.rahomaskan.com/assets/images/khar10.png"
                  radius="sm"
                >              
                  <Text>
                  خربازیامون
                  </Text>                  
                  </BackgroundImage>
              </Box>              
              {isLoading && (
                <Box ta={'center'}>
                  <RingProgress
                    size={400}
                    thickness={20}
                    roundCaps
                    sections={[{ value: progress, color: 'blue' }]} // Dynamic progress value
                    label={
                      <Text c="blue" fw={700} ta="center" size="xl">
                        {showText ? "خره خوبی داریم آروم شده الان!" : progress + "%"}
                      </Text>
                    }
                  />
                </Box>
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
