import { useEffect, useState } from 'react';
import FooterMenu from '../components/FooterMenu/FooterMenu';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import { AppShell, Container, Title } from '@mantine/core';
import WebApp from '@twa-dev/sdk';
interface FriendsData {
  friends?: number;
  first?: string;
  last?: string;
}
export function FriendsPage() {
  const user = WebApp.initDataUnsafe.user;
  const usertgid = user?.id ?? 208627;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<FriendsData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://kharapi.rahomaskan.com/api/friends/${usertgid}`);
        const result = await response.json();
        setData(result); // Set the data to state
        setLoading(false); // Data has been loaded, set loading to false
      } catch (error) {
        console.error('Failed to fetch friends:', error);
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    if (usertgid) {
      fetchData(); // Call the function only if usertgid is not null
    }
  }, [usertgid]);
  return (
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
            <Title order={1}>دوستان</Title>

            {loading ? (
              <div>صبر کنید ...</div> // Display loading indicator while waiting for data
            ) : (
              <div>
                {/* Render your data here */}
                <p>تعداد دوستان : {data?.friends ?? 0}</p>
                <p>اولین دعوت: {data?.first ?? ''}</p>
                <p>آخرین دعوت: {data?.last ?? ''}</p>
              </div>
            )}
          </Container>
        </AppShell.Main>
        <AppShell.Footer>
          <FooterMenu />
        </AppShell.Footer>
      </AppShell>
    </Container>
  );
}
