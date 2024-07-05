import { useEffect, useRef, useState } from 'react';
import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { AppShell, Container, Image, Paper, RingProgress, Text } from '@mantine/core';
import WebApp from '@twa-dev/sdk';
import { notifications } from '@mantine/notifications';

export function GamePage() {
  const user = WebApp.initDataUnsafe.user;

  // State to manage the blinking and loading status
  // const [isBlinking, setIsBlinking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0); // Reset initial progress to 0
  const [showText, setShowText] = useState(false); // State to control the visibility of the text

  // Event handler for mouse down
  const handleMouseDown = () => {
    // setIsBlinking(true);
    setIsLoading(true); // Start showing the loading indicator
    setProgress(0); // Reset progress to 0 on each new interaction
  };

  // Event handler for mouse up
  const handleMouseUp = () => {
    // setIsBlinking(false);
    setIsLoading(false); // Stop showing the loading indicator
    if (progress >= 100) {
      setShowText(true); // Show text if progress reached 100%
      // setIsBlinking(true);
      // notifications.show({
      //   title: 'آرامش خرکی',
      //   message: 'خرمون آروم شد! الان جایزه خرکوین میگیری! 🎉',
      // });
    } else {
      setProgress(0); // Reset progress if it did not reach 100%
    }
  };

  useEffect(() => {
    let intervalId = setInterval(() => {
      console.log(progress);
      if (progress == 100) {
        notifications.show({
          title: 'آرامش خرکی',
          message: 'خرمون آروم شد! الان جایزه خرکوین میگیری! 🎉',
        });
      }
      if (progress == 25) {
        notifications.show({
          title: 'آرامش خرکی',
          message: 'دست از سرم بر نمیداری؟',
        });
      }
      if (progress == 50) {
        notifications.show({
          title: 'آرامش خرکی',
          message: 'ادامه بده خره داره آروم میشه !',
        });
      }
      if (progress == 75) {
        notifications.show({
          title: 'آرامش خرکی',
          message: 'دیگه چیزی نمونده',
        });
      }
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
        <AppShell header={{ height: 40 }} footer={{ height: 70 }} withBorder={false}>
          <AppShell.Header>
            <HeaderMenu
              username={user?.username ?? 'KC'}
              photoUrl={user?.photo_url ?? 'https://bot.kharcoin.info/assets/images/kharcoin.jpg'}
            />
          </AppShell.Header>
          <AppShell.Main>
            <Container>
              {/* <Notifications position="top-right" zIndex={1000}/> */}
              <Paper
                style={{
                  display: 'flex',
                  justifyContent: 'center', // Center children horizontally
                  alignItems: 'center', // Center children vertically
                  backgroundImage: "url('https://bot.kharcoin.info/assets/images/khar10.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                  transition: 'opacity 0.5s',
                  // opacity: isBlinking ? 0 : 1,
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
              >
                <Image src="https://bot.kharcoin.info/assets/images/khar10.png" />
              </Paper>

              {isLoading && (
                <Paper
                  style={{
                    position: 'absolute', // Use absolute positioning to overlay on top
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center', // Center children horizontally
                    alignItems: 'center', // Center children vertically
                    width: '100%',
                    height: '100%',
                    transition: 'opacity 0.5s',
                    zIndex: 2, // Higher z-index to appear on top
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <RingProgress
                      size={400}
                      thickness={20}
                      roundCaps
                      sections={[{ value: progress, color: 'blue' }]} // Dynamic progress value
                      label={
                        <Text c="blue" fw={700} ta="center" size="xl">
                          {showText ? 'خره خوبی داریم آروم شده الان!' : progress + '%'}
                        </Text>
                      }
                    />
                  </div>
                </Paper>
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
